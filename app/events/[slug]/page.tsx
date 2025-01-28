'use client'
import React from "react";
import { usePathname } from "next/navigation";
import EventsBySlug from "./clientside";

const Page = () => {
  const pathname = usePathname(); // Get the current path
  const slug = pathname.split("/").pop(); // Extract the slug from the path

  if (!slug) {
    return <p>Loading...</p>;
  }

  return (
    <div className="container mx-auto p-4">
      <EventsBySlug slug={slug} />
    </div>
  );
};

export default Page;
