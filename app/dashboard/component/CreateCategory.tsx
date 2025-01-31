"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { createRecord } from "../../utility/adminApi";

const CreateCategory = () => {
  const router = useRouter();
  const [form, setForm] = useState({
    name: "",
    type: "",
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

    if (!form.name || !form.type) {
      toast.error("Validation Error: All fields are required.");
      return;
    }
    try {
      await createRecord("category", form, router);
    } catch (error) {
      toast.error(
        `Error creating category: ${
          error instanceof Error ? error.message : String(error)
        }`
      );
    }
  };

  return (
    <div className="p-4">
      <ToastContainer />
      <h1 className="text-2xl font-bold mb-4">Create New Category</h1>
      <form onSubmit={handleSubmit} className="mb-6">
        <div>
          <label>Category Name</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleInputChange}
            className="border rounded p-2 w-full mb-2"
          />
        </div>

        <div>
          <label>Type</label>
          <select
            name="type"
            value={form.type}
            onChange={handleInputChange}
            className="border rounded p-2 w-full mb-2"
          >
            <option value="">Select</option>
            <option value="ACCOMMODATION">Accommodation </option>
            <option value="THINGS_TO_DO">Things to Do</option>
          </select>
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Create Category
        </button>
      </form>
    </div>
  );
};

export default CreateCategory;
