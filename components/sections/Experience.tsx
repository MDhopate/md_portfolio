"use client";

import { Badge } from "@/components/ui/badge";
import AnimatedSection from "@/components/animated-section";
import { Card, CardContent } from "@/components/ui/card";

// Define a type for experience data
type ExperienceItem = {
  title: string;
  company: string;
  location: string;
  period: string;
  technologies: string[];
  responsibilities: string[];
};

export default function Experience() {
  // Experience data
  const experiences: ExperienceItem[] = [
    {
      title: "Finance Intern - Process Automation",
      company: "Hoerbiger Service Inc.",
      location: "Deerfield Beach, FL",
      period: "May 2025",
      technologies: ["SAP", "Celonis", "Power Automate", "Microsoft Suite"],
      responsibilities: [
        "Automated financial reports for the Controller, reducing preparation time by extbf{85%} & improving forecast accuracy.",
        "Built Advanced Macros & Power Automate workflows to eliminate manual data consolidation, saving 30+ hrs weekly for the finance team.",
        "Leveraged process mining to analyze SAP workflows, identify inefficiencies, & recommend changes increasing reporting speed by 35%.",
        "Partnered with finance leadership to enhance budget tracking, enabling faster & more informed strategic decisions.",
      ],
    },
    {
      title: "Gen AI/NLP Research Assistant",
      company: "IU College of Arts & Sciences",
      location: "Bloomington, IN",
      period: "May 2024 - April 2025",
      technologies: [
        "LangChain",
        "ChromaDB",
        "Python",
        "SQLite",
        "RAG",
        "Speech Recognition",
        "Speech-To-Text",
        "Text-To-Speech",
        "Pinecone",
        "SQLite",
      ],
      responsibilities: [
        "Developed & deployed an end-to-end NLP pipeline using Pinecone,  & VAD for real-time conversations.",

        "Set up a Retrieval-Augmented Generation (RAG) system with speech input, vector search & response generation.",

        "Designed consent-aware architecture using SQLite for ethical model training on community-driven narratives.",

        "Analyzed 150+ user interactions to optimize model prompts & reduce idle session errors by 80%.",
      ],
    },
    {
      title: "Data Analyst",
      company: "Nationwide Automotive Services",
      location: "Boca Raton, FL",
      period: "Aug 2021 - Apr 2023",
      technologies: [
        "Excel VBA",
        "Process Automation",
        "Workday",
        "Data Visualization",
        "Client Communication",
      ],
      responsibilities: [
        "Optimized billing processes by implementing Excel VBA macros, reducing billing time by 30% and improving overall efficiency by 25%.",
        "Managed a database of over 200,000 records, ensuring accuracy and accessibility, and achieved a 75% reduction in overdue accounts through effective client follow-ups and customized payment plans.",
        "Led a team of five to enhance billing accuracy by 50%, streamlining invoice creation and improving customer relationship management.",
      ],
    },
    {
      title: "Data Analyst",
      company: "Lynn University",
      location: "Boca Raton, FL",
      period: "Jan 2021 - May 2021",
      technologies: ["R", "Tableau", "Excel", "Python"],
      responsibilities: [
        "Analyzed incoming student data using R, Python, and Excel to generate actionable insights that informed marketing strategies.",
        "Designed interactive Tableau dashboards to monitor user engagement and identified key trends for the incoming class of 2025, directly contributing to the development of targeted marketing materials.",
      ],
    },
    {
      title: "Certified Peer Leader",
      company: "Lynn University",
      location: "Boca Raton, FL",
      period: "Aug 2019 - May 2021",
      technologies: [
        "Student Engagement",
        "Event Coordination",
        "Mentorship",
        "Communication",
      ],
      responsibilities: [
        "Supported incoming freshmen in their transition to college life by facilitating ice-breaker sessions and delivering practical strategies during Welcome Weekend, fostering an inclusive and welcoming environment.",
        "Organized and hosted social events, including College Life seminars, to promote personal and academic development.",
        "Provided freshmen with essential resources and techniques to navigate campus life successfully, enhancing their sense of belonging and preparedness for university challenges.",
      ],
    },
    {
      title: "Student Ambassador",
      company: "Lynn University",
      location: "Boca Raton, FL",
      period: "Apr 2019 - Jan 2021",
      technologies: [
        "Video Production",
        "Marketing Logistics",
        "Event Preparation",
        "Team Training",
        "Communication",
      ],
      responsibilities: [
        "Managed and coordinated the production of personalized videos for prospective, admitted, and incoming students, leveraging data-driven approaches to enhance engagement and strengthen connections with the university.",
        "Optimized logistics and inventory of promotional materials, ensuring accurate tracking and timely shipment to students, admission counselors, and partner organizations.",
        "Developed customized marketing packets for over 50 admission representatives, enabling their successful participation in global tours, school visits, and education fairs.",
        "Led the onboarding and training of new Student Ambassadors, standardizing office procedures and daily operations to improve efficiency and foster a collaborative team environment.",
      ],
    },
  ];

  return (
    <section
      id="experience"
      className="py-20 bg-gradient-to-b from-slate-900 to-slate-950"
    >
      <div className="container mx-auto px-4">
        <AnimatedSection className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 mx-auto mb-6"></div>
          <p className="text-slate-300 max-w-2xl mx-auto">
            My professional journey in the field of data science and analytics.
          </p>
        </AnimatedSection>

        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <AnimatedSection key={index} delay={0.1 * (index + 1)}>
              <Card className="bg-gradient-to-br from-slate-800 to-slate-900 border-slate-700 overflow-hidden rounded-xl hover:shadow-lg hover:shadow-indigo-500/10 transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                    <div>
                      <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
                        {exp.title}
                      </h3>
                      <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-2 mt-1">
                        <h4 className="text-lg text-slate-200">
                          {exp.company}
                        </h4>
                        <span className="hidden md:inline text-slate-400">
                          •
                        </span>
                        <p className="text-sm text-slate-400">{exp.location}</p>
                      </div>
                    </div>
                    <Badge className="w-fit bg-indigo-500/20 text-indigo-400 border border-indigo-500/30 px-3 py-1 text-sm">
                      {exp.period}
                    </Badge>
                  </div>

                  <div className="flex flex-wrap gap-2 mt-4">
                    {exp.technologies.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        className="bg-slate-700/80 text-indigo-300 border border-indigo-500/20 hover:bg-slate-700"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="mt-4">
                    <ul className="space-y-2">
                      {exp.responsibilities.map((resp, respIndex) => (
                        <li
                          key={respIndex}
                          className="text-slate-300 pl-5 relative"
                        >
                          <span className="absolute left-0 top-2 w-2 h-2 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"></span>
                          {resp}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
