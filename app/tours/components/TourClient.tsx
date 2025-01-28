"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useFetchData } from "../../../components/fetchDataApi"; // Adjust the path as needed

interface Tours {
  id: string;
  name: string;
  description: string;
  imageUrls: string[] | null;
  slug: string;
}

export default function AllToursClient() {
  const TOURS_API = process.env.NEXT_PUBLIC_TOURS_API;
  console.log(TOURS_API);

  // Fetch data using custom hook
  const { data, loading, error } = useFetchData<{ data: Tours[] }>({
    apiUrl: TOURS_API || "",
  });

  console.log("DATA", data);

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const toursPerPage = 6;

  if (loading) return <p>Loading...</p>;
  if (error) return <p className="text-red-500">{error}</p>;
  if (!data || !data.data || data.data.length === 0)
    return <p>No tours available</p>;

  // Pagination logic
  const indexOfLastTour = currentPage * toursPerPage;
  const indexOfFirstTour = indexOfLastTour - toursPerPage;
  const currentTours = data.data.slice(indexOfFirstTour, indexOfLastTour);

  // Pagination handler
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <div className="flex flex-col max-w-7xl mx-auto px-8 gap-8 w-full mt-16">
      <div className="grid gap-8 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 justify-center">
        {currentTours.map((tour) => (
          <div
            key={tour.id}
            className="max-w-sm dark:bg-gray-800 dark:border-gray-700 overflow-hidden"
          >
            {/* Tour Image */}
            <Link href={`/tours/${tour.slug}`}>
              <div className="w-full h-64 relative overflow-hidden">
                <motion.div
                  initial={false}
                  whileHover={{ scale: 1 }} // Slightly zooms in the entire div
                  className="w-full h-full" // Ensure it takes full width and height
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    initial={false}
                    animate={{}}
                    className="relative w-full h-full" // Ensure it takes full width and height
                    whileHover={{ scale: [null, 1.1] }}
                    transition={{ duration: 0.3 }}
                  >
                    {tour.imageUrls && tour.imageUrls.length > 0 ? (
                      <Image
                        src={tour.imageUrls[0]}
                        alt={tour.name}
                        layout="fill"
                        objectFit="cover"
                        className="absolute inset-0"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-gray-300 text-gray-700">
                        No Image Available
                      </div>
                    )}
                  </motion.div>
                </motion.div>
              </div>
            </Link>

            {/* Tour Details */}
            <div className="pt-2 flex flex-col justify-between h-32 gap-2">
              <Link href={`tours/${tour.slug}`}>
                <h5 className="text-neutral-700 font-bold text-xl dark:text-white">
                  {tour.name}
                </h5>
              </Link>
              <p className="text-base text-neutral-500 dark:text-gray-400 truncate">
                {tour.description}
              </p>
              <Link
                href={`/tours/${tour.slug}`}
                className="inline-flex items-center text-sm font-medium text-primary"
              >
                More
                <ArrowRight size={16} className="ml-2" />
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center mt-8">
        {Array.from(
          { length: Math.ceil(data.data.length / toursPerPage) },
          (_, index) => (
            <button
              key={index}
              onClick={() => paginate(index + 1)}
              className={`px-4 py-2 mx-1 rounded ${
                currentPage === index + 1
                  ? "bg-primary text-white"
                  : "bg-gray-200 text-gray-700"
              }`}
            >
              {index + 1}
            </button>
          )
        )}
      </div>
    </div>
  );
}
