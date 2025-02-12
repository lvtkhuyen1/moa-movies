"use client";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from "next/image";
import material from "@/asset/icon/material-movies.png";
import MultiSlider from "../Movies/MultiSlider";
import { MovieType } from "@/libs/type";

interface CategoryProps {
  category: string;
  movies: MovieType[];
}

export default function Category({ category, movies }: CategoryProps) {
  return (
    <>
      <div className="flex justify-between items-center py-4">
        <div className="flex gap-2">
          <Image src={material} alt="" />
          <h2 className="text-lg md:text-3xl flex items-center font-semibold">
            {category}
          </h2>
        </div>

        <button className="bg-[#FFBB00] text-black px-3 py-1 rounded-sm text-xs md:text-xl font-semibold">
          +더보기
        </button>
      </div>
      <MultiSlider movies={movies} />
    </>
  );
}
