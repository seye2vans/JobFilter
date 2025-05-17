
"use client";

import Link from "next/link";
import { Bookmark, BookmarkCheck, Calendar, MapPin } from 'lucide-react';
import { Button } from "../../components/ui/button"; 
import { Badge } from "../../components/ui/badge"; 
import type { Job } from "../../types/job"; 
import { formatDate } from "../../lib/utils"; 

interface JobCardProps {
  job: Job;
  isSaved: boolean;
  toggleSaveJob: (job: Job) => void;
}

export default function JobCard({ job, isSaved, toggleSaveJob }: JobCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6 transition-all duration-200 hover:shadow-md group">
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
        <div className="flex-1">
          <Link href={'/job/${job.id}'}>
            <h3 className="text-xl font-semibold text-gray-800 group-hover:text-emerald-600 transition-colors duration-200">
              {job.title}
            </h3>
          </Link>
          <p className="text-gray-600 mb-2">{job.companyName}</p>

          <div className="flex flex-wrap gap-2 mb-4">
            <Badge variant="outline" className="bg-emerald-50 text-emerald-700 hover:bg-emerald-100">
              {job.category}
            </Badge>
            <div className="flex items-center text-gray-500 text-sm">
              <MapPin className="mr-1 h-3 w-3" />
              {job.candidateRequiredLocation || "Remote"}
            </div>
            <div className="flex items-center text-gray-500 text-sm">
              <Calendar className="mr-1 h-3 w-3" />
              {formatDate(job.publicationDate)}
            </div>
          </div>

          <p className="text-gray-600 line-clamp-2 mb-4">
            {job.description.replace(/<[^>]*>?/gm, "").substring(0, 150)}...
          </p>
        </div>

        <div className="flex flex-row md:flex-col items-center md:items-end gap-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={(e) => {
              e.preventDefault();
              toggleSaveJob(job);
            }}
            className="h-9 w-9"
            aria-label={isSaved ? "Unsave job" : "Save job"}
          >
            {isSaved ? <BookmarkCheck className="h-5 w-5 text-emerald-600" /> : <Bookmark className="h-5 w-5" />}
          </Button>

          <Link href={'/job/${job.id}'}>
            <Button>View Details</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}