import Link from "next/link";

type Props = {
  currentPage: number;
  totalPages: number;
};

const PaginationBtnLink = ({
  page,
  label,
  isActive,
  isDisabled,
}: {
  page: number;
  label: string;
  isActive?: boolean;
  isDisabled?: boolean;
}) => {
  return (
    <Link
      href={`/?page=${page}`}
      className={`px-4 py-2 rounded-md hover:bg-blue-700 ${
        isActive ? "bg-blue-700" : ""
      } ${isDisabled ? "opacity-50 pointer-events-none" : ""}`}
      aria-disabled={isDisabled}
    >
      {label}
    </Link>
  );
};

export const Pagination = ({ currentPage, totalPages }: Props) => {
  return (
    <div className="flex justify-center items-center gap-4">
      <PaginationBtnLink
        page={currentPage - 1}
        label="Previous"
        isDisabled={currentPage === 1}
      />

      {Array.from({ length: totalPages }, (_, index) => (
        <PaginationBtnLink
          key={index}
          page={index + 1}
          label={`${index + 1}`}
          isActive={currentPage === index + 1}
        />
      ))}

      <PaginationBtnLink
        page={currentPage + 1}
        label="Next"
        isDisabled={currentPage === totalPages}
      />
    </div>
  );
};
