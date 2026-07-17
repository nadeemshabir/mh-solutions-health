import { createFileRoute, Link } from "@tanstack/react-router";
import { BadgeCheck, Building2, HeartPulse, ShieldCheck, Target, Users } from "lucide-react";
import aboutImg from "@/assets/about-team.jpg";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — MH Solutions Sales & Services" },
      {
        name: "description",
        content:
          "15+ years serving hospitals and diagnostic centers with medical equipment sales, installation, AMC and repair.",
      },
      { property: "og:title", content: "About MH Solutions Sales & Services" },
      {
        property: "og:description",
        content: "Mission, experience and why healthcare institutions trust our team.",
      },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

function About() {
  return (
    <div>
      <section className="gradient-soft">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-24 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-primary">
                About us
              </span>
              <h1 className="mt-3 text-4xl font-bold text-foreground sm:text-5xl">
                A biomedical partner your facility can rely on.
              </h1>
              <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
                MH Solutions Sales & Services was founded to give healthcare institutions a single,
                dependable partner for the entire medical equipment lifecycle — from procurement and
                installation to preventive maintenance and rapid repair.
              </p>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                We work with hospitals, clinics, diagnostic centers and nursing homes across the
                region, backed by a team of certified biomedical engineers and strong OEM
                relationships.
              </p>
            </div>
            <img
              src={aboutImg}
              alt="Biomedical engineering team"
              width={1400}
              height={1000}
              loading="lazy"
              className="aspect-[4/3] w-full rounded-3xl object-cover shadow-elegant-lg"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-3">
          <Value
            Icon={Target}
            title="Our mission"
            body="Keep every piece of critical medical equipment running — safely, accurately and on time."
          />
          <Value
            Icon={HeartPulse}
            title="Our vision"
            body="A healthcare ecosystem where downtime never gets in the way of patient care."
          />
          <Value
            Icon={ShieldCheck}
            title="Our values"
            body="Integrity, technical excellence and long-term partnership over one-off transactions."
          />
        </div>
      </section>

      <section className="bg-secondary/40 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
            Why choose MH Solutions
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                Icon: BadgeCheck,
                title: "15+ years",
                body: "Delivering medical equipment and service across the region.",
              },
              {
                Icon: Users,
                title: "Certified engineers",
                body: "Trained across leading OEM platforms with in-field experience.",
              },
              {
                Icon: Building2,
                title: "800+ installations",
                body: "In hospitals, diagnostic centers, nursing homes and clinics.",
              },
              {
                Icon: HeartPulse,
                title: "24×7 support",
                body: "Emergency line for critical equipment downtime.",
              },
            ].map(({ Icon, title, body }) => (
              <div
                key={title}
                className="rounded-2xl border border-border bg-background p-6 shadow-sm"
              >
                <div className="grid h-11 w-11 place-items-center rounded-xl gradient-hero text-primary-foreground shadow-elegant">
                  <Icon className="h-5 w-5" />
                </div>
                <div className="mt-4 text-base font-semibold text-foreground">{title}</div>
                <p className="mt-1.5 text-sm text-muted-foreground">{body}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 flex flex-wrap gap-3">
            <Button
              asChild
              className="gradient-hero border-0 text-primary-foreground shadow-elegant"
            >
              <Link to="/quote">Get a Quote</Link>
            </Button>
            <Button asChild variant="outline">
              <Link to="/contact">Talk to our team</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

function Value({ Icon, title, body }: { Icon: typeof Target; title: string; body: string }) {
  return (
    <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
      <div className="grid h-11 w-11 place-items-center rounded-xl bg-teal-soft text-primary">
        <Icon className="h-5 w-5" />
      </div>
      <h3 className="mt-4 text-base font-semibold text-foreground">{title}</h3>
      <p className="mt-1.5 text-sm text-muted-foreground">{body}</p>
    </div>
  );
}
