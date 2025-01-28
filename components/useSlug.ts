import axios from "axios";
import { useState, useEffect } from "react";

interface FetchBySlugResult<T> {
  slug: string | null;
  data: T | null;
  loading: boolean;
  error: string | null;
}

interface UseFetchBySlugProps {
  slug: string | undefined;
  API_URL: string | undefined;
}

export const useFetchBySlug = <T>({
  slug,
  API_URL,
}: UseFetchBySlugProps): FetchBySlugResult<T> => {
  const [localSlug, setLocalSlug] = useState<string | null>(null);
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!slug || !API_URL) {
      setError("Slug or API URL is not defined");
      setLoading(false);
      return;
    }
    const fetchData = async () => {
      try {
        console.log("Fetching data for slug:", slug); // Log slug
        const response = await axios.get(`${API_URL}/${slug}`);
        console.log("API Response:", response.data.data); // Log response
        setData(response.data.data);
      } catch (error) {
        console.error("Failed to fetch data:", error);
        setError("Failed to fetch data");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [slug, API_URL]);

  useEffect(() => {
    try {
      const slugFromUrl: string | undefined = window.location.pathname
        .split("/")
        .pop();
      console.log("Extracted slug:", slugFromUrl);

      if (slugFromUrl) {
        setLocalSlug(slugFromUrl);
      } else {
        throw new Error("Slug not found in the URL");
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unknown error");
    } finally {
      setLoading(false);
    }
  }, []);

  return { slug: localSlug, data, loading, error };
};
