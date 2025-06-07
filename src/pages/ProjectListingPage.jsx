import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ProjectFilters from "../components/ui/ProjectFilters";
import useProjectFilters from "../hooks/useProjectFilters";
import Footer from "../components/layout/Footer";

export default function ProjectListingPage() {
  const {
    searchQuery,
    setSearchQuery,
    activeFilter,
    toggleFilter,
    sortOption,
    setSortOption,
    currentPage,
    itemsPerPage,
    setItemsPerPage,
    isLoading,
    allTechnologies,
    currentProjects,
    totalPages,
    paginate,
    clearFilters,
    filteredProjects,
  } = useProjectFilters();

  const [isFilterDropdownOpen, setIsFilterDropdownOpen] = useState(false);
  const [isSortDropdownOpen, setIsSortDropdownOpen] = useState(false);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      const target = event.target;
      if (
        !target.closest("#filter-dropdown") &&
        !target.closest("#filter-button")
      ) {
        setIsFilterDropdownOpen(false);
      }
      if (
        !target.closest("#sort-dropdown") &&
        !target.closest("#sort-button")
      ) {
        setIsSortDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="min-h-screen bg-[#0a192f] text-[#e6f1ff] font-poppins">
      {/* Background circuit pattern */}
      <div className="fixed inset-0 z-0 opacity-10 pointer-events-none">
        <div
          className="absolute inset-0 bg-circuit-pattern"
          style={{ backgroundSize: "cover" }}
        ></div>
      </div>

      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full z-50 py-3 bg-[#0a192f]/80 backdrop-blur-md shadow-lg">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <Link
              to="/"
              className="text-2xl font-montserrat font-bold text-[#64ffda]"
            >
              <span className="text-[#00a8ff]">&lt;</span>
              Dev<span className="text-[#00a8ff]">Portfolio</span>
              <span className="text-[#00a8ff]">/&gt;</span>
            </Link>
          </div>

          {/* Search Bar */}
          <div className="hidden md:flex items-center relative w-1/3">
            <input
              type="text"
              placeholder="Search projects..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#112240] border-none text-sm text-[#e6f1ff] py-2 pl-10 pr-4 rounded-md focus:ring-2 focus:ring-[#64ffda] focus:outline-none transition-all duration-300"
            />
            <i className="fas fa-search absolute left-3 text-[#8892b0] text-sm"></i>
          </div>

          <Link
            to="/"
            className="flex items-center space-x-2 text-[#e6f1ff] hover:text-[#64ffda] transition-colors duration-300"
          >
            <i className="fas fa-arrow-left"></i>
            <span>Back to Portfolio</span>
          </Link>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-24 pb-20 min-h-screen">
        <div className="container mx-auto px-6">
          {/* Breadcrumb */}
          <div className="mb-8">
            <div className="flex items-center text-sm text-[#8892b0]">
              <Link
                to="/"
                className="hover:text-[#64ffda] transition-colors duration-300"
              >
                Home
              </Link>
              <span className="mx-2">/</span>
              <Link
                to="/projects"
                className="hover:text-[#64ffda] transition-colors duration-300"
              >
                Projects
              </Link>
              <span className="mx-2">/</span>
              <span className="text-[#64ffda]">All Projects</span>
            </div>
          </div>

          {/* Header */}
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold font-montserrat mb-4 text-[#e6f1ff]">
              All Projects
            </h1>
            <p className="text-[#8892b0] max-w-3xl">
              Explore my complete collection of projects built with various
              technologies. Each project demonstrates different skills and
              approaches to solving real-world problems.
            </p>
          </div>

          {/* Mobile Search */}
          <div className="md:hidden mb-6">
            <div className="relative">
              <input
                type="text"
                placeholder="Search projects..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-[#112240] border-none text-sm text-[#e6f1ff] py-2 pl-10 pr-4 rounded-md focus:ring-2 focus:ring-[#64ffda] focus:outline-none transition-all duration-300"
              />
              <i className="fas fa-search absolute left-3 top-1/2 transform -translate-y-1/2 text-[#8892b0] text-sm"></i>
            </div>
          </div>

          {/* Filter and Sort Controls */}
          <ProjectFilters
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            activeFilter={activeFilter}
            toggleFilter={toggleFilter}
            sortOption={sortOption}
            setSortOption={setSortOption}
            allTechnologies={allTechnologies}
            clearFilters={clearFilters}
            isFilterDropdownOpen={isFilterDropdownOpen}
            setIsFilterDropdownOpen={setIsFilterDropdownOpen}
            isSortDropdownOpen={isSortDropdownOpen}
            setIsSortDropdownOpen={setIsSortDropdownOpen}
          />

          {/* Projects Grid */}
          {isLoading ? (
            // Loading state
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {Array.from({ length: itemsPerPage }).map((_, index) => (
                <div
                  key={index}
                  className="bg-[#112240] rounded-lg overflow-hidden shadow-lg h-[400px] animate-pulse"
                >
                  <div className="h-48 bg-[#1d3557]"></div>
                  <div className="p-6">
                    <div className="h-6 bg-[#1d3557] rounded w-3/4 mb-4"></div>
                    <div className="h-4 bg-[#1d3557] rounded w-full mb-2"></div>
                    <div className="h-4 bg-[#1d3557] rounded w-5/6 mb-4"></div>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {[1, 2, 3].map((tag) => (
                        <div
                          key={tag}
                          className="h-6 bg-[#1d3557] rounded w-16"
                        ></div>
                      ))}
                    </div>
                    <div className="flex gap-4 mt-4">
                      <div className="h-8 bg-[#1d3557] rounded w-24"></div>
                      <div className="h-8 bg-[#1d3557] rounded w-24"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : filteredProjects.length > 0 ? (
            // Projects display
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {currentProjects.map((project) => (
                <div
                  key={project.id}
                  className="bg-[#112240] rounded-lg overflow-hidden shadow-lg transform transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_30px_-15px_rgba(0,168,255,0.3)]"
                >
                  <div className="relative overflow-hidden h-48 group">
                    <div className="absolute inset-0 bg-[#0a192f]/40 group-hover:bg-[#0a192f]/10 transition-all duration-300 z-10"></div>
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-montserrat font-bold mb-2 text-[#e6f1ff]">
                      {project.title}
                    </h3>
                    <p className="text-[#8892b0] mb-4 line-clamp-3">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-2 py-1 text-xs font-medium bg-[#64ffda]/10 text-[#64ffda] rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-4">
                      <a
                        href={project.demoLink}
                        className="flex items-center gap-2 text-[#e6f1ff] hover:text-[#64ffda] transition-colors duration-300"
                      >
                        <i className="fas fa-external-link-alt"></i> Live Demo
                      </a>
                      <a
                        href={project.repoLink}
                        className="flex items-center gap-2 text-[#e6f1ff] hover:text-[#64ffda] transition-colors duration-300"
                      >
                        <i className="fab fa-github"></i> Code
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            // Empty state
            <div className="bg-[#112240] rounded-lg p-10 text-center">
              <div className="flex justify-center mb-6">
                <i className="fas fa-search text-6xl text-[#64ffda]/30"></i>
              </div>
              <h3 className="text-2xl font-montserrat font-bold mb-2">
                No projects found
              </h3>
              <p className="text-[#8892b0] mb-6">
                No projects match your current search criteria. Try adjusting
                your filters or search terms.
              </p>
              <button
                onClick={clearFilters}
                className="px-6 py-2 bg-[#64ffda] text-[#0a192f] rounded-md font-medium hover:bg-[#64ffda]/90 transition-all duration-300"
              >
                Clear All Filters
              </button>
            </div>
          )}

          {/* Pagination */}
          {!isLoading && filteredProjects.length > 0 && (
            <div className="mt-12 flex flex-col md:flex-row justify-between items-center">
              <div className="flex items-center mb-4 md:mb-0">
                <span className="text-[#8892b0] mr-2">Items per page:</span>
                <select
                  value={itemsPerPage}
                  onChange={(e) => {
                    setItemsPerPage(Number(e.target.value));
                    setCurrentPage(1);
                  }}
                  className="bg-[#112240] text-[#e6f1ff] border-none rounded-md px-2 py-1 focus:ring-2 focus:ring-[#64ffda] focus:outline-none"
                >
                  {[12, 24, 36].map((num) => (
                    <option key={num} value={num}>
                      {num}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex items-center">
                <button
                  onClick={() => paginate(Math.max(1, currentPage - 1))}
                  disabled={currentPage === 1}
                  className={`px-3 py-1 rounded-md mr-2 ${
                    currentPage === 1
                      ? "bg-[#112240]/50 text-[#8892b0] cursor-not-allowed"
                      : "bg-[#112240] text-[#e6f1ff] hover:bg-[#1d3557]"
                  }`}
                >
                  <i className="fas fa-chevron-left"></i>
                </button>

                <div className="flex space-x-1">
                  {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                    let pageNum;
                    if (totalPages <= 5) {
                      pageNum = i + 1;
                    } else if (currentPage <= 3) {
                      pageNum = i + 1;
                    } else if (currentPage >= totalPages - 2) {
                      pageNum = totalPages - 4 + i;
                    } else {
                      pageNum = currentPage - 2 + i;
                    }

                    return (
                      <button
                        key={i}
                        onClick={() => paginate(pageNum)}
                        className={`w-8 h-8 flex items-center justify-center rounded-md ${
                          currentPage === pageNum
                            ? "bg-[#64ffda] text-[#0a192f]"
                            : "bg-[#112240] text-[#e6f1ff] hover:bg-[#1d3557]"
                        }`}
                      >
                        {pageNum}
                      </button>
                    );
                  })}

                  {totalPages > 5 && currentPage < totalPages - 2 && (
                    <>
                      <span className="flex items-center text-[#8892b0]">
                        ...
                      </span>
                      <button
                        onClick={() => paginate(totalPages)}
                        className="w-8 h-8 flex items-center justify-center rounded-md bg-[#112240] text-[#e6f1ff] hover:bg-[#1d3557]"
                      >
                        {totalPages}
                      </button>
                    </>
                  )}
                </div>

                <button
                  onClick={() =>
                    paginate(Math.min(totalPages, currentPage + 1))
                  }
                  disabled={currentPage === totalPages}
                  className={`px-3 py-1 rounded-md ml-2 ${
                    currentPage === totalPages
                      ? "bg-[#112240]/50 text-[#8892b0] cursor-not-allowed"
                      : "bg-[#112240] text-[#e6f1ff] hover:bg-[#1d3557]"
                  }`}
                >
                  <i className="fas fa-chevron-right"></i>
                </button>
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
