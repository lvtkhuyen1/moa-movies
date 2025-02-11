"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from "next/image";
import platform from "@/asset/movies/platform.png";
import bleach from "@/asset/movies/bleach.png";
import deadpool from "@/asset/movies/deadpool-movie.png";
import joker from "@/asset/movies/joker.png";
import insideman from "@/asset/movies/insideman.png";
import material from "@/asset/icon/material-movies.png";
import { Navigation } from "swiper/modules";
import { useRouter } from "next/navigation";

const movies = [
  { id: 1, image: platform, title: "MovieName", subText: "SubText" },
  { id: 2, image: bleach, title: "MovieName", subText: "SubText" },
  { id: 3, image: deadpool, title: "MovieName", subText: "SubText" },
  { id: 4, image: joker, title: "MovieName", subText: "SubText" },
  { id: 5, image: insideman, title: "MovieName", subText: "SubText" },
  { id: 6, image: insideman, title: "MovieName", subText: "SubText" },
];

interface CategoryProps {
  title: string;
}

export default function Category({ title }: CategoryProps) {
  const router = useRouter();
  const handleNavigate = () => {
    router.push("/CategoryList");
  };
  return (
    <>
      <div className="flex justify-between items-center py-4">
        <div className="flex gap-2">
          <Image src={material} alt="" />
          <h2 className="text-lg md:text-3xl flex items-center font-semibold">
            {title}
          </h2>
        </div>

        <button
          className="bg-[#FFBB00] text-black px-3 py-1 rounded-sm text-xs md:text-xl font-semibold"
          onClick={handleNavigate}
        >
          +더보기
        </button>
      </div>
      <Swiper
        slidesPerView={5.5}
        spaceBetween={10}
        navigation
        loop
        modules={[Navigation]}
        breakpoints={{
          0: {
            slidesPerView: 2.5,
          },
          450: {
            slidesPerView: 3.5,
          },
          640: {
            slidesPerView: 4.5,
          },
          780: {
            slidesPerView: 5.5,
          },
        }}
      >
        {movies.map((movie) => (
          <SwiperSlide key={movie.id}>
            <Image
              src={movie.image}
              alt={movie.title}
              width={200}
              height={300}
              className="object-cover w-full"
            />
            <div className="text-white py-2 pl-2 font-medium">
              <h3 className="text-sm md:text-xl lg:text-2xl">{movie.title}</h3>
              <p className="text-xs md:text-lg lg:text-xl text-[#A5A5A5]">
                {movie.subText}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
