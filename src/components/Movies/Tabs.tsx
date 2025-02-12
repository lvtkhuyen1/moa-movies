import React, { useEffect, useState } from "react";
import {
  handleFetchCategories,
  handleFetchCategoriesByID,
} from "@/services/category";
import { CategoryType, FetchCategoriesResponse } from "@/libs/type";
import Button from "./Button";

export default function NavBar({
  onCategorySelect,
}: {
  onCategorySelect: (category: string) => void;
}) {
  const [categories, setCategories] = useState<CategoryType[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res: FetchCategoriesResponse = await handleFetchCategories();

        if (res.success) {
          const homeCategory = { id: 0, name: "Home" };
          const updatedCategories = [homeCategory, ...res.data];
          setCategories(updatedCategories);
        } else {
          return;
        }
      } catch (err) {
        console.log(err);
      }
    };

    fetchCategories();
  }, []);

  const fetchCategoryByID = async (id: number) => {
    try {
      const res = await handleFetchCategoriesByID(id);
      if (res.success) {
        onCategorySelect(res.data.name);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const handleCategoryClick = (id: number, name: string) => {
    setSelectedCategory(id);
    if (id === 0) {
      onCategorySelect(name);
    } else {
      fetchCategoryByID(id);
    }
  };

  return (
    <ul className="hidden md:flex flex-row gap-8">
      {categories.map((item) => (
        <li
          key={item.id}
          className={`flex justify-center border-b-0 ${
            selectedCategory === item.id
              ? "text-[#FFBB00] border-b-2 border-[#FFBB00]"
              : ""
          }`}
        >
          <Button
            onClick={() => handleCategoryClick(item.id, item.name)}
            label={item.name}
            type="button"
            className="flex items-center p-2 font-bold transition whitespace-nowrap border-none hover:text-[#FFBB00]"
          />
        </li>
      ))}
    </ul>
  );
}
