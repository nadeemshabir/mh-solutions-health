import { createFileRoute, Link } from "@tanstack/react-router";
import { BadgeCheck, Clock4, PhoneCall, ShieldCheck, Wrench, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Repair & Maintenance Services — MH Solutions" },
      { name: "description", content: "Installation, AMC / CMC, emergency repair and preventive maintenance for medical equipment. Rapid response guaranteed." },
      { property: "og:title", content: "Medical equipment service & AMC" },
      { property: "og:description", content: "Certified engineers, genuine spares, priority response for hospitals and clinics." },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: Services,
});

const SERVICES = [
  { Icon: Wrench, title: "Installation & Commissioning", body: "Site survey, delivery, calibration and clinical hand-over — turnkey execution for every equipment category." },
  { Icon: ShieldCheck, title: "AMC / CMC Contracts", body: "Structured annual and comprehensive contracts covering preventive visits, breakdown support and genuine spares." },
  { Icon: Zap, title: "Emergency Repair", body: "Priority response for critical downtime with same-day dispatch and remote diagnostics where possible." },
  { Icon: BadgeCheck, title: "Preventive Maintenance", body: "Scheduled multi-point checks, calibration and safety validation to extend equipment life and ensure patient safety." },
  { Icon: Clock4, title: "Genuine Spare Parts", body: "OEM-sourced spares and consumables with warranty and traceability." },
  { Icon: PhoneCall, title: "Technical Support", body: "Phone, email and on-site support from certified biomedical engineers." },
];

function Services() {
  return (
    <div>
      <section className="gradient-soft">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-20 lg:px-8">
          <span className="text-xs font-semibold uppercase tracking-widest text-primary">Services</span>
          <h1 className="mt-3 max-w-3xl text-4xl font-bold text-foreground sm:text-5xl">
            Keep every machine running — safely and on time.
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-muted-foreground">
            From day-one installation to long-term AMC and emergency repair, our
            biomedical engineering team is your extended service arm.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild className="gradient-hero border-0 text-primary-foreground shadow-elegant">
              <Link to="/quote">Request Service</Link>
            </Button>
            <Button asChild variant="outline">
              <a href={SITE.phoneHref}><PhoneCall className="mr-1.5 h-4 w-4" />Call {SITE.phone}</a>
            </Button>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s) => (
            <div key={s.title} className="rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-elegant">
              <div className="grid h-11 w-11 place-items-center rounded-xl gradient-hero text-primary-foreground shadow-elegant">
                <s.Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-base font-semibold text-foreground">{s.title}</h3>
              <p className="mt-1.5 text-sm text-muted-foreground">{s.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-secondary/40 py-20">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-3 lg:px-8">
          <SLA value="< 1 hr" label="Response time" body="Target first-response for all service requests during business hours." />
          <SLA value="Same day" label="Dispatch" body="Engineer dispatch for critical equipment downtime, subject to location." />
          <SLA value="24×7" label="Emergency line" body="Round-the-clock support for AMC / CMC customers." />
        </div>
      </section>
    </div>
  );
}

function SLA({ value, label, body }: { value: string; label: string; body: string }) {
  return (
    <div className="rounded-2xl border border-border bg-background p-6 shadow-sm">
      <div className="text-3xl font-bold text-primary">{value}</div>
      <div className="mt-1 text-sm font-semibold text-foreground">{label}</div>
      <p className="mt-2 text-sm text-muted-foreground">{body}</p>
    </div>
  );
}