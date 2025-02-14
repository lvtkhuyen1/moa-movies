<<<<<<< Updated upstream
import HeaderCard from "@/components/HeaderCard";
import Header from "../components/Header";
import MovieBanner from "@/components/MovieBanner";
import Category from "@/components/Category";
import Footer from "@/components/Footer";
import Menu from "@/components/Menu";
=======
"use client";

import NavBar from "@/component/NavBar";
import Content from "@/component/Content";
import { useState } from "react";
import { CategoryType } from "@/libs/type";
import Header from "@/component/Header";
>>>>>>> Stashed changes

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<CategoryType | null>(
    null
  );
  return (
    <>
      <Header />
<<<<<<< Updated upstream
      <HeaderCard />
      <MovieBanner />
      <Category title="Category" />
      <Category title="Category" />
      <Category title="Category" />
      <Footer />
      <Menu />
    </div>
=======
      <div className="flex">
        <NavBar onCategorySelect={setSelectedCategory} />
        <Content selectedCategory={selectedCategory} />
      </div>
    </>
>>>>>>> Stashed changes
  );
}
