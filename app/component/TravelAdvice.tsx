import Link from "next/link";
import { BsPassport } from "react-icons/bs";
import { MdArrowForward, MdOutlineHealthAndSafety } from "react-icons/md";
import { WiDayCloudyWindy } from "react-icons/wi";

export const TravelAdvice = () => {
  return (
    <div className="md:mt-32 mt-16 text-foreground w-full border-y border-y-accent py-16 bg-foreground relative  ">
      {/* <div className="absolute left-0 right-0 bg-green-300/50 ">
        <video
          src="videos/Travel-Videos.mp4"
          autoPlay
          loop
          muted
          className=" "
        />
      </div>{" "} */}
      <div className="container">
        {" "}
        <h1 className="text-xl leading-snug font-semibold text-background">
          Travel Advice and Safety
        </h1>
        <div className="flex flex-col md:flex-row items-start lg:gap-16 gap-8 xl:mt-16 md:mt-12 mt-8">
          <div className="flex flex-col justify-between gap-4 w-full">
            <div className="flex flex-col gap-4  ">
              <div className="flex flex-col items-start 2xl:gap-16 lg:gap-8 gap-4">
                <div className="w-14  h-14  flex justify-center items-center">
                  <WiDayCloudyWindy className="w-full h-full  text-background" />
                </div>
                <h2 className="text-background"> Best Time to Travel</h2>
              </div>
              <p className=" text-sm md:text-base text-background">
                Nigeria is a year-round destination, but the best time to visit
                depends on when you want to visit.
              </p>
            </div>
            <Link
              href="/travel-guide/safety-in-nigeria"
              className="text-accent font-bold text-sm md:text-base  flex items-center md:gap-8 gap-4 "
            >
              More Info{" "}
              <span className="md:w-8 w-4">
                <MdArrowForward />
              </span>
            </Link>
          </div>
          <div className="flex flex-col justify-between gap-4 w-full">
            <div className="flex flex-col gap-4  ">
              <div className="flex flex-col items-start 2xl:gap-16 lg:gap-8 gap-4">
                <div className="w-14  h-14  flex justify-center items-center">
                  <BsPassport className="w-full  h-full text-background" />
                </div>
                <h2 className="text-background"> Visa Requirements</h2>
              </div>
              <p className=" text-sm md:text-base text-background">
                Nigeria is a year-round destination, but the best time to visit
                depends on when you want to visit.
              </p>
            </div>
            <Link
              href="/travel-guide/safety-in-nigeria"
              className="text-accent font-bold flex items-center text-sm md:text-base  md:gap-8 gap-4"
            >
              More Info{" "}
              <span className="md:w-8 w-4">
                <MdArrowForward />
              </span>
            </Link>
          </div>
          <div className="flex flex-col justify-between gap-4 w-full">
            <div className="flex flex-col gap-4">
              <div className="flex flex-col items-start 2xl:gap-16 lg:gap-8 gap-4">
                <div className="w-14  h-14  flex justify-center items-center">
                  <MdOutlineHealthAndSafety className="w-full h-full text-background" />
                </div>
                <h2 className="text-background"> Safety in Nigeria</h2>
              </div>
              <p className=" text-sm md:text-base text-background">
                Nigeria is a year-round destination, but the best time to visit
                depends on when you want to visit.
              </p>
            </div>
            <Link
              href="/travel-guide/safety-in-nigeria"
              className="flex items-center text-sm md:text-base  md:gap-8 gap-4 text-accent font-bold"
            >
              More Info{" "}
              <span className="md:w-8 w-4">
                <MdArrowForward />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
