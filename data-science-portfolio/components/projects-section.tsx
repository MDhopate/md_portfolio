import Image from "next/image"
import Link from "next/link"
import { ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { AnimatedSection, StaggeredList } from "@/components/animations"

export function ProjectsSection() {
  const projects = [
    {
      title: "Predictive Analytics Dashboard",
      description:
        "A machine learning-powered dashboard that forecasts business metrics and visualizes trends for decision-making.",
      image: "/placeholder.svg?height=300&width=600",
      tags: ["Python", "Scikit-learn", "Plotly", "Streamlit"],
      demoLink: "https://demo-link.com",
      githubLink: "https://github.com/yourusername/project-name",
    },
    {
      title: "Natural Language Processing Tool",
      description:
        "A text analysis tool that performs sentiment analysis, entity recognition, and topic modeling on large text datasets.",
      image: "/placeholder.svg?height=300&width=600",
      tags: ["Python", "NLTK", "spaCy", "TensorFlow"],
      demoLink: "https://demo-link.com",
      githubLink: "https://github.com/yourusername/project-name",
    },
    {
      title: "Customer Segmentation Analysis",
      description:
        "Clustering algorithm implementation to identify customer segments for targeted marketing strategies.",
      image: "/placeholder.svg?height=300&width=600",
      tags: ["Python", "K-means", "Pandas", "Matplotlib"],
      demoLink: "https://demo-link.com",
      githubLink: "https://github.com/yourusername/project-name",
    },
    {
      title: "Time Series Forecasting Model",
      description: "Advanced time series model for predicting future values based on historical data patterns.",
      image: "/placeholder.svg?height=300&width=600",
      tags: ["Python", "ARIMA", "Prophet", "Pandas"],
      demoLink: "https://demo-link.com",
      githubLink: "https://github.com/yourusername/project-name",
    },
  ]

  const projectItems = projects.map((project, index) => (
    <Card key={index} className="overflow-hidden transition-all duration-300 hover:shadow-lg">
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      <CardHeader>
        <CardTitle>{project.title}</CardTitle>
        <CardDescription>{project.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag, tagIndex) => (
            <Badge
              key={tagIndex}
              variant="secondary"
              className="transition-all duration-300 hover:bg-primary hover:text-primary-foreground"
            >
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline" size="sm" asChild className="group transition-all duration-300">
          <Link href={project.githubLink} target="_blank" rel="noopener noreferrer">
            <Github className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform duration-300" />
            Code
          </Link>
        </Button>
        <Button size="sm" asChild className="group transition-all duration-300">
          <Link href={project.demoLink} target="_blank" rel="noopener noreferrer">
            <ExternalLink className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform duration-300" />
            Live Demo
          </Link>
        </Button>
      </CardFooter>
    </Card>
  ))

  return (
    <section id="projects" className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
      <div className="container px-4 md:px-6">
        <AnimatedSection className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Featured Projects</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Explore my data science projects and applications
            </p>
          </div>
        </AnimatedSection>
        <div className="mx-auto grid max-w-5xl gap-8 py-12 sm:grid-cols-2 lg:gap-12">
          <StaggeredList baseDelay={0.3} delayIncrement={0.2} direction="up" distance={30}>
            {projectItems}
          </StaggeredList>
        </div>
      </div>
    </section>
  )
}

