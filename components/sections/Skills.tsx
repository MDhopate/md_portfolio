"use client";

import type React from "react";

import AnimatedSection from "@/components/animated-section";
import { Code, Database, BarChart3, Cloud, Cpu } from "lucide-react";

type SkillCategory = {
  name: string;
  icon: React.ReactNode;
  skills: string[];
};

export default function Skills() {
  const skillCategories: SkillCategory[] = [
    {
      name: "Programming Languages",
      icon: <Code className="h-5 w-5 text-indigo-400" />,
      skills: [
        "Python",
        "SQL (Postgres, MySQL, SQLite)",
        "R",
        "Java",
        "Advanced Microsoft Excel",
        "HTML/CSS/JavaScript",
      ],
    },
    {
      name: "Machine Learning",
      icon: <Cpu className="h-5 w-5 text-indigo-400" />,
      skills: [
        "Data Extraction",
        "Data Transformation",
        "Data Validation",
        "Optimization",
        "Statistical Modeling",
        "ML Algorithms",
        "Neural Networks",
        "NLP",
        "Computer Vision",
        "Generative AI",
      ],
    },
    {
      name: "Data Visualization",
      icon: <BarChart3 className="h-5 w-5 text-indigo-400" />,
      skills: [
        "Tableau",
        "Power BI",
        "Matplotlib",
        "Seaborn",
        "Plotly",
        "D3.js",
        "Altair",
        "Dashboard Design",
      ],
    },
    {
      name: "Cloud & Big Data",
      icon: <Cloud className="h-5 w-5 text-indigo-400" />,
      skills: [
        "AWS (S3, EC2, Amplify)",
        "GCP",
        "Hadoop",
        "Spark",
        "ETL",
        "Snowflake",
        "Oracle",
        "Cassandra",
        "DynamoDB",
        "Neo4j",
      ],
    },
    {
      name: "Data Science Tools",
      icon: <Database className="h-5 w-5 text-indigo-400" />,
      skills: [
        "TensorFlow",
        "PyTorch",
        "Scikit-learn",
        "Pandas",
        "NumPy",
        "BERT",
        "spaCy",
        "Jupyter",
        "Git",
        "Docker",
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="py-20 pt-28 bg-gradient-to-b from-slate-900 to-slate-950"
    >
      <div className="container mx-auto px-4">
        <AnimatedSection className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Technical Skills
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 mx-auto mb-6"></div>
          <p className="text-slate-300 max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise across
            programming languages, data science methodologies, and industry
            tools.
          </p>
        </AnimatedSection>

        <div className="space-y-12 max-w-5xl mx-auto">
          {skillCategories.map((category, index) => (
            <AnimatedSection key={index} delay={0.1 * (index + 1)}>
              <div className="mb-4 flex items-center">
                <div className="mr-3">{category.icon}</div>
                <h3 className="text-xl md:text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
                  {category.name}
                </h3>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="bg-slate-800/50 border border-slate-700 hover:border-indigo-500/30 rounded-lg p-3 text-center text-slate-200 hover:bg-slate-800 transition-all duration-300"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
