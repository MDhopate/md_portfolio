import Link from "next/link"
import { FileText } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { AnimatedSection, StaggeredList } from "@/components/animations"

export function AboutSection() {
  const educationItems = [
    <Card key="masters" className="transition-all duration-300 hover:shadow-md hover:-translate-y-1">
      <CardContent className="p-4">
        <h4 className="font-semibold">Master of Science in Data Science</h4>
        <p className="text-sm text-muted-foreground">University Name, Expected Graduation: 2024</p>
      </CardContent>
    </Card>,
    <Card key="bachelors" className="transition-all duration-300 hover:shadow-md hover:-translate-y-1">
      <CardContent className="p-4">
        <h4 className="font-semibold">Bachelor of Science in [Your Previous Degree]</h4>
        <p className="text-sm text-muted-foreground">University Name, Graduated: 20XX</p>
      </CardContent>
    </Card>,
  ]

  return (
    <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
      <div className="container px-4 md:px-6">
        <AnimatedSection className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">About Me</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Learn more about my background, interests, and career aspirations
            </p>
          </div>
        </AnimatedSection>
        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
          <AnimatedSection className="space-y-4" delay={0.2}>
            <h3 className="text-2xl font-bold">Academic Background</h3>
            <div className="space-y-2">
              <StaggeredList baseDelay={0.3} delayIncrement={0.1} direction="up" distance={20}>
                {educationItems}
              </StaggeredList>
            </div>
          </AnimatedSection>
          <AnimatedSection className="space-y-4" delay={0.4} direction="left">
            <div className="space-y-2">
              <h3 className="text-2xl font-bold">My Journey</h3>
              <p className="text-muted-foreground">
                I am a passionate data science graduate student with a strong foundation in statistical analysis,
                machine learning, and data visualization. My academic journey has equipped me with the skills to extract
                meaningful insights from complex datasets and develop data-driven solutions.
              </p>
              <p className="text-muted-foreground">
                My research interests include [specific areas of interest, e.g., natural language processing, computer
                vision, predictive analytics]. I aspire to leverage my data science expertise to [your career goals,
                e.g., develop innovative solutions for healthcare, contribute to environmental sustainability efforts,
                etc.].
              </p>
              <div className="pt-4">
                <Button asChild className="group transition-all duration-300">
                  <Link href="/resume.pdf" target="_blank">
                    <FileText className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform duration-300" />
                    View Resume
                  </Link>
                </Button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}

