<<<<<<< Updated upstream
import { customFetch } from "@/libs/helpers/customFetch";
import { CategoriesResponse, CategoryDetailResponse } from "@/libs/type";

export const handleCategories = async (): Promise<CategoriesResponse> => {
  const res = await customFetch("/categories/", {
    method: "GET",
  });
  return res as CategoriesResponse;
};
=======
import { customFetch } from "../libs/helpers/customFetch";
import { FetchCategoriesResponse, FetchCategoryDetailResponse } from "../libs/type";


export const handleFetchCategories =
  async (): Promise<FetchCategoriesResponse> => {
    const res = await customFetch('/categories/', {
      method: 'GET',
    });
    return res as FetchCategoriesResponse;
  };
>>>>>>> Stashed changes

export const handleCategoriesByID = async (
  id: number
): Promise<CategoryDetailResponse> => {
  const res = await customFetch(`/categories/${id}`, {
    method: 'GET',
  });
  return res as CategoryDetailResponse;
};
