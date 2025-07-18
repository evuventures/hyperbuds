'use client';

import React, { useState } from 'react';
import { Star, Users, Eye, Tag } from 'lucide-react';
import { UserAvatar } from './UserAvatar';

interface SidebarProps {
  user: {
    username?: string;
    email: string;
  };
}

export const Sidebar: React.FC<SidebarProps> = ({ user }) => {
  const [activeSection, setActiveSection] = useState('Matches');
  
  const exploreItems = [
    { name: 'Matches', icon: Star, color: 'text-orange-500' },
    { name: 'Collaborations', icon: Users, color: 'text-blue-500' },
    { name: 'Audience', icon: Eye, color: 'text-green-500' },
    { name: 'Marketplace', icon: Tag, color: 'text-red-500' },
  ];

  const friends = [
    { name: 'Tom Cruise', isOnline: true, lastSeen: null },
    { name: 'Larry Shae', isOnline: false, lastSeen: '4 min' },
    { name: 'Tom Cruise', isOnline: true, lastSeen: null },
    { name: 'Tom Cruise', isOnline: false, lastSeen: '4 min' },
    { name: 'Tom Cruise', isOnline: true, lastSeen: null },
  ];

  return (
    <div className="w-80 bg-white border-r border-gray-200 h-screen overflow-y-auto">
      {/* Welcome Section */}
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center space-x-3">
          <UserAvatar name={user.username || user.email} />
          <span className="font-semibold text-gray-900">
            Welcome {user.username || user.email.split('@')[0]}!
          </span>
        </div>
      </div>

      {/* Explore Section */}
      <div className="p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Explore</h2>
        <div className="space-y-2">
          {exploreItems.map((item) => (
            <div
              key={item.name}
              className={`flex items-center space-x-3 p-3 rounded-lg cursor-pointer transition-colors ${
                activeSection === item.name ? 'bg-purple-50 text-purple-600' : 'text-gray-700 hover:bg-gray-50'
              }`}
              onClick={() => setActiveSection(item.name)}
            >
              <item.icon className={`w-5 h-5 ${item.color}`} />
              <span className="font-medium">{item.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Friends Section */}
      <div className="p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Friends</h2>
        <div className="space-y-3">
          {friends.map((friend, index) => (
            <div key={index} className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <UserAvatar name={friend.name} isOnline={friend.isOnline} size="w-10 h-10" />
                <span className="font-medium text-gray-900">{friend.name}</span>
              </div>
              {friend.lastSeen && (
                <span className="text-sm text-gray-500">{friend.lastSeen}</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};