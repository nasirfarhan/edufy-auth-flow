
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ChevronUp } from "lucide-react";
import TaskNode from "@/components/game/TaskNode";
import BossNode from "@/components/game/BossNode";
import PlayerStats from "@/components/game/PlayerStats";
import SpecialQuest from "@/components/game/SpecialQuest";
import { useToast } from "@/components/ui/use-toast";
import "../styles/roadmap.css";
import { APP_DEV_TASKS, BOSS_QUESTIONS } from "@/constants/gameAssets";

const tiers = [
  { id: 1, name: "Unblooded", pathClass: "bronze-path" },
  { id: 2, name: "Warborn", pathClass: "iron-path" },
  { id: 3, name: "Doomseeker", pathClass: "steel-path" },
  { id: 4, name: "Deathless", pathClass: "obsidian-path" },
  { id: 5, name: "Thrice-Forged", pathClass: "gold-path" },
];

const generateTasks = () => {
  const tasks = [];
  
  for (let tier = 0; tier < 5; tier++) {
    const tierTasks = APP_DEV_TASKS[tier];
    
    for (let taskNum = 0; taskNum < 9; taskNum++) {
      const taskId = tier * 10 + taskNum + 1;
      
      tasks.push({
        id: taskId,
        tier: tier,
        title: tierTasks[taskNum].title,
        content: tierTasks[taskNum].content,
        question: tierTasks[taskNum].question,
        isCompleted: false,
        isLocked: tier > 0 || taskNum > 0,
      });
    }
    
    const bossId = (tier + 1) * 10;
    
    tasks.push({
      id: bossId,
      tier: tier,
      title: `${tiers[tier].name} Final Boss`,
      questions: BOSS_QUESTIONS[tier],
      isDefeated: false,
    });
  }
  
  return tasks;
};

const CourseDetail = () => {
  const { courseId } = useParams<{ courseId: string }>();
  const { user } = useAuth();
  const { toast } = useToast();
  
  const [shopOpen, setShopOpen] = useState(false);
  const [playerStats, setPlayerStats] = useState({
    name: user?.username || "Player",
    xp: 0,
    points: 0,
    level: 1
  });
  
  const [tasks, setTasks] = useState(generateTasks());
  const [userTier, setUserTier] = useState(0);
  const [currentTaskId, setCurrentTaskId] = useState(1);
  
  // Find the first incomplete, unlocked task
  useEffect(() => {
    const firstIncompleteTask = tasks.find(
      task => !task.isCompleted && !task.isLocked && !task.hasOwnProperty('questions')
    );
    
    if (firstIncompleteTask) {
      setCurrentTaskId(firstIncompleteTask.id);
    }
  }, [tasks]);
  
  const getNextBossLevel = () => {
    const nextBoss = tasks
      .filter(task => task.hasOwnProperty('questions'))
      .find(boss => !boss.isDefeated);
    
    return nextBoss ? tiers[nextBoss.tier].name as 'Unblooded' | 'Warborn' | 'Doomseeker' | 'Deathless' | 'Thrice-Forged' : 'Thrice-Forged';
  };
  
  const handleTaskComplete = (taskId: number) => {
    setTasks(prevTasks => 
      prevTasks.map(task => 
        task.id === taskId 
          ? { ...task, isCompleted: true } 
          : task
      )
    );
    
    const currentTaskIndex = tasks.findIndex(task => task.id === taskId);
    if (currentTaskIndex >= 0 && currentTaskIndex < tasks.length - 1) {
      setTasks(prevTasks => 
        prevTasks.map((task, index) => 
          index === currentTaskIndex + 1 
            ? { ...task, isLocked: false } 
            : task
        )
      );
      
      // Update current task to the next one
      setCurrentTaskId(tasks[currentTaskIndex + 1].id);
    }
    
    const xpGained = 100;
    const pointsGained = 10;
    updatePlayerStats(xpGained, pointsGained);
    
    toast({
      title: "Task Completed!",
      description: `You gained ${xpGained} XP and ${pointsGained} points.`,
      variant: "default",
    });
  };
  
  const handleBossComplete = (bossId: number, score: number) => {
    if (score >= 8) {
      setTasks(prevTasks => 
        prevTasks.map(task => 
          task.id === bossId 
            ? { ...task, isDefeated: true } 
            : task
        )
      );
      
      const nextTierFirstTaskId = bossId + 1;
      setTasks(prevTasks => 
        prevTasks.map(task => 
          task.id === nextTierFirstTaskId 
            ? { ...task, isLocked: false } 
            : task
        )
      );
      
      // Update current task to the next tier's first task
      setCurrentTaskId(nextTierFirstTaskId);
      
      const bossTier = Math.floor(bossId / 10) - 1;
      if (userTier === bossTier) {
        setUserTier(prevTier => prevTier + 1);
      }
      
      const xpGained = score * 100;
      const pointsGained = score * 10;
      updatePlayerStats(xpGained, pointsGained);
      
      toast({
        title: "Boss Defeated!",
        description: `You gained ${xpGained} XP and ${pointsGained} points and unlocked the next tier!`,
        variant: "default",
      });
    }
  };
  
  const updatePlayerStats = (xpGained: number, pointsGained: number) => {
    setPlayerStats(prev => {
      const newXP = prev.xp + xpGained;
      const newPoints = prev.points + pointsGained;
      
      const newLevel = Math.floor(newXP / 500) + 1;
      
      return {
        ...prev,
        xp: newXP,
        points: newPoints,
        level: newLevel
      };
    });
  };
  
  const handleBossFight = () => {
    const nextBoss = tasks
      .filter(task => task.hasOwnProperty('questions'))
      .find(boss => !boss.isDefeated);
    
    if (nextBoss) {
      const bossElement = document.getElementById(`boss-${nextBoss.id}`);
      if (bossElement) {
        bossElement.click();
      } else {
        toast({
          title: "Boss Not Found",
          description: "Could not find the next boss to fight.",
          variant: "destructive",
        });
      }
    }
  };
  
  const spendPointsForRetry = () => {
    if (playerStats.points >= 5) {
      setPlayerStats(prev => ({
        ...prev,
        points: prev.points - 5
      }));
      
      return true;
    } else {
      toast({
        title: "Not Enough Points",
        description: "You need 5 points to retry this question.",
        variant: "destructive",
      });
      
      return false;
    }
  };

  const formattedCourseTitle = courseId 
    ? courseId.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ') 
    : 'Course';
  
  return (
    <div className="flex flex-col min-h-screen bg-[#1d3748] font-['Pixel Sans Serif']">
      <div className="flex flex-1">
        <div className="w-1/4 p-6 flex flex-col space-y-6">
          <PlayerStats 
            name={playerStats.name}
            xp={playerStats.xp}
            points={playerStats.points}
            level={playerStats.level}
          />
          <SpecialQuest 
            nextBossLevel={getNextBossLevel()}
            onBossFight={handleBossFight}
          />
        </div>
        
        <main className="w-3/4 overflow-y-auto p-6">
          <header className="text-center mb-12">
            <h1 className="text-3xl font-bold text-yellow-400">
              {formattedCourseTitle}
            </h1>
            <p className="mt-2 text-gray-300 max-w-3xl mx-auto">
              (But You Gotta Fight Through It)
            </p>
            <p className="mt-2 text-gray-300 max-w-3xl mx-auto">
              Embark on an epic journey to master this subject! Battle through challenges, 
              conquer bosses, and level up your coding skills. This course transforms complex 
              concepts into engaging quests that will make you a coding champion.
            </p>
          </header>

          <div className="relative mt-16 pr-12 pb-24">
            <div className="relative mb-16">
              <h2 className="text-3xl font-bold text-yellow-400 mb-8">Unblooded Path</h2>
              <div className="flex items-center">
                <div className="player-avatar mr-8">
                  {currentTaskId === 1 && (
                    <img src="/lovable-uploads/0d2cdc65-3535-4199-83c5-ffdc16d24efd.png" alt="Player Character" className="w-full h-full object-contain" />
                  )}
                </div>
                
                {tasks
                  .filter(task => task.tier === 0 && !task.hasOwnProperty('questions'))
                  .map((task, index) => (
                    <React.Fragment key={task.id}>
                      <div 
                        className="mr-8"
                        id={`task-${task.id}`}
                      >
                        <TaskNode 
                          id={task.id}
                          tier="bronze"
                          title={task.title}
                          isCompleted={task.isCompleted}
                          isLocked={task.isLocked}
                          content={task.content}
                          question={task.question}
                          onComplete={handleTaskComplete}
                          isCurrentTask={currentTaskId === task.id}
                        />
                      </div>
                      {index < 8 && <div className="bronze-path w-8 h-2 mr-8"></div>}
                    </React.Fragment>
                  ))}
              </div>
              
              <div className="flex flex-col items-center ml-20 mt-4">
                <div className="bronze-path w-2 h-12"></div>
                <div 
                  id={`boss-${10}`}
                  className="mt-4"
                >
                  <BossNode 
                    id={10}
                    tier="bronze"
                    title="Unblooded"
                    isDefeated={tasks.find(t => t.id === 10)?.isDefeated || false}
                    questions={tasks.find(t => t.id === 10)?.questions || []}
                    onComplete={handleBossComplete}
                  />
                </div>
              </div>
            </div>
            
            <div className="relative mb-16">
              <h2 className="text-3xl font-bold text-yellow-400 mb-8">Warborn Path</h2>
              <div className="flex items-center">
                {tasks
                  .filter(task => task.tier === 1 && !task.hasOwnProperty('questions'))
                  .map((task, index) => (
                    <React.Fragment key={task.id}>
                      <div 
                        className="mr-8"
                        id={`task-${task.id}`}
                      >
                        <TaskNode 
                          id={task.id}
                          tier="iron"
                          title={task.title}
                          isCompleted={task.isCompleted}
                          isLocked={task.isLocked}
                          content={task.content}
                          question={task.question}
                          onComplete={handleTaskComplete}
                          isCurrentTask={currentTaskId === task.id}
                        />
                      </div>
                      {index < 8 && <div className="iron-path w-8 h-2 mr-8"></div>}
                    </React.Fragment>
                  ))}
              </div>
              
              <div className="flex flex-col items-center ml-20 mt-4">
                <div className="iron-path w-2 h-12"></div>
                <div 
                  id={`boss-${20}`}
                  className="mt-4"
                >
                  <BossNode 
                    id={20}
                    tier="iron"
                    title="Warborn"
                    isDefeated={tasks.find(t => t.id === 20)?.isDefeated || false}
                    questions={tasks.find(t => t.id === 20)?.questions || []}
                    onComplete={handleBossComplete}
                  />
                </div>
              </div>
            </div>
            
            <div className="relative mb-16">
              <h2 className="text-3xl font-bold text-yellow-400 mb-8">Doomseeker Path</h2>
              <div className="flex items-center">
                {tasks
                  .filter(task => task.tier === 2 && !task.hasOwnProperty('questions'))
                  .map((task, index) => (
                    <React.Fragment key={task.id}>
                      <div 
                        className="mr-8"
                        id={`task-${task.id}`}
                      >
                        <TaskNode 
                          id={task.id}
                          tier="steel"
                          title={task.title}
                          isCompleted={task.isCompleted}
                          isLocked={task.isLocked}
                          content={task.content}
                          question={task.question}
                          onComplete={handleTaskComplete}
                          isCurrentTask={currentTaskId === task.id}
                        />
                      </div>
                      {index < 8 && <div className="steel-path w-8 h-2 mr-8"></div>}
                    </React.Fragment>
                  ))}
              </div>
              
              <div className="flex flex-col items-center ml-20 mt-4">
                <div className="steel-path w-2 h-12"></div>
                <div 
                  id={`boss-${30}`}
                  className="mt-4"
                >
                  <BossNode 
                    id={30}
                    tier="steel"
                    title="Doomseeker"
                    isDefeated={tasks.find(t => t.id === 30)?.isDefeated || false}
                    questions={tasks.find(t => t.id === 30)?.questions || []}
                    onComplete={handleBossComplete}
                  />
                </div>
              </div>
            </div>
            
            <div className="relative mb-16">
              <h2 className="text-3xl font-bold text-yellow-400 mb-8">Deathless Path</h2>
              <div className="flex items-center">
                {tasks
                  .filter(task => task.tier === 3 && !task.hasOwnProperty('questions'))
                  .map((task, index) => (
                    <React.Fragment key={task.id}>
                      <div 
                        className="mr-8"
                        id={`task-${task.id}`}
                      >
                        <TaskNode 
                          id={task.id}
                          tier="obsidian"
                          title={task.title}
                          isCompleted={task.isCompleted}
                          isLocked={task.isLocked}
                          content={task.content}
                          question={task.question}
                          onComplete={handleTaskComplete}
                          isCurrentTask={currentTaskId === task.id}
                        />
                      </div>
                      {index < 8 && <div className="obsidian-path w-8 h-2 mr-8"></div>}
                    </React.Fragment>
                  ))}
              </div>
              
              <div className="flex flex-col items-center ml-20 mt-4">
                <div className="obsidian-path w-2 h-12"></div>
                <div 
                  id={`boss-${40}`}
                  className="mt-4"
                >
                  <BossNode 
                    id={40}
                    tier="obsidian"
                    title="Deathless"
                    isDefeated={tasks.find(t => t.id === 40)?.isDefeated || false}
                    questions={tasks.find(t => t.id === 40)?.questions || []}
                    onComplete={handleBossComplete}
                  />
                </div>
              </div>
            </div>
            
            <div className="relative">
              <h2 className="text-3xl font-bold text-yellow-400 mb-8">Thrice-Forged Path</h2>
              <div className="flex items-center">
                {tasks
                  .filter(task => task.tier === 4 && !task.hasOwnProperty('questions'))
                  .map((task, index) => (
                    <React.Fragment key={task.id}>
                      <div 
                        className="mr-8"
                        id={`task-${task.id}`}
                      >
                        <TaskNode 
                          id={task.id}
                          tier="gold"
                          title={task.title}
                          isCompleted={task.isCompleted}
                          isLocked={task.isLocked}
                          content={task.content}
                          question={task.question}
                          onComplete={handleTaskComplete}
                          isCurrentTask={currentTaskId === task.id}
                        />
                      </div>
                      {index < 8 && <div className="gold-path w-8 h-2 mr-8"></div>}
                    </React.Fragment>
                  ))}
              </div>
              
              <div className="flex flex-col items-center ml-20 mt-4">
                <div className="gold-path w-2 h-12"></div>
                <div 
                  id={`boss-${50}`}
                  className="mt-4"
                >
                  <BossNode 
                    id={50}
                    tier="gold"
                    title="Thrice-Forged"
                    isDefeated={tasks.find(t => t.id === 50)?.isDefeated || false}
                    questions={tasks.find(t => t.id === 50)?.questions || []}
                    onComplete={handleBossComplete}
                  />
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>

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
                  <button 
                    className="bg-blue-600 hover:bg-blue-700 px-4 py-1 rounded w-full"
                    onClick={() => {
                      if (playerStats.points >= item.price) {
                        setPlayerStats(prev => ({
                          ...prev,
                          points: prev.points - item.price
                        }));
                        
                        toast({
                          title: `${item.name} Purchased!`,
                          description: `You have spent ${item.price} points.`,
                          variant: "default",
                        });
                      } else {
                        toast({
                          title: "Not Enough Points",
                          description: `You need ${item.price} points to purchase this item.`,
                          variant: "destructive",
                        });
                      }
                    }}
                  >
                    {item.price} Points
                  </button>
                </div>
              ))}
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default CourseDetail;
