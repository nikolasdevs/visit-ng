"use client";

import axios from "axios";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";

import { useEffect, useState } from "react";

interface Admin {
  id: string;
  username: string;
  email: string;
  password: string;
  role: string;
}

const API_URL = process.env.NEXT_PUBLIC_ADMIN_API;
if (!API_URL) throw new Error("API URL is not defined");

const AdminPage: React.FC = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [id, setId] = useState<string | null>(null);
  const mode = searchParams.get("mode");

  const [admin, setAdmin] = useState<Admin | null>(null);
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    role: "USER",
  });
  const [message, setMessage] = useState("");

  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const slugFromUrl = new URL(window.location.href).pathname.split("/").pop();
    if (slugFromUrl) {
      setId(slugFromUrl);
    } else {
      setError("Slug not found in the URL");
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (!id) return;
    const fetchAdmin = async () => {
      try {
        const response = await axios.get(`${API_URL}/${id}`);
        const adminData = response.data.data;
        setAdmin(adminData);
        setForm({
          username: adminData.username,
          email: adminData.email,
          password: "", // Leave empty for security
          role: adminData.role,
        });
      } catch {
        setError("Error fetching admin data:");
        setMessage("Failed to fetch admin data.");
      } finally {
        setLoading(false);
      }
    };

    fetchAdmin();
  }, [id]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.put(`${API_URL}/${id}`, form); // Update admin
      setMessage("Admin updated successfully");
      setTimeout(() => {
        router.push("/dashboard/");
      }, 2000);
    } catch (error) {
      console.error("Error updating admin:", error);
      setMessage("Failed to update admin.");
    }
  };

  const handleDelete = async () => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      setMessage("Admin deleted successfully");
      setTimeout(() => {
        router.push("/dashboard/");
      }, 2000);
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
            <div>
              <label>Password</label>
              <input
                type="password"
                name="password"
                value={form.password}
                onChange={handleInputChange}
                className="border rounded p-2 w-full mb-2"
              />
            </div>
            <div>
              <label>Role</label>
              <select
                name="role"
                value={form.role}
                onChange={handleInputChange}
                className="border rounded p-2 w-full mb-2"
              >
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
          {message && <div className="mt-4 text-green-500">{message}</div>}
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
