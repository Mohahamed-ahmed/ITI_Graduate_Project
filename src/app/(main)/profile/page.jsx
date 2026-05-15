'use client';

import { useRouter } from "next/navigation";
import { LogOut, Mail, ShieldUser, User } from "lucide-react";
import { useGetProfile } from "@/hooks/use-user";
import { useLogout } from "@/hooks/use-auth";

export default function ProfilePage() {
  const router = useRouter();
  const { data: profileData, isLoading, isError } = useGetProfile();
  const logoutMutation = useLogout();

  const profile = profileData?.userData;
  const initials = profile?.name?.trim()?.charAt(0)?.toUpperCase() || "U";

  const handleLogout = () => {
    logoutMutation.mutate(undefined, {
      onSuccess: () => {
        router.push('/login');
      },
    });
  };

  if (isLoading) {
    return (
      <main className="min-h-screen bg-[radial-gradient(circle_at_top_left,rgba(217,119,6,0.22),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(251,191,36,0.16),transparent_34%),linear-gradient(180deg,var(--background),var(--secondary))] px-4 py-16">
        <div className="mx-auto max-w-4xl">
          <div className="h-105 rounded-3xl border border-border bg-card/80 shadow-sm animate-pulse" />
        </div>
      </main>
    );
  }

  if (isError && !profile) {
    return (
      <main className="min-h-screen bg-[radial-gradient(circle_at_top_left,rgba(217,119,6,0.22),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(251,191,36,0.16),transparent_34%),linear-gradient(180deg,var(--background),var(--secondary))] px-4 py-16">
        <div className="mx-auto max-w-3xl rounded-3xl border border-border bg-card p-8 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">Profile</p>
          <h1 className="mt-3 text-3xl font-bold">We could not load your profile.</h1>
          <p className="mt-2 text-muted-foreground">
            Please sign in again to continue.
          </p>
          <div className="mt-6">
            <button
              type="button"
              onClick={handleLogout}
              className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2 transition hover:bg-accent"
            >
              <LogOut className="h-4 w-4" />
              Logout
            </button>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top_left,rgba(217,119,6,0.22),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(251,191,36,0.16),transparent_34%),linear-gradient(180deg,var(--background),var(--secondary))] px-4 py-12 sm:py-16">
      <div className="mx-auto max-w-5xl">
        <div className="mb-8 flex items-center justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-primary">Profile</p>
            <h1 className="mt-2 text-3xl font-bold sm:text-4xl">Your account details</h1>
            <p className="mt-2 max-w-2xl text-muted-foreground">
              This is the private area for signed-in users. It shows the basic account information attached to your account.
            </p>
          </div>
          <button
            type="button"
            onClick={handleLogout}
            className="hidden items-center gap-2 rounded-md border border-border bg-card px-4 py-2 transition hover:bg-accent sm:inline-flex"
          >
            <LogOut className="h-4 w-4" />
            Logout
          </button>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <section className="relative overflow-hidden rounded-3xl border border-border bg-card p-6 shadow-sm sm:p-8">
            <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-primary/15 blur-3xl" />
            <div className="relative flex flex-col gap-6 sm:flex-row sm:items-center">
              <div className="flex h-24 w-24 items-center justify-center rounded-3xl bg-primary text-3xl font-bold text-primary-foreground shadow-lg shadow-primary/20">
                {initials}
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">Signed in as</p>
                <h2 className="mt-2 text-2xl font-bold">{profile?.name || "Unknown User"}</h2>
                <div className="mt-3 flex items-center gap-2 text-muted-foreground">
                  <Mail className="h-4 w-4" />
                  <span>{profile?.email || "No email found"}</span>
                </div>
              </div>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-border bg-background/70 p-4">
                <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
                  <User className="h-4 w-4 text-primary" />
                  Display Name
                </div>
                <p className="mt-3 text-lg font-semibold">{profile?.name || "Unknown User"}</p>
              </div>
              <div className="rounded-2xl border border-border bg-background/70 p-4">
                <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
                  <ShieldUser className="h-4 w-4 text-primary" />
                  Session Status
                </div>
                <p className="mt-3 text-lg font-semibold text-emerald-600 dark:text-emerald-400">Active</p>
              </div>
            </div>
          </section>

          <aside className="space-y-6">
            <div className="rounded-3xl border border-border bg-card p-6 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Quick Actions</p>
              <div className="mt-4">
                <button
                  type="button"
                  onClick={handleLogout}
                  className="flex w-full items-center justify-center gap-2 rounded-md border border-border px-4 py-3 transition hover:bg-accent"
                >
                  <LogOut className="h-4 w-4" />
                  Logout
                </button>
              </div>
            </div>

            <div className="rounded-3xl border border-border bg-card p-6 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Account Notes</p>
              <p className="mt-4 text-sm leading-6 text-muted-foreground">
                Keep your profile information up to date and use logout when you finish your session on a shared device.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
