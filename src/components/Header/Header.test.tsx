import { render, screen } from "@testing-library/react";
import { Header } from "./Header";

describe("Header", () => {
  beforeEach(() => {
    render(<Header />);
  });

  it("should render the app title", () => {
    const title = screen.getByText("Movie App");
    expect(title).toBeInTheDocument();
    expect(title).toHaveAttribute("href", "/");
  });

  it("should render navigation links", () => {
    const homeLink = screen.getByText("Home");
    expect(homeLink).toBeInTheDocument();
    expect(homeLink).toHaveAttribute("href", "/");
  });
});
