import { PAGE_LIMIT, API_URL } from "@/utils/constants";
import { PaginatedApiResponse, Movie } from "@/utils/types";

export const getMovies = async (page = 1) => {
  try {
    const skipValue = (page - 1) * PAGE_LIMIT;
    const url = new URL(API_URL);
    url.searchParams.set("limit", PAGE_LIMIT.toString());
    url.searchParams.set("skip", skipValue.toString());

    const res = await fetch(url);

    if (!res.ok) {
      throw new Error("Failed to fetch movies");
    }

    const data = (await res.json()) as PaginatedApiResponse<Movie>;

    return { data, error: null };
  } catch (error) {
    return {
      data: null,
      error: error instanceof Error ? error.message : "An error occurred",
    };
  }
};
