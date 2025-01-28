"use client";
import Image from "next/image";
import React from "react";
import { topTen } from "../../components/data/topTenData";
import { motion } from "framer-motion";
import Link from "next/link";

export const MustVisit = () => {
  return (
    <div className="mt-32">
      <div className="container">
        <h1 className="">The 10 Must Visit Places in Nigeria</h1>

        <div className="flex items-center gap-4 h-auto my-16">
          {" "}
          {topTen.map((card) => (
            <div className="card " key={card.id}>
              <Link href={card.link} className=" ">
                <motion.div
                  initial={false}
                  whileHover={{ scale: 1 }} // Slightly zooms in the entire div
                  className="overflow-hidden " // Ensures the image remains within bounds
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    initial={false}
                    animate={{}}
                    className=""
                    whileHover={{ scale: [null, 1.1] }}
                    transition={{ duration: 0.3 }}
                  >
                    <Image
                      src={card.imageUrls[1]}
                      alt=""
                      className="w-full h-full"
                      width={480}
                      height={120}
                    />
                  </motion.div>
                </motion.div>
              </Link>
              <div className="card-text">
                <h2 className="card-title">{card.title}</h2>
                <p className="truncates text-xl">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
