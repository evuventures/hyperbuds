import React from 'react';
import { StoryRow } from './StoryRow';
import { TrendingCard } from './TrendingCard';
import { ProfileCard } from './ProfileCard';

export const MainContent: React.FC = () => {
  return (
    <div className="flex-1 p-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Stories Row */}
        <StoryRow />
        
        {/* Trending Section */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Trending</h2>
          <button className="text-purple-600 font-semibold hover:text-purple-700">View</button>
        </div>
        
        <div className="mb-8">
          <TrendingCard />
        </div>
        
        {/* Recommended Section */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Recommended for You</h2>
          <button className="text-purple-600 font-semibold hover:text-purple-700">View</button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <ProfileCard 
            name="Angela Brooks"
            type="Gaming Streamer"
            followers="12K Followers"
            audienceOverlap="78%"
            synergyScore="92%"
            image="https://images.unsplash.com/photo-1494790108755-2616b96a4af4?w=300&h=200&fit=crop"
          />
          <ProfileCard 
            name="Tayo Omotayo"
            type="Podcaster"
            followers="12k followers"
            audienceOverlap="78%"
            synergyScore="88%"
            image="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=200&fit=crop"
          />
        </div>
      </div>
    </div>
  );
};