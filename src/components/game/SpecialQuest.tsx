
import { Sword, Sparkles } from 'lucide-react';

interface SpecialQuestProps {
  nextBossLevel: 'Unblooded' | 'Warborn' | 'Doomseeker' | 'Deathless' | 'Thrice-Forged';
  onBossFight: () => void;
}

const SpecialQuest = ({ nextBossLevel, onBossFight }: SpecialQuestProps) => {
  return (
    <div className="special-quest h-full flex flex-col">
      <h2 className="quest-title flex items-center gap-2">
        <Sword size={24} />
        Special Quest
      </h2>
      
      <div className="text-center mb-4">
        <div className="animate-pulse font-bold text-red-500 flex items-center justify-center gap-2">
          <Sparkles size={20} className="text-yellow-400" />
          BOSS FIGHT
          <Sparkles size={20} className="text-yellow-400" />
        </div>
      </div>
      
      <p className="text-sm text-gray-300 mb-4">
        Challenge The Next Final Boss Anytime
      </p>
      
      <div className="relative bg-red-900/20 rounded-lg p-4 border border-red-500/30 mb-4 flex justify-center items-center">
        <div className="w-40 h-40 relative bg-gray-800/80 rounded-full flex items-center justify-center overflow-hidden">
          <span className="text-6xl">👹</span>
          <div className="absolute -top-3 -right-3 bg-red-600 w-8 h-8 rounded-full flex items-center justify-center">
            <Sword size={16} className="text-white transform rotate-45" />
          </div>
        </div>
      </div>
      
      <p className="text-sm text-gray-300 mb-4 text-center">
        If You're Already a Warrior<br />
        Hunt For Any Final Boss Any Time
      </p>
      
      <button 
        onClick={onBossFight}
        className="mt-auto bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg border border-red-500 shadow-lg transition-colors duration-200"
      >
        Fight {nextBossLevel} Boss
      </button>
    </div>
  );
};

export default SpecialQuest;
