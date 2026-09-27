import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { canCreateFirstLogin, sessionEmail } from "@/lib/admin-auth";
import { LoginForm } from "./login-form";

export const metadata: Metadata = { title: "Sign in", robots: { index: false, follow: false } };
export const dynamic = "force-dynamic";

/** Sign-in for the private review report and reply tools. */
export default function Page({ searchParams }: { searchParams: { next?: string } }) {
  const next = searchParams.next?.startsWith("/r/") ? searchParams.next : "/r/reports";
  if (sessionEmail()) redirect(next);
  const create = canCreateFirstLogin();
  return (
    <div className="min-h-screen bg-neutral-50 px-5 py-16 text-[#0A0A0C]">
      <div className="mx-auto w-full max-w-sm">
        <p className="text-sm font-semibold text-neutral-500">Marketix Studio</p>
        <h1 className="mt-1 text-2xl font-extrabold">{create ? "Create your sign-in" : "Sign in to the review report"}</h1>
        {create && <p className="mt-2 text-sm text-neutral-500">No sign-in exists yet. Choose the email and password you will use for the review report. Only a hash of the password is saved.</p>}
        <LoginForm next={next} create={create} />
      </div>
    </div>
  );
}
