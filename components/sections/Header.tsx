"use client";

import Link from "next/link";
import { Download, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

interface HeaderProps {
  activeSection: string;
  scrollToSection: (sectionId: string) => void;
}

export default function Header({
  activeSection,
  scrollToSection,
}: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect for header
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-slate-900/95 border-b border-indigo-500/10 shadow-md backdrop-blur-md"
          : "bg-slate-900/80 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link
          href="/"
          className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400"
        >
          Malhar Dhopate
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          <button
            onClick={() => scrollToSection("home")}
            className={`hover:text-indigo-400 transition-colors ${
              activeSection === "home" ? "text-indigo-400" : ""
            }`}
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection("about")}
            className={`hover:text-indigo-400 transition-colors ${
              activeSection === "about" ? "text-indigo-400" : ""
            }`}
          >
            About
          </button>
          <button
            onClick={() => scrollToSection("skills")}
            className={`hover:text-indigo-400 transition-colors ${
              activeSection === "skills" ? "text-indigo-400" : ""
            }`}
          >
            Skills
          </button>
          <button
            onClick={() => scrollToSection("experience")}
            className={`hover:text-indigo-400 transition-colors ${
              activeSection === "experience" ? "text-indigo-400" : ""
            }`}
          >
            Experience
          </button>
          <button
            onClick={() => scrollToSection("projects")}
            className={`hover:text-indigo-400 transition-colors ${
              activeSection === "projects" ? "text-indigo-400" : ""
            }`}
          >
            Projects
          </button>
        </nav>

        {/* Action Buttons */}
        <div className="flex gap-2 items-center">
          <a
            href="/assets/resume.pdf"
            download="Malhar_Dhopate_Resume.pdf"
            className="hidden md:inline-block"
          >
            <Button
              variant="outline"
              className="border-indigo-500/30 text-indigo-400 hover:bg-indigo-500/10 rounded-full"
            >
              <Download className="mr-2 h-4 w-4" /> Resume
            </Button>
          </a>
          <Button
            variant="outline"
            className="border-indigo-500/30 text-indigo-400 hover:bg-indigo-500/10 rounded-full"
            onClick={() => scrollToSection("contact")}
          >
            Contact Me
          </Button>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-indigo-400"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-slate-900/95 backdrop-blur-md border-t border-indigo-500/10 py-4">
          <nav className="flex flex-col space-y-4 px-4">
            <button
              onClick={() => {
                scrollToSection("home");
                setMobileMenuOpen(false);
              }}
              className={`py-2 px-4 rounded-md ${
                activeSection === "home"
                  ? "bg-indigo-500/10 text-indigo-400"
                  : ""
              }`}
            >
              Home
            </button>
            <button
              onClick={() => {
                scrollToSection("about");
                setMobileMenuOpen(false);
              }}
              className={`py-2 px-4 rounded-md ${
                activeSection === "about"
                  ? "bg-indigo-500/10 text-indigo-400"
                  : ""
              }`}
            >
              About
            </button>
            <button
              onClick={() => {
                scrollToSection("skills");
                setMobileMenuOpen(false);
              }}
              className={`py-2 px-4 rounded-md ${
                activeSection === "skills"
                  ? "bg-indigo-500/10 text-indigo-400"
                  : ""
              }`}
            >
              Skills
            </button>
            <button
              onClick={() => {
                scrollToSection("experience");
                setMobileMenuOpen(false);
              }}
              className={`py-2 px-4 rounded-md ${
                activeSection === "experience"
                  ? "bg-indigo-500/10 text-indigo-400"
                  : ""
              }`}
            >
              Experience
            </button>
            <button
              onClick={() => {
                scrollToSection("projects");
                setMobileMenuOpen(false);
              }}
              className={`py-2 px-4 rounded-md ${
                activeSection === "projects"
                  ? "bg-indigo-500/10 text-indigo-400"
                  : ""
              }`}
            >
              Projects
            </button>
            <button
              onClick={() => {
                scrollToSection("contact");
                setMobileMenuOpen(false);
              }}
              className={`py-2 px-4 rounded-md ${
                activeSection === "contact"
                  ? "bg-indigo-500/10 text-indigo-400"
                  : ""
              }`}
            >
              Contact
            </button>
            <a
              href="/assets/resume.pdf"
              download="Malhar_Dhopate_Resume.pdf"
              className="py-2 px-4 rounded-md flex items-center text-indigo-400"
              onClick={() => setMobileMenuOpen(false)}
            >
              <Download className="mr-2 h-4 w-4" /> Download Resume
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
