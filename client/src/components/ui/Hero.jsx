import ProfilePhoto from "../../assets/profile-no-bg.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function Hero() {
  return (
    <div className="max-w-2xl mx-auto px-6 py-16">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-1">
        {/* Left Side - Profile Image */}
        <div className="shrink-0">
          <img
            src={ProfilePhoto}
            alt="TonyRuizo - Anime Portrait"
            className="w-64 h-64 md:w-70 md:h-70 rounded-full object-cover shadow-2xl border-4 border-white ring-4 ring-amber-600/30"
          />
        </div>

        {/* Right Side */}
        <div className="space-y-4 text-center lg:text-left">
          <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight text-gray-900 text-shadow-lg">
            <span className="text-amber-600">@</span>tonyruizo
          </h1>

          <p className="text-md md:text-lg text-gray-600">Building.</p>

          <div className="flex justify-center lg:justify-start gap-4">
            {/* GitLab */}
            <a
              href="https://github.com/tonyruizo"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600/70 hover:text-amber-600/70 transition transform hover:scale-110"
              aria-label="GitHub Profile"
            >
              <FontAwesomeIcon icon={faGithub} size="lg" />
            </a>
            {/* Email */}
            <a
              href="mailto:tonyruizo@pm.me"
              className="text-gray-600/70 hover:text-amber-600/70 transition transform hover:scale-110"
              aria-label="Email Me"
            >
              <FontAwesomeIcon icon={faEnvelope} size="lg" />
            </a>
            {/* LinkedIn */}
            <a
              href="https://linkedin.com/in/tonyruizo"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600/70 hover:text-amber-600/70 transition transform hover:scale-110"
              aria-label="LinkedIn Profile"
            >
              <FontAwesomeIcon icon={faLinkedin} size="lg" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
