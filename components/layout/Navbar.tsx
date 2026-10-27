import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 border-b border-gray-100 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10">
        <Link
          href="/"
          className="text-2xl font-bold tracking-tight text-gray-900"
        >
          Help<span className="text-indigo-600">Me.</span>
        </Link>

        <div className="flex items-center gap-5 text-md font-medium text-gray-600 md:gap-8">
          <a
            href="#explore"
            className="transition-colors hover:text-indigo-600"
          >
            Explore
          </a>
          <a
            href="#how-it-works"
            className="transition-colors hover:text-indigo-600"
          >
            How it works
          </a>
          <a
            href="/login"
            className="transition-colors hover:text-indigo-600"
          >
            Log in
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
