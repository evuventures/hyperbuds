import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'HyperBuds Dashboard',
  description: 'Your creator collaboration dashboard',
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gray-50">
      {children}
    </div>
  );
}