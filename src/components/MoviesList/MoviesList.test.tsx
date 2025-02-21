import { render, screen } from "@testing-library/react";
import { MoviesList } from "./MoviesList";
import { Movie } from "@/utils/types";

const mockMovies: Movie[] = [
  {
    id: "1",
    title: "Test Movie 1",
    description: "Test Description 1",
    image_url: "https://placehold.co/400x600",
    rating: 4.5,
  },
  {
    id: "2",
    title: "Test Movie 2",
    description: "Test Description 2",
    image_url: "https://placehold.co/400x600",
    rating: 3.8,
  },
];

describe("MoviesList", () => {
  beforeEach(() => {
    render(<MoviesList movies={mockMovies} />);
  });

  it("should render all movies passed as props", () => {
    mockMovies.forEach((movie) => {
      expect(screen.getByText(movie.title)).toBeInTheDocument();
      expect(screen.getByText(movie.description)).toBeInTheDocument();
      expect(screen.getByText(movie.rating.toString())).toBeInTheDocument();
      expect(screen.getByAltText(movie.title)).toBeInTheDocument();
    });
  });

  it("should render correct number of MovieCard components", () => {
    const movieCards = screen.getAllByRole("img");
    expect(movieCards).toHaveLength(mockMovies.length);
  });
});
