import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Lightbulb, Palette, PenTool, Zap } from "lucide-react";

interface ProcessStepProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  step: number;
  isLast?: boolean;
}

const ProcessStep = ({
  icon,
  title,
  description,
  step,
  isLast = false,
}: ProcessStepProps) => {
  return (
    <div className="flex flex-col items-center relative bg-white">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, delay: step * 0.1 }}
        className="relative z-10"
      >
        <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center text-white mb-4">
          {icon}
        </div>
      </motion.div>

      {!isLast && (
        <div className="absolute top-8 left-[calc(50%+2rem)] w-[calc(100%-4rem)] h-0.5 bg-gray-200 -z-10" />
      )}

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: step * 0.2 }}
      >
        <Card className="w-full max-w-[250px] border-none shadow-md">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-bold text-center">
              {title}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-center text-gray-600">{description}</p>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};

interface ProcessSectionProps {
  title?: string;
  subtitle?: string;
  steps?: {
    icon: React.ReactNode;
    title: string;
    description: string;
  }[];
}

const ProcessSection = ({
  title = "My Design Process",
  subtitle = "How I bring your ideas to life",
  steps = [
    {
      icon: <Lightbulb size={24} />,
      title: "Discovery",
      description:
        "Understanding your needs, goals, and target audience through in-depth consultation.",
    },
    {
      icon: <PenTool size={24} />,
      title: "Concept Development",
      description:
        "Creating initial sketches and concepts based on research and requirements.",
    },
    {
      icon: <Palette size={24} />,
      title: "Design Execution",
      description:
        "Transforming approved concepts into polished, professional designs.",
    },
    {
      icon: <Zap size={24} />,
      title: "Refinement",
      description:
        "Perfecting the details through feedback and revisions until complete satisfaction.",
    },
  ],
}: ProcessSectionProps) => {
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ y: -20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold mb-4"
          >
            {title}
          </motion.h2>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-gray-600 max-w-2xl mx-auto"
          >
            {subtitle}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <ProcessStep
              key={index}
              icon={step.icon}
              title={step.title}
              description={step.description}
              step={index}
              isLast={index === steps.length - 1}
            />
          ))}
        </div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="flex justify-center mt-12"
        >
          <a
            href="#contact"
            className="flex items-center gap-2 text-primary font-medium hover:underline"
          >
            Ready to start your project? <ArrowRight size={16} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ProcessSection;
