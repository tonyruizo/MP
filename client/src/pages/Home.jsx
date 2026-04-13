import Hero from "../components/ui/Hero";
import ProjectsSection from "../components/sections/ProjectsSection";
import Layout from "../components/layout/Layout";

export default function Home() {
  return (
    <Layout>
      {/* Hero Section */}
      <Hero />
      {/* Projects Section*/}
      <div id="projects" className="mt-24">
        <h2 className="text-2xl font-bold text-gray-600 mb-8 border-b border-b-gray-300 pb-2">
          Latest Projects
        </h2>
        <ProjectsSection />
      </div>
    </Layout>

    // <div className="min-h-screen bg-gray-50 text-gray-900 font-sans">
    //   <Navbar />
    //   <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
    //     {/* Hero Section */}
    //     <Hero />

    //     {/* Projects Section*/}
    //     <div id="projects" className="mt-24">
    //       <h2 className="text-2xl font-bold text-gray-600 mb-8 border-b border-b-gray-300 pb-2">
    //         Latest Projects
    //       </h2>
    //       <ProjectsSection />
    //     </div>
    //   </main>

    //   <Footer />
    // </div>
  );
}
