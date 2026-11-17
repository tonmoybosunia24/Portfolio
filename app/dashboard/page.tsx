import type { Metadata } from 'next';

import Dashboard from '@/views/dashboard';

export const metadata: Metadata = {
  title: 'Dashboard',
};

export default function DashboardPage() {
  return <Dashboard />;
}
