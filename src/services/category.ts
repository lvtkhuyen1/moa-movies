import { customFetch } from "@/libs/helpers/customFetch";
import { CategoriesResponse, CategoryDetailResponse } from "@/libs/type";

export const handleCategories = async (): Promise<CategoriesResponse> => {
  const res = await customFetch("/categories/", {
    method: "GET",
  });
  return res as CategoriesResponse;
};

export const handleCategoriesByID = async (
  id: number
): Promise<CategoryDetailResponse> => {
  const res = await customFetch(`/categories/${id}`, {
    method: "GET",
  });
  return res as CategoryDetailResponse;
};
