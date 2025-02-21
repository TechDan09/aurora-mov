import Hero from "@/components/Hero/Hero";
import { Pagination } from "@/components/Pagination/Pagination";
import { MoviesList } from "@/components/MoviesList/MoviesList";
import Link from "next/link";
import { getMovies } from "@/api/getMovies";
import { PAGE_LIMIT } from "@/utils/constants";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ page: string }>;
}) {
  const { page } = await searchParams;
  const currentPage = Number(page) || 1;

  const { data, error } = await getMovies(currentPage);

  if (error || !data) {
    return (
      <div className="container mx-auto my-10 text-center">
        <h2 className="text-2xl font-bold text-red-500">
          Error occurred while fetching movies
        </h2>
        <p className="mt-4">{error}</p>

        <Link
          href={`/`}
          className="mt-4 inline-block hover:text-blue-300 hover:underline rounded-md"
        >
          Go to Home Page
        </Link>
      </div>
    );
  }

  const { items: movies, total } = data;
  const totalPages = Math.ceil(total / PAGE_LIMIT);

  return (
    <>
      <Hero />
      <MoviesList movies={movies} />
      <div className="container mx-auto my-10">
        <Pagination currentPage={currentPage} totalPages={totalPages} />
      </div>
    </>
  );
}
