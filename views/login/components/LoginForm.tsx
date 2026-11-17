'use client';

import { useActionState } from 'react';

import { login, type LoginState } from '@/app/login/actions';

import Field from './Field';

interface LoginFormProps {
  /** The encoded page to return to after login, passed through from `?redirect=`. */
  redirect?: string;
}

export default function LoginForm({ redirect }: LoginFormProps) {
  const [state, formAction, pending] = useActionState<LoginState, FormData>(login, {});

  return (
    <form action={formAction} className="flex w-full max-w-sm flex-col gap-4" noValidate>
      <h1 className="text-2xl font-semibold">Log in</h1>

      {state.message && (
        <p role="alert" className="text-sm text-red-600">
          {state.message}
        </p>
      )}

      <Field
        name="email"
        label="Email"
        type="email"
        autoComplete="email"
        defaultValue={state.email}
        errors={state.fieldErrors?.email}
      />
      <Field
        name="password"
        label="Password"
        type="password"
        autoComplete="current-password"
        errors={state.fieldErrors?.password}
      />

      {redirect && <input type="hidden" name="redirect" value={redirect} />}

      <button
        type="submit"
        disabled={pending}
        className="rounded-full bg-foreground px-5 py-2 font-medium text-background transition-opacity disabled:opacity-60"
      >
        {pending ? 'Logging in…' : 'Log in'}
      </button>
    </form>
  );
}
