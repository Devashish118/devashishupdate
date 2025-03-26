import React from "react";
import { motion } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  avatarUrl: string;
  initials: string;
}

interface TestimonialsSectionProps {
  testimonials?: Testimonial[];
  title?: string;
  subtitle?: string;
}

const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({
  testimonials = [
    {
      id: "1",
      name: "Sarah Johnson",
      role: "Marketing Director",
      company: "CreativeMinds Inc.",
      content:
        "Working with this designer was a game-changer for our brand. Their attention to detail and creative approach brought our vision to life in ways we couldn't have imagined.",
      avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=sarah",
      initials: "SJ",
    },
    {
      id: "2",
      name: "Michael Chen",
      role: "CEO",
      company: "TechStart Solutions",
      content:
        "Exceptional work! The designer delivered a complete brand identity that perfectly captures our company values. The process was smooth and the results exceeded our expectations.",
      avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=michael",
      initials: "MC",
    },
    {
      id: "3",
      name: "Emily Rodriguez",
      role: "Product Manager",
      company: "Innovate Design Co.",
      content:
        "I was blown away by the quality and creativity of the work. The designer took the time to understand our needs and delivered concepts that were both beautiful and functional.",
      avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=emily",
      initials: "ER",
    },
    {
      id: "4",
      name: "David Wilson",
      role: "Art Director",
      company: "Visual Arts Studio",
      content:
        "As someone in the creative field myself, I have high standards. This designer not only met them but exceeded them with their innovative approach and technical expertise.",
      avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=david",
      initials: "DW",
    },
  ],
  title = "Client Testimonials",
  subtitle = "What my clients say about my work",
}) => {
  return (
    <section id="testimonials" className="py-16 px-4 md:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-3">{title}</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">{subtitle}</p>
        </motion.div>

        <div className="relative px-12">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {testimonials.map((testimonial) => (
                <CarouselItem
                  key={testimonial.id}
                  className="md:basis-1/2 lg:basis-1/3 pl-4 pr-4"
                >
                  <motion.div
                    whileHover={{ y: -5 }}
                    className="bg-white p-6 rounded-lg shadow-md h-full flex flex-col"
                  >
                    <div className="flex items-center mb-4">
                      <Avatar className="h-12 w-12 mr-4">
                        <AvatarImage
                          src={testimonial.avatarUrl}
                          alt={testimonial.name}
                        />
                        <AvatarFallback>{testimonial.initials}</AvatarFallback>
                      </Avatar>
                      <div>
                        <h4 className="font-semibold text-lg">
                          {testimonial.name}
                        </h4>
                        <p className="text-sm text-gray-600">
                          {testimonial.role}, {testimonial.company}
                        </p>
                      </div>
                    </div>
                    <div className="mt-2 flex-grow">
                      <p className="text-gray-700 italic">
                        "{testimonial.content}"
                      </p>
                    </div>
                    <div className="mt-4 flex">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <svg
                          key={star}
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 text-yellow-500"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="-left-6 md:-left-8" />
            <CarouselNext className="-right-6 md:-right-8" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
