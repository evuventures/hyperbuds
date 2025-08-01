// Recent Activities Component
import { UserPlus, Handshake, Eye, Tag } from 'lucide-react';

export const RecentActivities = () => {
  const activities = [
    { icon: UserPlus, text: 'One new friend request', color: 'text-blue-500' },
    { icon: Handshake, text: 'Collaboration request', color: 'text-green-500' },
    { icon: Eye, text: 'Kofowora is live', color: 'text-red-500' },
    { icon: Tag, text: 'You tagged you', color: 'text-purple-500' },
  ];

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6">
      <h3 className="text-xl font-bold text-gray-900 mb-4">Recent Activities</h3>
      <div className="space-y-4">
        {activities.map((activity, index) => (
          <div key={index} className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
              <activity.icon className={`w-5 h-5 ${activity.color}`} />
            </div>
            <span className="text-gray-700">{activity.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
};