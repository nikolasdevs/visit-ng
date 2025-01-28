"use client";
import React, { useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import { EmblaOptionsType } from "embla-carousel";
import "./../../../../components/embla/embla2.css";
import { useFetchBySlug } from "../../../../components/useSlug";
import {
  NextButton,
  PrevButton,
  usePrevNextButtons,
} from "../../../../components/embla/ArrowBtns";
import { useAutoplay } from "../../../../components/embla/emblaCarouselAutoplay";
import { useAutoplayProgress } from "../../../../components/embla/emblaCarouselAutoplayProgress";

interface Apartment {
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

interface PropType {
  options?: EmblaOptionsType;
}

interface ApartmentByIdProps extends PropType {
  slug: string;
}

const ApartmentBySlug: React.FC<ApartmentByIdProps> = ({ options, slug }) => {
  const API_URL = process.env.NEXT_PUBLIC_ACCOMMODATIONS_API;
  const { data, loading, error } = useFetchBySlug<Apartment>({ slug, API_URL });
  const progressNode = useRef<HTMLDivElement>(null);
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [
    Autoplay({ playOnInit: false, delay: 3000 }),
  ]);
  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);
  const { autoplayIsPlaying, toggleAutoplay, onAutoplayButtonClick } =
    useAutoplay(emblaApi);
  const { showAutoplayProgress } = useAutoplayProgress(
    emblaApi,
    progressNode as React.RefObject<HTMLElement>
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p className="text-red-500">{error}</p>;
  if (!data) return <p>No data found</p>;

  return (
    <>
      <div className="w-full bg-primary-foreground mx-auto p-4 h-screen">
        <div className="max-w-7xl mx-auto top-48 relative">
          <div className="w-full px-8">
            <h1 className="text-6xl font-extrabold mb-6 text-primary">
              {data.name}
            </h1>
            <p className="text-3xl font-medium">{data.description}</p>
          </div>
          <div className="flex w-full h-auto mt-8 gap-8">
            <div className="w-2/3">
              {data.imageUrls ? (
                <div className="embla">
                  <div className="embla__viewport" ref={emblaRef}>
                    <div className="embla__container">
                      {Array.isArray(data.imageUrls) ? (
                        data.imageUrls.map((url, index) => (
                          <div key={index} className="embla__slide h-96">
                            <Image
                              src={url}
                              alt={`Slide ${index + 1}`}
                              fill
                              style={{ objectFit: "cover" }}
                            />
                          </div>
                        ))
                      ) : (
                        <div className="embla__slide relative w-full h-96">
                          <Image
                            src={data.imageUrls || "/placeholder.jpg"}
                            alt="Default Apartment Image"
                            fill
                            style={{ objectFit: "cover" }}
                          />
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="embla__controls">
                    <div className="embla__buttons">
                      <PrevButton
                        onClick={() => onAutoplayButtonClick(onPrevButtonClick)}
                        disabled={prevBtnDisabled}
                      />
                      <NextButton
                        onClick={() => onAutoplayButtonClick(onNextButtonClick)}
                        disabled={nextBtnDisabled}
                      />
                    </div>

                    <div
                      className={`embla__progress`.concat(
                        showAutoplayProgress ? "" : " embla__progress--hidden"
                      )}
                    >
                      <div
                        className="embla__progress__bar"
                        ref={progressNode}
                      />
                    </div>

                    <button
                      className="embla__play"
                      onClick={toggleAutoplay}
                      type="button"
                    >
                      {autoplayIsPlaying ? "Stop" : "Start"}
                    </button>
                  </div>
                </div>
              ) : (
                <p>No images available for this apartment.</p>
              )}
            </div>
            <div className="bg-gray-600 w-1/3">
              <div className="text-primary-foreground bg-primary h-full shadow-md p-4 font-medium">
                <div className="flex flex-col gap-3">
                  <div className="text-3xl font-bold">Contact Information</div>
                  <div>{data.address}</div>
                  <div>+234123123123</div>
                  <div>info@airbnba.com</div>
                  <div>www.airbnb-a.com</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ApartmentBySlug;
