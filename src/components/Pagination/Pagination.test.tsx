import { render, screen } from "@testing-library/react";
import { Pagination } from "./Pagination";

describe("Pagination", () => {
  describe("PaginationBtnLink", () => {
    it("should render a link with correct href and label", () => {
      render(<Pagination currentPage={2} totalPages={5} />);

      const previousLink = screen.getByText("Previous");
      expect(previousLink).toHaveAttribute("href", "/?page=1");

      const nextLink = screen.getByText("Next");
      expect(nextLink).toHaveAttribute("href", "/?page=3");
    });

    it("should disable Previous button on first page", () => {
      render(<Pagination currentPage={1} totalPages={5} />);

      const previousLink = screen.getByText("Previous");
      expect(previousLink).toHaveAttribute("aria-disabled", "true");
    });

    it("should disable Next button on last page", () => {
      render(<Pagination currentPage={5} totalPages={5} />);

      const nextLink = screen.getByText("Next");
      expect(nextLink).toHaveAttribute("aria-disabled", "true");
    });
  });

  describe("Page numbers", () => {
    it("should render correct number of page links", () => {
      render(<Pagination currentPage={1} totalPages={3} />);

      const pageLinks = screen.getAllByRole("link");
      expect(pageLinks).toHaveLength(5);
    });

    it("should have correct href for each page number", () => {
      render(<Pagination currentPage={2} totalPages={3} />);

      const pageOneLink = screen.getByText("1");
      const pageTwoLink = screen.getByText("2");
      const pageThreeLink = screen.getByText("3");

      expect(pageOneLink).toHaveAttribute("href", "/?page=1");
      expect(pageTwoLink).toHaveAttribute("href", "/?page=2");
      expect(pageThreeLink).toHaveAttribute("href", "/?page=3");
    });
  });
});
