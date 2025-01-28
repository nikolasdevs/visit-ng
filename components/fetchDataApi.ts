import axios from 'axios';

import { useState, useEffect } from "react";

interface UseFetchDataProps<T> {
  apiUrl: string; // API URL to fetch data from
  initialData?: T | null; // Optional initial data of type T
}

interface FetchState<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
}

export const useFetchData = <T>({
  apiUrl,
}: UseFetchDataProps<T>): FetchState<T> => {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (!apiUrl) {
          throw new Error("API URL is not defined");
        }
        const response = await axios.get(apiUrl);
        console.log("Response from API:", response.data); // Log the API response
        setData(response.data);
      } catch (err) {
        console.error("Error fetching data:", err); // Log any errors
        if (err instanceof Error) {
          setError(err.message || "Failed to fetch data");
        } else {
          setError("Failed to fetch data");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [apiUrl]);

  return { data, loading, error };
};
