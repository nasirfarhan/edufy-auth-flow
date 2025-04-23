import { Zap, Star, BookOpen } from 'lucide-react';
import { BOSS_IMAGES } from '@/constants/gameAssets';

interface PlayerStatsProps {
  name: string;
  xp: number;
  points: number;
  level: number;
}

const PlayerStats = ({ name, xp, points, level }: PlayerStatsProps) => {
  return (
    <div className="player-stats flex flex-col items-center bg-[#1a2c3d] p-6 rounded-lg">
      <div className="player-avatar mb-3 w-24 h-24 relative">
        <img 
          src={BOSS_IMAGES.playerAvatar} 
          alt="Player Avatar" 
          className="w-full h-full object-contain"
        />
      </div>
      <h3 className="text-xl font-bold text-yellow-400 mb-2">{name}</h3>
      <div className="space-y-1">
        <div className="flex items-center justify-center">
          <Zap className="text-yellow-400 mr-2" size={16} />
          <span className="text-gray-300">XP: {xp}</span>
        </div>
        <div className="flex items-center justify-center">
          <Star className="text-blue-400 mr-2" size={16} />
          <span className="text-gray-300">Points: {points}</span>
        </div>
        <div className="flex items-center justify-center">
          <BookOpen className="text-green-400 mr-2" size={16} />
          <span className="text-gray-300">Level: {level}</span>
        </div>
      </div>
    </div>
  );
};

export default PlayerStats;
