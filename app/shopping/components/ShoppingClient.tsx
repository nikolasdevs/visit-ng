"use client";
import React, { useMemo } from "react";
import { useFetchData } from "../../../components/fetchDataApi"; // Adjust the path as needed
import { ShoppingSection } from "./ShoppingSection";

interface Shopping {
  id: string;
  name: string;
  description: string;
  imageUrls: string[] | null;
  slug: string;
  type: string; // Add this line
}

export default function AllShoppingClient() {
  const SHOPPING_API = process.env.NEXT_PUBLIC_SHOPPING_API;
  console.log(SHOPPING_API);

  // Fetch data using custom hook
  const { data, loading, error } = useFetchData<{ data: Shopping[] }>({
    apiUrl: SHOPPING_API || "",
  });

  console.log("DATA:", data);

  const malls = useMemo(
    () => data?.data.filter((item) => item.type.toLowerCase() === "mall") || [],
    [data]
  );

  const markets = useMemo(
    () =>
      data?.data.filter((item) => item.type.toLowerCase() === "market") || [],
    [data]
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p className="text-red-500">{error}</p>;
  if (!data || !data.data || data.data.length === 0)
    return <p>No Shopping available</p>;

  const sections = [
    { title: "Malls", data: malls, link: "shopping/malls/" },
    { title: "Markets", data: markets, link: "shopping/markets/" },
  ];

  return (
    <div className="grid items-center justify-items-center min-h-screen p-8 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      {loading && <p className="text-center">Loading...</p>}
      {error && <p className="text-red-500 text-center">{error}</p>}

      {!loading && !error && data && (
        <>
          {sections.map(({ title, data, link }) => (
            <ShoppingSection
              key={title}
              title={title}
              shoppings={data}
              moreLink={link}
            />
          ))}
        </>
      )}
    </div>
  );
}
