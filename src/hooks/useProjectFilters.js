import { useState, useEffect } from "react";
import { allProjects } from "../data/projects";

export default function useProjectFilters() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState([]);
  const [sortOption, setSortOption] = useState("newest");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(12);
  const [isLoading, setIsLoading] = useState(true);

  // All available technologies for filtering
  const allTechnologies = Array.from(
    new Set(allProjects.flatMap((project) => project.tags))
  );

  // Filter projects based on search query and active filters
  const filteredProjects = allProjects.filter((project) => {
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesFilters =
      activeFilter.length === 0 ||
      project.tags.some((tag) => activeFilter.includes(tag));

    return matchesSearch && matchesFilters;
  });

  // Sort projects based on selected option
  const sortedProjects = [...filteredProjects].sort((a, b) => {
    switch (sortOption) {
      case "newest":
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      case "popular":
        return b.popularity - a.popularity;
      case "alphabetical":
        return a.title.localeCompare(b.title);
      default:
        return 0;
    }
  });

  // Pagination
  const indexOfLastProject = currentPage * itemsPerPage;
  const indexOfFirstProject = indexOfLastProject - itemsPerPage;
  const currentProjects = sortedProjects.slice(
    indexOfFirstProject,
    indexOfLastProject
  );
  const totalPages = Math.ceil(sortedProjects.length / itemsPerPage);

  // Handle page change
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Toggle filter
  const toggleFilter = (technology) => {
    if (activeFilter.includes(technology)) {
      setActiveFilter(activeFilter.filter((item) => item !== technology));
    } else {
      setActiveFilter([...activeFilter, technology]);
    }
  };

  // Clear all filters
  const clearFilters = () => {
    setActiveFilter([]);
    setSearchQuery("");
    setCurrentPage(1);
  };

  // Simulate loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return {
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
    filteredProjects,
    sortedProjects,
    currentProjects,
    totalPages,
    paginate,
    clearFilters,
  };
}
