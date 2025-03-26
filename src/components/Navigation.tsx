import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Home, Briefcase, User, Award, MessageSquare } from "lucide-react";

interface NavigationProps {
  activeSection?: string;
  onSectionChange?: (section: string) => void;
}

const Navigation = ({
  activeSection = "home",
  onSectionChange = () => {},
}: NavigationProps) => {
  const [isScrolled, setIsScrolled] = useState(false);

  // Navigation items with their respective icons and labels
  const navItems = [
    { id: "home", label: "Home", icon: <Home size={18} /> },
    { id: "skills", label: "Skills", icon: <Award size={18} /> },
    { id: "portfolio", label: "Portfolio", icon: <Briefcase size={18} /> },
    { id: "process", label: "Process", icon: <User size={18} /> },
    { id: "contact", label: "Contact", icon: <MessageSquare size={18} /> },
  ];

  // Handle scroll event to change navigation appearance
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 px-6 flex justify-center bg-white",
        isScrolled ? "shadow-md py-2" : "bg-opacity-90",
      )}
    >
      <div className="container max-w-6xl flex justify-between items-center">
        {/* Logo/Brand */}
        <div className="font-bold text-xl text-gray-900">Devashish Sawant</div>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-1">
          {navItems.map((item) => (
            <Button
              key={item.id}
              variant={activeSection === item.id ? "default" : "ghost"}
              size="sm"
              onClick={() => onSectionChange(item.id)}
              className={cn(
                "flex items-center gap-2 px-4 py-2 rounded-md transition-colors",
                activeSection === item.id
                  ? "bg-primary text-primary-foreground"
                  : "hover:bg-gray-100",
              )}
            >
              {item.icon}
              <span>{item.label}</span>
            </Button>
          ))}
        </div>

        {/* Mobile Navigation */}
        <div className="flex md:hidden space-x-1">
          {navItems.map((item) => (
            <Button
              key={item.id}
              variant={activeSection === item.id ? "default" : "ghost"}
              size="icon"
              onClick={() => onSectionChange(item.id)}
              className={cn(
                "rounded-full p-2",
                activeSection === item.id
                  ? "bg-primary text-primary-foreground"
                  : "hover:bg-gray-100",
              )}
              aria-label={item.label}
            >
              {item.icon}
            </Button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
