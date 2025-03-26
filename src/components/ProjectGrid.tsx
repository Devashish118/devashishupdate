import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import { motion } from "framer-motion";

interface Project {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
}

interface ProjectGridProps {
  projects?: Project[];
  selectedCategory?: string;
  onProjectClick?: (projectId: string) => void;
}

const ProjectGrid = ({
  projects = [
    {
      id: "project-1",
      title: "Brand Identity Design",
      category: "Branding",
      imageUrl: "https://imgur.com/a/nDu0jCr",
    },
    {
      id: "project-2",
      title: "Magazine Layout",
      category: "Illustrations",
      imageUrl:
        "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=800&q=80",
    },
    {
      id: "project-3",
      title: "Product Packaging",
      category: "Packaging",
      imageUrl:
        "https://images.unsplash.com/photo-1547517023-7ca0c162f816?w=800&q=80",
    },

    {
      id: "project-4",
      title: "Cake",
      category: "Branding",
      imageUrl: "https://imgur.com/a/nDu0jCr",
    },
  ],
  selectedCategory = "",
  onProjectClick = () => {},
}: ProjectGridProps) => {
  // Filter projects based on selected category
  const filteredProjects = selectedCategory
    ? projects.filter((project) => project.category === selectedCategory)
    : projects;

  return (
    <div className="w-full max-w-[1200px] mx-auto bg-gray-50 p-6">
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {filteredProjects.map((project) => (
          <motion.div
            key={project.id}
            layout
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <ProjectCard
              id={project.id}
              title={project.title}
              category={project.category}
              imageUrl={project.imageUrl}
              onClick={() => onProjectClick(project.id)}
            />
          </motion.div>
        ))}
      </motion.div>

      {filteredProjects.length === 0 && (
        <div className="flex justify-center items-center h-[400px] w-full">
          <p className="text-red-500 text-lg">
            No projects found in this category.
          </p>
        </div>
      )}
    </div>
  );
};

export default ProjectGrid;
