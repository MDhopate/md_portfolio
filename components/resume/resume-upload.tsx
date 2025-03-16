"use client"

import type React from "react"

import { useState } from "react"
import { Upload, Check, AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useResumeContext } from "@/context/resume-context"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export default function ResumeUpload() {
  const { resumeFile, setResumeFile } = useResumeContext()
  const [error, setError] = useState<string | null>(null)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    // Check if file is PDF
    if (file.type !== "application/pdf") {
      setError("Please upload a PDF file")
      return
    }

    // Check file size (max 5MB)
    if (file.size > 5 * 1024 * 1024) {
      setError("File size should be less than 5MB")
      return
    }

    setError(null)
    setResumeFile(file)
  }

  return (
    <Card className="bg-slate-700 border-slate-600">
      <CardHeader>
        <CardTitle className="text-emerald-400">Resume Management</CardTitle>
        <CardDescription className="text-slate-300">
          Upload your resume to make it available for download
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {error && (
          <Alert variant="destructive" className="bg-red-900/20 border-red-900 text-red-300">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}

        {resumeFile ? (
          <div className="flex flex-col space-y-2">
            <Alert className="bg-emerald-900/20 border-emerald-900 text-emerald-300">
              <Check className="h-4 w-4" />
              <AlertTitle>Resume Uploaded</AlertTitle>
              <AlertDescription>
                {resumeFile.name} ({(resumeFile.size / 1024 / 1024).toFixed(2)}MB)
              </AlertDescription>
            </Alert>
            <div className="flex gap-2">
              <Button variant="outline" className="flex-1" onClick={() => setResumeFile(null)}>
                Replace Resume
              </Button>
              <a href={URL.createObjectURL(resumeFile)} download={resumeFile.name} className="flex-1">
                <Button className="w-full bg-emerald-500 hover:bg-emerald-600">Preview Resume</Button>
              </a>
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center p-6 border-2 border-dashed border-slate-600 rounded-lg">
            <Upload className="h-10 w-10 text-slate-400 mb-2" />
            <p className="text-slate-300 mb-4">Drag and drop your resume or click to browse</p>
            <label htmlFor="resume-upload">
              <Button className="bg-emerald-500 hover:bg-emerald-600" type="button">
                Upload Resume (PDF)
              </Button>
              <input id="resume-upload" type="file" accept=".pdf" className="hidden" onChange={handleFileChange} />
            </label>
          </div>
        )}
      </CardContent>
    </Card>
  )
}

