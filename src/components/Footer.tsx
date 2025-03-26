import React from "react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import { Instagram, Linkedin, Mail, Twitter } from "lucide-react";

interface FooterProps {
  socialLinks?: {
    platform: string;
    url: string;
  }[];
  email?: string;
  navigationLinks?: {
    name: string;
    url: string;
  }[];
  copyrightText?: string;
}

const Footer = ({
  socialLinks = [
    {
      platform: "instagram",
      url: "https://www.instagram.com/devashish.sawant02?igsh=aWI3cGx3N3BpOTZt",
    },
    { platform: "twitter", url: "https://twitter.com" },
    {
      platform: "linkedin",
      url: "https://www.linkedin.com/in/devashish-sawant-15ba34344?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
  ],
  email = "devashishsawant041@gmail.com",
  navigationLinks = [
    { name: "Home", url: "#" },
    { name: "Portfolio", url: "#portfolio" },
    { name: "About", url: "#about" },
    { name: "Contact", url: "#contact" },
  ],
  copyrightText = "© 2023 Designer Portfolio. All rights reserved.",
}: FooterProps) => {
  const renderSocialIcon = (platform: string) => {
    switch (platform.toLowerCase()) {
      case "instagram":
        return <Instagram className="h-5 w-5" />;
      case "twitter":
        return <Twitter className="h-5 w-5" />;
      case "linkedin":
        return <Linkedin className="h-5 w-5" />;
      default:
        return null;
    }
  };

  return (
    <footer className="w-full bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-8">
          <h2 className="text-3xl font-bold mb-6">Thanks for Watching</h2>

          {/* Social Media Links */}
          <div className="flex space-x-4 mb-6">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 p-2 rounded-full hover:bg-gray-700 transition-colors"
              >
                {renderSocialIcon(link.platform)}
              </a>
            ))}
            <a
              href={`mailto:${email}`}
              className="bg-gray-800 p-2 rounded-full hover:bg-gray-700 transition-colors"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>

          {/* Email */}
          <a
            href={`mailto:${email}`}
            className="text-gray-300 hover:text-white mb-6 transition-colors"
          >
            {email}
          </a>
        </div>

        {/* Navigation Menu */}
        <div className="flex justify-center mb-8">
          <nav>
            <ul className="flex flex-wrap justify-center gap-6">
              {navigationLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.url}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Copyright */}
        <div className="text-center text-gray-400 text-sm">{copyrightText}</div>

        {/* Back to top button */}
        <div className="flex justify-center mt-8">
          <Button
            variant="outline"
            className="border-gray-700 text-gray-300 hover:text-white hover:border-gray-600"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            Back to Top
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
