export default function Footer() {
  return (
    <footer className="bg-white border-t border-t-gray-200 mt-20 py-8">
      <div className="max-w-6xl mx-auto px-4 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Tonyruizo. All rights reserved.
      </div>
    </footer>
  );
}
