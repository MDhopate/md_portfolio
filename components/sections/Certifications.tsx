"use client";

import { Badge } from "@/components/ui/badge";
import AnimatedSection from "@/components/animated-section";
import { Card, CardContent } from "@/components/ui/card";
import { Award, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

// Define a type for certification data
type CertificationItem = {
  name: string;
  organization: string;
  issueDate: string;
  expiryDate?: string;
  credentialId?: string;
  credentialURL?: string;
  skills: string[];
};

export default function Certifications() {
  // Certification data
  const certifications: CertificationItem[] = [
    {
      name: "Machine Learning Specialization",
      organization: "Stanford University",
      issueDate: "March 2023",
      // expiryDate: "June 2025",
      credentialId: "5B50N5K0K7C6",
      credentialURL:
        "https://www.coursera.org/account/accomplishments/specialization/certificate/5B50N5K0K7C6",
      skills: [
        "Logistic Regression",
        "Artificial Neural Network (RNN, CNN)",
        "Linear Regression",
        "Decision Trees",
        "Recommender Systems",
      ],
    },
    {
      name: "TensorFlow Developer Certificate",
      organization: "Google",
      issueDate: "March 2023",
      credentialId: "TF-DEV-2023",
      credentialURL: "https://www.credential.net/example",
      skills: [
        "TensorFlow",
        "Deep Learning",
        "Neural Networks",
        "Computer Vision",
        "NLP",
      ],
    },
    {
      name: "AWS Certified Machine Learning - Specialty",
      organization: "Amazon Web Services",
      issueDate: "January 2023",
      expiryDate: "January 2026",
      credentialId: "AWS-ML-12345",
      credentialURL: "https://aws.amazon.com/certification/verification",
      skills: [
        "AWS SageMaker",
        "Machine Learning",
        "Cloud Computing",
        "Data Engineering",
        "MLOps",
      ],
    },
    {
      name: "Tableau Desktop Specialist",
      organization: "Tableau",
      issueDate: "November 2022",
      credentialId: "TDS-2022-11",
      credentialURL: "https://www.credly.com/badges/example",
      skills: [
        "Data Visualization",
        "Business Intelligence",
        "Dashboard Design",
        "Data Analysis",
      ],
    },
  ];

  return (
    <section
      id="certifications"
      className="py-20 bg-gradient-to-b from-slate-950 to-slate-900"
    >
      <div className="container mx-auto px-4">
        <AnimatedSection className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Certifications
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 mx-auto mb-6"></div>
          <p className="text-slate-300 max-w-2xl mx-auto">
            Professional certifications and credentials that validate my
            expertise in data science and related technologies.
          </p>
        </AnimatedSection>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <AnimatedSection key={index} delay={0.1 * (index + 1)}>
              <Card className="bg-gradient-to-br from-slate-800 to-slate-900 border-slate-700 overflow-hidden rounded-xl hover:shadow-lg hover:shadow-indigo-500/10 transition-all duration-300 h-full">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-indigo-500/20 p-3 rounded-full">
                      <Award className="h-6 w-6 text-indigo-400" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400 mb-1">
                        {cert.name}
                      </h3>
                      <p className="text-slate-300 font-medium">
                        {cert.organization}
                      </p>
                      <div className="flex flex-wrap items-center gap-x-2 text-sm text-slate-400 mt-1">
                        <span>Issued: {cert.issueDate}</span>
                        {cert.expiryDate && (
                          <>
                            <span className="text-slate-600">•</span>
                            <span>Expires: {cert.expiryDate}</span>
                          </>
                        )}
                      </div>

                      {cert.credentialId && (
                        <p className="text-sm text-slate-400 mt-1">
                          Credential ID: {cert.credentialId}
                        </p>
                      )}

                      <div className="flex flex-wrap gap-2 mt-4">
                        {cert.skills.map((skill, skillIndex) => (
                          <Badge
                            key={skillIndex}
                            className="bg-slate-700/80 text-indigo-300 border border-indigo-500/20 hover:bg-slate-700"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>

                      {cert.credentialURL && (
                        <div className="mt-4">
                          <Button
                            variant="outline"
                            size="sm"
                            className="border-indigo-500/30 text-indigo-400 hover:bg-indigo-500/10 rounded-full"
                            onClick={() =>
                              window.open(cert.credentialURL, "_blank")
                            }
                          >
                            <ExternalLink className="mr-2 h-4 w-4" /> Verify
                            Credential
                          </Button>
                        </div>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
