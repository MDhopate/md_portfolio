"use client";

import { Badge } from "@/components/ui/badge";
import AnimatedSection from "@/components/animated-section";

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
                      <h3 className="text-xl font-bold text-emerald-400">
                        Gen AI/NLP Research Assistant
                      </h3>
                    </div>
                    <h4 className="text-lg text-slate-200 mb-3">
                      IU College of Arts and Sciences
                    </h4>
                    <Badge className="mt-2 w-fit bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                      May 2024 - May 2025
                    </Badge>

                    <ul className="list-disc md:list-none list-inside text-slate-300 space-y-2">
                      <li>
                        Designed an AI Assistant, using Retrieval Augmented
                        Generation(RAG) and GPT-4o for natural language
                        processing and response generation, and Speech
                        Recognition for voice input handling.
                      </li>
                      <li>
                        Created a modular NLP pipeline that reduced latency by
                        20% & improved response accuracy by 30%.
                      </li>
                      <li>
                        Automated audio transcription with embeddings, improving
                        speech recognition accuracy by 15%.
                      </li>
                      <li>
                        Implemented real-time inactivity monitoring to reduce
                        idle session errors by 80%.
                      </li>
                    </ul>
                  </div>
                </AnimatedSection>
                <div className="hidden md:block"></div>{" "}
                {/* Empty space for right side */}
              </div>

              {/* Experience Item 2 - Right */}
              <div className="relative md:grid md:grid-cols-2 md:gap-8 md:items-center">
                <div className="hidden md:block"></div>{" "}
                {/* Empty space for left side */}
                <AnimatedSection delay={0.2} className="md:pl-10">
                  <div className="hidden md:block absolute left-0 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-emerald-500 border-4 border-slate-900 z-10"></div>
                  <div className="md:hidden absolute left-6 transform -translate-x-1/2 w-6 h-6 rounded-full bg-emerald-500 border-4 border-slate-900 z-10"></div>
                  <div className="bg-slate-700 rounded-lg p-5 shadow-lg md:ml-0 ml-12">
                    <div className="flex flex-col mb-2">
                      <h3 className="text-xl font-bold text-emerald-400">
                        Billing Analyst
                      </h3>
                      <Badge className="mt-2 w-fit bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                        Aug 2021 - Apr 2023
                      </Badge>
                    </div>
                    <h4 className="text-lg text-slate-200 mb-3">
                      Nationwide Automotive Services
                    </h4>
                    <ul className="list-disc list-inside text-slate-300 space-y-2">
                      <li>
                        Optimized billing by implementing VBA automation,
                        boosting efficiency by 35% & cutting billing time by
                        70%.
                      </li>
                      <li>
                        Reduced overdue accounts by $900,000 through
                        individualized payment plans for clients.
                      </li>
                      <li>
                        Trained & led a 5 people team, resulting in a 50%
                        improvement in billing & enhancement in customer
                        relationships.
                      </li>
                      <li>
                        Designed Tableau dashboards for monthly financial
                        reporting, enabling self-service analytics.
                      </li>
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
                      <h3 className="text-xl font-bold text-emerald-400">
                        Data Analyst
                      </h3>
                      <Badge className="mt-2 w-fit bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                        Jan 2021 - May 2021
                      </Badge>
                    </div>
                    <h4 className="text-lg text-slate-200 mb-3">
                      Lynn University
                    </h4>
                    <ul className="list-disc md:list-none list-inside text-slate-300 space-y-2">
                      <li>
                        Built SQL queries & automated data transformation
                        pipelines, cutting data preparation time by 30%.
                      </li>
                      <li>
                        Created 10+ dashboards tracking enrollment & retention,
                        improving student retention rates by 10%.
                      </li>
                      <li>
                        Utilized hypothesis testing & trend analysis techniques
                        to guide policy decisions & resource allocation.
                      </li>
                    </ul>
                  </div>
                </AnimatedSection>
                <div className="hidden md:block"></div>{" "}
                {/* Empty space for right side */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
