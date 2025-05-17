
"use client";

import { Button } from "../../components/ui/button";
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  setCurrentPage: (page: number) => void;
}

export default function Pagination({ currentPage, totalPages, setCurrentPage }: PaginationProps) {
  const pageNumbers = [];

  // Create array of page numbers to display
  if (totalPages <= 5) {
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(i);
    }
  } else {
    if (currentPage <= 3) {
      pageNumbers.push(1, 2, 3, 4, "...", totalPages);
    } else if (currentPage >= totalPages - 2) {
      pageNumbers.push(1, "...", totalPages - 3, totalPages - 2, totalPages - 1, totalPages);
    } else {
      pageNumbers.push(1, "...", currentPage - 1, currentPage, currentPage + 1, "...", totalPages);
    }
  }

  return (
    <div className="flex justify-center items-center mt-8 gap-1">
      <Button
        variant="outline"
        size="icon"
        onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
        disabled={currentPage === 1}
      >
        <ChevronLeft className="h-4 w-4" />
        <span className="sr-only">Previous page</span>
      </Button>

      {pageNumbers.map((page, index) => (
        <Button
          key={index}
          variant={currentPage === page ? "default" : "outline"}
          className={currentPage === page ? "bg-emerald-600 hover:bg-emerald-700" : ""}
          onClick={() => typeof page === "number" && setCurrentPage(page)}
          disabled={typeof page !== "number"}
        >
          {page}
        </Button>
      ))}

      <Button
        variant="outline"
        size="icon"
        onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
        disabled={currentPage === totalPages}
      >
        <ChevronRight className="h-4 w-4" />
        <span className="sr-only">Next page</span>
      </Button>
    </div>
  );
}