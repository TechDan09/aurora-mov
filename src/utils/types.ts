export type Movie = {
  id: string;
  title: string;
  description: string;
  image_url: string;
  rating: number;
};

export type PaginatedApiResponse<T> = {
  total: number;
  items: T[];
};
