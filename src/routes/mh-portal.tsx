import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState, useCallback } from "react";
import {
  Star,
  Check,
  X,
  Trash2,
  Lock,
  ShieldCheck,
  Clock,
  CheckCircle2,
  Loader2,
} from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

const ADMIN_PASSWORD = "Mhsolutions@3011";
const SESSION_KEY = "mh_admin_auth";

type Testimonial = {
  id: string;
  name: string;
  title: string | null;
  hospital: string | null;
  rating: number;
  testimonial: string;
  status: string;
  created_at: string;
};

export const Route = createFileRoute("/mh-portal")({
  component: AdminPortal,
  head: () => ({
    meta: [{ title: "Admin Portal — MH Solutions" }],
  }),
});

function AdminPortal() {
  const [authed, setAuthed] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem(SESSION_KEY) === "true") {
      setAuthed(true);
    }
  }, []);

  function onAuth() {
    sessionStorage.setItem(SESSION_KEY, "true");
    setAuthed(true);
  }

  if (!authed) return <LoginScreen onAuth={onAuth} />;
  return <Dashboard />;
}

function LoginScreen({ onAuth }: { onAuth: () => void }) {
  const [pw, setPw] = useState("");
  const [error, setError] = useState(false);

  function submit(e: React.FormEvent) {
    e.preventDefault();
    if (pw === ADMIN_PASSWORD) {
      onAuth();
    } else {
      setError(true);
      setPw("");
    }
  }

  return (
    <div className="flex min-h-[80vh] items-center justify-center px-4">
      <div className="w-full max-w-sm">
        <div className="text-center mb-8">
          <div className="mx-auto mb-4 grid h-14 w-14 place-items-center rounded-2xl gradient-hero shadow-elegant text-primary-foreground">
            <Lock className="h-7 w-7" />
          </div>
          <h1 className="text-2xl font-bold text-foreground">Admin Portal</h1>
          <p className="mt-1 text-sm text-muted-foreground">
            MH Solutions — Internal Access Only
          </p>
        </div>
        <form
          onSubmit={submit}
          className="rounded-2xl border border-border bg-card p-6 shadow-sm grid gap-4"
        >
          <div className="grid gap-1.5">
            <label htmlFor="pw" className="text-sm font-medium text-foreground">
              Password
            </label>
            <Input
              id="pw"
              type="password"
              value={pw}
              onChange={(e) => {
                setPw(e.target.value);
                setError(false);
              }}
              placeholder="Enter admin password"
              autoFocus
            />
            {error && (
              <p className="text-xs text-destructive">
                Incorrect password. Please try again.
              </p>
            )}
          </div>
          <Button
            type="submit"
            className="gradient-hero border-0 text-primary-foreground shadow-elegant"
          >
            <ShieldCheck className="mr-2 h-4 w-4" /> Sign In
          </Button>
        </form>
      </div>
    </div>
  );
}

function Dashboard() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);

  const fetch = useCallback(async () => {
    setLoading(true);
    const { data } = await supabase
      .from("testimonials")
      .select("*")
      .order("created_at", { ascending: false });
    setTestimonials(data ?? []);
    setLoading(false);
  }, []);

  useEffect(() => {
    fetch();
  }, [fetch]);

  const pending = testimonials.filter((t) => t.status === "pending");
  const approved = testimonials.filter((t) => t.status === "approved");

  async function approve(id: string) {
    const { error } = await supabase
      .from("testimonials")
      .update({ status: "approved" })
      .eq("id", id);
    if (error) {
      toast.error("Failed to approve — please try again.");
    } else {
      toast.success("Review approved and published!");
      fetch();
    }
  }

  async function reject(id: string) {
    const { error } = await supabase.from("testimonials").delete().eq("id", id);
    if (error) {
      toast.error("Failed to reject — please try again.");
    } else {
      toast.success("Review rejected and removed.");
      fetch();
    }
  }

  async function remove(id: string) {
    const { error } = await supabase.from("testimonials").delete().eq("id", id);
    if (error) {
      toast.error("Failed to remove — please try again.");
    } else {
      toast.success("Review removed from the website.");
      fetch();
    }
  }

  function logout() {
    sessionStorage.removeItem(SESSION_KEY);
    window.location.reload();
  }

  return (
    <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-10">
        <div>
          <span className="text-xs font-semibold uppercase tracking-widest text-primary">
            Admin Portal
          </span>
          <h1 className="mt-1 text-3xl font-bold text-foreground">
            Testimonials Manager
          </h1>
        </div>
        <Button variant="outline" size="sm" onClick={logout}>
          Sign Out
        </Button>
      </div>

      {loading ? (
        <div className="flex justify-center py-24">
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
        </div>
      ) : (
        <div className="grid gap-12">
          {/* Pending Section */}
          <section>
            <div className="flex items-center gap-3 mb-6">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-amber-100 dark:bg-amber-900/30">
                <Clock className="h-4 w-4 text-amber-600 dark:text-amber-400" />
              </div>
              <h2 className="text-xl font-semibold text-foreground">
                Pending Review
              </h2>
              {pending.length > 0 && (
                <span className="ml-1 flex h-6 min-w-[24px] items-center justify-center rounded-full bg-amber-500 px-2 text-xs font-bold text-white">
                  {pending.length}
                </span>
              )}
            </div>

            {pending.length === 0 ? (
              <div className="rounded-2xl border border-border bg-secondary/40 p-10 text-center">
                <p className="text-sm text-muted-foreground">
                  All caught up! No pending reviews right now.
                </p>
              </div>
            ) : (
              <div className="grid gap-4">
                {pending.map((t) => (
                  <TestimonialCard
                    key={t.id}
                    item={t}
                    actions={
                      <div className="flex gap-2 mt-4">
                        <Button
                          size="sm"
                          className="gradient-hero border-0 text-primary-foreground"
                          onClick={() => approve(t.id)}
                        >
                          <Check className="mr-1.5 h-4 w-4" /> Approve
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          className="border-destructive/40 text-destructive hover:bg-destructive/5"
                          onClick={() => reject(t.id)}
                        >
                          <X className="mr-1.5 h-4 w-4" /> Reject
                        </Button>
                      </div>
                    }
                  />
                ))}
              </div>
            )}
          </section>

          {/* Approved Section */}
          <section>
            <div className="flex items-center gap-3 mb-6">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-100 dark:bg-emerald-900/30">
                <CheckCircle2 className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
              </div>
              <h2 className="text-xl font-semibold text-foreground">
                Live on Website
              </h2>
              {approved.length > 0 && (
                <span className="ml-1 flex h-6 min-w-[24px] items-center justify-center rounded-full bg-emerald-500 px-2 text-xs font-bold text-white">
                  {approved.length}
                </span>
              )}
            </div>

            {approved.length === 0 ? (
              <div className="rounded-2xl border border-border bg-secondary/40 p-10 text-center">
                <p className="text-sm text-muted-foreground">
                  No approved reviews yet. Approve a pending review above to publish it.
                </p>
              </div>
            ) : (
              <div className="grid gap-4">
                {approved.map((t) => (
                  <TestimonialCard
                    key={t.id}
                    item={t}
                    actions={
                      <div className="mt-4">
                        <Button
                          size="sm"
                          variant="outline"
                          className="border-destructive/40 text-destructive hover:bg-destructive/5"
                          onClick={() => remove(t.id)}
                        >
                          <Trash2 className="mr-1.5 h-4 w-4" /> Remove from website
                        </Button>
                      </div>
                    }
                  />
                ))}
              </div>
            )}
          </section>
        </div>
      )}
    </div>
  );
}

function TestimonialCard({
  item,
  actions,
}: {
  item: Testimonial;
  actions: React.ReactNode;
}) {
  const date = new Date(item.created_at).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  return (
    <div className="rounded-2xl border border-border bg-card p-5 shadow-sm">
      <div className="flex items-start justify-between gap-4 flex-wrap">
        <div>
          <div className="flex items-center gap-2">
            <p className="font-semibold text-foreground">{item.name}</p>
          </div>
          {(item.title || item.hospital) && (
            <p className="text-xs text-muted-foreground mt-0.5">
              {[item.title, item.hospital].filter(Boolean).join(" · ")}
            </p>
          )}
        </div>
        <div className="flex items-center gap-2">
          <div className="flex gap-0.5 text-amber-400">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={`h-3.5 w-3.5 ${i < item.rating ? "fill-current" : "text-muted"}`}
              />
            ))}
          </div>
          <span className="text-xs text-muted-foreground">{date}</span>
        </div>
      </div>
      <p className="mt-3 text-sm text-foreground/80 leading-relaxed">
        &ldquo;{item.testimonial}&rdquo;
      </p>
      {actions}
    </div>
  );
}
