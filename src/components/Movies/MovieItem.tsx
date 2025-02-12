import Image from "next/image";
import React from "react";

interface MovieItemProps {
  image: string;
  name: string;
  title: string;
}

export default function MovieItem({ image, name, title }: MovieItemProps) {
  return (
    <>
      <div className="py-3">
        <Image src={image} className="rounded-lg" alt="" height={200} />
      </div>
      <div>{name}</div>
      <div className="text-xs">{title}</div>
    </>
  );
}
