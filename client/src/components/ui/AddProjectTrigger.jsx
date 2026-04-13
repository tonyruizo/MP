import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";

export default function AddProjectTrigger({ isAuthenticated }) {
  return (
    <Link
      to={isAuthenticated ? "/add-project" : "/login"}
      className="group relative flex flex-col items-center justify-center p-6 bg-white rounded-xl border border-dashed border-gray-300
          hover:border-amber-600/70 transition-all duration-300 cursor-pointer min-h-50"
    >
      {/* Default State */}
      <div className="relative w-full text-center">
        {/* Add Project */}
        <span
          className={`absolute inset-0 transition-opacity duration-200 font-medium text-gray-500 whitespace-normal wrap-break-words ${
            !isAuthenticated
              ? "opacity-100 group-hover:opacity-0"
              : "opacity-100"
          }`}
        >
          Add a project
        </span>

        {/* Login */}
        {!isAuthenticated && (
          <span className="absolute inset-0 transition-opacity duration-200 opacity-0 group-hover:opacity-100 text-amber-600 font-medium whitespace-normal wrap-break-words">
            Login
          </span>
        )}

        {/* Invisible spacer to preserve height */}
        <span className="invisible font-medium whitespace-normal wrap-break-words">
          Add a project
        </span>
      </div>

      {/* Icon */}
      <div className="mt-2 text-gray-400 group-hover:text-amber-600 transition-colors">
        <FontAwesomeIcon icon={faCirclePlus} size="xl" />
      </div>
    </Link>
  );
}
