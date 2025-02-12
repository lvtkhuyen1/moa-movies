"use client";
import React, { useEffect, useState } from "react";
import Category from "../Category";
import {
  FetchCategoriesResponse,
  CategoryType,
  FetchMoviesResponse,
  MovieType,
} from "@/libs/type";
import { handleFetchCategories } from "@/services/category";
import { handleFetchMovies } from "@/services/movie";

export default function ListCategory() {
  const [categories, setCategories] = useState<CategoryType[]>([]);
  const [movies, setMovies] = useState<MovieType[]>([]);
  console.log(movies);
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res: FetchCategoriesResponse = await handleFetchCategories();
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
        const res: FetchMoviesResponse = await handleFetchMovies();
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
        <Category key={category.id} category={category.name} />
      ))}
    </>
  );
}
