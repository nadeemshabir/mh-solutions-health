import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  BadgeCheck,
  Clock4,
  HeartPulse,
  PhoneCall,
  ShieldCheck,
  Star,
  Wrench,
  Zap,
} from "lucide-react";
import heroImg from "@/assets/hero-medical.jpg";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { EQUIPMENT } from "@/components/site/equipment";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <EquipmentGrid />
      <ServicesHighlight />
      <WhyChooseUs />
      <Testimonials />
      <FAQ />
      <CTASection />
    </>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 gradient-soft" aria-hidden />
      <div className="relative z-10 mx-auto grid max-w-7xl gap-10 px-4 pb-16 pt-8 sm:px-6 sm:pt-12 lg:grid-cols-2 lg:gap-8 lg:py-24 lg:px-8">
        <div className="flex flex-col justify-center">
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-medium text-primary">
            <HeartPulse className="h-3.5 w-3.5" /> Trusted medical equipment partner
          </span>
          <h1 className="mt-5 text-4xl font-bold leading-[1.05] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Precision equipment.{" "}
            <span className="bg-gradient-to-r from-primary to-teal bg-clip-text text-transparent">
              Uptime you can trust.
            </span>
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground">
            {SITE.name} delivers end-to-end sales, installation, preventive maintenance and rapid
            repair of critical medical equipment for hospitals, clinics, diagnostic centers and
            nursing homes.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button
              asChild
              size="lg"
              className="gradient-hero border-0 text-primary-foreground shadow-elegant hover:opacity-95"
            >
              <Link to="/quote">
                Get a Quote <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-primary/30 text-primary hover:bg-primary/5"
            >
              <Link to="/services">
                <Wrench className="mr-1.5 h-4 w-4" /> Request Service
              </Link>
            </Button>
          </div>
          <div className="mt-10 grid grid-cols-3 gap-6 border-t border-border/60 pt-6 text-sm">
            <Stat value="15+" label="Years of service" />
            <Stat value="800+" label="Installations" />
            <Stat value="24×7" label="Emergency support" />
          </div>
        </div>
        <div className="relative">
          <div
            className="absolute -inset-4 rounded-3xl gradient-hero opacity-20 blur-2xl"
            aria-hidden
          />
          <img
            src={heroImg}
            alt="Nipro dialysis machine setup next to a hospital bed"
            width={1600}
            height={1100}
            className="relative aspect-[4/3] w-full rounded-3xl object-cover shadow-elegant-lg"
          />
          <div className="absolute -bottom-6 -left-6 hidden max-w-[220px] rounded-2xl border border-border bg-background/95 p-4 shadow-elegant backdrop-blur sm:block">
            <div className="flex items-center gap-2 text-primary">
              <Clock4 className="h-4 w-4" />
              <span className="text-xs font-semibold uppercase tracking-wide">Rapid response</span>
            </div>
            <p className="mt-1 text-sm font-medium text-foreground">
              Same-day dispatch for critical equipment downtime.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <div className="text-2xl font-bold text-primary sm:text-3xl">{value}</div>
      <div className="mt-1 text-xs text-muted-foreground sm:text-sm">{label}</div>
    </div>
  );
}

function TrustStrip() {
  const items = [
    { Icon: ShieldCheck, label: "Certified engineers" },
    { Icon: BadgeCheck, label: "Genuine spares" },
    { Icon: Zap, label: "Fast response" },
    { Icon: HeartPulse, label: "Patient-safe uptime" },
  ];
  return (
    <section className="border-y border-border bg-secondary/40 py-6">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-10 gap-y-4 px-4 text-sm text-muted-foreground sm:px-6 lg:px-8">
        {items.map(({ Icon, label }) => (
          <div key={label} className="flex items-center gap-2">
            <Icon className="h-4 w-4 text-primary" />
            <span className="font-medium text-foreground/80">{label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

function EquipmentGrid() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
          Equipment we deliver & support
        </h2>
        <p className="mt-4 text-muted-foreground">
          From dialysis units to complete operation theatres — configured to your facility, backed
          by lifetime service support.
        </p>
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {EQUIPMENT.map((e) => (
          <Link
            key={e.slug}
            to="/quote"
            search={{ equipment: e.name }}
            className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-elegant-lg"
          >
            <div className="relative aspect-[4/3] overflow-hidden">
              <img
                src={e.image}
                alt={e.name}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 dark:from-black/60 via-transparent to-transparent" />
              <div className="absolute left-4 top-4 grid h-10 w-10 place-items-center rounded-xl bg-background/95 text-primary shadow-elegant">
                <e.icon className="h-5 w-5" />
              </div>
            </div>
            <div className="flex flex-1 flex-col p-6">
              <h3 className="text-lg font-semibold text-foreground">{e.name}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{e.short}</p>
              <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-primary">
                Get a Quote{" "}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

function ServicesHighlight() {
  const items = [
    {
      Icon: Wrench,
      title: "Installation",
      body: "Turnkey delivery, calibration and commissioning at your facility.",
    },
    {
      Icon: ShieldCheck,
      title: "AMC / CMC",
      body: "Annual and comprehensive contracts to keep uptime high and costs predictable.",
    },
    {
      Icon: Zap,
      title: "Emergency Repair",
      body: "Rapid response with same-day dispatch for critical breakdowns.",
    },
    {
      Icon: BadgeCheck,
      title: "Genuine Spares",
      body: "Original OEM parts and consumables for reliable long-term performance.",
    },
  ];
  return (
    <section className="bg-secondary/40 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_1.4fr]">
          <div>
            <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
              End-to-end service for every equipment lifecycle
            </h2>
            <p className="mt-4 text-muted-foreground">
              We stay with you long after installation — with preventive maintenance schedules,
              priority breakdown support and genuine OEM spares.
            </p>
            <Button
              asChild
              className="mt-6 gradient-hero border-0 text-primary-foreground shadow-elegant"
            >
              <Link to="/services">
                Explore services <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {items.map(({ Icon, title, body }) => (
              <div
                key={title}
                className="rounded-2xl border border-border bg-background p-6 shadow-sm transition-shadow hover:shadow-elegant"
              >
                <div className="grid h-11 w-11 place-items-center rounded-xl gradient-hero text-primary-foreground shadow-elegant">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-base font-semibold text-foreground">{title}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function WhyChooseUs() {
  const items = [
    {
      Icon: BadgeCheck,
      title: "15+ years of experience",
      body: "Trusted by hospitals, diagnostic chains and nursing homes across the region.",
    },
    {
      Icon: ShieldCheck,
      title: "Certified biomedical engineers",
      body: "In-house team trained across leading OEM platforms.",
    },
    {
      Icon: Zap,
      title: "Rapid response times",
      body: "Same-day dispatch for critical downtime, with 24×7 emergency line.",
    },
    {
      Icon: HeartPulse,
      title: "Patient-safety first",
      body: "Calibrated installs, AERB compliance and audit-ready service records.",
    },
  ];
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
          Why healthcare teams choose us
        </h2>
        <p className="mt-4 text-muted-foreground">
          A dependable partner for procurement teams, biomedical departments and clinicians.
        </p>
      </div>
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {items.map(({ Icon, title, body }) => (
          <div
            key={title}
            className="rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:shadow-elegant"
          >
            <div className="grid h-11 w-11 place-items-center rounded-xl bg-teal-soft text-primary">
              <Icon className="h-5 w-5" />
            </div>
            <h3 className="mt-4 text-base font-semibold text-foreground">{title}</h3>
            <p className="mt-1.5 text-sm text-muted-foreground">{body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Testimonials() {
  const t = [
    {
      quote:
        "MH Solutions installed our entire dialysis floor and continues to run our AMC. Downtime is virtually zero.",
      name: "Dr. R. Sharma",
      role: "Medical Director, City Nephrology Center",
    },
    {
      quote:
        "Their engineers respond within the hour. For a diagnostic center like ours, that's the difference between a good day and a lost day.",
      name: "A. Menon",
      role: "Operations Head, ClearScan Diagnostics",
    },
    {
      quote:
        "Transparent pricing, genuine spares, and a team that actually understands OT workflow. Highly recommended.",
      name: "Dr. P. Iyer",
      role: "Chief Anesthesiologist, Aster Multispecialty",
    },
  ];
  return (
    <section className="bg-secondary/40 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
            Trusted by healthcare teams
          </h2>
          <p className="mt-4 text-muted-foreground">
            Real feedback from hospitals, clinics and diagnostic centers we serve.
          </p>
        </div>
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {t.map((x) => (
            <figure
              key={x.name}
              className="flex flex-col rounded-2xl border border-border bg-background p-6 shadow-sm"
            >
              <div className="flex gap-1 text-primary">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-foreground/85">
                “{x.quote}”
              </blockquote>
              <figcaption className="mt-6 border-t border-border pt-4">
                <div className="text-sm font-semibold text-foreground">{x.name}</div>
                <div className="text-xs text-muted-foreground">{x.role}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const items = [
    {
      q: "Do you provide installation for the equipment you sell?",
      a: "Yes — every supply includes site survey, installation, calibration, commissioning and clinical hand-over by our certified engineers.",
    },
    {
      q: "What is your response time for repair calls?",
      a: "Our target response is within one business hour, with same-day dispatch for critical equipment downtime. AMC customers get priority.",
    },
    {
      q: "Do you offer AMC / CMC contracts?",
      a: "Yes. We offer Annual Maintenance Contracts and Comprehensive Maintenance Contracts covering preventive visits, breakdown support and genuine spares.",
    },
    {
      q: "Do you provide equipment for standalone clinics and diagnostic centers?",
      a: "Absolutely — we work with hospitals of all sizes, standalone clinics, diagnostic centers and nursing homes.",
    },
    {
      q: "Why don't you list fixed prices?",
      a: "Medical equipment pricing depends heavily on configuration, accessories and site conditions. Share your requirement and we'll send a detailed quotation within 24 hours.",
    },
  ];
  return (
    <section className="mx-auto max-w-3xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-foreground sm:text-4xl">Frequently asked</h2>
        <p className="mt-4 text-muted-foreground">Answers to what procurement teams ask us most.</p>
      </div>
      <Accordion type="single" collapsible className="mt-10">
        {items.map((it, i) => (
          <AccordionItem key={i} value={`item-${i}`} className="border-border">
            <AccordionTrigger className="text-left text-base font-semibold text-foreground hover:no-underline">
              {it.q}
            </AccordionTrigger>
            <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
              {it.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}

function CTASection() {
  return (
    <section className="px-4 pb-20 sm:px-6 lg:px-8">
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl gradient-hero p-10 text-primary-foreground shadow-elegant-lg sm:p-14">
        <div className="relative z-10 grid gap-8 lg:grid-cols-[1.4fr_1fr] lg:items-center">
          <div>
            <h2 className="text-3xl font-bold sm:text-4xl">Ready to upgrade your facility?</h2>
            <p className="mt-4 max-w-2xl text-primary-foreground/90">
              Get a tailored quote or book a service visit today. Our team usually responds within
              one business hour.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 lg:justify-end">
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="bg-background text-primary hover:bg-background/90"
            >
              <Link to="/quote">Get a Quote</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-primary-foreground/40 bg-transparent text-primary-foreground hover:bg-primary-foreground/10"
            >
              <a href={SITE.phoneHref}>
                <PhoneCall className="mr-1.5 h-4 w-4" />
                Call {SITE.phone}
              </a>
            </Button>
          </div>
        </div>
        <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-primary-foreground/10 blur-3xl" />
      </div>
    </section>
  );
}
