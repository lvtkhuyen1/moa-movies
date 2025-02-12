import { customFetch } from "@/libs/helpers/customFetch";
import { MoviesResponse } from "@/libs/type";

export const handleMovies = async (): Promise<MoviesResponse> => {
  const res = await customFetch("/movies/", {
    method: "GET",
  });
  return res as MoviesResponse;
};
