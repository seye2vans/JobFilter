
import type { Job } from "../../types/job"; 
import JobCard from "./job-card";

interface JobListProps {
  jobs: Job[];
  loading: boolean;
  savedJobs: Job[];
  toggleSaveJob: (job: Job) => void;
}

export default function JobList({ jobs, loading, savedJobs, toggleSaveJob }: JobListProps) {
  if (loading) {
    return (
      <div className="grid gap-4 md:grid-cols-1 lg:grid-cols-1">
        {[...Array(5)].map((_, index) => (
          <div key={index} className="bg-white rounded-lg shadow-sm p-6 animate-pulse">
            <div className="h-6 bg-gray-200 rounded w-3/4 mb-4"></div>
            <div className="h-4 bg-gray-200 rounded w-1/2 mb-4"></div>
            <div className="flex gap-2 mb-4">
              <div className="h-6 bg-gray-200 rounded w-24"></div>
              <div className="h-6 bg-gray-200 rounded w-24"></div>
            </div>
            <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
            <div className="h-4 bg-gray-200 rounded w-5/6"></div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="grid gap-4 md:grid-cols-1 lg:grid-cols-1">
      {jobs.map((job) => (
        <JobCard
          key={job.id}
          job={job}
          isSaved={savedJobs.some((savedJob) => savedJob.id === job.id)}
          toggleSaveJob={toggleSaveJob}
        />
      ))}
    </div>
  );
}