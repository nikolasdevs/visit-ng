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

interface Category {
  id: string;
  name: string;
  type: string;
}

const CategoryPage: React.FC = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [id, setId] = useState<string | null>(null);
  const mode = searchParams.get("mode");

  const [category, setCategory] = useState<Category | null>(null);
  const [form, setForm] = useState({
    name: "",
    type: "",
  });
  const [message, setMessage] = useState("");

  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const idFromUrl = window.location.pathname.split("/").pop();
    if (idFromUrl) {
      setId(idFromUrl);
    } else {
      setError("Category ID not found in the URL.");
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (!id) return;

    const fetchCategory = async () => {
      setLoading(true);
      try {
        const response = await fetchRecordById("category", id);
        const categoryData = response?.data;

        if (!categoryData) {
          throw new Error("No category data found.");
        }

        setCategory(categoryData);
        setForm({
          name: categoryData.name,
          type: categoryData.type,
        });
      } catch (err) {
        setError(
          err instanceof Error ? err.message : "Error fetching category data."
        );
      } finally {
        setLoading(false);
      }
    };

    fetchCategory();
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

    if (!form.name || !form.type) {
      toast.error("Validation Error: All fields are required.");
      return;
    }

    try {
      const [nameCheck, typeCheck] = await Promise.all([
        fetchRecordByField("category", "name", form.name),
        fetchRecordByField("category", "type", form.type),
      ]);

      if (nameCheck && typeCheck.id !== id) {
        toast.error("name already exists.");
        return;
      }

      if (nameCheck && typeCheck.id !== id) {
        toast.error("type already exists.");
        return;
      }

      if (id) {
        await updateRecord("category", id, form, router);
      } else {
        toast.error("Category ID is missing.");
      }
    } catch (error) {
      console.error("Error updating category:", error);
      toast.error("Failed to update category. Please try again.");
    }
  };
  const handleDelete = async () => {
    try {
      if (id) {
        await deleteRecord("category", id, router);
      } else {
        toast.error("Category ID is missing.");
      }
      setMessage("Category deleted successfully");
    } catch (error) {
      console.error("Error deleting category:", error);
      setMessage("Failed to delete category.");
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
          <h1 className="text-2xl font-bold mb-4">Edit Category</h1>
          <form onSubmit={handleSubmit}>
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
                <option>Select</option>
                <option value="ACCOMMODATION">Accommodation</option>
                <option value="THINGS_TO_DO">Things to Do</option>
              </select>
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              Update Category
            </button>
          </form>
          {message && <p className="mt-4 text-green-500">{message}</p>}
        </>
      ) : mode === "delete" ? (
        <>
          <h1 className="text-2xl font-bold mb-4">Delete Category</h1>
          <p>Are you sure you want to delete this category?</p>
          <button
            className="bg-red-500 text-white px-4 py-2 rounded mt-4"
            onClick={handleDelete}
          >
            Delete Category
          </button>
        </>
      ) : (
        <>
          <h1 className="text-2xl font-bold mb-4">Category Details</h1>
          <p>
            <strong>Name:</strong> {category?.name}
          </p>
          <p>
            <strong>Type:</strong> {category?.type}
          </p>

          <Link href={`../category/${id}?mode=edit`}>
            <button className="bg-yellow-500 text-white px-4 py-2 rounded mt-4">
              Edit Category
            </button>
          </Link>
          <Link href={`../category/${id}?mode=delete`}>
            <button className="bg-red-500 text-white px-4 py-2 rounded mt-4">
              Delete Category
            </button>
          </Link>
        </>
      )}
    </div>
  );
};

export default CategoryPage;
