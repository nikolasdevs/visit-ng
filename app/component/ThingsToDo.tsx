"use client";

import React, { useState, useEffect } from "react";
import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import {
  NextButton,
  PrevButton,
  usePrevNextButtons,
} from "../../components/emblaThings/emblaThingsBtn";
import { selectedThingsToDo } from "../../components/data/selectedThingsToDo";
import "./../../components/emblaThings/emblaThings.css";

type SelectedThingsToDo = {
  id: number;
  imageUrl: string;
  title: string;
  category: string;
};

interface MoreInfoProps {
  slides: number[];
  options?: Partial<EmblaOptionsType>;
}

const MainInfo: React.FC<MoreInfoProps> = ({ options }) => {
  const [filteredSlides, setFilteredSlides] =
    useState<SelectedThingsToDo[]>(selectedThingsToDo);

  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  const filterSlidesByCategory = (categoryName: string) => {
    const filtered = selectedThingsToDo.filter(
      (slide) => slide.category === categoryName
    );
    setFilteredSlides(filtered);
  };

  useEffect(() => {
    emblaApi?.reInit();
  }, [filteredSlides, emblaApi]);

  return (
    <div className="md:mt-48 mt-20 w-full  relative">
      <section className="max-w-screen-lg mx-auto flex items-center px-8 border-t-primary border-b-2 border-b-primary border-t-2 py-8">
        <div className=" font-semibold flex flex-col  text-onPrimary md:w-4/12 w-full bg-transparent z-20 p-4">
          {" "}
          <div className="flex flex-col gap-6">
            <p className=" text-4xl">What are you looking for?</p>
            <div className="sm:text-[32px] text-2xl sm:leading-none leading-6 tracking-tighter">
              {[
                "Accommodation",
                "Food & Drinks",
                "Nightlife",
                "Events",
                "Tour",
                "Culture",
                "Shopping",
              ].map((category) => (
                <span
                  key={category}
                  className="hover:text-neutral-600 cursor-pointer"
                  onClick={() => filterSlidesByCategory(category)}
                >
                  {category},{" "}
                </span>
              ))}
            </div>
          </div>
          <p className="text-2xl text-primary tracking-normal mt-10">
            More about {filteredSlides[0]?.category}
          </p>
        </div>

        <div className="embla_things">
          <div className="embla__viewport" ref={emblaRef}>
            <div className="embla__things_container">
              {filteredSlides.map((slide) => (
                <div
                  className="embla__things_slide flex items-start gap-4"
                  key={slide.id}
                >
                  <Image
                    src={slide.imageUrl}
                    alt={slide.title}
                    layout="responsive"
                    objectFit="cover"
                    width={48}
                    height={48}
                    className="h-96 embla__slide__image"
                  />
                  <div className="flex flex-col">
                    <p>{slide.title}</p>
                    <p>{slide.category}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="embla__controls ">
              <div className="embla__buttons w-full md:justify-end justify-between flex">
                <PrevButton
                  onClick={onPrevButtonClick}
                  disabled={prevBtnDisabled}
                />
                <NextButton
                  onClick={onNextButtonClick}
                  disabled={nextBtnDisabled}
                />
              </div>
            </div>
          </div>{" "}
        </div>
      </section>
    </div>
  );
};

export default MainInfo;
