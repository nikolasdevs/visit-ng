"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { createRecord, fetchAllRecords } from "../../utility/adminApi";

interface Category {
  id: string;
  name: string;
}

const CreateSubcategory = () => {
  const router = useRouter();
  const [form, setForm] = useState({
    name: "",
    categoryName: "",
  });

  const [categories, setCategories] = useState<Category[]>([]);

  // Fetch categories when component mounts
  useEffect(() => {
    const loadCategories = async () => {
      try {
        const fetchCategory = await fetchAllRecords("category");
        setCategories(fetchCategory.data);
      } catch {
        toast.error("Failed to fetch categories");
      }
    };

    loadCategories();
  }, []);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.name || !form.categoryName) {
      toast.error("Validation Error: All fields are required.");
      return;
    }

    try {
      await createRecord("subcategory", form, router);
    } catch (error) {
      toast.error(
        `Error creating subcategory: ${
          error instanceof Error ? error.message : String(error)
        }`
      );
    }
  };

  return (
    <div className="p-4">
      <ToastContainer />
      <h1 className="text-2xl font-bold mb-4">Create New Subcategory</h1>
      <form onSubmit={handleSubmit} className="mb-6">
        <div>
          <label>Subcategory Name</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleInputChange}
            className="border rounded p-2 w-full mb-2"
          />
        </div>

        <div>
          <label>Category Name</label>
          <select
            name="categoryName"
            value={form.categoryName}
            onChange={handleInputChange}
            className="border rounded p-2 w-full mb-2"
          >
            <option value="categoryName">Select</option>
            {categories.map((category: Category) => (
              <option key={category.name} value={category.name}>
                {category.name}
              </option>
            ))}
          </select>
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Create Subcategory
        </button>
      </form>
    </div>
  );
};

export default CreateSubcategory;
