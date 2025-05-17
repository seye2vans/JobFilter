// components/search-bar.tsx
"use client";

import { Search } from 'lucide-react';
import { Input } from "../../components/ui/input";
// import { Input } from "@/components/ui/input"; // Uncomment this line if you have a custom Input component
import React from "react";

interface SearchBarProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
}

export default function SearchBar({ searchTerm, setSearchTerm }: SearchBarProps) {
  return (
    <div className="relative">
      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <Search className="h-5 w-5 text-gray-400" />
      </div>
      <Input
        type="text"
        placeholder="Search by job title or company..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="pl-10 py-6 text-base"
      />
    </div>
  );
}