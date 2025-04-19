
import { useState } from 'react';
import { CircleCheck } from 'lucide-react';
import { Dialog, DialogContent, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface TaskNodeProps {
  id: number;
  tier: 'bronze' | 'iron' | 'steel' | 'obsidian' | 'gold';
  title: string;
  isCompleted: boolean;
  isLocked: boolean;
  content: string;
  question: {
    text: string;
    options: string[];
    correctAnswer: number;
  };
  onComplete: (id: number) => void;
}

const TaskNode = ({ 
  id, 
  tier, 
  title, 
  isCompleted, 
  isLocked, 
  content,
  question,
  onComplete 
}: TaskNodeProps) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [showQuestion, setShowQuestion] = useState(false);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

  const tierColors = {
    bronze: 'bronze-path',
    iron: 'iron-path',
    steel: 'steel-path',
    obsidian: 'obsidian-path',
    gold: 'gold-path'
  };

  const handleNodeClick = () => {
    if (!isLocked) {
      setIsDialogOpen(true);
      setShowQuestion(false);
      setSelectedOption(null);
      setIsCorrect(null);
    }
  };

  const handleNext = () => {
    setShowQuestion(true);
  };

  const handleOptionSelect = (optionIndex: number) => {
    setSelectedOption(optionIndex);
    const correct = optionIndex === question.correctAnswer;
    setIsCorrect(correct);
    
    if (correct) {
      setTimeout(() => {
        setIsDialogOpen(false);
        if (!isCompleted) {
          onComplete(id);
        }
      }, 1500);
    }
  };

  const handleRetry = () => {
    setSelectedOption(null);
    setIsCorrect(null);
  };

  return (
    <>
      <div 
        className={`task-node ${tierColors[tier]} ${isLocked ? 'task-locked' : ''} ${isCompleted ? 'task-node-completed' : ''}`}
        onClick={handleNodeClick}
      >
        {isCompleted ? (
          <CircleCheck className="text-green-500 h-8 w-8" />
        ) : (
          <span className="text-lg">{id}</span>
        )}
      </div>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="task-dialog">
          <DialogTitle className="text-yellow-400">{title}</DialogTitle>
          
          {!showQuestion ? (
            <>
              <DialogDescription className="text-gray-300 my-4">
                {content}
              </DialogDescription>
              <DialogFooter>
                <Button onClick={handleNext}>Next</Button>
              </DialogFooter>
            </>
          ) : (
            <div className="py-4">
              <h3 className="text-white mb-4">{question.text}</h3>
              
              <div className="space-y-3">
                {question.options.map((option, index) => (
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
                  <p className="text-green-400 mb-3">Correct! Moving to the next task...</p>
                </div>
              )}
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default TaskNode;
