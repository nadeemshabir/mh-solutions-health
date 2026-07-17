import { createFileRoute, Link } from "@tanstack/react-router";
import { Building2, HeartPulse, Microscope, Stethoscope } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/industries")({
  head: () => ({
    meta: [
      { title: "Industries & Healthcare Solutions — MH Solutions" },
      { name: "description", content: "Tailored medical equipment solutions for hospitals, clinics, diagnostic centers and nursing homes." },
      { property: "og:title", content: "Healthcare solutions we power" },
      { property: "og:description", content: "Purpose-built support for hospitals, clinics, diagnostics and nursing homes." },
      { property: "og:url", content: "/industries" },
    ],
    links: [{ rel: "canonical", href: "/industries" }],
  }),
  component: Industries,
});

const SEGMENTS = [
  { Icon: Building2, title: "Hospitals", body: "Multi-department procurement, OT setup, dialysis units, biomedical service contracts and preventive maintenance rolled into one dependable partnership." },
  { Icon: Stethoscope, title: "Clinics & Nursing Homes", body: "Right-sized equipment packages, financing guidance and responsive service that respects small-facility workflows and budgets." },
  { Icon: Microscope, title: "Diagnostic Centers", body: "USG, X-Ray and imaging modalities with uptime-first AMC — because every unscheduled downtime is lost revenue." },
  { Icon: HeartPulse, title: "Standalone Specialty Units", body: "Nephrology, cardiology and OT-focused facilities get purpose-built equipment and technical support tuned to their specialty." },
];

function Industries() {
  return (
    <div>
      <section className="gradient-soft">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-20 lg:px-8">
          <span className="text-xs font-semibold uppercase tracking-widest text-primary">Industries</span>
          <h1 className="mt-3 max-w-3xl text-4xl font-bold text-foreground sm:text-5xl">
            Solutions built around how you actually work.
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-muted-foreground">
            Every facility is different. We tailor our equipment recommendations
            and service coverage to your specialty, scale and workflow.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2">
          {SEGMENTS.map((s) => (
            <div key={s.title} className="rounded-3xl border border-border bg-card p-8 shadow-sm transition-all hover:-translate-y-1 hover:shadow-elegant-lg">
              <div className="grid h-12 w-12 place-items-center rounded-2xl gradient-hero text-primary-foreground shadow-elegant">
                <s.Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-xl font-semibold text-foreground">{s.title}</h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">{s.body}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 flex flex-wrap gap-3">
          <Button asChild className="gradient-hero border-0 text-primary-foreground shadow-elegant">
            <Link to="/quote">Discuss your requirement</Link>
          </Button>
          <Button asChild variant="outline">
            <Link to="/contact">Contact our team</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}