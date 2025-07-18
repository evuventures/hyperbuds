// Trending Card Component
import { UserAvatar } from "./UserAvatar";
import { Heart, Share2 } from 'lucide-react';

export const TrendingCard = () => {
  return (
    <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-6 text-white relative overflow-hidden">
      <div className="relative z-10">
        <h3 className="text-xl font-bold mb-2">Tom & Sam Podcast: The AI Edge in Creator Growth</h3>
        <p className="text-blue-100 text-sm mb-4">
          elementum elementum ex porta dui viverra Lorem felis, placerat in amet, nisl, non, ex. Nam Nam est.
        </p>
        
        <div className="flex items-center space-x-4 mb-4">
          <div className="flex items-center space-x-2">
            <UserAvatar name="Tom" size="w-8 h-8" />
            <UserAvatar name="Mon" size="w-8 h-8" />
            <div className="text-sm">
              <div className="font-semibold">Tom & Mon</div>
              <div className="text-blue-200">Podcast | Podcast</div>
            </div>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <div className="bg-blue-700 rounded-full px-4 py-2 text-sm font-semibold">
            12K Viewers
          </div>
          <div className="flex items-center space-x-2">
            <Heart className="w-5 h-5 text-red-400" />
            <span className="text-sm">5K</span>
          </div>
          <div className="flex items-center space-x-2">
            <Share2 className="w-5 h-5 text-green-400" />
            <span className="text-sm">400</span>
          </div>
        </div>
      </div>
      
      {/* Decorative phones */}
      <div className="absolute right-4 top-4 w-16 h-20 bg-green-400 rounded-lg transform rotate-12 opacity-80"></div>
      <div className="absolute right-8 top-8 w-16 h-20 bg-purple-400 rounded-lg transform -rotate-12 opacity-60"></div>
    </div>
  );
};