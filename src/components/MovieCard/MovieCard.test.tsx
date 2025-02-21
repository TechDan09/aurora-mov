import { render, screen } from "@testing-library/react";
import { MovieCard } from "./MovieCard";
import { Movie } from "@/utils/types";

const mockMovie: Movie = {
  id: "1",
  title: "Test Movie",
  description: "Test Description",
  image_url: "http://test-url",
  rating: 4.5,
};

describe("MovieCard", () => {
  beforeEach(() => {
    render(<MovieCard movie={mockMovie} />);
  });

  it("should render movie information correctly", () => {
    expect(screen.getByText(mockMovie.title)).toBeInTheDocument();
    expect(screen.getByText(mockMovie.description)).toBeInTheDocument();
    expect(screen.getByText(mockMovie.rating)).toBeInTheDocument();

    const image = screen.getByAltText(mockMovie.title);
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("src");
  });

  it("should render star icon", () => {
    const starIcon = screen.getByTestId("star-icon");
    expect(starIcon).toBeInTheDocument();
  });
});
