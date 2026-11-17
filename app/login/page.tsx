import type { Metadata } from 'next';

import Login from '@/views/login';

export const metadata: Metadata = {
  title: 'Log in',
};

export default async function LoginPage({ searchParams }: PageProps<'/login'>) {
  const { redirect } = await searchParams;

  return <Login redirect={typeof redirect === 'string' ? redirect : undefined} />;
}
