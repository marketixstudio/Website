"use client";

import { useFormState, useFormStatus } from "react-dom";
import { Loader2 } from "lucide-react";
import { createFirstLogin, signIn } from "./actions";

function Submit({ label = "Sign in" }: { label?: string }) {
  const { pending } = useFormStatus();
  return (
    <button type="submit" disabled={pending} className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#C82AEF] px-5 py-3 font-semibold text-white disabled:opacity-60">
      {pending && <Loader2 className="h-4 w-4 animate-spin" />}
      {label}
    </button>
  );
}

export function LoginForm({ next, create = false }: { next: string; create?: boolean }) {
  const [state, action] = useFormState(create ? createFirstLogin : signIn, { error: "" });
  return (
    <form action={action} className="mt-8 space-y-5 rounded-2xl border border-neutral-200 bg-white p-6">
      <input type="hidden" name="next" value={next} />
      <div>
        <label htmlFor="email" className="text-sm font-semibold">Email</label>
        <input id="email" name="email" type="email" autoComplete="username" required className="mt-2 w-full rounded-xl bg-neutral-100 px-4 py-3 text-[15px]" />
      </div>
      <div>
        <label htmlFor="password" className="text-sm font-semibold">Password</label>
        <input id="password" name="password" type="password" autoComplete={create ? "new-password" : "current-password"} minLength={create ? 10 : undefined} required className="mt-2 w-full rounded-xl bg-neutral-100 px-4 py-3 text-[15px]" />
        {create && <p className="mt-1.5 text-xs text-neutral-500">At least 10 characters.</p>}
      </div>
      {create && (
        <div>
          <label htmlFor="confirm" className="text-sm font-semibold">Password again</label>
          <input id="confirm" name="confirm" type="password" autoComplete="new-password" required className="mt-2 w-full rounded-xl bg-neutral-100 px-4 py-3 text-[15px]" />
        </div>
      )}
      <Submit label={create ? "Create sign-in" : "Sign in"} />
      {state.error && <p role="alert" className="text-sm font-medium text-red-600">{state.error}</p>}
    </form>
  );
}
