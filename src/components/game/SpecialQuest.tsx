
import { Sword, Sparkles } from 'lucide-react';
import { BOSS_IMAGES } from '@/constants/gameAssets';

interface SpecialQuestProps {
  nextBossLevel: 'Unblooded' | 'Warborn' | 'Doomseeker' | 'Deathless' | 'Thrice-Forged';
  onBossFight: () => void;
}

const SpecialQuest = ({ nextBossLevel, onBossFight }: SpecialQuestProps) => {
  const getBossImage = () => {
    switch (nextBossLevel) {
      case 'Unblooded':
        return BOSS_IMAGES.unblooded;
      case 'Warborn':
        return BOSS_IMAGES.warborn;
      case 'Doomseeker':
        return BOSS_IMAGES.doomseeker;
      case 'Deathless':
        return BOSS_IMAGES.deathless;
      case 'Thrice-Forged':
        return BOSS_IMAGES.thriceForged;
    }
  };

  return (
    <div className="special-quest bg-[#1a2c3d] p-6 rounded-lg space-y-4">
      <h2 className="quest-title flex items-center gap-2 text-xl text-yellow-400">
        <Sword size={24} />
        Special Quest
      </h2>
      
      <div className="text-center">
        <div className="animate-pulse font-bold text-red-500 flex items-center justify-center gap-2">
          <Sparkles size={20} className="text-yellow-400" />
          BOSS FIGHT
          <Sparkles size={20} className="text-yellow-400" />
        </div>
      </div>
      
      <p className="text-sm text-gray-300">
        Challenge The Next Final Boss
      </p>
      
      <div className="relative bg-red-900/20 rounded-lg p-4 border border-red-500/30 flex flex-col items-center">
        <div className="w-40 h-40 relative bg-gray-800/80 rounded-full flex items-center justify-center overflow-hidden">
          <img 
            src={getBossImage()} 
            alt={`${nextBossLevel} Boss`} 
            className="w-full h-full object-contain"
          />
          <div className="absolute -top-3 -right-3 bg-red-600 w-8 h-8 rounded-full flex items-center justify-center">
            <Sword size={16} className="text-white transform rotate-45" />
          </div>
        </div>
      </div>
      
      <div className="flex flex-col items-center">
        <p className="text-sm text-gray-300 mb-4 text-center">
          Ready For The {nextBossLevel} Boss?
        </p>
        
        <button 
          onClick={onBossFight}
          className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg border border-red-500 shadow-lg transition-colors duration-200"
        >
          Fight {nextBossLevel} Boss
        </button>
      </div>
    </div>
  );
};

export default SpecialQuest;

