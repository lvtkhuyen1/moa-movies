<<<<<<< Updated upstream
import { customFetch } from "@/libs/helpers/customFetch";
import { MoviesResponse } from "@/libs/type";

export const handleMovies = async (): Promise<MoviesResponse> => {
  const res = await customFetch("/movies/", {
    method: "GET",
=======
import { customFetch } from "../libs/helpers/customFetch";
import { FetchMovieDetailResponse, FetchMoviesResponse } from "../libs/type";

export const handleFetchMovies = async (
  page: number,
  limit: number,
  categoryId: number
): Promise<FetchMoviesResponse> => {
  const query = new URLSearchParams({
    page: page.toString(),
    limit: limit.toString(),
    categoryId: categoryId.toString(),
  }).toString();
  const res = await customFetch(`/movies?${query}`, {
    method: 'GET',
>>>>>>> Stashed changes
  });
  return res as MoviesResponse;
};

export const handleFetchMovieByID = async (
  id: string
): Promise<FetchMovieDetailResponse> => {
  const res = await customFetch(`/movies/${id}`, {
    method: 'GET',
  });
  return res as FetchMovieDetailResponse;
};
