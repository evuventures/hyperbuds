import React from 'react';
import { RecentActivities } from './RecentActivities';
import { UpcomingCollaborations } from './UpcomingCollaborations';
export const RightSidebar: React.FC = () => {
  return (
    <div className="w-80 bg-white border-l border-gray-200 p-6 space-y-6">
      <div className="h-48 bg-gradient-to-br from-orange-400 to-red-500 rounded-2xl relative overflow-hidden">
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        <div className="absolute bottom-4 left-4 text-white">
          <div className="text-2xl font-bold">4:42</div>
        </div>
      </div>
      
      <RecentActivities />
      <UpcomingCollaborations />
    </div>
  );
};