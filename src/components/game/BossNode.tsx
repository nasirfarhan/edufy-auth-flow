
import { useState } from 'react';
import { Trophy } from 'lucide-react';
import { Dialog, DialogContent, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface BossNodeProps {
  id: number;
  tier: 'bronze' | 'iron' | 'steel' | 'obsidian' | 'gold';
  title: string;
  isDefeated: boolean;
  questions: Array<{
    text: string;
    options: string[];
    correctAnswer: number;
  }>;
  onComplete: (id: number, score: number) => void;
}

const BossNode = ({ 
  id, 
  tier, 
  title, 
  isDefeated, 
  questions,
  onComplete 
}: BossNodeProps) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const tierColors = {
    bronze: 'bronze-path',
    iron: 'iron-path',
    steel: 'steel-path',
    obsidian: 'obsidian-path',
    gold: 'gold-path'
  };

  const handleNodeClick = () => {
    setIsDialogOpen(true);
    setCurrentQuestion(0);
    setSelectedOption(null);
    setIsCorrect(null);
    setScore(0);
    setShowResult(false);
  };

  const handleOptionSelect = (optionIndex: number) => {
    setSelectedOption(optionIndex);
    const correct = optionIndex === questions[currentQuestion].correctAnswer;
    setIsCorrect(correct);
    
    if (correct) {
      setScore(prev => prev + 1);
    }
    
    setTimeout(() => {
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(prev => prev + 1);
        setSelectedOption(null);
        setIsCorrect(null);
      } else {
        // Boss fight complete
        setShowResult(true);
      }
    }, 1500);
  };

  const handleFinish = () => {
    setIsDialogOpen(false);
    onComplete(id, score);
  };

  const handleRetry = () => {
    setSelectedOption(null);
    setIsCorrect(null);
  };

  return (
    <>
      <div 
        className={`boss-node ${tierColors[tier]} ${isDefeated ? 'task-node-completed' : ''}`}
        onClick={handleNodeClick}
      >
        {isDefeated ? (
          <Trophy className="text-yellow-400 h-10 w-10" />
        ) : (
          <span className="text-2xl">BOSS</span>
        )}
      </div>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="boss-dialog max-w-2xl">
          <DialogTitle className="text-yellow-400 text-2xl">{title} - Boss Fight</DialogTitle>
          
          {!showResult ? (
            <div className="py-4">
              <div className="flex justify-between mb-4">
                <span className="text-gray-300">Question {currentQuestion + 1} of {questions.length}</span>
                <span className="text-blue-400">Score: {score} / {questions.length}</span>
              </div>
              
              <h3 className="text-white mb-4 text-lg">{questions[currentQuestion].text}</h3>
              
              <div className="space-y-3">
                {questions[currentQuestion].options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleOptionSelect(index)}
                    className={`w-full text-left p-3 rounded-md border ${
                      selectedOption === index 
                        ? isCorrect 
                          ? 'bg-green-700 border-green-500' 
                          : 'bg-red-700 border-red-500'
                        : 'bg-[#3a4d5c] border-blue-800 hover:bg-[#455d6e]'
                    } transition-colors`}
                    disabled={selectedOption !== null}
                  >
                    {option}
                  </button>
                ))}
              </div>
              
              {isCorrect === false && (
                <div className="mt-6 text-center">
                  <p className="text-red-400 mb-3">That's not correct. Would you like to try again?</p>
                  <Button variant="destructive" onClick={handleRetry}>Retry Question (Cost: 5 Points)</Button>
                </div>
              )}
              
              {isCorrect === true && (
                <div className="mt-6 text-center">
                  <p className="text-green-400 mb-3">Correct!</p>
                </div>
              )}
            </div>
          ) : (
            <div className="py-6 text-center">
              <h3 className="text-2xl text-yellow-400 mb-6">Boss Fight Complete!</h3>
              <p className="text-gray-300 mb-4">Your Score: {score} / {questions.length}</p>
              <p className="text-blue-400 mb-6">Rewards: {score * 100} XP and {score * 10} Points</p>
              
              {score >= questions.length / 2 ? (
                <div>
                  <p className="text-green-400 mb-6">You defeated the boss and unlocked the next tier!</p>
                  <Button onClick={handleFinish} className="bg-yellow-600 hover:bg-yellow-700">
                    Claim Rewards
                  </Button>
                </div>
              ) : (
                <div>
                  <p className="text-red-400 mb-6">You need at least {Math.ceil(questions.length / 2)} correct answers to defeat the boss!</p>
                  <Button onClick={() => {
                    setCurrentQuestion(0);
                    setSelectedOption(null);
                    setIsCorrect(null);
                    setScore(0);
                    setShowResult(false);
                  }} className="bg-red-600 hover:bg-red-700">
                    Try Again
                  </Button>
                </div>
              )}
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default BossNode;
