"use client"

import { Badge } from "@/components/ui/badge"
import AnimatedSection from "@/components/animated-section"

export default function Experience() {
  return (
    <section id="experience" className="bg-slate-800/50 py-20">
      <div className="container mx-auto px-4">
        <AnimatedSection className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience</h2>
          <div className="w-20 h-1 bg-emerald-500 mx-auto mb-6"></div>
          <p className="text-slate-300 max-w-2xl mx-auto">
            My professional journey in the field of data science and analytics.
          </p>
        </AnimatedSection>

        <div className="max-w-5xl mx-auto">
          {/* Alternating Timeline */}
          <div className="relative">
            {/* Center line for desktop */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-emerald-500/50"></div>

            {/* Mobile timeline line */}
            <div className="md:hidden absolute left-6 top-0 h-full w-0.5 bg-emerald-500/50"></div>

            {/* Experience Items */}
            <div className="space-y-12 md:space-y-0">
              {/* Experience Item 1 - Left */}
              <div className="relative md:grid md:grid-cols-2 md:gap-8 md:items-center">
                <AnimatedSection delay={0.1} className="md:pr-10">
                  <div className="hidden md:block absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-emerald-500 border-4 border-slate-900 z-10"></div>
                  <div className="md:hidden absolute left-6 transform -translate-x-1/2 w-6 h-6 rounded-full bg-emerald-500 border-4 border-slate-900 z-10"></div>
                  <div className="bg-slate-700 rounded-lg p-5 shadow-lg md:ml-0 ml-12">
                    <div className="flex flex-col mb-2">
                      <h3 className="text-xl font-bold text-emerald-400">Data Science Intern</h3>
                      <Badge className="mt-2 w-fit bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                        Jan 2023 - Jun 2023
                      </Badge>
                    </div>
                    <h4 className="text-lg text-slate-200 mb-3">Company Name</h4>
                    <ul className="list-disc md:list-none list-inside text-slate-300 space-y-2">
                      <li>
                        Developed predictive models using machine learning algorithms to forecast customer behavior
                      </li>
                      <li>Performed data cleaning and preprocessing on large datasets</li>
                      <li>Created interactive dashboards to visualize key business metrics</li>
                      <li>Collaborated with cross-functional teams to implement data-driven solutions</li>
                    </ul>
                  </div>
                </AnimatedSection>
                <div className="hidden md:block"></div> {/* Empty space for right side */}
              </div>

              {/* Experience Item 2 - Right */}
              <div className="relative md:grid md:grid-cols-2 md:gap-8 md:items-center">
                <div className="hidden md:block"></div> {/* Empty space for left side */}
                <AnimatedSection delay={0.2} className="md:pl-10">
                  <div className="hidden md:block absolute left-0 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-emerald-500 border-4 border-slate-900 z-10"></div>
                  <div className="md:hidden absolute left-6 transform -translate-x-1/2 w-6 h-6 rounded-full bg-emerald-500 border-4 border-slate-900 z-10"></div>
                  <div className="bg-slate-700 rounded-lg p-5 shadow-lg md:ml-0 ml-12">
                    <div className="flex flex-col mb-2">
                      <h3 className="text-xl font-bold text-emerald-400">Research Assistant</h3>
                      <Badge className="mt-2 w-fit bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                        Sep 2022 - Dec 2022
                      </Badge>
                    </div>
                    <h4 className="text-lg text-slate-200 mb-3">University Research Lab</h4>
                    <ul className="list-disc list-inside text-slate-300 space-y-2">
                      <li>Assisted in research projects focused on natural language processing</li>
                      <li>Implemented deep learning models for text classification and sentiment analysis</li>
                      <li>Conducted literature reviews and contributed to research papers</li>
                      <li>Presented findings at departmental seminars</li>
                    </ul>
                  </div>
                </AnimatedSection>
              </div>

              {/* Experience Item 3 - Left */}
              <div className="relative md:grid md:grid-cols-2 md:gap-8 md:items-center">
                <AnimatedSection delay={0.3} className="md:pr-10">
                  <div className="hidden md:block absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-emerald-500 border-4 border-slate-900 z-10"></div>
                  <div className="md:hidden absolute left-6 transform -translate-x-1/2 w-6 h-6 rounded-full bg-emerald-500 border-4 border-slate-900 z-10"></div>
                  <div className="bg-slate-700 rounded-lg p-5 shadow-lg md:ml-0 ml-12">
                    <div className="flex flex-col mb-2">
                      <h3 className="text-xl font-bold text-emerald-400">Teaching Assistant</h3>
                      <Badge className="mt-2 w-fit bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                        Jan 2022 - May 2022
                      </Badge>
                    </div>
                    <h4 className="text-lg text-slate-200 mb-3">University Name</h4>
                    <ul className="list-disc md:list-none list-inside text-slate-300 space-y-2">
                      <li>Assisted professor in teaching Introduction to Data Science course</li>
                      <li>Conducted weekly lab sessions and office hours</li>
                      <li>Graded assignments and provided feedback to students</li>
                      <li>Developed supplementary learning materials</li>
                    </ul>
                  </div>
                </AnimatedSection>
                <div className="hidden md:block"></div> {/* Empty space for right side */}
              </div>

              {/* Experience Item 4 - Right */}
              <div className="relative md:grid md:grid-cols-2 md:gap-8 md:items-center">
                <div className="hidden md:block"></div> {/* Empty space for left side */}
                <AnimatedSection delay={0.4} className="md:pl-10">
                  <div className="hidden md:block absolute left-0 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-emerald-500 border-4 border-slate-900 z-10"></div>
                  <div className="md:hidden absolute left-6 transform -translate-x-1/2 w-6 h-6 rounded-full bg-emerald-500 border-4 border-slate-900 z-10"></div>
                  <div className="bg-slate-700 rounded-lg p-5 shadow-lg md:ml-0 ml-12">
                    <div className="flex flex-col mb-2">
                      <h3 className="text-xl font-bold text-emerald-400">Data Analyst Intern</h3>
                      <Badge className="mt-2 w-fit bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                        May 2021 - Aug 2021
                      </Badge>
                    </div>
                    <h4 className="text-lg text-slate-200 mb-3">Tech Company Inc.</h4>
                    <ul className="list-disc list-inside text-slate-300 space-y-2">
                      <li>Analyzed user behavior data to identify patterns and trends</li>
                      <li>Created automated reports using SQL and Python</li>
                      <li>Developed dashboards to track key performance indicators</li>
                      <li>Presented findings to stakeholders and made recommendations</li>
                    </ul>
                  </div>
                </AnimatedSection>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

