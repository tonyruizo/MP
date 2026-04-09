import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white/30 backdrop-blur-xl shadow-xs">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center h-16 items-center text-sm">
          <div className="space-x-4">
            <a
              href="/"
              className="text-gray-600 hover:text-amber-600 transition"
            >
              Home
            </a>
            <a
              href="/#projects"
              className="text-gray-600 hover:text-amber-600 transition cursor-pointer"
            >
              Projects
            </a>
            {/* <Link
              to="/"
              className="text-gray-600 hover:text-amber-600 transition"
            >
              Projects
            </Link>*/}
          </div>
        </div>
      </div>
    </nav>
  );
}
