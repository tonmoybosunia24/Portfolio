import LoginForm from './components/LoginForm';

/** The login page: the form, centred. `redirect` is the encoded page to return to after login. */
export default function Login({ redirect }: { redirect?: string }) {
  return (
    <main className="flex min-h-screen items-center justify-center p-8">
      <LoginForm redirect={redirect} />
    </main>
  );
}
