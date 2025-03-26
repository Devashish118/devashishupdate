import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

import Header from "./Header";
import Navigation from "./Navigation";
import SkillsSection from "./SkillsSection";
import PortfolioSection from "./PortfolioSection";
import ProcessSection from "./ProcessSection";
import ContactSection from "./ContactSection";
import Footer from "./Footer";

const Home = () => {
  const [activeSection, setActiveSection] = useState("home");

  // Handle scroll to update active section
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;
      const sections = [
        { id: "home", element: document.getElementById("home") },
        { id: "skills", element: document.getElementById("skills") },
        { id: "portfolio", element: document.getElementById("portfolio") },
        { id: "process", element: document.getElementById("process") },
        { id: "contact", element: document.getElementById("contact") },
      ];

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section.element) {
          const offsetTop = section.element.offsetTop;
          if (scrollPosition >= offsetTop) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle navigation click
  const handleSectionChange = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 70, // Adjust for navigation height
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="bg-white min-h-screen">
      <Navigation
        activeSection={activeSection}
        onSectionChange={handleSectionChange}
      />

      <section id="home">
        <Header />
      </section>

      <section id="skills">
        <SkillsSection />
      </section>

      <section id="portfolio">
        <PortfolioSection />
      </section>

      <section id="process">
        <ProcessSection />
      </section>

      <section id="contact">
        <ContactSection />
      </section>

      <Footer />

      {/* Scroll to top button */}
      <motion.button
        className="fixed bottom-8 right-8 p-3 bg-black text-white rounded-full shadow-lg z-50 hover:bg-gray-800 transition-colors"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        whileHover={{ scale: 1.1 }}
        aria-label="Scroll to top"
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
          <path d="m18 15-6-6-6 6" />
        </svg>
      </motion.button>
    </div>
  );
};

export default Home;
