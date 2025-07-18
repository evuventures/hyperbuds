import React from 'react';
import { 
  Home, 
  Search, 
  Plus, 
  MessageCircle, 
  Calendar, 
  Settings, 
  Moon, 
  Bell
} from 'lucide-react';
import { UserAvatar } from './UserAvatar';

interface HeaderProps {
  user: {
    username?: string;
    email: string;
  };
}

export const Header: React.FC<HeaderProps> = ({ user }) => {
  return (
    <header className="flex items-center justify-between p-4 bg-white border-b border-gray-200">
      <div className="flex items-center space-x-8">
        <h1 className="text-2xl font-bold text-purple-600">HyperBuds</h1>
        <nav className="flex items-center space-x-6 text-gray-600">
          <Home className="w-6 h-6 cursor-pointer hover:text-purple-600" />
          <Search className="w-6 h-6 cursor-pointer hover:text-purple-600" />
          <Plus className="w-6 h-6 cursor-pointer hover:text-purple-600" />
          <MessageCircle className="w-6 h-6 cursor-pointer hover:text-purple-600" />
          <Calendar className="w-6 h-6 cursor-pointer hover:text-purple-600" />
          <Settings className="w-6 h-6 cursor-pointer hover:text-purple-600" />
          <Moon className="w-6 h-6 cursor-pointer hover:text-purple-600" />
        </nav>
      </div>
      <div className="flex items-center space-x-4">
        <Bell className="w-6 h-6 text-gray-600 cursor-pointer hover:text-purple-600" />
        <UserAvatar name={user.username || user.email} size="w-10 h-10" />
      </div>
    </header>
  );
};