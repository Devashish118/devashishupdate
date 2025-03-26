import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import ProjectGrid from "./ProjectGrid";
import { Dialog, DialogContent } from "./ui/dialog";
import { motion } from "framer-motion";

interface Project {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
  description?: string;
  images?: string[];
}

interface PortfolioSectionProps {
  projects?: Project[];
  title?: string;
  subtitle?: string;
}

const PortfolioSection = ({
  projects = [
    {
      id: "project-1",
      title: "Brand Identity Design",
      category: "Branding",
      imageUrl:
        "https://i.pinimg.com/736x/01/03/84/010384d73b1dd61f5b2bd0494e3e5d28.jpg",
      description:
        "A comprehensive brand identity design for a modern tech startup, including logo design, color palette, typography, and brand guidelines.",
      images: [
        "https://i.pinimg.com/736x/52/52/a2/5252a2247f6f5c7a08a3731cd18ab153.jpg",
        "https://i.pinimg.com/736x/01/03/84/010384d73b1dd61f5b2bd0494e3e5d28.jpg",
      ],
    },
    {
      id: "project-2",
      title: "shoes poster",
      category: "Illustrations",
      imageUrl:
        "https://i.pinimg.com/736x/ac/9a/16/ac9a166f94596aed15199215a5006341.jpg",
      description:
        "Editorial design for a lifestyle magazine featuring custom illustrations and thoughtful typography.",
      images: [
        "https://i.pinimg.com/736x/ac/9a/16/ac9a166f94596aed15199215a5006341.jpg",
      ],
    },
    {
      id: "project-3",
      title: "Product Promotion",
      category: "Packaging",
      imageUrl:
        "https://voteforshivajijayanti.com/wp-content/uploads/2024/07/Chhatrapati-Shivaji-Maharaj-1.jpg",
      description:
        "Sustainable packaging design for an eco-friendly cosmetics brand, focusing on recyclable materials and minimalist aesthetics.",
      images: [
        "https://i.pinimg.com/736x/52/52/a2/5252a2247f6f5c7a08a3731cd18ab153.jpg",
        "https://voteforshivajijayanti.com/wp-content/uploads/2024/07/Chhatrapati-Shivaji-Maharaj-1.jpg",
      ],
    },
    {
      id: "project-5",
      title: "Corporate Brochure",
      category: "Branding",
      imageUrl:
        "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=800&q=80",
      description:
        "Clean and professional brochure design for a financial services company, balancing information density with visual appeal.",
      images: [
        "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=800&q=80",
        "https://images.unsplash.com/photo-1616628188859-7a11abb6fcc9?w=800&q=80",
        "https://images.unsplash.com/photo-1606636660801-c61b8e97a7c0?w=800&q=80",
      ],
    },
  ],
  title = "Featured Works",
  subtitle = "Explore my latest projects across different design disciplines",
}: PortfolioSectionProps) => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const categories = [
    "All",
    ...Array.from(new Set(projects.map((project) => project.category))),
  ];

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
  };

  const handleProjectClick = (projectId: string) => {
    const project = projects.find((p) => p.id === projectId);
    if (project) {
      setSelectedProject(project);
      setIsModalOpen(true);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Project detail component defined inline to avoid import issues
  const ProjectDetailContent = ({ project }: { project: Project }) => {
    return (
      <div className="bg-white p-6 rounded-lg max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">{project.title}</h2>
        <p className="text-gray-600 mb-6">{project.description}</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          {project.images?.map((image, index) => (
            <div key={index} className="rounded-lg overflow-hidden">
              <img
                src={image}
                alt={`${project.title} - Image ${index + 1}`}
                className="w-full h-auto object-cover"
              />
            </div>
          ))}
        </div>

        <div className="flex justify-end">
          <button
            onClick={closeModal}
            className="px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700 transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    );
  };

  return (
    <section className="w-full py-16 bg-gray-50" id="portfolio">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold mb-4">{title}</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">{subtitle}</p>
        </motion.div>

        <CategoryFilter
          categories={categories}
          activeCategory={selectedCategory}
          onCategoryChange={handleCategoryChange}
        />

        <ProjectGrid
          projects={projects}
          selectedCategory={selectedCategory === "All" ? "" : selectedCategory}
          onProjectClick={handleProjectClick}
        />

        <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
          <DialogContent className="sm:max-w-4xl">
            {selectedProject && (
              <ProjectDetailContent project={selectedProject} />
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default PortfolioSection;
