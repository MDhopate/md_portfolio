"use client"

import { useState } from "react"
import { Settings } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import ResumeUpload from "@/components/resume/resume-upload"

export default function AdminPanel() {
  const [open, setOpen] = useState(false)

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button size="icon" className="rounded-full bg-emerald-500 hover:bg-emerald-600 h-12 w-12 shadow-lg">
            <Settings className="h-6 w-6" />
            <span className="sr-only">Open admin panel</span>
          </Button>
        </SheetTrigger>
        <SheetContent className="bg-slate-800 border-slate-700 text-slate-100">
          <SheetHeader>
            <SheetTitle className="text-emerald-400">Portfolio Admin</SheetTitle>
            <SheetDescription className="text-slate-300">Manage your portfolio content and settings</SheetDescription>
          </SheetHeader>
          <div className="mt-6 space-y-6">
            <ResumeUpload />
            {/* Add more admin features here */}
          </div>
        </SheetContent>
      </Sheet>
    </div>
  )
}

