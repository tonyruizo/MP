// import ProjectCard from "../ui/ProjectCard";
import AddProjectTrigger from "../ui/AddProjectTrigger";
import NoProjectsPlaceholder from "../ui/NoProjectsPlaceHolder";

export default function ProjectsSection() {
  // TODO: Replace this with real data from FastAPI later
  const projects = []; // Empty array when backend returns []
  const isLoading = false;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {isLoading ? (
        // Skeleton loaders while fetching
        Array.from({ length: 3 }).map((_, i) => (
          <div
            key={i}
            className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden"
          >
            <div className="h-48 bg-gray-200 animate-pulse" />
            <div className="p-6 space-y-3">
              <div className="h-6 bg-gray-200 rounded w-3/4 animate-pulse" />
              <div className="h-4 bg-gray-200 rounded w-full animate-pulse" />
              <div className="h-4 bg-gray-200 rounded w-2/3 animate-pulse" />
            </div>
          </div>
        ))
      ) : projects.length > 0 ? (
        // Real project placeholder
        projects.map((project) => (
          <div
            key={project.id}
            className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition"
          >
            {/* Temporary placeholder for real project card */}
            <div className="h-48 bg-gray-300 flex items-center justify-center">
              <span className="ring-2 ring-amber-600/30">Project Image</span>
            </div>
            <div className="p-6">
              <h3 className="font-semibold text-lg mb-2">{project.title}</h3>
              <p className="text-gray-600 text-sm line-clamp-2">
                {project.description}
              </p>
            </div>
          </div>
        ))
      ) : (
        // Empty state (No projects)
        <NoProjectsPlaceholder />
      )}

      <AddProjectTrigger isAuthenticated={false} />
      {/* <AddProjectTrigger isAuthenticated={user !== null} />*/}
    </div>
  );
}
