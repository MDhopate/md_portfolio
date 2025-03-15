import { BarChart2, Database, Code, LineChart, BrainCircuit, Users, MessageSquare, Lightbulb } from "lucide-react"
import { AnimatedSection, StaggeredList } from "@/components/animations"

export function SkillsSection() {
  const technicalSkills = [
    {
      name: "Data Analysis",
      icon: <BarChart2 className="h-8 w-8 text-primary" />,
      description: "Python, R, SQL, Pandas, NumPy, Data Cleaning & Transformation",
    },
    {
      name: "Machine Learning",
      icon: <BrainCircuit className="h-8 w-8 text-primary" />,
      description: "Scikit-learn, TensorFlow, PyTorch, Supervised & Unsupervised Learning",
    },
    {
      name: "Data Visualization",
      icon: <LineChart className="h-8 w-8 text-primary" />,
      description: "Matplotlib, Seaborn, Plotly, Tableau, Power BI",
    },
    {
      name: "Programming",
      icon: <Code className="h-8 w-8 text-primary" />,
      description: "Python, R, SQL, JavaScript, Git",
    },
  ]

  const softSkills = [
    {
      name: "Team Collaboration",
      icon: <Users className="h-8 w-8 text-primary" />,
      description: "Effective teamwork in cross-functional environments",
    },
    {
      name: "Communication",
      icon: <MessageSquare className="h-8 w-8 text-primary" />,
      description: "Clear presentation of complex data insights to non-technical stakeholders",
    },
    {
      name: "Problem Solving",
      icon: <Lightbulb className="h-8 w-8 text-primary" />,
      description: "Analytical thinking and creative solution development",
    },
    {
      name: "Database Management",
      icon: <Database className="h-8 w-8 text-primary" />,
      description: "SQL, NoSQL, Data Modeling, ETL Processes",
    },
  ]

  const technicalSkillItems = technicalSkills.map((skill, index) => (
    <div
      key={index}
      className="flex flex-col items-center space-y-2 rounded-lg border p-4 transition-all hover:border-primary hover:shadow-md hover:-translate-y-1 duration-300"
    >
      <div className="transition-transform duration-300 hover:scale-110">{skill.icon}</div>
      <h4 className="text-xl font-semibold">{skill.name}</h4>
      <p className="text-center text-sm text-muted-foreground">{skill.description}</p>
    </div>
  ))

  const softSkillItems = softSkills.map((skill, index) => (
    <div
      key={index}
      className="flex flex-col items-center space-y-2 rounded-lg border p-4 transition-all hover:border-primary hover:shadow-md hover:-translate-y-1 duration-300"
    >
      <div className="transition-transform duration-300 hover:scale-110">{skill.icon}</div>
      <h4 className="text-xl font-semibold">{skill.name}</h4>
      <p className="text-center text-sm text-muted-foreground">{skill.description}</p>
    </div>
  ))

  return (
    <section id="skills" className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container px-4 md:px-6">
        <AnimatedSection className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Skills & Experience</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              My technical expertise and professional capabilities
            </p>
          </div>
        </AnimatedSection>
        <div className="mx-auto grid max-w-5xl gap-8 py-12">
          <AnimatedSection className="space-y-4" delay={0.2}>
            <h3 className="text-2xl font-bold">Technical Skills</h3>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              <StaggeredList baseDelay={0.3} delayIncrement={0.1} direction="up" distance={20}>
                {technicalSkillItems}
              </StaggeredList>
            </div>
          </AnimatedSection>
          <AnimatedSection className="space-y-4" delay={0.6}>
            <h3 className="text-2xl font-bold">Soft Skills & Other Expertise</h3>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              <StaggeredList baseDelay={0.7} delayIncrement={0.1} direction="up" distance={20}>
                {softSkillItems}
              </StaggeredList>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}

