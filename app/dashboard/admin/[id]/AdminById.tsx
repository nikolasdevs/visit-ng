"use client";

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  deleteRecord,
  fetchRecordByField,
  fetchRecordById,
  updateRecord,
} from "../../../utility/adminApi";

interface Admin {
  id: string;
  username: string;
  email: string;
  role: string;
}

const AdminPage: React.FC = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [id, setId] = useState<string | null>(null);
  const mode = searchParams.get("mode");

  const [admin, setAdmin] = useState<Admin | null>(null);
  const [form, setForm] = useState({
    username: "",
    email: "",

    role: "USER",
  });
  const [message, setMessage] = useState("");

  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const idFromUrl = window.location.pathname.split("/").pop();
    if (idFromUrl) {
      setId(idFromUrl);
    } else {
      setError("Admin ID not found in the URL.");
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (!id) return;

    const fetchAdmin = async () => {
      setLoading(true);
      try {
        const response = await fetchRecordById("admin", id);
        const adminData = response?.data;

        if (!adminData) {
          throw new Error("No admin data found.");
        }

        setAdmin(adminData);
        setForm({
          username: adminData.username,
          email: adminData.email,
          // password: "", // Keep empty for security
          role: adminData.role,
        });
      } catch (err) {
        setError(
          err instanceof Error ? err.message : "Error fetching admin data."
        );
      } finally {
        setLoading(false);
      }
    };

    fetchAdmin();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error)
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-red-600 text-xl font-bold">{error}</p>
      </div>
    );

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.username || !form.email || !form.role) {
      toast.error("Validation Error: All fields are required.");
      return;
    }

    try {
      const [usernameCheck, emailCheck] = await Promise.all([
        fetchRecordByField("admin", "username", form.username),
        fetchRecordByField("admin", "email", form.email),
      ]);

      if (usernameCheck && usernameCheck.id !== id) {
        toast.error("Username already exists.");
        return;
      }

      if (emailCheck && emailCheck.id !== id) {
        toast.error("Email already exists.");
        return;
      }

      if (id) {
        await updateRecord("admin", id, form, router);
      } else {
        toast.error("Admin ID is missing.");
      }
    } catch (error) {
      console.error("Error updating admin:", error);
      toast.error("Failed to update admin. Please try again.");
    }
  };
  const handleDelete = async () => {
    try {
      if (id) {
        await deleteRecord("admin", id, router);
      } else {
        toast.error("Admin ID is missing.");
      }
      setMessage("Admin deleted successfully");
    } catch (error) {
      console.error("Error deleting admin:", error);
      setMessage("Failed to delete admin.");
    }
  };

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-red-600 text-xl font-bold">{error}</p>
      </div>
    );
  }

  if (loading) return <p>Loading...</p>;

  return (
    <div className="p-4">
      <ToastContainer />
      {mode === "edit" ? (
        <>
          <h1 className="text-2xl font-bold mb-4">Edit Admin</h1>
          <form onSubmit={handleSubmit}>
            <div>
              <label>Username</label>
              <input
                type="text"
                name="username"
                value={form.username}
                onChange={handleInputChange}
                className="border rounded p-2 w-full mb-2"
              />
            </div>
            <div>
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleInputChange}
                className="border rounded p-2 w-full mb-2"
              />
            </div>
            {/* Password field removed */}
            <div>
              <label>Role</label>
              <select
                name="role"
                value={form.role}
                onChange={handleInputChange}
                className="border rounded p-2 w-full mb-2"
              >
                <option>Select</option>
                <option value="USER">User</option>
                <option value="SUPERADMIN">Super Admin</option>
              </select>
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              Update Admin
            </button>
          </form>
          {message && <p className="mt-4 text-green-500">{message}</p>}
        </>
      ) : mode === "delete" ? (
        <>
          <h1 className="text-2xl font-bold mb-4">Delete Admin</h1>
          <p>Are you sure you want to delete this admin?</p>
          <button
            className="bg-red-500 text-white px-4 py-2 rounded mt-4"
            onClick={handleDelete}
          >
            Delete Admin
          </button>
        </>
      ) : (
        <>
          <h1 className="text-2xl font-bold mb-4">Admin Details</h1>
          <p>
            <strong>Username:</strong> {admin?.username}
          </p>
          <p>
            <strong>Email:</strong> {admin?.email}
          </p>
          <p>
            <strong>Role:</strong> {admin?.role}
          </p>
          <Link href={`../admin/${id}?mode=edit`}>
            <button className="bg-yellow-500 text-white px-4 py-2 rounded mt-4">
              Edit Admin
            </button>
          </Link>
          <Link href={`../admin/${id}?mode=delete`}>
            <button className="bg-red-500 text-white px-4 py-2 rounded mt-4">
              Delete Admin
            </button>
          </Link>
        </>
      )}
    </div>
  );
};

export default AdminPage;
