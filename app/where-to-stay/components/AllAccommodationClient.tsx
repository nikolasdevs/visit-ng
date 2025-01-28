"use client";
import React, { useMemo } from "react";
import { useFetchData } from "../../../components/fetchDataApi"; // Adjust the path as needed
import { AccommodationSection } from "./AccommodationSection";

interface Accommodation {
  id: string;
  name: string;
  description: string;
  imageUrls: string[] | null;
  slug: string;
  type: string; // Add this line
}

export default function AllAccommodationClient() {
  const ACCOMMODATIONS_API = process.env.NEXT_PUBLIC_ACCOMMODATIONS_API;
  console.log(ACCOMMODATIONS_API);

  // Fetch data using custom hook
  const { data, loading, error } = useFetchData<{ data: Accommodation[] }>({
    apiUrl: ACCOMMODATIONS_API || "",
  });

  console.log("DATA:", data);

  const hotels = useMemo(
    () =>
      data?.data.filter((item) => item.type.toLowerCase() === "hotel") || [],
    [data]
  );

  const apartments = useMemo(
    () =>
      data?.data.filter((item) => item.type.toLowerCase() === "apartment") ||
      [],
    [data]
  );

  const airbnbs = useMemo(
    () =>
      data?.data.filter((item) => item.type.toLowerCase() === "airbnb") || [],
    [data]
  );

  const resorts = useMemo(
    () =>
      data?.data.filter((item) => item.type.toLowerCase() === "resort") || [],
    [data]
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p className="text-red-500">{error}</p>;
  if (!data || !data.data || data.data.length === 0)
    return <p>No accommodation available</p>;

  const sections = [
    { title: "Hotels", data: hotels, link: "where-to-stay/hotels/" },
    { title: "Airbnb", data: airbnbs, link: "where-to-stay/airbnb/" },
    {
      title: "Apartments",
      data: apartments,
      link: "where-to-stay/apartments/",
    },
    { title: "Resorts", data: resorts, link: "where-to-stay/resorts/" },
  ];

  return (
    <div className="grid items-center justify-items-center min-h-screen p-8 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      {loading && <p className="text-center">Loading...</p>}
      {error && <p className="text-red-500 text-center">{error}</p>}

      {!loading && !error && data && (
        <>
          {sections.map(({ title, data, link }) => (
            <AccommodationSection
              key={title}
              title={title}
              accommodations={data}
              moreLink={link}
            />
          ))}
        </>
      )}
    </div>
  );
}
