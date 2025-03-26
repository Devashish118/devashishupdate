import React from "react";
import { Progress } from "./ui/progress";
import { cn } from "@/lib/utils";
import { Brush, Figma, Film, Layers, Palette, PenTool } from "lucide-react";

interface SkillProps {
  name: string;
  proficiency: number;
  icon: React.ReactNode;
  color?: string;
}

const SkillItem = ({
  name = "Skill",
  proficiency = 75,
  icon,
  color = "bg-blue-500",
}: SkillProps) => {
  return (
    <div className="flex flex-col space-y-2 w-full">
      <div className="flex items-center gap-2">
        <div className={cn("p-2 rounded-full", color)}>{icon}</div>
        <span className="font-medium text-lg">{name}</span>
        <span className="ml-auto font-bold">{proficiency}%</span>
      </div>
      <Progress value={proficiency} className="h-2" />
    </div>
  );
};

interface SkillsSectionProps {
  title?: string;
  subtitle?: string;
  skills?: SkillProps[];
}

const SkillsSection = ({
  title = "My Skills",
  subtitle = "I specialize in these design tools and technologies",
  skills = [
    {
      name: "Photoshop",
      proficiency: 95,
      icon: <Palette className="w-5 h-5 text-white" />,
      color: "bg-blue-600",
    },
    {
      name: "Illustrator",
      proficiency: 85,
      icon: <PenTool className="w-5 h-5 text-white" />,
      color: "bg-orange-500",
    },
    {
      name: "Lightroom",
      proficiency: 80,
      icon: <Brush className="w-5 h-5 text-white" />,
      color: "bg-blue-400",
    },
    {
      name: "After Effects",
      proficiency: 75,
      icon: <Layers className="w-5 h-5 text-white" />,
      color: "bg-purple-500",
    },
    {
      name: "Premiere Pro",
      proficiency: 85,
      icon: <Film className="w-5 h-5 text- " />,
      color: "bg-blue-600",
    },
  ],
}: SkillsSectionProps) => {
  return (
    <section className="py-16 px-4 md:px-8 lg:px-16 bg-gray-50 w-full">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">{subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <SkillItem
              key={index}
              name={skill.name}
              proficiency={skill.proficiency}
              icon={skill.icon}
              color={skill.color}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
