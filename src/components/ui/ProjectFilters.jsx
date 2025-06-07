import React from "react";

export default function ProjectFilters({
  searchQuery,
  setSearchQuery,
  activeFilter,
  toggleFilter,
  sortOption,
  setSortOption,
  allTechnologies,
  clearFilters,
  isFilterDropdownOpen,
  setIsFilterDropdownOpen,
  isSortDropdownOpen,
  setIsSortDropdownOpen,
}) {
  return (
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 space-y-4 md:space-y-0">
      {/* Technology Filters */}
      <div className="relative">
        <button
          id="filter-button"
          onClick={() => setIsFilterDropdownOpen(!isFilterDropdownOpen)}
          className="flex items-center space-x-2 bg-[#112240] px-4 py-2 rounded-md text-[#e6f1ff] hover:bg-[#1d3557] transition-colors duration-300"
        >
          <i className="fas fa-filter"></i>
          <span>Filter by Technology</span>
          <i
            className={`fas fa-chevron-${isFilterDropdownOpen ? "up" : "down"}`}
          ></i>
        </button>

        {isFilterDropdownOpen && (
          <div
            id="filter-dropdown"
            className="absolute left-0 top-full mt-2 w-64 bg-[#112240] rounded-md shadow-lg z-20 p-4"
          >
            <div className="flex flex-wrap gap-2 max-h-60 overflow-y-auto">
              {allTechnologies.map((tech) => (
                <button
                  key={tech}
                  onClick={() => toggleFilter(tech)}
                  className={`px-3 py-1 rounded-full text-xs font-medium transition-colors duration-300 ${
                    activeFilter.includes(tech)
                      ? "bg-[#64ffda] text-[#0a192f]"
                      : "bg-[#1d3557] text-[#e6f1ff] hover:bg-[#1d3557]/80"
                  }`}
                >
                  {tech}
                </button>
              ))}
            </div>
            {activeFilter.length > 0 && (
              <button
                onClick={clearFilters}
                className="w-full mt-3 text-[#64ffda] text-sm hover:text-[#00a8ff] transition-colors duration-300"
              >
                Clear All Filters
              </button>
            )}
          </div>
        )}
      </div>

      {/* Active Filters Display */}
      {activeFilter.length > 0 && (
        <div className="flex flex-wrap items-center gap-2 md:ml-4">
          <span className="text-sm text-[#8892b0]">Active filters:</span>
          {activeFilter.map((filter) => (
            <span
              key={filter}
              className="flex items-center gap-1 px-2 py-1 bg-[#64ffda]/20 text-[#64ffda] rounded-full text-xs"
            >
              {filter}
              <button
                onClick={() => toggleFilter(filter)}
                className="hover:text-white"
              >
                <i className="fas fa-times"></i>
              </button>
            </span>
          ))}
        </div>
      )}

      {/* Sort Options */}
      <div className="relative ml-auto">
        <button
          id="sort-button"
          onClick={() => setIsSortDropdownOpen(!isSortDropdownOpen)}
          className="flex items-center space-x-2 bg-[#112240] px-4 py-2 rounded-md text-[#e6f1ff] hover:bg-[#1d3557] transition-colors duration-300"
        >
          <i className="fas fa-sort"></i>
          <span>
            Sort: {sortOption.charAt(0).toUpperCase() + sortOption.slice(1)}
          </span>
          <i
            className={`fas fa-chevron-${isSortDropdownOpen ? "up" : "down"}`}
          ></i>
        </button>

        {isSortDropdownOpen && (
          <div
            id="sort-dropdown"
            className="absolute right-0 top-full mt-2 w-48 bg-[#112240] rounded-md shadow-lg z-20"
          >
            <ul>
              {["newest", "popular", "alphabetical"].map((option) => (
                <li key={option}>
                  <button
                    onClick={() => {
                      setSortOption(option);
                      setIsSortDropdownOpen(false);
                    }}
                    className={`w-full text-left px-4 py-2 hover:bg-[#1d3557] transition-colors duration-300 ${
                      sortOption === option
                        ? "text-[#64ffda]"
                        : "text-[#e6f1ff]"
                    }`}
                  >
                    {option.charAt(0).toUpperCase() + option.slice(1)}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
