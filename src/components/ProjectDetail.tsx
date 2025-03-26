import React, { useState } from "react";
import { motion } from "framer-motion";
import { X, ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "./ui/dialog";
import { Button } from "./ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

interface ProjectDetailProps {
  isOpen?: boolean;
  onClose?: () => void;
  project?: {
    id: string;
    title: string;
    category: string;
    description: string;
    client?: string;
    date?: string;
    tools?: string[];
    images: string[];
    link?: string;
  };
}

const ProjectDetail = ({
  isOpen = true,
  onClose = () => {},
  project = {
    id: "1",
    title: "Brand Identity Design",
    category: "Branding",
    description:
      "A comprehensive brand identity design for a modern tech startup. The project included logo design, color palette selection, typography, and brand guidelines documentation. The client wanted a clean, minimalist aesthetic that would appeal to a young, tech-savvy audience while conveying professionalism and innovation.",
    client: "TechVision Startup",
    date: "January 2023",
    tools: ["Adobe Illustrator", "Adobe Photoshop", "Figma"],
    images: ["https://imgur.com/a/nDu0jCrhttps://imgur.com/a/nDu0jCr"],
    link: "https://example.com/project",
  },
}: ProjectDetailProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  return (
    <Dialog open={isOpen} onOpenChange={() => onClose()}>
      <DialogContent className="max-w-4xl p-0 overflow-hidden bg-white">
        <div className="bg-gray-900 text-white">
          <Carousel className="w-full">
            <CarouselContent>
              {project.images.map((image, index) => (
                <CarouselItem key={index}>
                  <div className="relative h-[50vh] w-full">
                    <img
                      src={image}
                      alt={`${project.title} - Image ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-4" />
            <CarouselNext className="right-4" />
          </Carousel>
        </div>

        <div className="p-6 md:p-8">
          <DialogHeader>
            <div className="flex items-center justify-between">
              <div>
                <DialogTitle className="text-2xl md:text-3xl font-bold">
                  {project.title}
                </DialogTitle>
                <span className="inline-block mt-1 px-3 py-1 bg-gray-100 text-gray-800 text-sm rounded-full">
                  {project.category}
                </span>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={onClose}
                className="rounded-full"
              >
                <X className="h-5 w-5" />
              </Button>
            </div>
            <DialogDescription className="mt-4 text-base leading-relaxed">
              {project.description}
            </DialogDescription>
          </DialogHeader>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold mb-2">Project Details</h3>
              <div className="space-y-2">
                {project.client && (
                  <div className="flex">
                    <span className="font-medium w-24">Client:</span>
                    <span>{project.client}</span>
                  </div>
                )}
                {project.date && (
                  <div className="flex">
                    <span className="font-medium w-24">Date:</span>
                    <span>{project.date}</span>
                  </div>
                )}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">Tools Used</h3>
              <div className="flex flex-wrap gap-2">
                {project.tools?.map((tool, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-gray-100 text-gray-800 text-sm rounded-full"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <DialogFooter className="mt-8 flex justify-between items-center">
            <div className="text-sm text-gray-500">
              Project ID: {project.id}
            </div>
            {project.link && (
              <Button
                as="a"
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                View Project <ExternalLink className="h-4 w-4" />
              </Button>
            )}
          </DialogFooter>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectDetail;
