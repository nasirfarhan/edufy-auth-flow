
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { 
  Sword, 
  Shield, 
  Trophy, 
  ChevronUp, 
  Sparkles, 
  Star, 
  Zap, 
  BookOpen 
} from "lucide-react";
import DashboardLayout from "@/components/layouts/DashboardLayout";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useAuth } from "@/contexts/AuthContext";

const AnimatedText = ({ children }: { children: React.ReactNode }) => {
  return (
    <span className="animate-pulse font-bold text-red-500 flex items-center gap-2">
      <Sparkles size={20} className="text-yellow-400" />
      {children}
      <Sparkles size={20} className="text-yellow-400" />
    </span>
  );
};

const CourseDetail = () => {
  const { courseId } = useParams<{ courseId: string }>();
  const { user } = useAuth();
  const [shopOpen, setShopOpen] = useState(false);

  return (
    <DashboardLayout>
      <div className="flex flex-col min-h-screen bg-[#1d3748] relative">
        <div className="flex flex-1">
          {/* Main Quest Area */}
          <main className="w-3/4 overflow-y-auto p-6">
            <header className="text-center mb-12">
              <h1 className="text-3xl font-bold text-yellow-400">
                {courseId?.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
              </h1>
              <p className="mt-2 text-gray-300 max-w-3xl mx-auto">
                Embark on an epic journey to master this subject! Battle through challenges, 
                conquer bosses, and level up your coding skills. This course transforms complex 
                concepts into engaging quests that will make you a coding champion.
              </p>
            </header>

            {/* Player Stats Section */}
            <div className="bg-[#2e4459] rounded-lg p-4 mb-12 inline-block border border-blue-400/30">
              <div className="text-center">
                <h3 className="text-xl font-bold text-yellow-400">{user?.username}</h3>
                <div className="flex items-center justify-center mt-2">
                  <Zap className="text-yellow-400 mr-2" size={16} />
                  <span className="text-gray-300">XP: 1,250/2,000</span>
                </div>
                <div className="flex items-center justify-center mt-1">
                  <Star className="text-blue-400 mr-2" size={16} />
                  <span className="text-gray-300">Points: 350</span>
                </div>
                <div className="flex items-center justify-center mt-1">
                  <BookOpen className="text-green-400 mr-2" size={16} />
                  <span className="text-gray-300">Level: 7</span>
                </div>
              </div>
            </div>

            {/* Learning Paths */}
            <div className="relative">
              {/* Beginner's Path */}
              <div className="relative mb-32">
                <h2 className="text-3xl font-bold text-yellow-400 mb-8">Beginner's Path</h2>
                <svg width="100%" height="180" viewBox="0 0 1000 180" className="overflow-visible">
                  <path
                    d="M0,90 C200,90 150,-30 300,90 C450,210 500,90 650,90 C800,90 750,-30 950,90 L1000,90 L1000,120 C800,120 850,240 650,120 C450,0 400,120 300,120 C200,120 150,240 0,120 Z"
                    fill="#b87f4c"
                    stroke="#8b5e3c"
                    strokeWidth="2"
                  />
                  
                  {[100, 300, 500, 700, 900].map((x, index) => {
                    const yPos = index % 2 === 0 ? 60 : 120;
                    return (
                      <g key={index} transform={`translate(${x},${yPos})`}>
                        {index > 0 && (
                          <g transform="translate(-30,0)">
                            <rect x="-8" y="-8" width="16" height="16" fill="#22c55e" stroke="#16a34a" strokeWidth="1" transform="rotate(15)" />
                            <rect x="8" y="-8" width="16" height="16" fill="#16a34a" stroke="#15803d" strokeWidth="1" transform="rotate(-15)" />
                          </g>
                        )}
                        
                        <g>
                          <rect x="-15" y="-10" width="30" height="35" fill="#94a3b8" stroke="#64748b" strokeWidth="2" />
                          <polygon points="0,-20 -20,-10 20,-10" fill="#94a3b8" stroke="#64748b" strokeWidth="2" />
                          <rect x="-5" y="5" width="10" height="20" fill="#000" opacity="0.4" />
                        </g>
                      </g>
                    );
                  })}
                  
                  <circle cx="30" cy="90" r="20" fill="#3b82f6" />
                  <text x="30" y="95" fontSize="20" textAnchor="middle" fill="white">🧙‍♂️</text>
                </svg>
              </div>

              {/* Warrior's Trail */}
              <div className="relative mb-32">
                <h2 className="text-3xl font-bold text-yellow-400 mb-8">Warrior's Trail</h2>
                <svg width="100%" height="180" viewBox="0 0 1000 180" className="overflow-visible">
                  <path
                    d="M-50,120 C0,120 0,90 50,90"
                    fill="none"
                    stroke="#78716c"
                    strokeWidth="30"
                  />
                  
                  <path
                    d="M0,90 C200,30 150,150 300,90 C450,30 500,150 650,90 C800,30 750,150 950,90 L1000,90 L1000,120 C800,180 850,60 650,120 C450,180 400,60 300,120 C200,180 150,60 0,120 Z"
                    fill="#78716c"
                    stroke="#57534e"
                    strokeWidth="2"
                  />
                  
                  {[100, 300, 500, 700, 900].map((x, index) => {
                    const yPos = index % 2 === 0 ? 120 : 60;
                    return (
                      <g key={index} transform={`translate(${x},${yPos})`}>
                        {index > 0 && (
                          <rect x="-40" y="-8" width="24" height="8" fill="#6d523c" stroke="#523d2c" strokeWidth="1" transform="rotate(90)" />
                        )}
                        
                        <g>
                          <rect x="-15" y="-10" width="30" height="35" fill="#d6c0a7" stroke="#b39b82" strokeWidth="2" />
                          <polygon points="0,-20 -20,-10 20,-10" fill="#d6c0a7" stroke="#b39b82" strokeWidth="2" />
                          <rect x="-5" y="5" width="10" height="20" fill="#000" opacity="0.4" />
                        </g>
                      </g>
                    );
                  })}
                </svg>
              </div>

              {/* Champion's Road */}
              <div className="relative mb-12">
                <h2 className="text-3xl font-bold text-yellow-400 mb-8">Champion's Road</h2>
                <svg width="100%" height="180" viewBox="0 0 1000 180" className="overflow-visible">
                  <path
                    d="M-50,120 C0,120 0,90 50,90"
                    fill="none"
                    stroke="#1f2937"
                    strokeWidth="30"
                  />
                  
                  <path
                    d="M0,90 C200,150 150,30 300,90 C450,150 500,30 650,90 C800,150 750,30 950,90 L1000,90 L1000,120 C800,60 850,180 650,120 C450,60 400,180 300,120 C200,60 150,180 0,120 Z"
                    fill="#1f2937"
                    stroke="#111827"
                    strokeWidth="2"
                  />
                  
                  {[100, 300, 500, 700, 900].map((x, index) => {
                    const yPos = index % 2 === 0 ? 60 : 120;
                    return (
                      <g key={index} transform={`translate(${x},${yPos})`}>
                        {index > 0 && (
                          <rect x="-40" y="-16" width="24" height="24" fill="#4b5563" stroke="#1f2937" strokeWidth="2" rx="4" />
                        )}
                        
                        <g>
                          <rect x="-15" y="-10" width="30" height="35" fill="#b91c1c" stroke="#991b1b" strokeWidth="2" />
                          <polygon points="0,-20 -20,-10 20,-10" fill="#b91c1c" stroke="#991b1b" strokeWidth="2" />
                          <rect x="-5" y="5" width="10" height="20" fill="#000" opacity="0.4" />
                        </g>
                      </g>
                    );
                  })}
                </svg>
              </div>
            </div>
          </main>

          {/* Special Quest Sidebar */}
          <aside className="w-1/4 fixed right-0 top-0 bottom-0 p-6 bg-[#2e4459] border-l border-[#3a5068] flex flex-col">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2 text-yellow-400">
              <Sword size={24} />
              Special Quest
            </h2>
            
            <div className="text-center mb-4">
              <AnimatedText>BOSS FIGHT</AnimatedText>
            </div>
            
            <p className="text-sm text-gray-300 mb-4">
              Defeat The Final Boss to unlock the next Tier.
            </p>
            
            <div className="relative bg-red-900/20 rounded-lg p-4 border border-red-500/30 mb-4 flex justify-center items-center">
              <div className="w-40 h-40 relative bg-gray-800/80 rounded-full flex items-center justify-center overflow-hidden">
                <span className="text-6xl">👹</span>
                <div className="absolute -top-3 -right-3 bg-red-600 w-8 h-8 rounded-full flex items-center justify-center">
                  <Sword size={16} className="text-white transform rotate-45" />
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4 text-center mb-4">
              <div className="bg-yellow-600/20 rounded-lg p-3 border border-yellow-500/30">
                <Trophy size={24} className="mx-auto text-yellow-400" />
                <p className="text-lg font-bold text-white">500 XP</p>
              </div>
              <div className="bg-blue-600/20 rounded-lg p-3 border border-blue-500/30">
                <Shield size={24} className="mx-auto text-blue-400" />
                <p className="text-lg font-bold text-white">100 Points</p>
              </div>
            </div>
            
            <button className="mt-auto bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg border border-red-500 shadow-lg transition-colors duration-200">
              Start Final Boss Fight
            </button>
          </aside>
        </div>

        {/* Shop Drop-up */}
        <Sheet open={shopOpen} onOpenChange={setShopOpen}>
          <SheetTrigger asChild>
            <button
              className="fixed bottom-4 left-1/2 transform -translate-x-1/2 rounded-full bg-blue-600 hover:bg-blue-700 shadow-lg p-2 z-20"
            >
              <ChevronUp className="h-6 w-6 text-white" />
            </button>
          </SheetTrigger>
          <SheetContent side="bottom" className="bg-[#2e4459] border-t border-blue-800 text-white">
            <div className="p-4">
              <h2 className="text-2xl font-bold mb-4">Shop</h2>
              <p className="text-gray-300 mb-4">Use your hard-earned points to purchase power-ups and special items.</p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  { name: "Power Boost", price: 300, description: "+50% XP gain" },
                  { name: "Shield", price: 200, description: "Skip one obstacle" },
                  { name: "Double Points", price: 500, description: "2x points for next quest" }
                ].map((item) => (
                  <div key={item.name} className="bg-[#364c63] p-4 rounded-lg">
                    <h3 className="font-bold">{item.name}</h3>
                    <p className="text-sm text-gray-300 mb-2">{item.description}</p>
                    <button className="bg-blue-600 hover:bg-blue-700 px-4 py-1 rounded w-full">
                      {item.price} Points
                    </button>
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
