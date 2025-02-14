"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import Movie01 from "@/asset/movie/movie-1.png";
import Movie02 from "@/asset/movie/movie-2.png";
import Movie03 from "@/asset/movie/movie-3.png";
import { Navigation } from "swiper/modules";

const Slider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const images = [Movie01, Movie02, Movie03];

  return (
    <div
      style={{ width: "100%", margin: "0 auto" }}
      className="md:block hidden"
    >
      <Swiper
        modules={[Navigation]}
        navigation
        loop={true}
        spaceBetween={1}
        centeredSlides={true}
        slidesPerView={"auto"}
        style={{ height: "60vh", margin: "0 18px", overflow: "hidden" }}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
      >
        {images.map((slide, index) => (
          <SwiperSlide
            key={index}
            style={{
              position: "relative",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: index === activeIndex ? "50%" : "40%",
              overflow: "hidden",
            }}
          >
            {index !== activeIndex && (
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  backgroundColor: "rgba(0, 0, 0, 0.5)",
                  zIndex: 1,
                }}
              />
            )}
            <Image
              src={slide.src}
              alt={`Slide ${index + 1}`}
              fill
              sizes="(max-width: 768px) 50vw, (max-width: 1200px) 40vw, 40vw"
              style={{
                objectFit: "contain",
                zIndex: 0,
              }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
