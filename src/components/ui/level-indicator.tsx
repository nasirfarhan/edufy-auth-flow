
import { Progress } from "@/components/ui/progress";

interface LevelIndicatorProps {
  level: number;
  maxLevel?: number;
  progress?: number;
}

export function LevelIndicator({ 
  level, 
  maxLevel = 100, 
  progress = 65 
}: LevelIndicatorProps) {
  return (
    <div className="flex flex-col items-center w-24">
      <div className="flex items-center justify-between w-full mb-1">
        <span className="text-xs text-blue-300 font-medium">Level {level}</span>
        <span className="text-xs text-blue-300">{progress}%</span>
      </div>
      <Progress 
        value={progress} 
        className="h-1.5 bg-blue-900/40" 
      />
    </div>
  );
}
