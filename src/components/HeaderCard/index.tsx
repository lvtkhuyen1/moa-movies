"use client";
import React from "react";
import Image, { StaticImageData } from "next/image";
import lavie from "@/asset/card/lavie.png";
import acard from "@/asset/card/acard.png";
import zero from "@/asset/card/zero.png";
import mix from "@/asset/card/mix.png";
import station from "@/asset/card/station.png";
import starbuck from "@/asset/card/starbuck.png";
import yes from "@/asset/card/yes.png";
import bet16 from "@/asset/card/bet16.png";

interface ImageCard {
  id: number;
  src: string | StaticImageData;
  alt: string;
}
const images: ImageCard[] = [
  { id: 1, src: lavie, alt: "Lavie En Card" },
  { id: 2, src: acard, alt: "A Card" },
  { id: 3, src: zero, alt: "Zero Card" },
  { id: 4, src: mix, alt: "Mix Mix Card" },
  { id: 5, src: station, alt: "Station Card" },
  { id: 6, src: starbuck, alt: "Starbuck Card" },
  { id: 7, src: yes, alt: "Yes Card" },
  { id: 8, src: bet16, alt: "Bet16 Card" },
];
const HeaderCard = () => {
  return (
    <div className="grid grid-cols-4 md:gap-2 py-0 md:py-4">
      {images.map((image) => (
        <div
          key={image.id}
          className="flex justify-center items-center aspect-[441/92] pb-1 md:pb-0"
        >
          <Image
            src={image.src}
            alt={image.alt}
            width={441}
            height={92}
            className="object-contain"
          />
        </div>
      ))}
    </div>
  );
};
export default HeaderCard;
