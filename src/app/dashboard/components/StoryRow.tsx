// /app/dashboard/components/StoryRow.tsx
import React from 'react';

export const StoryRow: React.FC = () => {
  const stories = [
    { name: 'Tom', avatar: 'T', color: 'from-purple-500 to-pink-500' },
    { name: 'Tim', avatar: 'T', color: 'from-blue-500 to-purple-500' },
    { name: 'Tam', avatar: 'T', color: 'from-green-500 to-blue-500' },
    { name: 'Tum', avatar: 'T', color: 'from-yellow-500 to-orange-500' },
    { name: 'Sam', avatar: 'S', color: 'from-red-500 to-pink-500' },
    { name: 'Mon', avatar: 'M', color: 'from-indigo-500 to-purple-500' },
    { name: 'Tue', avatar: 'T', color: 'from-teal-500 to-green-500' },
    { name: 'Tue', avatar: 'T', color: 'from-teal-500 to-green-500' },
  ];

  return (
    <div
      className="flex overflow-x-auto items-center mb-6 space-x-7 lg:justify-center scrollbar-hide">
      {stories.map((story, index) => (
        <div
          key={index}
          className="flex flex-col flex-shrink-0 items-center mx-3 mt-1 space-y-2 cursor-pointer group"
        >
          <div
            className={`w-16 h-16 bg-gradient-to-br ${story.color} rounded-full flex items-center justify-center ring-4 ring-purple-200 group-hover:ring-purple-300 transition-all`}
          >
            <span className="text-lg font-semibold text-white">
              {story.avatar}
            </span>
          </div>
          <span className="text-sm text-gray-600 group-hover:text-gray-900">
            {story.name}
          </span>
        </div>
      ))}
    </div>
  );
};
