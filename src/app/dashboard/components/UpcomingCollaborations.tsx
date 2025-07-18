// /app/dashboard/components/UpcomingCollaborations.tsx
import React from 'react';
import { Video, Clock } from 'lucide-react';
import { UserAvatar } from './UserAvatar';

export const UpcomingCollaborations: React.FC = () => {
  const collaborations = [
    { 
      id: 1,
      title: 'Live Jam Session & Q&A', 
      participants: ['Sam', 'Larry'],
      time: '2:00 PM',
      date: 'Today'
    },
    { 
      id: 2,
      title: 'Live Jam Session & Q&A', 
      participants: ['Sam', 'Mon'],
      time: '4:00 PM',
      date: 'Tomorrow'
    },
    { 
      id: 3,
      title: 'Live Jam Session & Q&A', 
      participants: ['Larry', 'Mon'],
      time: '6:00 PM',
      date: 'Friday'
    },
  ];

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6">
      <h3 className="text-xl font-bold text-gray-900 mb-4">Upcoming Collaborations</h3>
      <div className="space-y-4">
        {collaborations.map((collab) => (
          <div key={collab.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
            <div className="flex-1">
              <h4 className="font-semibold text-gray-900 mb-1">{collab.title}</h4>
              <div className="flex items-center space-x-3 text-sm text-gray-600">
                <div className="flex items-center space-x-1">
                  <Video className="w-4 h-4" />
                  <span>{collab.time}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Clock className="w-4 h-4 text-purple-500" />
                  <span>{collab.date}</span>
                </div>
              </div>
            </div>
            <div className="flex -space-x-2">
              {collab.participants.map((participant, pIndex) => (
                <UserAvatar key={pIndex} name={participant} size="w-8 h-8" />
              ))}
            </div>
          </div>
        ))}
      </div>
      
      <button className="w-full mt-6 bg-purple-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-purple-700 transition-colors">
        Explore More
      </button>
    </div>
  );
};