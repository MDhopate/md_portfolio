import { Code, Database, BarChart3, LineChart } from "lucide-react"
import { Badge } from "@/components/ui/badge"

interface SkillIconProps {
  name: string
  icon: "Code" | "Database" | "BarChart3" | "LineChart"
}

export default function SkillIcon({ name, icon }: SkillIconProps) {
  const getIcon = () => {
    switch (icon) {
      case "Code":
        return <Code className="h-4 w-4 mr-2 text-emerald-400" />
      case "Database":
        return <Database className="h-4 w-4 mr-2 text-emerald-400" />
      case "BarChart3":
        return <BarChart3 className="h-4 w-4 mr-2 text-emerald-400" />
      case "LineChart":
        return <LineChart className="h-4 w-4 mr-2 text-emerald-400" />
      default:
        return <Code className="h-4 w-4 mr-2 text-emerald-400" />
    }
  }

  // Determine background color based on icon type for better categorization
  const getBgColor = () => {
    switch (icon) {
      case "Code":
        return "bg-slate-700/90 hover:bg-slate-600 border border-slate-600"
      case "Database":
        return "bg-slate-700/90 hover:bg-slate-600 border border-slate-600"
      case "BarChart3":
        return "bg-slate-700/90 hover:bg-slate-600 border border-slate-600"
      case "LineChart":
        return "bg-slate-700/90 hover:bg-slate-600 border border-slate-600"
      default:
        return "bg-slate-700/90 hover:bg-slate-600 border border-slate-600"
    }
  }

  return (
    <Badge className={`py-3 px-4 text-white text-center justify-center flex items-center ${getBgColor()}`}>
      {getIcon()}
      {name}
    </Badge>
  )
}

