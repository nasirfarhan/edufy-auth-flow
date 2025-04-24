
import { useState } from "react";
import { ArrowRight, CheckCircle } from "lucide-react";
import { 
  Dialog, 
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface CourseInstructionDialogProps {
  isOpen: boolean;
  onClose: () => void;
  courseName: string;
}

const CourseInstructionDialog = ({ isOpen, onClose, courseName }: CourseInstructionDialogProps) => {
  const [step, setStep] = useState(0);
  
  const instructions = [
    "XP and points increase after each battle",
    "You can use these points to purchase the advanced and expert courses",
    "You can attempt the boss fight anytime and move to the next tier"
  ];

  const handleNext = () => {
    if (step < instructions.length - 1) {
      setStep(step + 1);
    } else {
      onClose();
      // Reset for next time
      setStep(0);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-[#172c3a] text-white border-blue-800 max-w-md">
        <DialogHeader>
          <DialogTitle className="text-xl text-blue-300">{courseName} - Instructions</DialogTitle>
        </DialogHeader>
        
        <div className="py-6">
          <div className="flex items-start mb-4">
            <CheckCircle className="h-5 w-5 text-green-400 mr-2 mt-0.5" />
            <p className="text-lg">{instructions[step]}</p>
          </div>
          
          <div className="flex justify-between items-center mt-8">
            <div className="flex space-x-2">
              {instructions.map((_, idx) => (
                <div 
                  key={idx} 
                  className={`h-2 w-2 rounded-full ${idx === step ? 'bg-blue-400' : 'bg-blue-900'}`}
                ></div>
              ))}
            </div>
            
            <Button 
              onClick={handleNext}
              className="bg-blue-600 hover:bg-blue-700"
            >
              {step === instructions.length - 1 ? 'Finish' : 'Next'}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CourseInstructionDialog;
