"use client";
import Image from "next/image";
import search from "@/asset/icon/Vector.png";
import { useEffect, useState } from "react";
import Link from "next/link";
import logo from "@/asset/logo/logo.png";
import { CategoriesResponse, CategoryType } from "@/libs/type";
import { handleCategories, handleCategoriesByID } from "@/services/category";

interface Tab {
  id: number | string;
  name: string;
  url: string;
}

interface TabsProps {
  tabs: Tab[];
  onCategorySelect: (id: number, name: string) => void;
  selectedCategory: number | null;
}

const Tabs: React.FC<TabsProps> = ({ tabs, onCategorySelect }) => {
  const [activeTab, setActiveTab] = useState<string | number>(
    tabs[0]?.id || ""
  );

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
            onClick={() => {
              setActiveTab(tab.id);
              if (typeof tab.id === "number") {
                onCategorySelect(tab.id, tab.name);
              }
            }}
          >
            <span className="py-2">{tab.name}</span>
          </button>
        </Link>
      ))}
    </div>
  );
};

const Header: React.FC = () => {
  const tabsData: Tab[] = [
    { id: 0, name: "HOME", url: "/" },
    { id: 1, name: "드라마", url: "/" },
    { id: 2, name: "영화", url: "/" },
    { id: 3, name: "국제 영화", url: "/" },
    { id: 4, name: "애니", url: "/" },
    { id: 5, name: "예능", url: "/" },
    { id: 6, name: "음악", url: "/" },
    { id: 7, name: "시사/다큐", url: "/" },
  ];

  const [categories, setCategories] = useState<CategoryType[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res: CategoriesResponse = await handleCategories();
        if (res.success) {
          const homeCategory = { id: 0, name: "Home" };
          setCategories([homeCategory, ...res.data]);
        }
      } catch (err) {
        console.error("Error fetching categories:", err);
      }
    };

    fetchCategories();
  }, []);

  const fetchCategoryByID = async (id: number) => {
    try {
      const res = await handleCategoriesByID(id);
      if (res.success) {
        console.log("Category selected:", res.data.name);
      }
    } catch (error) {
      console.error("Error fetching category by ID:", error);
    }
  };

  const handleCategoryClick = (id: number) => {
    setSelectedCategory(id);
    if (id !== 0) {
      fetchCategoryByID(id);
    }
  };

  return (
    <>
      <div className="w-full flex justify-between gap-2 py-4">
        <div className="flex items-center aspect-[141/50]">
          <Image src={logo} alt="logo" width={141} height={50} />
        </div>
        <div className="w-full flex gap-3 justify-end items-center mx-3">
          <input
            className="w-full md:w-[270px] rounded-full bg-[#323232] text-center py-1 md:py-2 text-sm md:text-base"
            placeholder="검색어를 입력하세요..."
          />
          <Image
            src={search}
            alt="Search"
            className="object-cover w-5 h-5 cursor-pointer"
          />
        </div>
      </div>

      <Tabs
        tabs={tabsData}
        onCategorySelect={handleCategoryClick}
        selectedCategory={selectedCategory}
      />

      <ul className="flex flex-wrap gap-4 mt-4">
        {categories.map((item) => (
          <li
            key={item.id}
            className={`mx-auto flex justify-center border-b-0 ${
              selectedCategory === item.id ? "border-b-2 border-[#FFBB00]" : ""
            } hover:border-b-2 hover:border-[#FFBB00]`}
          >
            <button
              onClick={() => handleCategoryClick(item.id)}
              // label={item.name}
              type="button"
              className="flex items-center p-2 rounded-lg font-bold transition whitespace-nowrap border-none hover:text-[#FFBB00]"
            />
          </li>
        ))}
      </ul>
    </>
  );
};

export default Header;
