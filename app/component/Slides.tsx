"use client";

import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import React from "react";
import {
  NextButton,
  PrevButton,
  usePrevNextButtons,
} from "../../components/embla/ArrowBtns";
import { selectedData } from "../data/selectedData";

import "./../../components/embla-hero/embla_hero.css";

// interface Tour {
//   id: number;
//   imageUrls: string[]; // Array of image URLs for the tour
// }

type PropType = {
  slides: number[];
  options?: EmblaOptionsType;
};

const Slides: React.FC<PropType> = ({ options }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  // const [slides, setSlides] = useState<string[]>([]); // For carousel images
  //const [loading, setLoading] = useState<boolean>(true); // Loading state
  //const [error, setError] = useState<string | null>(null); // Error state
  // const [emblaRef, emblaApi] = useEmblaCarousel(options);

  // Fetch data from API
  // useEffect(() => {
  //   const fetchTours = async () => {
  //     try {
  //       const apiUrl = process.env.NEXT_PUBLIC_TOURS_API; // API URL from .env
  //       if (!apiUrl) throw new Error("API URL is not defined");
  //       const response = await axios.get(apiUrl);

  //       const tours = Array.isArray(response.data.data)
  //         ? response.data.data
  //         : [];
  //       console.log("Fetched Tours:", tours); // Debug the response

  //       const imageUrls: string[] = tours
  //         .filter((tour: Tour) => Array.isArray(tour.imageUrls)) // Ensure `imageUrls` exists and is an array
  //         .flatMap((tour: Tour) => tour.imageUrls);
  //       setSlides(imageUrls);
  //       console.log(imageUrls);
  //       // Extract image URLs from tours
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //       setError(
  //         error instanceof Error ? error.message : "Failed to fetch data"
  //       );
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchTours();
  // }, []);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  // // Loading state
  // if (loading) {
  //   return (
  //     <div className="w-full h-full flex justify-center items-center">
  //       <p>Loading...</p>
  //     </div>
  //   );
  // }

  // // Error state
  // if (error) {
  //   return (
  //     <div className="w-full h-full flex justify-center items-center">
  //       <p className="text-red-500">Error: {error}</p>
  //     </div>
  //   );
  // }

  return (
    <div className="embla " ref={emblaRef}>
      <div className="embla__container ">
        {selectedData.map((slide, index) => (
          <div className="embla__slide flex flex-col " key={index}>
            <Image
              src={slide.imageUrl}
              alt={slide.title}
              layout="responsive"
              objectFit="cover"
              className="embla__slide__img "
            />
            <div className="flex flex-col gap-[.2rem]">
              <p>{slide.title}</p>
            </div>
          </div>
        ))}{" "}
      </div>
      <div className="embla__controls ">
        <div className="embla__buttons">
          <PrevButton
            onClick={onPrevButtonClick}
            disabled={prevBtnDisabled}
            aria-label="Previous slide"
          />
          <NextButton
            onClick={onNextButtonClick}
            disabled={nextBtnDisabled}
            aria-label="Next slide"
          />
        </div>
      </div>{" "}
    </div>
  );
};

export default Slides;
