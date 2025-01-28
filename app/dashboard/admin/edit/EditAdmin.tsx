"use client";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const EditAdminById = () => {
  const router = useRouter();
  const { id } = router.query; // Get the ID from the URL
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    role: "USER",
  });
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (id) {
      const fetchAdmin = async () => {
        try {
          const API_URL = process.env.NEXT_PUBLIC_ADMIN_API;
          if (!API_URL) throw new Error("API URL is not defined");

          const response = await axios.get(`${API_URL}/${id}`);
          const admin = response.data.data;
          setForm({
            username: admin.username,
            email: admin.email,
            password: "", // Leave password empty for security
            role: admin.role,
          });
        } catch (error) {
          console.error("Failed to fetch admin:", error);
          setMessage("Error fetching admin data.");
        }
      };

      fetchAdmin();
    }
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
      const API_URL = process.env.NEXT_PUBLIC_ADMIN_API;
      if (!API_URL) throw new Error("API URL is not defined");

      await axios.put(`${API_URL}/${id}`, form); // Update the admin data
      setMessage("Admin updated successfully");
    } catch (error) {
      console.error("Failed to update admin:", error);
      setMessage("Error updating admin data.");
    }
  };

  return (
    <div className="p-4">
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
      {message && <div className="mt-4 text-green-500">{message}</div>}
    </div>
  );
};

export default EditAdminById;
