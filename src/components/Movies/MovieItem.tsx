import Image, { StaticImageData } from "next/image";
import React from "react";

interface MovieItemProps {
  movieName: string;
  movieTitle: string;
  movieImage: string | StaticImageData;
}

export default function MovieItem({
  movieImage,
  movieName,
  movieTitle,
}: MovieItemProps) {
  return (
    <>
      <div className="py-3">
        <Image src={movieImage} alt="Movie Name" height={0} width={300} />
      </div>
      <div>{movieName}</div>
      <div className="text-xs">{movieTitle}</div>
    </>
  );
}
