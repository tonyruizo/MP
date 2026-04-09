import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans flex flex-col">
      <Navbar />
      <main className="grow px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-5xl mx-auto">{children}</div>
      </main>
      <Footer />
    </div>
  );
}
