import React, { useState } from "react";
import { Button } from "./ui/button";

interface CategoryFilterProps {
  categories?: string[];
  activeCategory?: string;
  onCategoryChange?: (category: string) => void;
}

const CategoryFilter = ({
  categories = [
    "All",
    "Branding",
    "Illustrations",
    "Packaging",
    "Digital Artwork",
  ],
  activeCategory = "All",
  onCategoryChange = () => {},
}: CategoryFilterProps) => {
  const [selectedCategory, setSelectedCategory] = useState(activeCategory);

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
    onCategoryChange(category);
  };

  return (
    <div className="w-full bg-white py-4 mb-8">
      <div className="flex flex-wrap justify-center gap-2 md:gap-4">
        {categories.map((category) => (
          <Button
            key={category}
            variant={selectedCategory === category ? "default" : "outline"}
            onClick={() => handleCategoryClick(category)}
            className={`transition-all duration-300 ${selectedCategory === category ? "scale-105" : ""}`}
          >
            {category}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default CategoryFilter;
