import React from 'react';

interface UserAvatarProps {
  name: string;
  isOnline?: boolean;
  size?: string;
}

export const UserAvatar: React.FC<UserAvatarProps> = ({ 
  name, 
  isOnline = false, 
  size = "w-12 h-12" 
}) => {
  const getInitials = (name: string) => 
    name.split(' ').map(n => n[0]).join('').toUpperCase();
  
  return (
    <div className="relative">
      <div className={`${size} bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center`}>
        <span className="text-white font-semibold text-sm">{getInitials(name)}</span>
      </div>
      {isOnline && (
        <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div>
      )}
    </div>
  );
};