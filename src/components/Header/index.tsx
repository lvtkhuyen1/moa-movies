"use client";
import React, { useState } from "react";
import Image from "next/image";
import search from "@/asset/icon/Vector.png";
import logo from "@/asset/logo/logo.png";
import Tabs from "../Movies/Tabs";

export default function Header() {
  const [category, setCategory] = useState("Home");
  console.log(category);

  return (
    <>
      <div className="w-full flex justify-between gap-2 py-4">
        <div className="flex items-center aspect-[141/50]">
          <Image src={logo} alt="Logo" />
        </div>
        <div className="w-full flex gap-3 justify-end items-center mx-3">
          <input className="w-full md:w-[270px] rounded-full bg-[#323232] text-center py-1 md:py-2 text-sm md:text-base" />
          <Image
            src={search}
            alt="Search"
            className="object-cover w-5 h-5 cursor-pointer"
          />
        </div>
      </div>
      <Tabs onCategorySelect={setCategory} />
    </>
  );
}
