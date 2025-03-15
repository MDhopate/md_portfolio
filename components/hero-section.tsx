import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Github, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { AnimatedSection, FadeIn } from "@/components/animations"

export function HeroSection() {
  return (
    <section id="home" className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-background overflow-hidden">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <AnimatedSection className="flex flex-col justify-center space-y-4" delay={0.2}>
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Hi, I'm <span className="text-primary">Your Name</span>
              </h1>
              <p className="text-xl text-muted-foreground">Data Science Graduate Student</p>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Transforming complex data into actionable insights. Passionate about machine learning, data
                visualization, and solving real-world problems through data-driven approaches.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button asChild className="group transition-all duration-300 hover:pr-4">
                <Link href="#projects">
                  View My Projects
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="#contact">Contact Me</Link>
              </Button>
            </div>
            <div className="flex items-center gap-4 mt-4">
              <Link
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors hover:scale-110 transition-transform duration-300"
              >
                <Github className="h-6 w-6" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors hover:scale-110 transition-transform duration-300"
              >
                <Linkedin className="h-6 w-6" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </AnimatedSection>
          <FadeIn className="flex items-center justify-center" delay={0.5}>
            <div className="relative aspect-square overflow-hidden rounded-full border-4 border-primary/20 w-[280px] h-[280px] md:w-[350px] md:h-[350px] animate-float">
              <Image src="/placeholder.svg?height=400&width=400" alt="Profile" fill className="object-cover" priority />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}

