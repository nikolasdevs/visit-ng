"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface Market {
  id: string;
  name: string;
  address: string;
  region: string;
  state: string;
  description: string;
  imageUrls: string[] | null;
  type: string;
  slug: string;
}

export default function AllMarkets() {
  const [allMarkets, setAllMarkets] = useState<Market[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchAllMarkets = async () => {
      try {
        const API_URL = process.env.NEXT_PUBLIC_SHOPPING_API;
        if (!API_URL) {
          throw new Error("API URL is not defined");
        }
        const response = await axios.get(`${API_URL}/type/market`);
        console.log("API Response:", response.data.data); // Log response
        setAllMarkets(response.data.data);
      } catch (error) {
        console.error("Failed to fetch accommodation data:", error);
        setError("Failed to fetch accommodation data");
      } finally {
        setLoading(false);
      }
    };

    fetchAllMarkets();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="loader" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-red-600 text-xl font-bold">{error}</p>
      </div>
    );
  }

  if (!allMarkets) {
    return <p className="text-center">No data available</p>;
  }
  return (
    <>
      <div className="flex flex-col max-w-7xl mx-auto px-8 gap-8 w-full mt-16">
        <div className="flex flex-col gap-8  w-full">
          <div className="  grid gap-8 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 justify-center">
            {allMarkets.map((market) => (
              <div
                key={market.id}
                className="max-w-sm dark:bg-gray-800 dark:border-gray-700 overflow-hidden h-auto"
              >
                <Link href={`/shopping/markets/${market.slug}`} className="">
                  <div className="w-full h-64 bg-green-400 relative overflow-hidden">
                    {" "}
                    {/* Added relative and overflow-hidden */}
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
                        {market.imageUrls && market.imageUrls.length > 0 ? (
                          <Image
                            src={market.imageUrls[2]}
                            alt={market.name}
                            layout="fill"
                            objectFit="cover" // This ensures the image covers the entire area
                            className="absolute inset-0" // Makes the image fill the container
                            // placeholder="blur"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center bg-gray-300 text-gray-700">
                            No Image Available
                          </div>
                        )}
                      </motion.div>
                    </motion.div>
                  </div>
                </Link>{" "}
                <div className="pt-2 flex flex-col justify-between h-32 gap-2">
                  <div className="flex flex-col gap-2 ">
                    <Link href={`/shopping/markets/${market.slug}`}>
                      <h5 className=" text-neutral-700 font-bold text-xl dark:text-white">
                        {market.name}
                      </h5>
                    </Link>

                    <p className="text-base text-neutral-500 dark:text-gray-400 truncates">
                      {market.description}
                    </p>
                  </div>
                  <Link
                    href={`/shopping/markets/${market.slug}`}
                    className="inline-flex items-center text-sm font-medium text-primary"
                  >
                    More
                    <ArrowRight size={16} className="ml-2" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
