"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { createRecord } from "./ModelDataModel";

const AdminMgt = () => {
  const router = useRouter();
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    role: "USER",
  });
  //  const router = useRouter();

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.username || !form.email || !form.password) {
      toast.error("Validation Error: All fields are required.");
      return;
    }
    try {
      // Use createRecord to create an admin
      await createRecord("admin", form);
      setTimeout(() => {
        router.push("/dashboard");
      }, 3000);
    } catch (error) {
      console.error("Error creating admin:", error);
    }
  };

  return (
    <div className="p-4">
      <ToastContainer />
      <h1 className="text-2xl font-bold mb-4">Admin Management</h1>
      <form onSubmit={handleSubmit} className="mb-6">
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
            <option value="">Select</option>
            <option value="USER">User</option>
            <option value="SUPERADMIN">Super Admin</option>
          </select>
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Create Admin
        </button>
      </form>
    </div>
  );
};

export default AdminMgt;
