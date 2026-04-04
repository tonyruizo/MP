import { Link } from "react-router-dom";

export default function AddProjectTrigger() {
  return (
    <Link
      to="/login"
      className="group relative flex flex-col items-center justify-center p-6 bg-white rounded-xl border border-dashed border-gray-300 hover:border-indigo-500 hover:bg-blue-50 transition-all duration-300 cursor-pointer min-h-50"
    >
      {/* Default State: "Add Project" */}
      <span className="text-gray-500 group-hover:hidden text-lg font-medium">
        Add Project
      </span>

      {/* Hover State: "Login" */}
      <span className="hidden group-hover:block text-indigo-500 text-xl">
        Login
      </span>

      {/* Optional: Subtle icon that appears on hover */}
      <div className="mt-2 text-gray-400 group-hover:text-indigo-500 transition-colors">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 4v16m8-8H4"
          />
        </svg>
      </div>
    </Link>
  );
}
