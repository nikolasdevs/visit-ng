import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";

const API_URL = process.env.NEXT_PUBLIC_MODEL_API;
if (!API_URL) throw new Error("API URL is not defined");

export const fetchAllRecords = async (model: string) => {
  try {
    const response = await axios.get(`${API_URL}/${model}`);
    const { data, status, statusText } = response;
    if (status >= 200 && status < 300) {
      return data;
    } else {
      throw new Error(
        `${status} ${statusText}: ${data?.error || "Failed to fetch records"}`
      );
    }
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data?.error || "Failed to fetch records");
    } else {
      throw new Error("Failed to fetch records");
    }
  }
};

export const fetchRecordById = async (model: string, id: string) => {
  if (!id) throw new Error("Invalid ID provided");

  try {
    const { data, status, statusText } = await axios.get(
      `${API_URL}/${model}/${id}`
    );

    if (status < 200 || status >= 300) {
      throw new Error(
        `${status} ${statusText}: ${data?.error || "Failed to fetch record"}`
      );
    }

    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data?.error || "Failed to fetch record");
    }
    throw new Error("Failed to fetch record");
  }
};

export const createRecord = async (
  model: string,
  data: Record<string, unknown>,
  router: ReturnType<typeof useRouter>
) => {
  try {
    const response = await axios.post(`${API_URL}/${model}`, data);
    // Success: Notify the user
    toast.success(response.data.message);
    setTimeout(() => {
      router.push("/dashboard");
    }, 5000);
    // Redirect to the dashboard after a delay
  } catch (error: unknown) {
    // Check for 409 conflict (email or username already exists)
    if (
      axios.isAxiosError(error) &&
      error.response &&
      error.response.status === 409
    ) {
      toast.error(error.response.data.message);
    } else {
      // General error handling
      console.error(`Error creating ${model}:`, error);
      toast.error("Something went wrong. Please try again later.");
    }
  }
};

export const updateRecord = async (
  model: string,
  id: string,
  data: Record<string, unknown>,
  router: ReturnType<typeof useRouter>
) => {
  try {
    const response = await axios.put(`${API_URL}/${model}/${id}`, data);
    toast.success(response.data.message || "Record updated successfully");
    setTimeout(() => {
      router.push("/dashboard");
    }, 5000);
  } catch (error: unknown) {
    if (
      axios.isAxiosError(error) &&
      error.response &&
      error.response.status === 409
    ) {
      toast.error(error.response.data.message);
    } else {
      console.error(`Error updating ${model}:`, error);
      toast.error("Something went wrong. Please try again later.");
    }
  }
};

export const deleteRecord = async (
  model: string,
  id: string,
  router: ReturnType<typeof useRouter>
) => {
  try {
    const response = await axios.delete(`${API_URL}/${model}/${id}`);

    if (response.status >= 200 && response.status < 300) {
      toast.success(response.data.message || "Record deleted successfully");
      setTimeout(() => {
        router.push("/dashboard");
      }, 5000);
    } else {
      throw new Error(
        `${response.status} ${response.statusText}: ${
          response.data?.error || "Failed to delete record"
        }`
      );
    }
  } catch (error: unknown) {
    if (
      axios.isAxiosError(error) &&
      error.response &&
      error.response.status === 409
    ) {
      toast.error(error.response.data.message);
    } else {
      console.error(`Error deleting ${model}:`, error);
      toast.error("Something went wrong. Please try again later.");
    }
  }
};

export const fetchRecordByField = async (
  model: string,
  field: string,
  value: string
) => {
  try {
    const response = await axios.get(`${API_URL}/${model}?${field}=${value}`);

    // Ensure it returns null if no matching record exists
    return response.data?.length > 0 ? response.data[0] : null;
  } catch {
    return null; // Return null on any error to avoid blocking the process
  }
};
