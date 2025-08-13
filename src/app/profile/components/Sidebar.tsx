import { 
  AiOutlineHome as Home,
  AiOutlineSearch as Search,
  AiOutlinePlus as Plus,
  AiOutlineCalendar as Calendar,
  AiOutlineUser as User,
  AiOutlineMessage as MessageCircle,
  AiOutlineSetting as Settings,
  AiOutlineMoon as Moon
} from 'react-icons/ai';
import { Button } from './Button';

const sidebarItems = [
  { icon: Home, active: true },
  { icon: Search, active: false },
  { icon: Plus, active: false },
  { icon: Calendar, active: false },
  { icon: User, active: false },
  { icon: MessageCircle, active: false },
  { icon: Settings, active: false },
];

export function Sidebar() {
  return (
    <div className="w-16 bg-white border-r border-border flex flex-col items-center py-4 space-y-6">
      {/* Logo */}
      <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
        <span className="text-primary-foreground font-bold text-lg">H</span>
      </div>
      
      {/* Navigation Items */}
      <div className="flex flex-col space-y-4">
        {sidebarItems.map((item, index) => (
          <Button
            key={index}
            variant="ghost"
            size="icon"
            className={`w-10 h-10 ${
              item.active 
                ? 'bg-primary text-primary-foreground' 
                : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            <item.icon className="h-5 w-5" />
          </Button>
        ))}
      </div>
      
      {/* Bottom Actions */}
      <div className="flex-1" />
      <div className="flex flex-col space-y-4">
        <Button variant="ghost" size="icon" className="w-10 h-10 text-muted-foreground">
          <Moon className="h-5 w-5" />
        </Button>
        
        {/* File Icon */}
        <div className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center">
          <div className="w-6 h-6 bg-muted-foreground rounded-sm opacity-60" />
        </div>
      </div>
    </div>
  );
}