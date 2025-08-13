import { 
  AiOutlineLeft as ChevronLeft,
  AiOutlineRight as ChevronRight,
  AiOutlineBell as Bell,
  AiOutlineClockCircle as Clock,
  AiOutlineVideoCamera as Video,
  AiOutlineUserAdd as UserPlus,
  AiOutlineReload as RotateCcw
} from 'react-icons/ai';
import { FaAt as AtSign } from 'react-icons/fa';
import { Button } from './Button';
import { Card } from './Card';
import { Avatar, AvatarFallback, AvatarImage } from './Avatar';

export function RightSidebar() {
  return (
    <div className="w-full lg:w-80 p-4 lg:p-6 space-y-4 lg:space-y-6 lg:border-l border-border">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Bell className="h-4 w-4 lg:h-5 lg:w-5 text-muted-foreground" />
          <Avatar className="w-6 h-6 lg:w-8 lg:h-8">
            <AvatarImage src="/lovable-uploads/e65f0c55-cd64-4eda-b7bb-73c9a109b800.png" />
            <AvatarFallback>AB</AvatarFallback>
          </Avatar>
          <span className="font-medium text-sm lg:text-base">Angela Brooks</span>
        </div>
      </div>

      {/* Calendar */}
      <Card className="p-3 lg:p-4">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-semibold text-sm lg:text-base">Jun 2025</h3>
          <div className="flex items-center space-x-1 lg:space-x-2">
            <Button variant="ghost" size="icon" className="h-6 w-6">
              <ChevronLeft className="h-3 w-3 lg:h-4 lg:w-4" />
            </Button>
            <Button variant="ghost" size="icon" className="h-6 w-6">
              <ChevronRight className="h-3 w-3 lg:h-4 lg:w-4" />
            </Button>
          </div>
        </div>
        
        <div className="grid grid-cols-7 gap-1 text-center text-xs">
          {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
            <div key={day} className="text-muted-foreground font-medium p-1 lg:p-2">{day}</div>
          ))}
          
          {[15, 16, 17, 18, 19, 20, 21].map(date => (
            <div 
              key={date} 
              className={`p-1 lg:p-2 rounded text-xs lg:text-sm ${
                date === 16 
                  ? 'bg-primary text-primary-foreground' 
                  : date === 15 
                    ? 'text-green-500' 
                    : date === 20 
                      ? 'text-yellow-500' 
                      : 'text-foreground'
              }`}
            >
              {date}
            </div>
          ))}
        </div>
      </Card>

      {/* Upcoming Collaborations */}
      <Card className="p-3 lg:p-4">
        <h3 className="font-semibold mb-4 text-sm lg:text-base">Upcoming Collaborations</h3>
        <div className="space-y-3 lg:space-y-4">
          {[
            { day: 'Tue', date: '17', time: '2:00 PM' },
            { day: 'Wed', date: '18', time: '3:00 PM' },
            { day: 'Thu', date: '19', time: '1:00 PM' },
          ].map((collab, index) => (
            <div key={index} className="flex items-center space-x-2 lg:space-x-3">
              <div className="text-center flex-shrink-0">
                <div className="text-xs text-muted-foreground">{collab.day}</div>
                <div className="text-xs lg:text-sm font-medium">{collab.date}</div>
              </div>
              <div className="flex-1 min-w-0">
                <div className="font-medium text-xs lg:text-sm truncate">Live Jam Session & Q&A</div>
                <div className="flex items-center space-x-1 lg:space-x-2 mt-1">
                  <Video className="h-3 w-3 text-muted-foreground flex-shrink-0" />
                  <span className="text-xs text-muted-foreground">{collab.time}</span>
                </div>
              </div>
              <div className="flex -space-x-1 flex-shrink-0">
                <Avatar className="w-5 h-5 lg:w-6 lg:h-6 border-2 border-white">
                  <AvatarFallback className="text-xs bg-orange-500 text-white">T</AvatarFallback>
                </Avatar>
                <Avatar className="w-5 h-5 lg:w-6 lg:h-6 border-2 border-white">
                  <AvatarFallback className="text-xs bg-red-500 text-white">S</AvatarFallback>
                </Avatar>
              </div>
            </div>
          ))}
        </div>
        <Button variant="link" className="text-primary p-0 mt-4 text-xs lg:text-sm">
          View all Schedule
        </Button>
      </Card>

      {/* Recent Activities */}
      <Card className="p-3 lg:p-4">
        <h3 className="font-semibold mb-4 text-sm lg:text-base">Recent Activities</h3>
        <div className="space-y-3 lg:space-y-4">
          {[
            { icon: UserPlus, text: 'Wondie_12 followed you', action: 'View' },
            { icon: UserPlus, text: '13+ Collaboration request', action: 'view' },
            { icon: RotateCcw, text: 'Kofowora is live', action: 'view' },
            { icon: AtSign, text: 'You tagged you', action: 'view' },
          ].map((activity, index) => (
            <div key={index} className="flex items-center justify-between gap-2">
              <div className="flex items-center space-x-2 lg:space-x-3 flex-1 min-w-0">
                <activity.icon className="h-3 w-3 lg:h-4 lg:w-4 text-muted-foreground flex-shrink-0" />
                <span className="text-xs lg:text-sm text-muted-foreground truncate">{activity.text}</span>
              </div>
              <Button variant="link" className="text-primary p-0 text-xs lg:text-sm flex-shrink-0">
                {activity.action}
              </Button>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}