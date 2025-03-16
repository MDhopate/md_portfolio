"use client"

import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-slate-950 py-8 border-t border-slate-800">
      <div className="container mx-auto px-4 text-center">
        <p className="text-slate-400">© {new Date().getFullYear()} Your Name. All rights reserved.</p>
        <div className="flex justify-center space-x-4 mt-4">
          <Link href="#" className="text-slate-400 hover:text-emerald-400">
            LinkedIn
          </Link>
          <Link href="#" className="text-slate-400 hover:text-emerald-400">
            GitHub
          </Link>
          <Link href="#" className="text-slate-400 hover:text-emerald-400">
            Twitter
          </Link>
          <Link href="#" className="text-slate-400 hover:text-emerald-400">
            Email
          </Link>
        </div>
      </div>
    </footer>
  )
}

