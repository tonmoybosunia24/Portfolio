import Link from 'next/link';

/**
 * Example page behind login: `/dashboard` is in PROTECTED_ROUTES (constants/routes.ts), so proxy.ts
 * sends logged-out users to /login first. Replace it with your app. The Reports link is a client-side
 * navigation, which the e2e tests use to check the token refresh on `<Link>` clicks.
 */
export default function Dashboard() {
  return (
    <main className="mx-auto flex min-h-screen max-w-3xl flex-col gap-6 p-8">
      <header className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Dashboard</h1>
        <form method="post" action="/api/auth/clear">
          <button type="submit" className="font-medium underline underline-offset-4">
            Log out
          </button>
        </form>
      </header>
      <p className="text-zinc-600 dark:text-zinc-400">You are logged in. Build your app from here.</p>
      <Link href="/dashboard?tab=reports" className="font-medium underline underline-offset-4">
        Reports
      </Link>
    </main>
  );
}
