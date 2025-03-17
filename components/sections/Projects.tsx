"use client";

import {
  ArrowRight,
  ExternalLink,
  Github,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import AnimatedSection from "@/components/animated-section";
import Image from "next/image";
import { useState } from "react";

// Type for defining a project's skills/technologies
type Skill = {
  name: string;
  color?: string;
};

// Type for project data
type Project = {
  title: string;
  description: string;
  content: string;
  image: string;
  skills: Skill[];
  githubUrl?: string;
  demoUrl?: string;
};

export default function Projects() {
  // Define state for expanded skill sections
  const [expandedSkills, setExpandedSkills] = useState<{
    [key: number]: boolean;
  }>({});

  // Toggle expansion of skills section for a particular project
  const toggleSkillsExpansion = (projectIndex: number) => {
    setExpandedSkills((prev) => ({
      ...prev,
      [projectIndex]: !prev[projectIndex],
    }));
  };

  // Project data
  const projectsData: Project[] = [
    {
      title: "NYC's Vegetarian & Vegan Options",
      description:
        "Interactive dashboard for exploring plant-based dining in NYC",
      content:
        "Developed a web-based dashboard showcasing vegan and vegetarian restaurants in NYC. Collected data via Yelp Fusion API and processed it with Python for analysis and visualization.",
      image: "/assets/images/projects/nyc-vegan.jpg",
      skills: [
        { name: "Python" },
        { name: "Data Visualization" },
        { name: "API Integration" },
        { name: "Data Processing" },
        { name: "Insight Interpretation" },
        { name: "GitHub Pages" },
        { name: "Web Hosting" },
        { name: "JavaScript" },
        { name: "HTML/CSS" },
      ],
      githubUrl: "https://github.com/MDhopate",
      demoUrl: "https://www.datascienceportfol.io/dhopatemalhar/projects/0",
    },
    {
      title: "Job Quest",
      description: "A solution for tracking job applications",
      content:
        "Developed a web-based app using Flask and SQLite to track and manage job applications. Features include adding/updating job details, visualizations, and resources for interview preparation. Implemented secure user authentication and hosted on Render.",
      image: "/assets/images/projects/job-quest.jpg",
      skills: [
        { name: "Python" },
        { name: "Flask" },
        { name: "SQLite" },
        { name: "Web Development" },
        { name: "User Authentication" },
        { name: "Render Hosting" },
      ],
      githubUrl: "https://github.com/MDhopate",
      demoUrl: "https://www.datascienceportfol.io/dhopatemalhar",
    },
    {
      title: "Secure File Transfer",
      description: "A cloud computing approach for secure file sharing",
      content:
        "Developed a cloud-based file-sharing application using React and AWS services to ensure secure file transfer. Leveraged AWS Amplify for user authentication and AWS S3 for encrypted file storage. Features include password-protected sharing, temporary access links, and user-driven encryption.",
      image: "/assets/images/projects/secure-file-transfer.jpg",
      skills: [
        { name: "Cloud Computing" },
        { name: "Web Development" },
        { name: "AWS" },
        { name: "React" },
        { name: "User Authentication" },
        { name: "File Management" },
        { name: "Deployment" },
        { name: "Collaborative Development" },
      ],
      githubUrl: "https://github.com/MDhopate",
      demoUrl: "https://www.datascienceportfol.io/dhopatemalhar",
    },
    {
      title: "Dimensionality Reduction & Image Classification",
      description: "Advanced techniques for image data analysis",
      content:
        "This project explores dimensionality reduction techniques such as PCA, t-SNE, MDS, and LLE to analyze and visualize image data from a custom dataset of rock-paper-scissors images. It includes clustering using K-Means and Gaussian Mixture Models and training a neural network for image classification.",
      image: "/assets/images/projects/dimensionality-reduction.jpg",
      skills: [
        { name: "Python" },
        { name: "TensorFlow" },
        { name: "Neural Networks" },
        { name: "PCA" },
        { name: "t-SNE" },
        { name: "K-Means" },
        { name: "Gaussian Mixture Models" },
        { name: "Image Classification" },
        { name: "Clustering" },
        { name: "Model Training" },
      ],
      githubUrl: "https://github.com/MDhopate",
      demoUrl: "https://www.datascienceportfol.io/dhopatemalhar",
    },
    {
      title: "AI-Powered Chatbot Assistant",
      description: "NLP-based conversational agent with RAG capabilities",
      content:
        "Developed a conversational AI assistant using GPT-4o and Retrieval Augmented Generation (RAG) to provide accurate, context-aware responses. Implemented vector embeddings for efficient document retrieval and integrated speech recognition for voice input handling.",
      image: "/assets/images/projects/ai-chatbot.jpg",
      skills: [
        { name: "Python" },
        { name: "NLP" },
        { name: "LLMs" },
        { name: "RAG" },
        { name: "Vector Embeddings" },
        { name: "Speech Recognition" },
      ],
    },
    {
      title: "Data Processing Pipeline",
      description: "Automated ETL workflow for big data",
      content:
        "Designed and implemented an end-to-end data processing pipeline for handling large datasets. Automated extraction, transformation, and loading processes to improve data quality and accessibility. Integrated with cloud services for scalable processing.",
      image: "/assets/images/projects/data-pipeline.jpg",
      skills: [
        { name: "Python" },
        { name: "SQL" },
        { name: "AWS" },
        { name: "ETL" },
        { name: "Data Quality" },
        { name: "Automation" },
      ],
    },
  ];

  // Maximum number of skills to show before "Show More" button
  const MAX_VISIBLE_SKILLS = 5;

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <AnimatedSection className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Projects</h2>
          <div className="w-20 h-1 bg-emerald-500 mx-auto mb-6"></div>
          <p className="text-slate-300 max-w-2xl mx-auto">
            A showcase of my data science projects, demonstrating my technical
            skills and problem-solving abilities.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectsData.map((project, index) => (
            <AnimatedSection key={index} delay={0.1 * ((index % 3) + 1)}>
              <Card className="bg-slate-700 border-slate-600 h-full flex flex-col rounded-xl">
                <div className="relative h-48">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover rounded-t-xl"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-emerald-400">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-slate-300">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-slate-300 flex-grow">
                  <p>{project.content}</p>
                </CardContent>

                {/* Skills section */}
                <div className="px-6 pb-2 border-t border-slate-600 pt-4">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-sm font-medium text-slate-300">
                      Technologies & Skills
                    </h4>
                    {project.skills.length > MAX_VISIBLE_SKILLS && (
                      <Button
                        variant="ghost"
                        size="sm"
                        className="h-8 px-2 text-slate-300"
                        onClick={() => toggleSkillsExpansion(index)}
                      >
                        {expandedSkills[index] ? (
                          <ChevronUp className="h-4 w-4" />
                        ) : (
                          <ChevronDown className="h-4 w-4" />
                        )}
                      </Button>
                    )}
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.skills
                      .slice(
                        0,
                        expandedSkills[index]
                          ? project.skills.length
                          : MAX_VISIBLE_SKILLS
                      )
                      .map((skill, skillIndex) => (
                        <Badge
                          key={skillIndex}
                          className="bg-slate-800/80 text-emerald-300 border border-slate-700 hover:bg-slate-700/80 text-xs py-1 px-2 whitespace-normal break-words"
                          style={{
                            minHeight: "28px",
                            display: "inline-flex",
                            alignItems: "center",
                          }}
                        >
                          {skill.name}
                        </Badge>
                      ))}
                  </div>

                  {!expandedSkills[index] &&
                    project.skills.length > MAX_VISIBLE_SKILLS && (
                      <div className="text-center mt-2">
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-emerald-400 text-xs hover:text-emerald-300"
                          onClick={() => toggleSkillsExpansion(index)}
                        >
                          +{project.skills.length - MAX_VISIBLE_SKILLS} more
                        </Button>
                      </div>
                    )}
                </div>

                {/* Actions */}
                <CardFooter className="flex p-4 pt-2 gap-2">
                  {project.githubUrl && (
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 rounded-full"
                      onClick={() => window.open(project.githubUrl, "_blank")}
                    >
                      <Github className="mr-2 h-4 w-4" /> Code
                    </Button>
                  )}
                  {project.demoUrl && (
                    <Button
                      size="sm"
                      className="flex-1 bg-emerald-500 hover:bg-emerald-600 rounded-full"
                      onClick={() => window.open(project.demoUrl, "_blank")}
                    >
                      <ExternalLink className="mr-2 h-4 w-4" /> Demo
                    </Button>
                  )}
                </CardFooter>
              </Card>
            </AnimatedSection>
          ))}
        </div>

        <div className="text-center mt-10">
          <Button
            className="bg-emerald-500 hover:bg-emerald-600 rounded-full"
            onClick={() => window.open("https://github.com/MDhopate", "_blank")}
          >
            View More Projects <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
