import { Movie } from "@/utils/types";
import { StarIcon } from "@/components/icons/StarIcon";
import Image from "next/image";

export const MovieCard = ({ movie }: { movie: Movie }) => {
  return (
    <div
      key={movie.id}
      className="bg-gray-900 rounded-lg overflow-hidden hover:shadow-lg transition duration-300 hover:scale-[1.02]"
    >
      <Image
        src={movie.image_url}
        alt={movie.title}
        width={400}
        height={600}
        className="w-full h-[300px] object-cover"
      />

      <div className="p-4">
        <h2 className="text-lg font-bold">{movie.title}</h2>
        <p className="text-sm text-gray-400">{movie.description}</p>
        <p className="text-sm text-gray-400 mt-2 flex items-center gap-1">
          <StarIcon className="w-4 h-4 text-yellow-500" />
          {movie.rating}
        </p>
      </div>
    </div>
  );
};
