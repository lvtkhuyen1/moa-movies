export interface CategoryType {
  id: number;
  name: string;
}

export interface MovieType {
  title_id: number;
  title: string;
  des: string;
  cate_id: number;
  image: string;
}

export interface CategoriesResponse {
  data: CategoryType[];
  success: boolean;
}

export interface CategoryDetailResponse {
  data: {
    id: number;
    name: string;
  };
  success: boolean;
}

export interface MoviesResponse {
  data: {
    movies: MovieType[];
    limit: number;
    page: number;
    total: number;
  };
  success: boolean;
}
