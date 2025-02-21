import { MovieCard } from "@/components/MovieCard/MovieCard";
import { Movie } from "@/utils/types";

export const MoviesList = ({ movies }: { movies: Movie[] }) => {
  return (
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};
