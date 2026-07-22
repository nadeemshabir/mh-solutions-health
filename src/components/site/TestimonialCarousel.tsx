import { useEffect, useState } from "react";
import { Star } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

type Testimonial = {
  id: string;
  name: string;
  title: string | null;
  hospital: string | null;
  rating: number;
  testimonial: string;
};

const AVATAR_COLORS = [
  "from-teal-500 to-cyan-600",
  "from-primary to-blue-600",
  "from-violet-500 to-purple-600",
  "from-emerald-500 to-teal-600",
  "from-orange-400 to-amber-500",
  "from-rose-500 to-pink-600",
];

function getColor(name: string) {
  return AVATAR_COLORS[name.charCodeAt(0) % AVATAR_COLORS.length];
}

function getInitials(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

function TestimonialCard({ item }: { item: Testimonial }) {
  const color = getColor(item.name);
  const initials = getInitials(item.name);

  return (
    <figure className="w-[320px] flex-shrink-0 flex flex-col rounded-2xl border border-border bg-card p-6 shadow-sm mx-3">
      <div className="flex gap-1 text-amber-400">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={`h-4 w-4 ${i < item.rating ? "fill-current" : "fill-muted text-muted"}`}
          />
        ))}
      </div>
      <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-foreground/85 line-clamp-5">
        &ldquo;{item.testimonial}&rdquo;
      </blockquote>
      <figcaption className="mt-6 flex items-center gap-3 border-t border-border pt-4">
        <div
          className={`grid h-9 w-9 shrink-0 place-items-center rounded-full bg-gradient-to-br ${color} text-xs font-bold text-white shadow-sm`}
        >
          {initials}
        </div>
        <div>
          <div className="text-sm font-semibold text-foreground">{item.name}</div>
          {(item.title || item.hospital) && (
            <div className="text-xs text-muted-foreground">
              {[item.title, item.hospital].filter(Boolean).join(", ")}
            </div>
          )}
        </div>
      </figcaption>
    </figure>
  );
}

export function TestimonialCarousel() {
  const [items, setItems] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    supabase
      .from("testimonials")
      .select("id, name, title, hospital, rating, testimonial")
      .eq("status", "approved")
      .order("created_at", { ascending: false })
      .then(({ data }) => {
        setItems(data ?? []);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="flex gap-6 overflow-hidden px-4">
        {Array.from({ length: 3 }).map((_, i) => (
          <div
            key={i}
            className="w-[320px] flex-shrink-0 h-52 rounded-2xl border border-border bg-card animate-pulse mx-3"
          />
        ))}
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <p className="text-center text-sm text-muted-foreground py-10">
        No reviews yet — be the first to{" "}
        <a href="/feedback" className="text-primary underline underline-offset-4">
          share your experience
        </a>
        !
      </p>
    );
  }

  // Duplicate for seamless infinite loop
  const doubled = [...items, ...items];

  return (
    <div className="relative overflow-hidden">
      {/* Fade edges */}
      <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-l from-background to-transparent" />

      <div className="flex animate-marquee hover:[animation-play-state:paused] w-max py-2">
        {doubled.map((item, i) => (
          <TestimonialCard key={`${item.id}-${i}`} item={item} />
        ))}
      </div>
    </div>
  );
}
