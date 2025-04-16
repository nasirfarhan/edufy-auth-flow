
import { useState } from "react";
import { useParams } from "react-router-dom";
import { Award, ChevronUp, Star, Trophy, User } from "lucide-react";
import DashboardLayout from "@/components/layouts/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useAuth } from "@/contexts/AuthContext";

const CourseDetail = () => {
  const { courseId } = useParams<{ courseId: string }>();
  const { user } = useAuth();
  const [shopOpen, setShopOpen] = useState(false);

  // Mock course data based on courseId
  const courseData = {
    title: courseId?.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ') || "Unknown Course",
    description: "This advanced course covers all aspects of this technology from basic concepts to expert techniques. You'll learn through hands-on projects and challenging exercises designed to build your skills progressively.",
    tasks: [
      { id: 1, name: "Introduction", completed: true, checkpoint: "Basic House", tier: "beginner" },
      { id: 2, name: "Core Concepts", completed: true, checkpoint: "Basic House", tier: "beginner" },
      { id: 3, name: "Advanced Techniques", completed: false, checkpoint: "Stone House", tier: "intermediate" },
      { id: 4, name: "Project Implementation", completed: false, checkpoint: "Stone House", tier: "intermediate" },
      { id: 5, name: "Expert Challenges", completed: false, checkpoint: "Brick House", tier: "advanced" },
    ],
    bossInfo: {
      name: "Final Challenge Boss",
      image: "https://placehold.co/200x200?text=Boss",
      xpReward: 500,
      pointsReward: 250
    }
  };

  return (
    <DashboardLayout>
      <div className="container mx-auto px-4 py-8 relative">
        {/* Player Info Section */}
        <div className="flex justify-between mb-6">
          <div className="flex flex-col items-center bg-[#172c3a] p-4 rounded-lg shadow-lg border border-blue-800/30 w-48">
            <div className="w-16 h-16 rounded-full bg-blue-500 flex items-center justify-center mb-2">
              <User className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-white">{user?.username}</h3>
            
            <div className="mt-2 w-full">
              <div className="flex items-center mb-1">
                <Star className="w-4 h-4 text-yellow-400 mr-1" />
                <span className="text-sm text-blue-300">XP: 1,250</span>
              </div>
              
              <div className="flex items-center mb-1">
                <Trophy className="w-4 h-4 text-yellow-400 mr-1" />
                <span className="text-sm text-blue-300">Points: 750</span>
              </div>
              
              <div className="flex items-center">
                <Award className="w-4 h-4 text-yellow-400 mr-1" />
                <span className="text-sm text-blue-300">Level: 3</span>
              </div>
            </div>
          </div>
          
          {/* Course Header */}
          <div className="flex-1 mx-10">
            <h1 className="text-3xl font-bold text-white mb-3">{courseData.title}</h1>
            <p className="text-gray-300 mb-6 max-w-2xl line-clamp-4">{courseData.description}</p>
          </div>
        </div>
        
        <div className="flex mt-6">
          {/* Learning Path Section */}
          <div className="w-3/4 pr-6 max-h-[70vh] overflow-y-auto scrollbar-none">
            <h2 className="text-xl font-bold text-white mb-4">Learning Path</h2>
            
            <div className="relative pl-10">
              {/* Path line */}
              <div className="absolute left-5 top-0 bottom-0 w-1 bg-gradient-to-b from-green-500 via-yellow-500 to-red-500"></div>
              
              {courseData.tasks.map((task, index) => {
                let roadClass = "";
                let checkpointClass = "";
                let obstacleClass = "";
                
                if (task.tier === "beginner") {
                  roadClass = "bg-yellow-900/50";
                  checkpointClass = "bg-stone-300";
                  obstacleClass = "bg-green-700";
                } else if (task.tier === "intermediate") {
                  roadClass = "bg-stone-600/70";
                  checkpointClass = "bg-stone-400";
                  obstacleClass = "bg-brown-500";
                } else if (task.tier === "advanced") {
                  roadClass = "bg-stone-800";
                  checkpointClass = "bg-stone-600";
                  obstacleClass = "bg-gray-700";
                }
                
                return (
                  <div key={task.id} className="mb-10 relative">
                    {/* Checkpoint */}
                    <div className={`absolute left-0 top-0 transform -translate-x-1/2 w-10 h-10 ${checkpointClass} rounded-full flex items-center justify-center z-10 ${task.completed ? 'border-2 border-green-500' : ''}`}>
                      {task.completed ? (
                        <span className="text-green-500 font-bold">✓</span>
                      ) : (
                        <span className="text-white font-bold">{task.id}</span>
                      )}
                    </div>
                    
                    {/* Task Card */}
                    <div className={`ml-8 ${roadClass} p-4 rounded-lg shadow-lg border border-blue-800/30`}>
                      <h3 className="text-lg font-semibold text-white">{task.name}</h3>
                      <p className="text-sm text-gray-300 mb-2">Checkpoint: {task.checkpoint}</p>
                      
                      {!task.completed && (
                        <div className={`mt-2 h-4 w-24 ${obstacleClass} rounded-full opacity-70`}></div>
                      )}
                      
                      <Button 
                        className={`mt-4 ${task.completed ? 'bg-green-600 hover:bg-green-700' : 'bg-blue-600 hover:bg-blue-700'}`}
                        disabled={index > 0 && !courseData.tasks[index-1].completed}
                      >
                        {task.completed ? 'Completed' : 'Start Task'}
                      </Button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          
          {/* Special Quest Sidebar */}
          <div className="w-1/4 bg-[#172c3a] border-l border-blue-800 h-[calc(100vh-15rem)]">
            <div className="p-4">
              <h2 className="text-xl font-bold text-white border-b border-blue-800 pb-2 mb-4">Special Quest</h2>
              
              <div className="animate-pulse">
                <h3 className="text-2xl font-bold text-red-500 mb-3">Boss Fight</h3>
              </div>
              
              <p className="text-gray-300 mb-4">Defeat The Final Boss to unlock the next Tier.</p>
              
              <div className="mb-4 flex justify-center">
                <img 
                  src="https://placehold.co/200x200?text=Boss" 
                  alt="Boss" 
                  className="w-full max-w-[200px] h-auto rounded-lg shadow-lg border border-red-800"
                />
              </div>
              
              <div className="mb-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-yellow-300">XP Reward:</span>
                  <span className="text-sm text-yellow-300 font-bold">{courseData.bossInfo.xpReward}</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-yellow-300">Points Reward:</span>
                  <span className="text-sm text-yellow-300 font-bold">{courseData.bossInfo.pointsReward}</span>
                </div>
              </div>
              
              <Button 
                className="w-full bg-red-600 hover:bg-red-700 text-white"
              >
                Start Final Boss Fight
              </Button>
            </div>
          </div>
        </div>
        
        {/* Shop Drop-up */}
        <Sheet open={shopOpen} onOpenChange={setShopOpen}>
          <SheetTrigger asChild>
            <Button
              className="fixed bottom-4 left-1/2 transform -translate-x-1/2 rounded-full bg-blue-600 hover:bg-blue-700 shadow-lg p-2 z-20"
              variant="outline"
            >
              <ChevronUp className="h-6 w-6 text-white" />
            </Button>
          </SheetTrigger>
          <SheetContent side="bottom" className="bg-[#172c3a] border-t border-blue-800 text-white">
            <div className="p-4">
              <h2 className="text-2xl font-bold mb-4">Shop</h2>
              <p className="text-gray-300 mb-4">Use your hard-earned points to purchase advanced courses and special items.</p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {["Premium Course", "Special Item", "Rare Badge"].map((item, i) => (
                  <div key={i} className="bg-[#1d3748] p-4 rounded-lg border border-blue-800/30">
                    <h3 className="text-lg font-semibold mb-2">{item}</h3>
                    <p className="text-sm text-gray-300 mb-4">A special item that will enhance your learning experience.</p>
                    <div className="flex justify-between items-center">
                      <span className="text-yellow-300 font-bold">500 Points</span>
                      <Button size="sm" className="bg-blue-600 hover:bg-blue-700">Buy</Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </DashboardLayout>
  );
};

export default CourseDetail;
