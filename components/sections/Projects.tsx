"use client"

import { ArrowRight, ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import AnimatedSection from "@/components/animated-section"
import Image from "next/image"

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <AnimatedSection className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Projects</h2>
          <div className="w-20 h-1 bg-emerald-500 mx-auto mb-6"></div>
          <p className="text-slate-300 max-w-2xl mx-auto">
            A showcase of my data science projects, demonstrating my technical skills and problem-solving abilities.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Project 1 */}
          <AnimatedSection delay={0.1}>
            <Card className="bg-slate-700 border-slate-600 h-full flex flex-col overflow-hidden">
              <div className="relative h-48">
                <Image src="/assets/images/projects/project1.jpg" alt="Project 1" fill className="object-cover" />
              </div>
              <CardHeader>
                <CardTitle className="text-emerald-400">Predictive Analytics Dashboard</CardTitle>
                <CardDescription className="text-slate-300">
                  A machine learning-powered dashboard for sales forecasting
                </CardDescription>
              </CardHeader>
              <CardContent className="text-slate-300 flex-grow">
                <p>
                  Developed a comprehensive dashboard that uses historical sales data to predict future trends.
                  Implemented multiple ML algorithms and visualization techniques.
                </p>
              </CardContent>
              <CardFooter className="flex gap-2 border-t border-slate-600 pt-4">
                <Badge className="bg-slate-800/80 text-emerald-300 border border-slate-700 hover:bg-slate-700/80">
                  Python
                </Badge>
                <Badge className="bg-slate-800/80 text-emerald-300 border border-slate-700 hover:bg-slate-700/80">
                  Scikit-learn
                </Badge>
                <Badge className="bg-slate-800/80 text-emerald-300 border border-slate-700 hover:bg-slate-700/80">
                  Tableau
                </Badge>
              </CardFooter>
              <div className="flex p-4 pt-0 gap-2">
                <Button variant="outline" size="sm" className="flex-1">
                  <Github className="mr-2 h-4 w-4" /> Code
                </Button>
                <Button size="sm" className="flex-1 bg-emerald-500 hover:bg-emerald-600">
                  <ExternalLink className="mr-2 h-4 w-4" /> Demo
                </Button>
              </div>
            </Card>
          </AnimatedSection>

          {/* Project 2 */}
          <AnimatedSection delay={0.2}>
            <Card className="bg-slate-700 border-slate-600 h-full flex flex-col overflow-hidden">
              <div className="relative h-48">
                <Image src="/assets/images/projects/project2.jpg" alt="Project 2" fill className="object-cover" />
              </div>
              <CardHeader>
                <CardTitle className="text-emerald-400">NLP Sentiment Analyzer</CardTitle>
                <CardDescription className="text-slate-300">
                  A tool for analyzing sentiment in customer reviews
                </CardDescription>
              </CardHeader>
              <CardContent className="text-slate-300 flex-grow">
                <p>
                  Built a natural language processing model that analyzes customer reviews and classifies them by
                  sentiment. Achieved 92% accuracy on test data.
                </p>
              </CardContent>
              <CardFooter className="flex gap-2 border-t border-slate-600 pt-4">
                <Badge className="bg-slate-800/80 text-emerald-300 border border-slate-700 hover:bg-slate-700/80">
                  Python
                </Badge>
                <Badge className="bg-slate-800/80 text-emerald-300 border border-slate-700 hover:bg-slate-700/80">
                  NLTK
                </Badge>
                <Badge className="bg-slate-800/80 text-emerald-300 border border-slate-700 hover:bg-slate-700/80">
                  TensorFlow
                </Badge>
              </CardFooter>
              <div className="flex p-4 pt-0 gap-2">
                <Button variant="outline" size="sm" className="flex-1">
                  <Github className="mr-2 h-4 w-4" /> Code
                </Button>
                <Button size="sm" className="flex-1 bg-emerald-500 hover:bg-emerald-600">
                  <ExternalLink className="mr-2 h-4 w-4" /> Demo
                </Button>
              </div>
            </Card>
          </AnimatedSection>

          {/* Additional projects follow the same pattern... */}
        </div>

        <div className="text-center mt-10">
          <Button
            className="bg-emerald-500 hover:bg-emerald-600"
            onClick={() => window.open("https://github.com/yourusername", "_blank")}
          >
            View More Projects <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}

