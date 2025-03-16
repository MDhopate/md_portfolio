"use client";
import { Card, CardContent } from "@/components/ui/card";
import AnimatedSection from "@/components/animated-section";

export default function About() {
  return (
    <section id="about" className="bg-slate-800/50 py-20">
      <div className="container mx-auto px-4">
        <AnimatedSection className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-emerald-500 mx-auto"></div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-10">
          <AnimatedSection delay={0.1}>
            <h3 className="text-2xl font-semibold mb-4 text-emerald-400">
              My Journey
            </h3>
            <p className="text-slate-300 mb-4">
              I am a passionate Data Science graduate student with a strong
              foundation in statistics, machine learning, and data analysis. My
              academic journey began with a Bachelor's degree in Data Analytics,
              which provided me with the technical skills necessary to excel in
              the field of data science.
            </p>
            <p className="text-slate-300">
              Currently pursuing my Master's degree, I am focused on developing
              advanced skills in predictive modeling, natural language
              processing, and big data technologies. I am particularly
              interested in applying these skills to solve real-world problems
              in healthcare, finance, and environmental science.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.2} className="space-y-6">
            <h3 className="text-2xl font-semibold mb-4 text-emerald-400">
              Education
            </h3>
            <div className="space-y-4">
              <Card className="bg-slate-700 border-slate-600">
                <CardContent className="p-4">
                  <h4 className="font-medium text-emerald-400">
                    Master of Science in Data Science
                  </h4>
                  <p className="text-sm text-slate-300">
                    Indiana University Bloomington, 2025
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-slate-700 border-slate-600">
                <CardContent className="p-4">
                  <h4 className="font-medium text-emerald-400">
                    Bachelor of Science in Data Analytics
                  </h4>
                  <p className="text-sm text-slate-300">
                    Lynn University, 2021
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
