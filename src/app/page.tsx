// app/page.tsx
"use client";

import { useState, useEffect } from "react";
import type { Job } from "../types/job";
import Navbar from "./components/navbar"
import SearchBar from "./components/search-bar";
import JobList from "./components/job-list";
import CategoryFilter from "./components/category-filter";
import SavedJobsTab from "./components/saved-jobs-tab";
import { mockJobs } from "../data/dummyData";
import Pagination from "./components/pagintion"

export default function Home() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [filteredJobs, setFilteredJobs] = useState<Job[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [showSavedJobs, setShowSavedJobs] = useState(false);
  const [savedJobs, setSavedJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const jobsPerPage = 10;

  // Load jobs and saved jobs
  useEffect(() => {
    // Simulate API fetch with a delay
    const fetchJobs = async () => {
      setLoading(true);
      try {
        // Simulate network delay
        await new Promise((resolve) => setTimeout(resolve, 800));
        setJobs(mockJobs);
        setFilteredJobs(mockJobs);
      } catch (error) {
        console.error("Error fetching jobs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();

    // Load saved jobs from localStorage
    const savedJobsFromStorage = localStorage.getItem("savedJobs");
    if (savedJobsFromStorage) {
      setSavedJobs(JSON.parse(savedJobsFromStorage));
    }
  }, []);

  // Filter jobs based on search term and category
  useEffect(() => {
    let result = jobs;

    if (showSavedJobs) {
      result = savedJobs;
    } else {
      // Filter by search term
      if (searchTerm) {
        result = result.filter(
          (job) =>
            job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            job.companyName.toLowerCase().includes(searchTerm.toLowerCase())
        );
      }

      // Filter by category
      if (selectedCategory) {
        result = result.filter((job) => job.category === selectedCategory);
      }
    }

    setFilteredJobs(result);
    setCurrentPage(1); // Reset to first page when filters change
  }, [searchTerm, selectedCategory, showSavedJobs, jobs, savedJobs]);

  // Save/unsave job
  const toggleSaveJob = (job: Job) => {
    const isJobSaved = savedJobs.some((savedJob) => savedJob.id === job.id);

    let updatedSavedJobs: Job[];

    if (isJobSaved) {
      updatedSavedJobs = savedJobs.filter((savedJob) => savedJob.id !== job.id);
    } else {
      updatedSavedJobs = [...savedJobs, job];
    }

    setSavedJobs(updatedSavedJobs);
    localStorage.setItem("savedJobs", JSON.stringify(updatedSavedJobs));
  };

  // Get unique categories from jobs
  const categories = Array.from(new Set(jobs.map((job) => job.category)));

  // Calculate pagination
  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobs = filteredJobs.slice(indexOfFirstJob, indexOfLastJob);
  const totalPages = Math.ceil(filteredJobs.length / jobsPerPage);

  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 gap-4">
          <div className="w-full md:w-2/3">
            <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          </div>

          <div className="flex items-center gap-4">
            <CategoryFilter
              categories={categories}
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
            />

            <SavedJobsTab
              showSavedJobs={showSavedJobs}
              setShowSavedJobs={setShowSavedJobs}
              savedJobsCount={savedJobs.length}
            />
          </div>
        </div>

        <JobList jobs={currentJobs} loading={loading} savedJobs={savedJobs} toggleSaveJob={toggleSaveJob} />

        {!loading && filteredJobs.length > jobsPerPage && (
          <Pagination currentPage={currentPage} totalPages={totalPages} setCurrentPage={setCurrentPage} />
        )}

        {!loading && filteredJobs.length === 0 && (
          <div className="text-center py-10">
            <h3 className="text-xl font-medium text-gray-600">No jobs found</h3>
            <p className="text-gray-500 mt-2">
              {showSavedJobs ? "You haven't saved any jobs yet." : "Try adjusting your search or filters."}
            </p>
          </div>
        )}
      </div>
    </main>
  );
}