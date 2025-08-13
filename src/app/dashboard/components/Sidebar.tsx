'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { UserAvatar } from './UserAvatar';

interface SidebarProps {
  user: {
    username?: string;
    email: string;
  };
}

export const Sidebar: React.FC<SidebarProps> = ({ user }) => {
  const [activeSection, setActiveSection] = useState('Matches');

  // Now using public folder images
  const exploreItems = [
    { name: 'Matches', icon: '/images/icons-dashboard/Matches.svg', color: 'text-orange-500' },
    { name: 'Collaborations', icon: '/images/icons-dashboard/Collaborations.svg', color: 'text-blue-500' },
    { name: 'Audience', icon: '/images/icons-dashboard/Audience.svg', color: 'text-green-500' },
    { name: 'Marketplace', icon: '/images/icons-dashboard/Marketplace.svg', color: 'text-red-500' },
  ];

  const friends = [
    { name: 'Tom Cruise', isOnline: true, lastSeen: null },
    { name: 'Larry Shae', isOnline: false, lastSeen: '4 min' },
    { name: 'Tom Cruise', isOnline: true, lastSeen: null },
    { name: 'Tom Cruise', isOnline: false, lastSeen: '4 min' },
    { name: 'Tom Cruise', isOnline: true, lastSeen: null },
  ];

  return (
    <div className="overflow-y-auto bg-white lg:h-screen">
      {/* Welcome Section */}
      <div className="p-5">
        <div className="flex items-center space-x-3">
          <UserAvatar name={user.username || user.email} />
          <span className="font-semibold text-gray-900">
            {user.username || user.email.split('@')[0]}!
          </span>
        </div>
      </div>

      {/* Explore Section */}
      <div className="p-5">
        <h2 className="mb-4 text-lg font-semibold text-gray-900">Explore</h2>
        <div className="grid grid-cols-2 space-y-2 md:grid-cols-1">
          {exploreItems.map((item) => (
            <div
              key={item.name}
              className={`flex items-center space-x-3 p-3 rounded-lg cursor-pointer transition-colors ${activeSection === item.name
                ? 'bg-purple-50 text-purple-600'
                : 'text-gray-700 hover:bg-gray-50'
                }`}
              onClick={() => setActiveSection(item.name)}
            >
              <Image
                src={item.icon}
                width={20}
                height={20}
                alt={item.name}
                className={item.color}
              />
              <span className="font-medium">{item.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Friends Section */}
      <div className="hidden p-5 md:block">
        <h2 className="mb-4 text-lg font-semibold text-gray-900">Friends</h2>
        <div className="space-y-3">
          {friends.map((friend, index) => (
            <div key={index} className="flex justify-between items-center">
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
