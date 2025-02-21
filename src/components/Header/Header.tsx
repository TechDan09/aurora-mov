import Link from "next/link";

export const Header = () => {
  return (
    <nav className="bg-gray-900 py-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-white text-2xl font-bold">
          Movie App
        </Link>

        <div className="flex items-center gap-4">
          <Link
            href="/"
            className="text-white hover:text-gray-300 hover:underline"
          >
            Home
          </Link>
        </div>
      </div>
    </nav>
  );
};
