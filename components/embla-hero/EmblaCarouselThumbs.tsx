import Image from "next/image";
import React from "react";

type PropType = {
  selected: boolean;
  index: number;
  onClick: () => void;
  imgSrc: string;
  style?: React.CSSProperties;
};

export const Thumb: React.FC<PropType> = (props) => {
  const { selected, onClick, imgSrc } = props;

  return (
    <div
      className={"embla-thumbs__slide".concat(
        selected ? " embla-thumbs__slide--selected" : ""
      )}
    >
      <button
        onClick={onClick}
        type="button"
        className="embla-thumbs__slide__img"
      >
        <Image
          src={imgSrc}
          alt={`Thumbnail ${selected ? "selected" : ""}`}
          className="embla-thumbs__img"
          width={120}
          height={16}
        />
      </button>
    </div>
  );
};
