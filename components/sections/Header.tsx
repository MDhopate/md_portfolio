"use client"

import Link from "next/link"
import { Download } from "lucide-react"
import { Button } from "@/components/ui/button"

interface HeaderProps {
  activeSection: string
  scrollToSection: (sectionId: string) => void
}

export default function Header({ activeSection, scrollToSection }: HeaderProps) {
  return (
    <header className="sticky top-0 z-10 backdrop-blur-md bg-slate-900/80 border-b border-slate-800">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-emerald-400">
          DS.Portfolio
        </Link>
        <nav className="hidden md:flex space-x-6">
          <button
            onClick={() => scrollToSection("home")}
            className={`hover:text-emerald-400 transition-colors ${activeSection === "home" ? "text-emerald-400" : ""}`}
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection("about")}
            className={`hover:text-emerald-400 transition-colors ${activeSection === "about" ? "text-emerald-400" : ""}`}
          >
            About
          </button>
          <button
            onClick={() => scrollToSection("skills")}
            className={`hover:text-emerald-400 transition-colors ${activeSection === "skills" ? "text-emerald-400" : ""}`}
          >
            Skills
          </button>
          <button
            onClick={() => scrollToSection("experience")}
            className={`hover:text-emerald-400 transition-colors ${activeSection === "experience" ? "text-emerald-400" : ""}`}
          >
            Experience
          </button>
          <button
            onClick={() => scrollToSection("projects")}
            className={`hover:text-emerald-400 transition-colors ${activeSection === "projects" ? "text-emerald-400" : ""}`}
          >
            Projects
          </button>
        </nav>
        <div className="flex gap-2">
          <a href="/assets/resume.pdf" download="YourName_Resume.pdf" className="hidden md:inline-block">
            <Button
              variant="outline"
              className="border-emerald-500 text-emerald-400 hover:bg-emerald-500 hover:text-white"
            >
              <Download className="mr-2 h-4 w-4" /> Resume
            </Button>
          </a>
          <Button
            variant="outline"
            className="border-emerald-500 text-emerald-400 hover:bg-emerald-500 hover:text-white"
            onClick={() => scrollToSection("contact")}
          >
            Contact Me
          </Button>
        </div>
      </div>
    </header>
  )
}

