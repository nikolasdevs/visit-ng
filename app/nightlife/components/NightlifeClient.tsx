"use client";
import React, { useMemo } from "react";
import { useFetchData } from "../../../components/fetchDataApi"; // Adjust the path as needed
import { NightlifeSection } from "./NightlifeSection";

interface Nightlife {
  id: string;
  name: string;
  description: string;
  imageUrls: string[] | null;
  slug: string;
  type: string; // Add this line
}

export default function AllNightlifeClient() {
  const NIGHTLIFE_API = process.env.NEXT_PUBLIC_NIGHTLIFE_API;
  console.log(NIGHTLIFE_API);

  // Fetch data using custom hook
  const { data, loading, error } = useFetchData<{ data: Nightlife[] }>({
    apiUrl: NIGHTLIFE_API || "",
  });

  console.log("DATA:", data);

  const clubs = useMemo(
    () => data?.data.filter((item) => item.type.toLowerCase() === "club") || [],
    [data]
  );
  console.log("CLUBS:", clubs);

  const lounges = useMemo(
    () =>
      data?.data.filter((item) => item.type.toLowerCase() === "lounge") || [],
    [data]
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p className="text-red-500">{error}</p>;
  if (!data || !data.data || data.data.length === 0)
    return <p>No Nightlife available</p>;

  const sections = [
    { title: "Clubs", data: clubs, link: "nightlife/clubs/" },
    { title: "Lounges", data: lounges, link: "nightlife/lounges/" },
  ];

  return (
    <div className="grid items-center justify-items-center min-h-screen p-8 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      {loading && <p className="text-center">Loading...</p>}
      {error && <p className="text-red-500 text-center">{error}</p>}

      {!loading && !error && data && (
        <>
          {sections.map(({ title, data, link }) => (
            <NightlifeSection
              key={title}
              title={title}
              nightlifes={data}
              moreLink={link}
            />
          ))}
        </>
      )}
    </div>
  );
}
