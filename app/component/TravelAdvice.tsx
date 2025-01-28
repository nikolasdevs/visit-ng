import Image from "next/image";
import Link from "next/link";
import React from "react";
import weatherIcon from "./../../public/weatherIcon.svg";
import visaIcon from "./../../public/visaIcon.svg";
import safetyIcon from "./../../public/safetyIcon.svg";
import arrowIcon from "./../../public/arrowIcon.svg";

export const TravelAdvice = () => {
  return (
    <div className="mt-24 py-32 bg-onPrimary text-background">
      <div className="container">
        <h1 className="">Travel Advice and Safety</h1>
        <div className="flex items-center gap-24 mt-16">
          <div className="flex flex-col gap-4  ">
            <div className="flex flex-col items-start gap-8">
              <div className="w-24 h-24">
                <Image src={weatherIcon} alt="" className=" w-full" />
              </div>
              <h2> Best Time to Travel</h2>
            </div>
            <p>
              Nigeria is a year-round destination, but the best time to visit
              depends on when you want to visit.
            </p>
            <Link
              href="/travel-guide/safety-in-nigeria"
              className="text-primary hover:text-primary text-2xl font-semibold flex items-center gap-8"
            >
              More Info{" "}
              <span className="w-8">
                <Image src={arrowIcon} alt="" className=" font-bold" />{" "}
              </span>
            </Link>
          </div>
          <div className="flex flex-col gap-4 ">
            <div className="flex flex-col items-start gap-8">
              <div className=" w-24 h-24">
                <Image src={visaIcon} alt="" className=" w-full" />
              </div>
              <h2> Visa and Entry Requirements</h2>
            </div>
            <p>
              Nigeria is a year-round destination, but the best time to visit
              depends on when you want to visit.
            </p>
            <Link
              href="/travel-guide/safety-in-nigeria"
              className="text-primary hover:text-primary text-2xl font-semibold flex items-center gap-8"
            >
              More Info{" "}
              <span className="w-8">
                <Image src={arrowIcon} alt="" className=" font-bold" />{" "}
              </span>
            </Link>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex flex-col items-start gap-8">
              <div className="w-24 h-24">
                <Image src={safetyIcon} alt="" className="w-full" />
              </div>
              <h2> Safety in Nigeria</h2>
            </div>
            <p>
              Nigeria is a year-round destination, but the best time to visit
              depends on when you want to visit.
            </p>
            <Link
              href="/travel-guide/safety-in-nigeria"
              className="text-primary hover:text-primary text-2xl font-semibold flex items-center gap-8"
            >
              More Info{" "}
              <span className="w-8">
                <Image src={arrowIcon} alt="" className=" font-bold" />{" "}
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
