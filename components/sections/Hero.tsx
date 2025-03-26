"use client";

import { ArrowRight, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/animated-section";

interface HeroProps {
  scrollToSection: (sectionId: string) => void;
}

export default function Hero({ scrollToSection }: HeroProps) {
  return (
    <section
      id="home"
      className="container mx-auto px-4 py-20 md:py-32 flex flex-col md:flex-row items-center gap-10 pt-32"
    >
      <AnimatedSection className="flex-1 space-y-6">
        <motion.h1
          className="text-4xl md:text-6xl font-bold leading-tight"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Hi, I'm{" "}
          <motion.span
            className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.5,
              delay: 0.8,
              type: "spring",
              stiffness: 100,
            }}
          >
            Malhar!
          </motion.span>
        </motion.h1>

        <motion.p
          className="text-xl text-slate-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Data Science Student @ Indiana University Bloomington
        </motion.p>

        <motion.p
          className="text-lg text-slate-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          Transforming complex data into meaningful insights and impactful
          solutions.
        </motion.p>

        <motion.div
          className="flex flex-wrap gap-4 pt-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <Button
            className="bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 rounded-full"
            onClick={() => scrollToSection("projects")}
          >
            View Projects <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <a href="/assets/resume.pdf" download="Malhar_Dhopate_Resume.pdf">
            <Button
              variant="outline"
              className="border-indigo-500/30 text-indigo-400 hover:bg-indigo-500/10 rounded-full"
            >
              <Download className="mr-2 h-4 w-4" /> Download Resume
            </Button>
          </a>
        </motion.div>
      </AnimatedSection>

      <AnimatedSection delay={0.2} className="flex-1 flex justify-center">
        <motion.div
          className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-indigo-500/30 shadow-lg shadow-indigo-500/20"
          initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.3,
            type: "spring",
            stiffness: 100,
          }}
        >
          <Image
            src="/assets/images/profile.jpg"
            alt="Profile"
            fill
            className="object-cover"
          />
        </motion.div>
      </AnimatedSection>
    </section>
  );
}
