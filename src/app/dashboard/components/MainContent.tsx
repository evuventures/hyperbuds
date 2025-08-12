
import React from 'react';
import { StoryRow } from './StoryRow';
// import { TrendingCard } from './TrendingCard';
import { ProfileCard } from './ProfileCard';
import Trending from './Trending';
import Recommended from './Recommended';

export const MainContent: React.FC = () => {
  return (
    <div className="flex-1 p-6 bg-white">
      <div className="mx-auto max-w-6xl">
        {/* Stories Row */}
        <StoryRow />

        {/* Trending Section */}
        <div className="mb-8">
          {/* <TrendingCard /> */}
          <Trending />
        </div>

        {/* Recommended Section */}
        <Recommended />
      </div>
    </div>
  );
};