"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import Image, { StaticImageData } from "next/image";
import squidgame from "@/asset/movies/squid-game.png";
import deadpool from "@/asset/movies/deadpool.png";
import irishman from "@/asset/movies/the-irish-man.png";

interface ImageMovie {
  id: number;
  image: string | StaticImageData;
  alt: string;
}
const movies: ImageMovie[] = [
  {
    id: 1,
    image: squidgame,
    alt: "Squid Game",
  },
  {
    id: 2,
    image: deadpool,
    alt: "Deadpool & Wolverine",
  },
  {
    id: 3,
    image: irishman,
    alt: "The Irishman",
  },
  {
    id: 4,
    image: irishman,
    alt: "The Irishman",
  },
];
export default function MovieBanner() {
  return (
    <>
      <p className="w-full bg-[#FFBB00] text-black font-semibold text-sm md:text-lg flex items-center p-2 md:p-4 my-2 md:my-3 md:m-0">
        공지사항
      </p>
      <div className="hidden md:block">
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          modules={[Navigation]}
          navigation={true}
          loop
        >
          {movies.map((movie) => (
            <SwiperSlide key={movie.id}>
              <div className="relative">
                <Image
                  src={movie.image}
                  alt={movie.alt}
                  width={1098}
                  height={1598}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}

// "use client";

// import React from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// const movies = [
//   { id: 1, image: "/path-to-image1.jpg", title: "Movie 1" },
//   { id: 2, image: "/path-to-image2.jpg", title: "Movie 2" },
//   { id: 3, image: "/path-to-image3.jpg", title: "Movie 3" },
// ];

// const MovieBanner = () => {
//   const settings = {
//     dots: false,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     nextArrow: <SampleNextArrow />,
//     prevArrow: <SamplePrevArrow />,
//   };

//   return (
//     <div className="bg-black p-4">
//       <div className="bg-yellow-500 text-black text-sm p-2 font-bold">공지사항</div>
//       <Slider {...settings} className="mt-2">
//         {movies.map((movie) => (
//           <div key={movie.id} className="px-2">
//             <img
//               src={movie.image}
//               alt={movie.title}
//               className="rounded-lg w-full"
//             />
//           </div>
//         ))}
//       </Slider>
//     </div>
//   );
// };

// function SampleNextArrow(props) {
//   const { onClick } = props;
//   return (
//     <div
//       className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-800 p-2 rounded-full cursor-pointer"
//       onClick={onClick}
//     >
//       ▶
//     </div>
//   );
// }

// function SamplePrevArrow(props) {
//   const { onClick } = props;
//   return (
//     <div
//       className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-800 p-2 rounded-full cursor-pointer"
//       onClick={onClick}
//     >
//       ◀
//     </div>
//   );
// }

// export default MovieBanner;
