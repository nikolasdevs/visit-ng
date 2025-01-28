import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const API_BASE_URL = "http://localhost:5001/api/"; // Replace with your backend URL

export const fetchAllRecords = async (model: string) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/${model}`);
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
  try {
    const response = await axios.get(`${API_BASE_URL}/${model}/${id}`);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data?.error || "Failed to fetch records");
    } else {
      throw new Error("Failed to fetch records");
    }
  }
};

export const createRecord = async (
  model: string,
  data: Record<string, unknown>
) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/${model}`, data);
    // Success: Notify the user
    toast.success(response.data.message);

    // Redirect to the dashboard after a delay
  } catch (error: unknown) {
    // Check for 409 conflict (email or username already exists)
    if (error.response && error.response.status === 409) {
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
  data: Record<string, unknown>
) => {
  try {
    const response = await axios.put(`${API_BASE_URL}/${model}/${id}`, data);
    if (response.status >= 200 && response.status < 300) {
      return response.data;
    } else {
      throw new Error(
        `${response.status} ${response.statusText}: ${
          response.data?.error || "Failed to update record"
        }`
      );
    }
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data?.error || "Failed to update record");
    } else {
      throw new Error("Failed to update record");
    }
  }
};

export const deleteRecord = async (model: string, id: string) => {
  try {
    const response = await axios.delete(`${API_BASE_URL}/${model}/${id}`);
    if (response.status >= 200 && response.status < 300) {
      return response.data;
    } else {
      throw new Error(
        `${response.status} ${response.statusText}: ${
          response.data?.error || "Failed to delete record"
        }`
      );
    }
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data?.error || "Failed to delete record");
    } else {
      throw new Error("Failed to delete record");
    }
  }
};
