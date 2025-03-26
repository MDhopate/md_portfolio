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
      title: "Graduate Research Assistant",
      company: "Indiana University",
      location: "Bloomington, IN",
      period: "May 2024 - Present",
      technologies: [
        "Python",
        "GPT-4",
        "Speech Recognition",
        "Speech-To-Text",
        "Text-To-Speech",
        "Pinecone",
        "SQLite",
      ],
      responsibilities: [
        'Collaborated on the development of "Carry," a conversational AI powered by GPT-4, speech recognition, and text-to-speech technologies.',
        "Embedded interview transcripts in Pinecone and SQLite to enable fast, context-aware conversation retrieval.",
        "Contributed to the design of a modular architecture, reducing system latency by 20% and improving response accuracy by 30%.",
        "Addressed input variability challenges through similarity search and adaptive context models, enhancing speech recognition performance by 15%.",
        "The project was showcased in art galleries across Bloomington, IN, and North Carolina, highlighting the fusion of technology and art through interactive, AI-driven exhibits.",
      ],
    },
    {
      title: "Billing Analyst",
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
