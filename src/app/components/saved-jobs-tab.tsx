
"use client";

import { Button } from "../../components/ui/button"; 
import { BookmarkCheck } from 'lucide-react';

interface SavedJobsTabProps {
  showSavedJobs: boolean;
  setShowSavedJobs: (show: boolean) => void;
  savedJobsCount: number;
}

export default function SavedJobsTab({ showSavedJobs, setShowSavedJobs, savedJobsCount }: SavedJobsTabProps) {
  return (
    <Button
      variant={showSavedJobs ? "default" : "outline"}
      onClick={() => setShowSavedJobs(!showSavedJobs)}
      className={showSavedJobs ? "bg-emerald-600 hover:bg-emerald-700" : ""}
    >
      <BookmarkCheck className="mr-2 h-4 w-4" />
      Saved Jobs
      {savedJobsCount > 0 && (
        <span className="ml-2 bg-white text-emerald-600 rounded-full w-5 h-5 flex items-center justify-center text-xs font-medium">
          {savedJobsCount}
        </span>
      )}
    </Button>
  );
}