import { Code, Database, BarChart3, LineChart } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface SkillIconProps {
  name: string;
  icon: "Code" | "Database" | "BarChart3" | "LineChart";
}

export default function SkillIcon({ name, icon }: SkillIconProps) {
  const getIcon = () => {
    switch (icon) {
      case "Code":
        return (
          <Code className="h-3.5 w-3.5 mr-1.5 text-indigo-400 flex-shrink-0" />
        );
      case "Database":
        return (
          <Database className="h-3.5 w-3.5 mr-1.5 text-indigo-400 flex-shrink-0" />
        );
      case "BarChart3":
        return (
          <BarChart3 className="h-3.5 w-3.5 mr-1.5 text-indigo-400 flex-shrink-0" />
        );
      case "LineChart":
        return (
          <LineChart className="h-3.5 w-3.5 mr-1.5 text-indigo-400 flex-shrink-0" />
        );
      default:
        return (
          <Code className="h-3.5 w-3.5 mr-1.5 text-indigo-400 flex-shrink-0" />
        );
    }
  };

  // Determine background color based on icon type for better categorization
  const getBgColor = () => {
    switch (icon) {
      case "Code":
        return "bg-slate-700/90 hover:bg-slate-600/90 border border-indigo-500/20";
      case "Database":
        return "bg-slate-700/90 hover:bg-slate-600/90 border border-indigo-500/20";
      case "BarChart3":
        return "bg-slate-700/90 hover:bg-slate-600/90 border border-indigo-500/20";
      case "LineChart":
        return "bg-slate-700/90 hover:bg-slate-600/90 border border-indigo-500/20";
      default:
        return "bg-slate-700/90 hover:bg-slate-600/90 border border-indigo-500/20";
    }
  };

  return (
    <Badge
      className={`py-2 px-3 text-xs sm:text-sm text-indigo-300 text-center justify-center flex items-center transition-all duration-200 ${getBgColor()} h-auto min-h-[2.5rem] break-words`}
    >
      {getIcon()}
      <span className="line-clamp-2">{name}</span>
    </Badge>
  );
}
