import React from "react";

const Hero: React.FC = ({}) => {
  return (
    <div className=" flex items-center justify-center w-full lg:px-8 top-24 relative z-10 ">
      <div className=" z-50 relative w-full bg-green-700 overflow-hidden">
        {" "}
        <div className=" w-full ">
          <video
            src="videos/VisitState.mp4"
            autoPlay
            loop
            muted
            className="w-full"
            controls
          />
        </div>
        <div className="lg:container w-full md:w-3/4 lg:w-1/2 flex flex-col lg:gap-8 gap-4 items-start  absolute top-1/2 -translate-y-1/2 lg:left-48 md:left-16   left-8 ">
          <div className="blob">
            <svg
              xmlnsXlink="http://www.w3.org/1999/xlink"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 310 350"
            >
              <path d="M156.4,339.5c31.8-2.5,59.4-26.8,80.2-48.5c28.3-29.5,40.5-47,56.1-85.1c14-34.3,20.7-75.6,2.3-111  c-18.1-34.8-55.7-58-90.4-72.3c-11.7-4.8-24.1-8.8-36.8-11.5l-0.9-0.9l-0.6,0.6c-27.7-5.8-56.6-6-82.4,3c-38.8,13.6-64,48.8-66.8,90.3c-3,43.9,17.8,88.3,33.7,128.8c5.3,13.5,10.4,27.1,14.9,40.9C77.5,309.9,111,343,156.4,339.5z" />
            </svg>
          </div>
          <p className="2xl:text-[10rem] xl:text-[8rem] lg:text-[6rem] md:text-[3rem] text-[1.5rem] 2xl:leading-[9rem] xl:leading-[7rem] lg:leading-[5rem] md:leading-[4rem] leading-[2rem]  font-black font-display z-10  w-1/2 md:w-full ">
            DISCOVER <span className="text-accent">NIGERIA</span>
          </p>
          <p
            className="md:text-3xl font-semibold z-10 text-foreground leading-snug w-3/4
           md:w-full"
          >
            Get ready to explore Lagos State. <br /> Discover the best sights,
            events, entertainments, and culture with just a few clicks...
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
