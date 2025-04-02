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
      title: "Exploring NYC's Vegetarian and Vegan Options",
      description:
        "Interactive dashboard for exploring plant-based dining in NYC",
      content:
        "Developed a web-based dashboard showcasing vegan and vegetarian restaurants in NYC. Collected data via Yelp Fusion API and processed it with Python for analysis and visualization. Designed charts and filters to explore restaurant locations, cuisines, and borough demographics. Hosted on GitHub Pages.",
      image: "https://wrjsdmdf7btr7q6u.public.blob.vercel-storage.com/Data%20Viz-wRm12pjwBvs4nlBPV9A9F0bShAEj0s.jpg",
      skills: [
        { name: "Python" },
        { name: "Data Visualization" },
        { name: "API Integration" },
        { name: "Data Processing" },
        { name: "Insight Interpretation" },
        { name: "GitHub Pages" },
        { name: "Web Hosting" },
      ],
      githubUrl: "https://github.com/MDhopate",
      demoUrl: "https://www.datascienceportfol.io/dhopatemalhar/projects/0",
    },
    {
      title: "Job Quest - A Solution for Tracking Job Applications",
      description: "Web application for managing job search process",
      content:
        "Developed a web-based app using Flask and SQLite to track and manage job applications. Features include adding/updating job details, visualizations, and resources for interview preparation. Implemented secure user authentication and hosted on Render, overcoming challenges in database integration.",
      image: "/assets/images/projects/job-quest.jpg",
      skills: [
        { name: "Python" },
        { name: "Flask" },
        { name: "SQLite" },
        { name: "Data Visualization" },
        { name: "Web Development" },
        { name: "API Integration" },
        { name: "User Authentication" },
        { name: "Render Hosting" },
      ],
      githubUrl: "https://github.com/MDhopate",
      demoUrl: "https://www.datascienceportfol.io/dhopatemalhar/projects/1",
    },
    {
      title: "A Cloud Computing Approach for Secure File Transfer",
      description: "Cloud-based secure file sharing application",
      content:
        "Developed a cloud-based file-sharing application using React and AWS services to ensure secure file transfer. Leveraged AWS Amplify for user authentication and AWS S3 for encrypted file storage. Features include password-protected sharing, temporary access links, and user-driven encryption.",
      image: "/assets/images/projects/secure-file-transfer.jpg",
      skills: [
        { name: "Cloud Computing" },
        { name: "Web Development" },
        { name: "Secure Data Transfer" },
        { name: "User Authentication" },
        { name: "API Integration" },
        { name: "File Management" },
        { name: "Deployment" },
        { name: "Collaborative Development" },
      ],
      githubUrl: "https://github.com/MDhopate",
      demoUrl: "https://www.datascienceportfol.io/dhopatemalhar/projects/2",
    },
    {
      title: "Dimensionality Reduction and Image Classification",
      description: "Advanced techniques for image data analysis",
      content:
        "This project explores dimensionality reduction techniques such as PCA, t-SNE, MDS, and LLE to analyze and visualize image data from a custom dataset of rock-paper-scissors images. It includes clustering using K-Means and Gaussian Mixture Models and training a neural network for image classification.",
      image: "/assets/images/projects/dimensionality-reduction.jpg",
      skills: [
        { name: "Python" },
        { name: "TensorFlow" },
        { name: "Scikit-learn" },
        { name: "PCA" },
        { name: "t-SNE" },
        { name: "Dimensionality Reduction" },
        { name: "K-Means" },
        { name: "Gaussian Mixture Models" },
        { name: "Neural Networks" },
        { name: "Image Classification" },
        { name: "Data Visualization" },
        { name: "Clustering" },
        { name: "Model Training" },
      ],
      githubUrl: "https://github.com/MDhopate",
      demoUrl: "https://www.datascienceportfol.io/dhopatemalhar/projects/3",
    },
    {
      title: "Image Classification with Pretrained and Custom CNN Models",
      description: "Building effective image classification models",
      content:
        "This project builds an image classification pipeline using a custom dataset of 4 classes (Cacti, Succulents, Trees, Plants). The data was preprocessed, augmented, and split into training, validation, and test sets. Pretrained VGG16 models and custom CNNs were trained to identify the best model.",
      image: "/assets/images/projects/image-classification.jpg",
      skills: [
        { name: "Python" },
        { name: "TensorFlow" },
        { name: "Keras" },
        { name: "Image Classification" },
        { name: "CNN" },
        { name: "Data Collection" },
        { name: "Preprocessing" },
        { name: "Model Optimization" },
        { name: "Hyperparameter Tuning" },
        { name: "Visualization" },
        { name: "Performance Evaluation" },
      ],
      githubUrl: "https://github.com/MDhopate",
      demoUrl: "https://www.datascienceportfol.io/dhopatemalhar/projects/4",
    },
    {
      title: "Text Classification Using Fine-Tuned DistilBERT",
      description: "NLP model for binary text classification",
      content:
        "This project fine-tunes DistilBERT for binary text classification using a custom dataset of Tech and Sports text. It involves data preprocessing, tokenization, and hyperparameter tuning. Insights - overfitting challenges and emphasize the need for diverse training data to improve generalization.",
      image: "/assets/images/projects/text-classification.jpg",
      skills: [
        { name: "Python" },
        { name: "Transformers" },
        { name: "DistilBERT" },
        { name: "Text Preprocessing" },
        { name: "Binary Text Classification" },
        { name: "Hyperparameter Tuning" },
        { name: "Data Splitting" },
        { name: "Model Evaluation" },
        { name: "Visualization" },
        { name: "Overfitting Mitigation" },
      ],
      githubUrl: "https://github.com/MDhopate",
      demoUrl: "https://www.datascienceportfol.io/dhopatemalhar/projects/5",
    },
    {
      title: "Mapping Malnutrition Data – Tableau Dashboard",
      description: "Interactive visualization of global malnutrition metrics",
      content:
        "This interactive dashboard visualizes malnutrition metrics across regions, showcasing prevalence, trends, and key indicators. With geospatial analysis and interactive filters, it empowers users to identify priority areas for intervention through clear and actionable insights.",
      image: "/assets/images/projects/malnutrition-dashboard.jpg",
      skills: [
        { name: "Tableau" },
        { name: "Data Visualization" },
        { name: "Data Analysis" },
        { name: "Insight Generation" },
      ],
      demoUrl: "https://www.datascienceportfol.io/dhopatemalhar/projects/6",
    },
    {
      title: "Michelin Restaurants and Japan's Culinary Map",
      description: "Visualization of global Michelin-starred restaurants",
      content:
        "This Tableau dashboard offers a global overview of Michelin-starred restaurants, with a focused visualization of Japan's culinary excellence. It includes a Culinary Map of regional specialties and a Subway Map connecting culinary hubs, providing an interactive way to explore Michelin-starred dining.",
      image: "/assets/images/projects/michelin-restaurants.jpg",
      skills: [
        { name: "Tableau" },
        { name: "Data Visualization" },
        { name: "Geospatial Analysis" },
        { name: "Interactive Dashboard Design" },
        { name: "Data Storytelling" },
        { name: "Culinary Data Analysis" },
      ],
      demoUrl: "https://www.datascienceportfol.io/dhopatemalhar/projects/7",
    },
    {
      title: "University Donor Contributions Dashboard",
      description: "Analysis of university fundraising performance",
      content:
        "This Tableau dashboard analyzes university donor contributions, focusing on metrics like - pledge amounts by degree, top donors, fund types, and faculty-specific KPIs. It highlights trends and insights into donor behavior and fund allocation, offering a comprehensive view of fundraising performance.",
      image: "/assets/images/projects/donor-dashboard.jpg",
      skills: [
        { name: "Tableau" },
        { name: "Data Visualization" },
        { name: "Interactive Dashboard Design" },
        { name: "Data Analysis" },
        { name: "Insight Generation" },
        { name: "Fundraising Analytics" },
      ],
      demoUrl: "https://www.datascienceportfol.io/dhopatemalhar/projects/8",
    },
    {
      title: "Top Media Consumption Dashboard",
      description: "Analysis of media consumption patterns and preferences",
      content:
        "This Tableau dashboard analyzes media consumption patterns, highlighting top artists, genres, and albums based on hours spent. It provides a detailed breakdown of preferences across music, TV shows, and genres, offering insights into audience behavior and trends.",
      image: "/assets/images/projects/media-dashboard.jpg",
      skills: [
        { name: "Tableau" },
        { name: "Data Visualization" },
        { name: "Media Analytics" },
        { name: "Interactive Dashboard Design" },
        { name: "Insight Generation" },
        { name: "Audience Behavior Analysis" },
      ],
      demoUrl: "https://www.datascienceportfol.io/dhopatemalhar/projects/9",
    },
  ];

  // Maximum number of skills to show before "Show More" button
  const MAX_VISIBLE_SKILLS = 5;

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <AnimatedSection className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Projects</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 mx-auto mb-6"></div>
          <p className="text-slate-300 max-w-2xl mx-auto">
            A showcase of my data science projects, demonstrating my technical
            skills and problem-solving abilities.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {projectsData.map((project, index) => (
            <AnimatedSection key={index} delay={0.1 * ((index % 3) + 1)}>
              <Card className="bg-gradient-to-br from-slate-800 to-slate-900 border-slate-700 h-full flex flex-col rounded-xl hover:shadow-lg hover:shadow-indigo-500/10 transition-all duration-300 transform hover:-translate-y-1">
                <div className="relative h-48 overflow-hidden rounded-t-xl">
                  <Image
                    src={
                      project.image || "/placeholder.svg?height=200&width=400"
                    }
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-60"></div>
                </div>
                <CardHeader className="pb-2">
                  <CardTitle className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-slate-300">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-slate-300 flex-grow pb-2">
                  <p className="line-clamp-3">{project.content}</p>
                </CardContent>

                {/* Skills section */}
                <div className="px-6 pb-2 pt-2">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-sm font-medium text-slate-300">
                      Technologies & Skills
                    </h4>
                    {project.skills.length > MAX_VISIBLE_SKILLS && (
                      <Button
                        variant="ghost"
                        size="sm"
                        className="h-8 px-2 text-slate-300 hover:text-indigo-300 hover:bg-slate-800/50"
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
                          className="bg-slate-700/80 text-indigo-300 border border-indigo-500/20 hover:bg-slate-700 text-xs py-1 px-2 whitespace-normal break-words"
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
                          className="text-indigo-400 text-xs hover:text-indigo-300"
                          onClick={() => toggleSkillsExpansion(index)}
                        >
                          +{project.skills.length - MAX_VISIBLE_SKILLS} more
                        </Button>
                      </div>
                    )}
                </div>

                {/* Actions */}
                <CardFooter className="flex p-4 pt-2 gap-2 mt-auto">
                  {project.githubUrl && (
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 rounded-full border-indigo-500/30 text-indigo-400 hover:bg-indigo-500/10"
                      onClick={() => window.open(project.githubUrl, "_blank")}
                    >
                      <Github className="mr-2 h-4 w-4" /> Code
                    </Button>
                  )}
                  {project.demoUrl && (
                    <Button
                      size="sm"
                      className="flex-1 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white"
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
            className="rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white px-6 py-2"
            onClick={() => window.open("https://github.com/MDhopate", "_blank")}
          >
            View More Projects <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
