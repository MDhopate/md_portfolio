"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import AnimatedSection from "@/components/animated-section"
import SkillIcon from "@/components/skill-icon"

export default function Skills() {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <AnimatedSection className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Skills</h2>
          <div className="w-20 h-1 bg-emerald-500 mx-auto mb-6"></div>
          <p className="text-slate-300 max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise across programming languages, data science methodologies,
            and industry tools.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <Tabs defaultValue="all" className="w-full max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-5 bg-slate-800 rounded-lg p-1">
              <TabsTrigger value="all" className="data-[state=active]:bg-emerald-500 data-[state=active]:text-white">
                All
              </TabsTrigger>
              <TabsTrigger
                value="programming"
                className="data-[state=active]:bg-emerald-500 data-[state=active]:text-white"
              >
                Programming
              </TabsTrigger>
              <TabsTrigger
                value="datascience"
                className="data-[state=active]:bg-emerald-500 data-[state=active]:text-white"
              >
                Data Science
              </TabsTrigger>
              <TabsTrigger value="tools" className="data-[state=active]:bg-emerald-500 data-[state=active]:text-white">
                Tools & Frameworks
              </TabsTrigger>
              <TabsTrigger
                value="visualization"
                className="data-[state=active]:bg-emerald-500 data-[state=active]:text-white"
              >
                Visualization
              </TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="mt-6">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                <SkillIcon name="Python" icon="Code" />
                <SkillIcon name="R" icon="Code" />
                <SkillIcon name="SQL" icon="Database" />
                <SkillIcon name="JavaScript" icon="Code" />
                <SkillIcon name="Java" icon="Code" />
                <SkillIcon name="Machine Learning" icon="LineChart" />
                <SkillIcon name="Deep Learning" icon="LineChart" />
                <SkillIcon name="NLP" icon="LineChart" />
                <SkillIcon name="Data Visualization" icon="BarChart3" />
                <SkillIcon name="Statistical Analysis" icon="LineChart" />
                <SkillIcon name="Tableau" icon="BarChart3" />
                <SkillIcon name="Power BI" icon="BarChart3" />
                <SkillIcon name="TensorFlow" icon="LineChart" />
                <SkillIcon name="PyTorch" icon="LineChart" />
                <SkillIcon name="Scikit-learn" icon="LineChart" />
                <SkillIcon name="Pandas" icon="Database" />
                <SkillIcon name="NumPy" icon="Database" />
                <SkillIcon name="Git" icon="Code" />
                <SkillIcon name="Docker" icon="Code" />
                <SkillIcon name="Jupyter" icon="Code" />
              </div>
            </TabsContent>

            <TabsContent value="programming" className="mt-6">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                <SkillIcon name="Python" icon="Code" />
                <SkillIcon name="R" icon="Code" />
                <SkillIcon name="SQL" icon="Database" />
                <SkillIcon name="JavaScript" icon="Code" />
                <SkillIcon name="Java" icon="Code" />
                <SkillIcon name="C++" icon="Code" />
                <SkillIcon name="HTML/CSS" icon="Code" />
                <SkillIcon name="Git" icon="Code" />
                <SkillIcon name="Shell Scripting" icon="Code" />
              </div>
            </TabsContent>

            <TabsContent value="datascience" className="mt-6">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                <SkillIcon name="Machine Learning" icon="LineChart" />
                <SkillIcon name="Deep Learning" icon="LineChart" />
                <SkillIcon name="NLP" icon="LineChart" />
                <SkillIcon name="Statistical Analysis" icon="LineChart" />
                <SkillIcon name="Predictive Modeling" icon="LineChart" />
                <SkillIcon name="Time Series Analysis" icon="LineChart" />
                <SkillIcon name="A/B Testing" icon="LineChart" />
                <SkillIcon name="Feature Engineering" icon="LineChart" />
                <SkillIcon name="Data Mining" icon="Database" />
                <SkillIcon name="Clustering" icon="LineChart" />
                <SkillIcon name="Classification" icon="LineChart" />
                <SkillIcon name="Regression" icon="LineChart" />
              </div>
            </TabsContent>

            <TabsContent value="tools" className="mt-6">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                <SkillIcon name="TensorFlow" icon="LineChart" />
                <SkillIcon name="PyTorch" icon="LineChart" />
                <SkillIcon name="Scikit-learn" icon="LineChart" />
                <SkillIcon name="Pandas" icon="Database" />
                <SkillIcon name="NumPy" icon="Database" />
                <SkillIcon name="Jupyter" icon="Code" />
                <SkillIcon name="Docker" icon="Code" />
                <SkillIcon name="Kubernetes" icon="Code" />
                <SkillIcon name="AWS" icon="Code" />
                <SkillIcon name="Spark" icon="Database" />
                <SkillIcon name="Hadoop" icon="Database" />
                <SkillIcon name="Keras" icon="LineChart" />
                <SkillIcon name="Git" icon="Code" />
                <SkillIcon name="SPSS" icon="LineChart" />
              </div>
            </TabsContent>

            <TabsContent value="visualization" className="mt-6">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                <SkillIcon name="Tableau" icon="BarChart3" />
                <SkillIcon name="Power BI" icon="BarChart3" />
                <SkillIcon name="Matplotlib" icon="BarChart3" />
                <SkillIcon name="Seaborn" icon="BarChart3" />
                <SkillIcon name="Plotly" icon="BarChart3" />
                <SkillIcon name="D3.js" icon="BarChart3" />
                <SkillIcon name="ggplot2" icon="BarChart3" />
                <SkillIcon name="Dash" icon="BarChart3" />
                <SkillIcon name="Bokeh" icon="BarChart3" />
              </div>
            </TabsContent>
          </Tabs>
        </AnimatedSection>
      </div>
    </section>
  )
}

