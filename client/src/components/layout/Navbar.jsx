import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center h-16 items-center">
          <div className="space-x-4">
            <Link
              to="/"
              className="text-gray-600 hover:text-indigo-600 transition"
            >
              Home
            </Link>
            <Link
              to="/projects"
              className="text-gray-600 hover:text-indigo-600 transition"
            >
              Projects
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
