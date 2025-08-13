import { 
  AiOutlineHome as Home,
  AiOutlineSearch as Search,
  AiOutlinePlus as Plus,
  AiOutlineCalendar as Calendar,
  AiOutlineUser as User,
  AiOutlineMessage as MessageCircle,
  AiOutlineSetting as Settings,
  AiOutlineMoon as Moon,
  AiOutlineClose as X,
  AiOutlineLogout as LogOut
} from 'react-icons/ai';
import { Button } from './Button';

const sidebarItems = [
  { icon: Home, label: 'Dashboard', active: true },
  { icon: Search, label: 'Search', active: false },
  { icon: Plus, label: 'Go live', active: false },
  { icon: Calendar, label: 'Calendar', active: false },
  { icon: User, label: 'Profile', active: false },
  { icon: MessageCircle, label: 'Chat', active: false },
  { icon: Settings, label: 'Settings', active: false },
];

interface MobileSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileSidebar({ isOpen, onClose }: MobileSidebarProps) {
  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div 
        className="fixed inset-0 bg-black/50 z-40 lg:hidden"
        onClick={onClose}
      />
      
      {/* Sidebar */}
      <div className="fixed left-0 top-0 h-full w-80 bg-background border-r border-border z-50 lg:hidden transform transition-transform duration-300 ease-in-out">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-border">
            <h2 className="text-xl font-bold text-primary">HyperBuds</h2>
            <button 
              onClick={onClose}
              className="p-2 rounded-md hover:bg-muted"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
          
          {/* Navigation Items */}
          <div className="flex-1 py-6">
            <div className="space-y-2 px-4">
              {sidebarItems.map((item, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  className={`w-full justify-start h-12 px-4 ${
                    item.active 
                      ? 'bg-primary/10 text-primary border border-primary/20' 
                      : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                  }`}
                >
                  <item.icon className="h-5 w-5 mr-3" />
                  <span className="text-base">{item.label}</span>
                </Button>
              ))}
            </div>
          </div>
          
          {/* Bottom Actions */}
          <div className="border-t border-border p-4 space-y-2">
            <Button 
              variant="ghost" 
              className="w-full justify-start h-12 px-4 text-muted-foreground hover:text-foreground hover:bg-muted"
            >
              <Moon className="h-5 w-5 mr-3" />
              <span className="text-base">Dark mode</span>
            </Button>
            
            <Button 
              variant="ghost" 
              className="w-full justify-start h-12 px-4 text-muted-foreground hover:text-foreground hover:bg-muted"
            >
              <LogOut className="h-5 w-5 mr-3" />
              <span className="text-base">Logout</span>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}