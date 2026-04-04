import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGitlab, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import AddProjectTrigger from "../components/ui/AddProjectTrigger";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans">
      <Navbar />
      {/* Hero Section */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center space-y-6">
          <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight text-gray-900">
            Tony <span className="text-indigo-600">Ruiz</span> O.
          </h1>
          <p className="text-md md:text-lg text-gray-600 max-w-2xl mx-auto">
            Feel free to reach out.
          </p>
          <div className="flex justify-center gap-6 pt-4">
            {/* GitLab */}
            <a
              href="https://gitlab.com/tonyruizo"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-orange-600 transition transform hover:scale-110"
              aria-label="GitLab Profile"
            >
              <FontAwesomeIcon icon={faGitlab} size="lg" />
            </a>

            {/* Mail */}
            <a
              href="mailto:tonyruizo@pm.me"
              className="text-gray-500 hover:text-blue-600 transition transform hover:scale-110"
              aria-label="Email Me"
            >
              <FontAwesomeIcon icon={faEnvelope} size="lg" />
            </a>

            {/* LinkedIn */}
            <a
              href="https://linkedin.com/in/tonyruizo"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-blue-700 transition transform hover:scale-110"
              aria-label="LinkedIn Profile"
            >
              <FontAwesomeIcon icon={faLinkedin} size="lg" />
            </a>
          </div>
        </div>

        {/* Projects Placeholder */}
        <div className="mt-24">
          <h2 className="text-2xl font-bold text-gray-800 mb-8 border-b pb-2">
            Latest Projects
          </h2>

          {/* Populate with backend */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1].map((item) => (
              <div
                key={item}
                className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition"
              >
                <div className="h-48 bg-gray-200 animate-pulse"></div>{" "}
                {/* Skeleton loader */}
                <div className="p-6">
                  <div className="h-6 bg-gray-200 rounded w-3/4 mb-4 animate-pulse"></div>
                  <div className="h-4 bg-gray-200 rounded w-full mb-2 animate-pulse"></div>
                  <div className="h-4 bg-gray-200 rounded w-2/3 animate-pulse"></div>
                </div>
              </div>
            ))}

            <AddProjectTrigger />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
