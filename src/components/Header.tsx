import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Instagram, Linkedin, Github } from "lucide-react";

interface HeaderProps {
  name?: string;
  title?: string;
  bio?: string;
  profileImage?: string;
  socialLinks?: {
    instagram?: string;
    behance?: string;
    dribbble?: string;
    linkedin?: string;
  };
}

const Header = ({
  name = "Jane Designer",
  title = "Graphic Designer & Visual Artist",
  bio = "I'm a passionate graphic designer, innovative designs that tell compelling stories. My work spans branding, illustration, packaging, and digital art.",
  profileImage = "https://imgur.com/yJWzd5u.jpg",
  socialLinks = {
    instagram: "https://instagram.com",
    behance:
      "https://www.youtube.com/watch?v=sp4Xg1ADqvYhttps://www.youtube.com/watch?v=sp4Xg1ADqvY",
    dribbble: "https://dribbble.com",
    linkedin: "https://linkedin.com",
    github: "https://github.com",
  },
}: HeaderProps) => {
  return (
    <section className="w-full min-h-screen bg-black text-white flex flex-col justify-center items-center relative overflow-hidden px-4 md:px-8 lg:px-16">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 to-black z-0"></div>

      {/* Content container */}
      <div className="container mx-auto z-10 flex flex-col lg:flex-row items-center justify-between gap-12 py-16">
        {/* Left side - Text content */}
        <motion.div
          className="flex-1 space-y-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="space-y-4">
            <h1 className="text-6xl md:text-8xl font-bold tracking-tighter">
              PORTFOLIO
            </h1>
            <h2 className="text-xl md:text-2xl text-purple-300">{title}</h2>
          </div>

          <p className="text-lg text-gray-300 max-w-xl">{bio}</p>

          <div className="flex space-x-4 pt-4">
            <Button
              variant="outline"
              className="border-purple-500 text-white hover:bg-purple-800 hover:text-white"
            >
              View Work
            </Button>
            <Button className="bg-purple-600 hover:bg-purple-700 text-white">
              Contact Me
            </Button>
          </div>

          <div className="flex space-x-5 pt-6">
            {socialLinks.instagram && (
              <a
                href={socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-purple-400 transition-colors"
              >
                <Instagram size={24} />
              </a>
            )}
            {socialLinks.behance && (
              <a
                href={socialLinks.behance}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-purple-400 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M8 10.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
                  <path d="M8 18.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
                  <path d="M16.5 10.5h-8" />
                  <path d="M16.5 18.5h-8" />
                  <path d="M16.5 6.5a2.5 2.5 0 0 0-5 0v8a2.5 2.5 0 0 0 5 0" />
                </svg>
              </a>
            )}
            {socialLinks.dribbble && (
              <a
                href={socialLinks.dribbble}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-purple-400 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M19.13 5.09C15.22 9.14 10 10.44 2.25 10.94" />
                  <path d="M21.75 12.84c-6.62-1.41-12.14 1-16.38 6.32" />
                  <path d="M8.56 2.75c4.37 6 6 9.42 8 17.72" />
                </svg>
              </a>
            )}
            {socialLinks.linkedin && (
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-purple-400 transition-colors"
              >
                <Linkedin size={24} />
              </a>
            )}
          </div>
        </motion.div>

        {/* Right side - Profile image */}
        <motion.div
          className="flex-1 flex justify-center lg:justify-end"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-purple-500 shadow-2xl shadow-purple-500/20">
            <img
              src={profileImage}
              alt={name}
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.5,
          delay: 1,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
        <p className="text-sm text-gray-400 mb-2">Scroll Down</p>
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center pt-2">
          <motion.div
            className="w-1.5 h-1.5 bg-white rounded-full"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Header;
