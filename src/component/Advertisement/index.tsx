import Image from "next/image";
import React from "react";
import ads from "@/asset/ads/Frame-5.png";

export default function Advertisement() {
  const adsImage = [ads, ads, ads, ads, ads, ads, ads, ads];

  return (
    <div className="grid grid-rows-4 px-4 py-2">
      {adsImage.map((imageAds, index) => (
        <div key={index}>
          <Image alt="" src={imageAds} />
        </div>
      ))}
    </div>
  );
}
