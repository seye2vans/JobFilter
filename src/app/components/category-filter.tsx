
"use client";

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../components/ui/select";

interface CategoryFilterProps {
  categories: string[];
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
}

export default function CategoryFilter({ categories, selectedCategory, setSelectedCategory }: CategoryFilterProps) {
  return (
    <Select value={selectedCategory} onValueChange={setSelectedCategory}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="All Categories" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="all">All Categories</SelectItem>
        {categories.map((category) => (
          <SelectItem key={category} value={category}>
            {category}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}