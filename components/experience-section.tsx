import { Briefcase, Calendar, MapPin } from "lucide-react"
import { AnimatedSection, StaggeredList } from "@/components/animations"
import { Badge } from "@/components/ui/badge"

interface ExperienceItem {
  title: string
  company: string
  location: string
  period: string
  description: string
  skills: string[]
  current?: boolean
}

export function ExperienceSection() {
  const experiences: ExperienceItem[] = [
    {
      title: "Data Science Intern",
      company: "Tech Innovation Labs",
      location: "San Francisco, CA",
      period: "Jun 2023 - Present",
      description:
        "Working on machine learning models to predict customer behavior and improve product recommendations. Developed a Python-based data pipeline that increased processing efficiency by 40%.",
      skills: ["Python", "TensorFlow", "SQL", "AWS"],
      current: true,
    },
    {
      title: "Research Assistant",
      company: "University Data Science Department",
      location: "Boston, MA",
      period: "Sep 2022 - May 2023",
      description:
        "Assisted in research projects focused on natural language processing and sentiment analysis. Contributed to a published paper on text classification techniques.",
      skills: ["Python", "NLTK", "Pandas", "Research Methods"],
    },
    {
      title: "Data Analyst",
      company: "Analytics Consulting Group",
      location: "Chicago, IL",
      period: "May 2021 - Aug 2022",
      description:
        "Analyzed large datasets to extract business insights for clients across various industries. Created interactive dashboards using Tableau to visualize key performance metrics.",
      skills: ["SQL", "Tableau", "Excel", "Statistical Analysis"],
    },
    {
      title: "Junior Business Analyst",
      company: "Global Retail Solutions",
      location: "New York, NY",
      period: "Jan 2020 - Apr 2021",
      description:
        "Supported the analytics team in gathering requirements and preparing reports for retail clients. Helped implement a new reporting system that reduced report generation time by 25%.",
      skills: ["Excel", "Power BI", "Business Analysis", "Retail Analytics"],
    },
  ]

  const experienceItems = experiences.map((exp, index) => (
    <div key={index} className="timeline-item">
      <div className="timeline-marker">
        <div className={`timeline-circle ${exp.current ? "timeline-circle-current" : ""}`}></div>
      </div>
      <div className="timeline-content">
        <div className="bg-card rounded-lg border p-5 shadow-sm transition-all duration-300 hover:shadow-md">
          <div className="mb-2 flex items-center justify-between">
            <h3 className="text-xl font-bold text-primary">{exp.title}</h3>
            <Badge variant={exp.current ? "default" : "outline"} className="ml-2">
              {exp.current ? "Current" : "Past"}
            </Badge>
          </div>
          <div className="mb-4">
            <div className="flex items-center text-muted-foreground">
              <Briefcase className="mr-2 h-4 w-4" />
              <span className="font-medium">{exp.company}</span>
            </div>
            <div className="flex items-center text-muted-foreground">
              <MapPin className="mr-2 h-4 w-4" />
              <span>{exp.location}</span>
            </div>
            <div className="flex items-center text-muted-foreground">
              <Calendar className="mr-2 h-4 w-4" />
              <span>{exp.period}</span>
            </div>
          </div>
          <p className="mb-4 text-muted-foreground">{exp.description}</p>
          <div className="flex flex-wrap gap-2">
            {exp.skills.map((skill, skillIndex) => (
              <Badge key={skillIndex} variant="secondary" className="transition-all duration-300 hover:bg-primary/10">
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </div>
  ))

  return (
    <section id="experience" className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container px-4 md:px-6">
        <AnimatedSection className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Work Experience</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              My professional journey in the field of data science
            </p>
          </div>
        </AnimatedSection>
        <div className="mx-auto max-w-3xl py-12">
          <div className="timeline">
            <StaggeredList baseDelay={0.2} delayIncrement={0.15} direction="up" distance={30}>
              {experienceItems}
            </StaggeredList>
          </div>
        </div>
      </div>
    </section>
  )
}

