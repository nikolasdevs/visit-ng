import React from "react";

export const Looking = () => {
  return (
    <div className="w-full mt-[75rem]">
      <div className="flex justify-between items-center container">
        <h1 className="text-6xl leading-snug font-normal ">
          Looking for where to visit in{" "}
          <span className="font-display font-bold text-onPrimary">
            Nigeria?
          </span>
        </h1>
        <div className="w-[1px] h-32 bg-onPrimary mr-32"></div>
        <div className="w-2/4">
          <p className=" text-4xl leading-snug">
            Discover the best places to visit in Nigeria across different
            regions. Each region has unique experience to explore.
          </p>
        </div>
      </div>
    </div>
  );
};
