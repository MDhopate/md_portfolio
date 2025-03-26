"use client";
import { Card, CardContent } from "@/components/ui/card";
import AnimatedSection from "@/components/animated-section";

export default function About() {
  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-b from-slate-950 to-slate-900"
    >
      <div className="container mx-auto px-4">
        <AnimatedSection className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 mx-auto"></div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-10">
          <AnimatedSection delay={0.1}>
            <h3 className="text-2xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
              My Journey
            </h3>
            <p className="text-slate-300 mb-4">
              I love building innovative projects that blend AI, data science,
              and cloud technologies to solve challenges and create impactful
              solutions.
            </p>
            <p className="text-slate-300">
              Currently pursuing my Master's degree in Data Science at Indiana
              University Bloomington, I am focused on developing advanced skills
              in predictive modeling, natural language processing, and big data
              technologies. I am particularly interested in applying these
              skills to solve real-world problems in healthcare, finance, and
              environmental science.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.2} className="space-y-6">
            <h3 className="text-2xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
              Education
            </h3>
            <div className="space-y-4">
              <Card className="bg-gradient-to-br from-slate-800 to-slate-900 border-slate-700 hover:shadow-lg hover:shadow-indigo-500/10 transition-all duration-300">
                <CardContent className="p-4">
                  <h4 className="font-medium text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
                    Master of Science in Data Science
                  </h4>
                  <p className="text-sm text-slate-300">
                    Indiana University Bloomington, 2023 - 2025
                  </p>
                  <p className="text-sm text-slate-300 mt-1">GPA: 3.90/4.00</p>
                  <p className="text-xs text-slate-400 mt-2">
                    Courses: Data Mining, Applied Machine Learning, Statistics,
                    Applied Algorithms, Applied Database Technologies,
                    Engineering Cloud Computing, Advance Database Concepts, Data
                    Visualization, Data Science In Practice
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-gradient-to-br from-slate-800 to-slate-900 border-slate-700 hover:shadow-lg hover:shadow-indigo-500/10 transition-all duration-300">
                <CardContent className="p-4">
                  <h4 className="font-medium text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
                    Bachelor of Science in Data Analytics
                  </h4>
                  <p className="text-sm text-slate-300">
                    Lynn University, 2018 - 2021
                  </p>
                  <p className="text-sm text-slate-300 mt-1">GPA: 3.91/4.00</p>
                  <p className="text-xs text-slate-400 mt-2">
                    Courses: Data Visualization, Business Analytics, Data
                    Programming, Information Systems, Data Mining & Reporting,
                    Database Management & Security, Predictive Modeling,
                    Financial Reporting, Personal Finance
                  </p>
                </CardContent>
              </Card>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
