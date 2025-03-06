"use client";

import { events } from "@/components/data/events";
import {
  NextButton,
  PrevButton,
  usePrevNextButtons,
} from "@/components/emblaEvents/emblaBtn";
import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import "./../../components/emblaEvents/emblaEvents.css";

type Events = {
  id: number;
  imageUrl: string;
  title: string;
};

type PropType = {
  slides: number[];
  options?: EmblaOptionsType;
};

const EmblaCarousel: React.FC<PropType> = ({ options }) => {
  const [filteredSlides] = useState<Events[]>(events);

  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  useEffect(() => {
    emblaApi?.reInit();
  }, [filteredSlides, emblaApi]);

  return (
    <div className="">
      <div className="embla-event w-full ">
        <div className="embla__viewport-event" ref={emblaRef}>
          <div className="embla__container-event">
            {filteredSlides.map((slide) => (
              <div
                className="embla__slide-event  items-start gap-4 "
                key={slide.id}
              >
                <Image
                  src={slide.imageUrl}
                  alt={slide.title}
                  layout="responsive"
                  objectFit="cover"
                  width={24}
                  height={24}
                  className="embla__slide__image "
                />
                <div className="flex flex-col">
                  <p>{slide.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="embla__controls">
          <div className="embla__buttons">
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
      </div>
    </div>
  );
};

export default EmblaCarousel;
