"use client";
import Image from "next/image";
import search from "@/asset/icon/Vector.png";
import { useState } from "react";
import Link from "next/link";
import logo from "@/asset/logo/logo.png";

interface Tab {
  id: string;
  title: string;
  url: string;
}

interface TabsProps {
  tabs: Tab[];
}

const Tabs: React.FC<TabsProps> = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  return (
    <div className="hidden md:flex flex-row gap-8">
      {tabs.map((tab) => (
        <Link key={tab.id} href={tab.url}>
          <button
            className={`font-medium md:text-sm lg:text-lg xl:text-xl ${
              activeTab === tab.id
                ? "text-[#FFBB00] border-b-2 border-[#FFBB00]"
                : "text-white"
            }`}
            onClick={() => setActiveTab(tab.id)}
          >
            <span className="py-2">{tab.title}</span>
          </button>
        </Link>
      ))}
    </div>
  );
};

const Header: React.FC = () => {
  const tabsData: Tab[] = [
    { id: "home", title: "HOME", url: "" },
    { id: "drama", title: "드라마", url: "" },
    { id: "movie", title: "영화", url: "" },
    { id: "international movie", title: "국제 영화", url: "" },
    { id: "animation", title: "애니", url: "" },
    { id: "entertainment", title: "예능", url: "" },
    { id: "music", title: "음악", url: "" },
    {
      id: "documentary",
      title: "시사/다큐",
      url: "",
    },
  ];
  return (
    <>
      <div className="w-full flex justify-between gap-2 py-4">
        <div className="flex items-center aspect-[141/50]">
          <Image src={logo} alt="logo" width={141} height={50} />
        </div>
        <div className="w-full flex gap-3 justify-end items-center mx-3">
          <input className="w-full md:w-[270px] rounded-full bg-[#323232] text-center py-1 md:py-2 text-sm md:text-base"></input>
          <Image
            src={search}
            alt="Search"
            className="object-cover w-5 h-5 cursor-pointer"
          />
        </div>
      </div>
      <Tabs tabs={tabsData} />
    </>
  );
};

export default Header;
