import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { Star, CheckCircle2, Loader2, MessageSquareHeart } from "lucide-react";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { TestimonialCarousel } from "@/components/site/TestimonialCarousel";

export const Route = createFileRoute("/feedback")({
  component: FeedbackPage,
  head: () => ({
    meta: [
      { title: "Share Your Feedback — MH Solutions and Services" },
      {
        name: "description",
        content:
          "Share your experience with MH Solutions and Services. Your review helps other hospitals and clinics make the right choice.",
      },
    ],
  }),
});

function FeedbackPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-16 sm:py-20 bg-secondary/40">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="mx-auto mb-5 grid h-14 w-14 place-items-center rounded-2xl gradient-hero shadow-elegant text-primary-foreground">
            <MessageSquareHeart className="h-7 w-7" />
          </div>
          <span className="text-xs font-semibold uppercase tracking-widest text-primary">
            Share Your Experience
          </span>
          <h1 className="mt-3 text-4xl font-bold text-foreground sm:text-5xl">
            How did we do?
          </h1>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Your feedback helps us grow and helps other hospitals make the right
            choice. It takes less than 2 minutes.
          </p>
        </div>
      </section>

      {/* Form */}
      <section className="py-16">
        <div className="mx-auto max-w-xl px-4 sm:px-6 lg:px-8">
          <FeedbackForm />
        </div>
      </section>

      {/* Only show reviews section when there are approved reviews */}
      <LiveReviewsSection />
    </>
  );
}

function LiveReviewsSection() {
  const [hasReviews, setHasReviews] = useState<boolean | null>(null);

  useEffect(() => {
    supabase
      .from("testimonials")
      .select("id", { count: "exact", head: true })
      .eq("status", "approved")
      .then(({ count }) => {
        setHasReviews((count ?? 0) > 0);
      });
  }, []);

  // Don't render anything until we know if there are reviews
  if (!hasReviews) return null;

  return (
    <section className="py-16 bg-secondary/40 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-12">
          <span className="text-xs font-semibold uppercase tracking-widest text-primary">
            What others say
          </span>
          <h2 className="mt-3 text-3xl font-bold text-foreground sm:text-4xl">
            Trusted by healthcare teams
          </h2>
          <p className="mt-4 text-muted-foreground">
            Real feedback from hospitals, clinics and diagnostic centers we serve.
          </p>
        </div>
        <TestimonialCarousel />
      </div>
    </section>
  );
}

function FeedbackForm() {
  const [rating, setRating] = useState(0);
  const [hovered, setHovered] = useState(0);
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (rating === 0) {
      toast.error("Please select a star rating before submitting.");
      return;
    }
    const fd = new FormData(e.currentTarget);
    const name = (fd.get("name") as string).trim();
    const testimonial = (fd.get("testimonial") as string).trim();
    if (!name || !testimonial) {
      toast.error("Name and review are required fields.");
      return;
    }
    setSubmitting(true);
    const { error } = await supabase.from("testimonials").insert({
      name,
      title: ((fd.get("title") as string) ?? "").trim() || null,
      hospital: ((fd.get("hospital") as string) ?? "").trim() || null,
      rating,
      testimonial,
      status: "pending",
    });
    setSubmitting(false);
    if (error) {
      console.error(error);
      toast.error("Something went wrong — please try again.");
      return;
    }
    setDone(true);
  }

  if (done) {
    return (
      <div className="rounded-2xl border border-border bg-card p-10 text-center shadow-sm">
        <CheckCircle2 className="mx-auto h-14 w-14 text-primary" />
        <h2 className="mt-5 text-2xl font-semibold text-foreground">
          Thank you for your feedback!
        </h2>
        <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
          Your review has been submitted and is under manual review. We'll
          publish it on our website shortly after verification.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="grid gap-5 rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8"
    >
      {/* Star Rating */}
      <div className="grid gap-2">
        <Label>
          Your Rating <span className="text-destructive">*</span>
        </Label>
        <div className="flex gap-1">
          {[1, 2, 3, 4, 5].map((s) => (
            <button
              key={s}
              type="button"
              onClick={() => setRating(s)}
              onMouseEnter={() => setHovered(s)}
              onMouseLeave={() => setHovered(0)}
              className="transition-transform hover:scale-110 focus:outline-none"
              aria-label={`Rate ${s} star${s > 1 ? "s" : ""}`}
            >
              <Star
                className={`h-9 w-9 transition-colors duration-150 ${
                  s <= (hovered || rating)
                    ? "fill-amber-400 text-amber-400"
                    : "text-muted-foreground/25"
                }`}
              />
            </button>
          ))}
        </div>
        {rating > 0 && (
          <p className="text-xs text-muted-foreground">
            {["", "Poor", "Fair", "Good", "Very Good", "Excellent"][rating]} ·{" "}
            {rating} star{rating > 1 ? "s" : ""}
          </p>
        )}
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="grid gap-1.5">
          <Label htmlFor="name">
            Full Name <span className="text-destructive">*</span>
          </Label>
          <Input id="name" name="name" placeholder="Dr. Ravi Kumar" required />
        </div>
        <div className="grid gap-1.5">
          <Label htmlFor="title">Job Title</Label>
          <Input
            id="title"
            name="title"
            placeholder="Biomedical Engineer"
          />
        </div>
      </div>

      <div className="grid gap-1.5">
        <Label htmlFor="hospital">Hospital / Organization</Label>
        <Input
          id="hospital"
          name="hospital"
          placeholder="Apollo Hospital, Delhi"
        />
      </div>

      <div className="grid gap-1.5">
        <Label htmlFor="testimonial">
          Your Review <span className="text-destructive">*</span>
        </Label>
        <Textarea
          id="testimonial"
          name="testimonial"
          rows={5}
          placeholder="Tell us about your experience with MH Solutions and Services — the equipment, the service, the team…"
          required
        />
      </div>

      <Button
        type="submit"
        disabled={submitting}
        className="gradient-hero border-0 text-primary-foreground shadow-elegant"
      >
        {submitting ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Submitting…
          </>
        ) : (
          "Submit Your Review"
        )}
      </Button>

      <p className="text-xs text-muted-foreground text-center">
        All reviews are manually verified before being published on our website.
        No spam, no fake reviews.
      </p>
    </form>
  );
}
