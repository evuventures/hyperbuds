import { DashboardLayout } from '../profile/components/DashboardLayout';
import { ProfileSection } from '@/app/profile/components/ProfileSection';
import { RightSidebar } from '@/app/profile/components/RightSidebar';

const Index = () => {
  return (
    <DashboardLayout>
      <div className="flex flex-col lg:flex-row min-h-screen lg:h-screen">
        <ProfileSection />
        <RightSidebar />
      </div>
    </DashboardLayout>
  );
};

export default Index;
