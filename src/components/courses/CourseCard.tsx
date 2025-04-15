
import { Progress } from "@/components/ui/progress";

interface CourseCardProps {
  title: string;
  description: string;
  progress: number;
  showProgress?: boolean;
}

const CourseCard = ({ 
  title, 
  description, 
  progress, 
  showProgress = true 
}: CourseCardProps) => {
  return (
    <div 
      className="flex-shrink-0 w-72 bg-[#172c3a] rounded-lg overflow-hidden shadow-lg border border-blue-800/30 hover:shadow-xl hover:transform hover:scale-105 transition-all duration-300"
    >
      <div className="h-32 bg-gradient-to-r from-blue-800 to-purple-700 flex items-center justify-center">
        <span className="text-2xl font-bold text-white">{title.charAt(0)}</span>
      </div>
      
      <div className="p-4">
        <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
        <p className="text-gray-300 text-sm mb-3 line-clamp-2 h-10">{description}</p>
        
        {showProgress && (
          <div className="mt-2">
            <div className="flex justify-between mb-1">
              <span className="text-xs text-blue-300">Progress</span>
              <span className="text-xs text-blue-300">{progress}%</span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>
        )}
      </div>
    </div>
  );
};

export default CourseCard;
