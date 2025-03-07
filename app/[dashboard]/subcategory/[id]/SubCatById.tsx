"use client";

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  deleteRecord,
  fetchAllRecords,
  fetchRecordByField,
  fetchRecordById,
  updateRecord,
} from "../../../utility/adminApi";

interface Subcategory {
  id: string;
  name: string;
  category?: { name: string };
  categoryName: string;
}

interface Category {
  id: string;
  name: string;
}

const SubCatPage: React.FC = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [id, setId] = useState<string | null>(null);
  const mode = searchParams.get("mode");

  const [subcategory, setSubcategory] = useState<Subcategory | null>(null);

  const [categories, setCategories] = useState<Category[]>([]);

  const [form, setForm] = useState({
    name: "",
    categoryName: "",
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

    const fetchSubcategory = async () => {
      setLoading(true);
      try {
        const response = await fetchRecordById("subcategory", id);
        const subCategoryData = response?.data;

        if (!subCategoryData) {
          throw new Error("No category data found.");
        }

        setSubcategory(subCategoryData);
        setForm({
          name: subCategoryData.name,
          categoryName: subCategoryData.category?.name || "",
        });
      } catch (err) {
        setError(
          err instanceof Error ? err.message : "Error fetching category data."
        );
      } finally {
        setLoading(false);
      }
    };

    fetchSubcategory();
  }, [id]);

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

    if (!form.name || !form.categoryName) {
      toast.error("Validation Error: All fields are required.");
      return;
    }

    try {
      const [nameCheck, categoryNameCheck] = await Promise.all([
        fetchRecordByField("subCategory", "name", form.name),
        fetchRecordByField("subCategory", "categoryName", form.categoryName),
      ]);

      if (nameCheck && categoryNameCheck.id !== id) {
        toast.error("name already exists.");
        return;
      }

      if (nameCheck && categoryNameCheck.id !== id) {
        toast.error("Category Name already exists.");
        return;
      }

      if (id) {
        await updateRecord("subcategory", id, form, router);
      } else {
        toast.error("Subcategory ID is missing.");
      }
    } catch (error) {
      console.error("Error updating subcategory:", error);
      toast.error("Failed to update subcategory. Please try again.");
    }
  };

  const handleDelete = async () => {
    try {
      if (id) {
        await deleteRecord("subcategory", id, router);
      } else {
        toast.error("Subcategory ID is missing.");
      }
      setMessage("Subcategory deleted successfully");
    } catch (error) {
      console.error("Error deleting Subcategory:", error);
      setMessage("Failed to delete Subcategory.");
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
          <h1 className="text-2xl font-bold mb-4">Edit Subcategory</h1>
          <form onSubmit={handleSubmit}>
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
                <option value="">Select</option>
                {categories.map((category) => (
                  <option key={category.id} value={category.name}>
                    {category.name}
                  </option>
                ))}
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
            <strong>Name:</strong> {subcategory?.name}
          </p>
          <p>
            <strong>Category Name:</strong>{" "}
            {subcategory?.category?.name || "N/A"}
          </p>

          <Link href={`../subcategory/${id}?mode=edit`}>
            <button className="bg-yellow-500 text-white px-4 py-2 rounded mt-4">
              Edit Subcategory
            </button>
          </Link>
          <Link href={`../subcategory/${id}?mode=delete`}>
            <button className="bg-red-500 text-white px-4 py-2 rounded mt-4">
              Delete Subcategory
            </button>
          </Link>
        </>
      )}
    </div>
  );
};

export default SubCatPage;
