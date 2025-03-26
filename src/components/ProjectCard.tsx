import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Eye } from "lucide-react";

interface ProjectCardProps {
  id?: string;
  title?: string;
  category?: string;
  imageUrl?: string;
  onClick?: () => void;
}

const ProjectCard = ({
  id = "project-1",
  title = "Brand Identity Design",
  category = "Branding",
  imageUrl = "https://i.pinimg.com/736x/01/03/84/010384d73b1dd61f5b2bd0494e3e5d28.jpg",
  onClick = (open) => {},
}: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card
      className="relative overflow-hidden rounded-lg transition-all duration-300 h-[350px] w-[350px] bg-white cursor-pointer group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/70 transition-all duration-300 z-10"></div>

      <img
        src={imageUrl}
        alt={title}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />

      <div
        className={`absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 p-6 text-white`}
      >
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-sm mb-4">{category}</p>
        <Button
          variant="outline"
          size="sm"
          className="bg-transparent border-white text-white hover:bg-white hover:text-black"
        >
          <Eye className="mr-2 h-4 w-4" />
          View Project
        </Button>
      </div>
    </Card>
  );
};

export default ProjectCard;
