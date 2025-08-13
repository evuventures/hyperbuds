export const dynamic = 'force-dynamic';

import { getCurrentUser } from '@/lib/auth-helpers';
import { redirect } from 'next/navigation';
import { Header, Sidebar, MainContent, RightSidebar } from './components/index';
import './dashboard.css';

export default async function DashboardPage() {
  const user = await getCurrentUser();

  if (!user) {
    redirect('/login');
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Fixed Header */}
      <Header user={user} />

      {/* Body layout */}
      <div className="md:flex h-[calc(100vh-120px)]">
        {/* Sidebar - Fixed height, scrollable independently */}
        <div className="overflow-y-auto no-scrollbar">
          <Sidebar user={user} />
        </div>

        {/* Main Content - Fixed height, scrollable independently */}
        <div className="overflow-y-auto flex-1 no-scrollbar">
          <MainContent />
        </div>

        {/* Right Sidebar - Fixed height, scrollable independently */}
        <div className="overflow-y-auto lg:w-80 no-scrollbar">
          <RightSidebar />
        </div>
      </div>
    </div>
  );
}
