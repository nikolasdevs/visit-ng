"use client";

import React, { useEffect, useState } from "react";
import "./../../components/embla-hero/embla_hero.css";
import "./../../components/embla-hero/base_hero.css";
import axios from "axios";
import EmblaCarousel from "../../components/embla-hero/EmblaCarousel";

interface Tour {
  id: number;
  imageUrls: string[]; // Array of image URLs for the tour
}

const Hero = () => {
  const [slides, setSlides] = useState<string[]>([]); // For carousel images
  const [loading, setLoading] = useState<boolean>(true); // Loading state
  const [error, setError] = useState<string | null>(null); // Error state

  // Fetch data from API
  useEffect(() => {
    const fetchTours = async () => {
      try {
        const apiUrl = process.env.NEXT_PUBLIC_TOURS_API; // API URL from .env
        if (!apiUrl) throw new Error("API URL is not defined");
        const response = await axios.get(apiUrl);

        const tours = Array.isArray(response.data.data)
          ? response.data.data
          : [];
        console.log("Fetched Tours:", tours); // Debug the response

        const imageUrls: string[] = tours
          .filter((tour: Tour) => Array.isArray(tour.imageUrls)) // Ensure `imageUrls` exists and is an array
          .flatMap((tour: Tour) => tour.imageUrls);
        setSlides(imageUrls);
        console.log(imageUrls);
        // Extract image URLs from tours
      } catch (error) {
        console.error("Error fetching data:", error);
        setError(
          error instanceof Error ? error.message : "Failed to fetch data"
        );
      } finally {
        setLoading(false);
      }
    };

    fetchTours();
  }, []);

  // Loading state
  if (loading) {
    return (
      <div className="w-full h-full flex justify-center items-center">
        <p>Loading...</p>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="w-full h-full flex justify-center items-center">
        <p className="text-red-500">Error: {error}</p>
      </div>
    );
  }

  return (
    <div className="w-full h-full max-h-48">
      <div className="relative flex items-center justify-center w-full px-2 sm:px-6 lg:px-8 h-[70rem]">
        <div className="absolute inset-0 w-full h-full">
          <EmblaCarousel slides={slides} />
          <div className=" absolute inset-0 bg-black/30 flex flex-col items-center justify-center w-full h-full"></div>
        </div>
        <div className=" flex flex-col items-start justify-between z-50 max-w-screen-xl w-full px-40 gap-16">
          <div className=" w-1/2 flex flex-col gap-8 items-start sm:text-start ">
            <p className="2xl:text-[10rem] xl:text-[8rem] lg:text-[6rem] text-[4rem] 2xl:leading-[9rem] xl:leading-[7rem] lg:leading-[5rem] font-black font-display z-10 leading-[4rem] text-foreground">
              DISCOVER NIGERIA
            </p>
            <p className="text-4xl font-semibold z-10 text-foreground leading-snug">
              Get ready to explore Lagos State. <br /> Discover the best sights,
              events, entertainments, and culture with just a few clicks...
            </p>
          </div>
         
        </div>
      </div>
    </div>
  );
};

export default Hero;
