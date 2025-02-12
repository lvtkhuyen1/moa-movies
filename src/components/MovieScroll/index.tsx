import React, { useEffect, useState } from "react";
import Category from "../Category";
import {
  CategoriesResponse,
  CategoryType,
  MoviesResponse,
  MovieType,
} from "@/libs/type";
import { handleCategories } from "@/services/category";
import { handleMovies } from "@/services/movie";

export const listCategory = [
  { title: "Category ABC" },
  { title: "Category XYZ" },
  { title: "Category WWE" },
  { title: "Category XXX" },
];

export default function ListCategory() {
  const [categories, setCategories] = useState<CategoryType[]>([]);
  const [movies, setMovies] = useState<MovieType[]>([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res: CategoriesResponse = await handleCategories();
        if (res.success) {
          setCategories(res.data);
        } else {
          return;
        }
      } catch (err) {
        console.log(err);
      }
    };

    fetchCategories();
  }, []);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const res: MoviesResponse = await handleMovies();
        if (res.success) {
          setMovies(res.data.movies);
        } else {
          return;
        }
      } catch (err) {
        console.log(err);
      }
    };

    fetchMovies();
  }, []);

  return (
    <>
      {categories.map((category) => (
        <Category key={category.id} title={category.name} />
      ))}
    </>
  );
}
