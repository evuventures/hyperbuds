// Updated /app/dashboard/page.tsx with cleaner imports
import { getCurrentUser } from '@/lib/auth-helpers';
import { redirect } from 'next/navigation';
import { 
  Header, 
  Sidebar, 
  MainContent, 
  RightSidebar 
} from './components/index';

export default async function DashboardPage() {
  const user = await getCurrentUser();
  
  if (!user) {
    redirect('/login');
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header user={user} />
      <div className="flex">
        <Sidebar user={user} />
        <MainContent />
        <RightSidebar />
      </div>
    </div>
  );
}