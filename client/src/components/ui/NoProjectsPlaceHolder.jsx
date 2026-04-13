export default function NoProjectsPlaceholder() {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden flex flex-col h-full">
      <div className="h-48 bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="mx-auto w-16 h-16 bg-amber-600/20 rounded-full flex items-center justify-center mb-4 text-4xl">
            📂
          </div>
          <p className="text-gray-500 font-medium">No projects yet</p>
        </div>
      </div>

      {/* Content Placeholder */}
      <div className="p-6 flex-1">
        <div className="h-6 bg-gray-200 rounded w-3/4 mb-3" />
        <div className="h-4 bg-gray-200 rounded w-full mb-2" />
        <div className="h-4 bg-gray-200 rounded w-2/3" />
      </div>
    </div>
  );
}
