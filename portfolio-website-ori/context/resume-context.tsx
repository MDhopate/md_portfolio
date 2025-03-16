"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

interface ResumeContextType {
  resumeFile: File | null
  setResumeFile: (file: File | null) => void
}

const ResumeContext = createContext<ResumeContextType | undefined>(undefined)

export function ResumeProvider({ children }: { children: ReactNode }) {
  const [resumeFile, setResumeFile] = useState<File | null>(null)

  return <ResumeContext.Provider value={{ resumeFile, setResumeFile }}>{children}</ResumeContext.Provider>
}

export function useResumeContext() {
  const context = useContext(ResumeContext)
  if (context === undefined) {
    throw new Error("useResumeContext must be used within a ResumeProvider")
  }
  return context
}

