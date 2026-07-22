import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  BadgeCheck,
  CheckCircle2,
  Clock4,
  HeartPulse,
  PhoneCall,
  ShieldCheck,
  Star,
  Truck,
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
import { TestimonialCarousel } from "@/components/site/TestimonialCarousel";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <HowWeWork />
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
            <HeartPulse className="h-3.5 w-3.5" /> {SITE.tagline}
          </span>
          <h1 className="mt-5 text-4xl font-bold leading-[1.05] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Serving Healthcare.{" "}
            <span className="bg-gradient-to-r from-primary to-teal bg-clip-text text-transparent">
              Supporting Lives.
            </span>
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground">
            Your trusted partner for medical equipment — from sales and installation to lifelong
            maintenance. We keep your facility running so you can focus on what matters most: your
            patients.
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
                <Wrench className="mr-1.5 h-4 w-4" /> Our Services
              </Link>
            </Button>
          </div>
          <div className="mt-10 grid grid-cols-4 gap-4 border-t border-border/60 pt-6 text-sm">
            <Stat value="15+" label="Years active" />
            <Stat value="800+" label="Installations" />
            <Stat value="24x7" label="Support" />
            <Stat value="6+" label="Equipment types" />
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
          <div className="absolute -bottom-6 -left-6 hidden max-w-[210px] rounded-2xl border border-border bg-background/95 p-4 shadow-elegant backdrop-blur sm:block">
            <div className="flex items-center gap-2 text-primary">
              <Clock4 className="h-4 w-4" />
              <span className="text-xs font-semibold uppercase tracking-wide">Rapid response</span>
            </div>
            <p className="mt-1 text-sm font-medium text-foreground">
              Same-day dispatch for critical equipment downtime.
            </p>
          </div>
          <div className="absolute -top-5 -right-5 hidden items-center gap-2 rounded-2xl border border-border bg-background/95 px-4 py-3 shadow-elegant backdrop-blur sm:flex">
            <CheckCircle2 className="h-5 w-5 text-emerald-500" />
            <div>
              <div className="text-xs font-semibold text-foreground">Certified Engineers</div>
              <div className="text-[10px] text-muted-foreground">OEM-trained biomedical team</div>
            </div>
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
    { Icon: ShieldCheck, label: "Certified Engineers" },
    { Icon: BadgeCheck, label: "Genuine OEM Spares" },
    { Icon: Zap, label: "Same-day Response" },
    { Icon: HeartPulse, label: "Patient-safe Uptime" },
    { Icon: Wrench, label: "AMC / CMC Contracts" },
  ];
  return (
    <section className="border-y border-border bg-secondary/40 py-5">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-8 gap-y-3 px-4 text-sm text-muted-foreground sm:px-6 lg:px-8">
        {items.map(({ Icon, label }, i) => (
          <div key={label} className="flex items-center gap-5">
            <div className="flex items-center gap-2">
              <Icon className="h-4 w-4 text-primary" />
              <span className="font-medium text-foreground/80">{label}</span>
            </div>
            {i < items.length - 1 && <span className="hidden h-4 w-px bg-border lg:block" />}
          </div>
        ))}
      </div>
    </section>
  );
}

function HowWeWork() {
  const steps = [
    {
      number: "1",
      Icon: PhoneCall,
      title: "Consult & Quote",
      body: "Tell us your equipment need. We assess your facility, configure the right solution and send a detailed quote — usually within 24 hours.",
    },
    {
      number: "2",
      Icon: Truck,
      title: "Supply & Install",
      body: "We handle procurement, delivery, site preparation, installation, calibration and clinical handover — end to end, with zero hassle for your team.",
    },
    {
      number: "3",
      Icon: ShieldCheck,
      title: "Maintain & Support",
      body: "Post-installation, our AMC/CMC programs and 24x7 emergency line ensure your equipment stays at peak performance, year after year.",
    },
  ];
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <span className="text-xs font-semibold uppercase tracking-widest text-primary">
          How we work
        </span>
        <h2 className="mt-3 text-3xl font-bold text-foreground sm:text-4xl">
          Simple process. Lasting partnership.
        </h2>
        <p className="mt-4 text-muted-foreground">
          From first call to long-term support — we stay with you at every stage of the equipment
          lifecycle.
        </p>
      </div>
      <div className="relative mt-12">
        <div className="absolute left-0 right-0 top-10 hidden h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent lg:block" />
        <div className="grid gap-8 lg:grid-cols-3">
          {steps.map(({ number, Icon, title, body }) => (
            <div
              key={number}
              className="relative flex flex-col items-center rounded-2xl border border-border bg-card p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-elegant"
            >
              <div className="relative mb-5">
                <div className="grid h-14 w-14 place-items-center rounded-2xl gradient-hero text-primary-foreground shadow-elegant">
                  <Icon className="h-6 w-6" />
                </div>
                <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-primary-foreground">
                  {number}
                </span>
              </div>
              <h3 className="text-lg font-semibold text-foreground">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function EquipmentGrid() {
  return (
    <section className="bg-secondary/40 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-primary">
            Our range
          </span>
          <h2 className="mt-3 text-3xl font-bold text-foreground sm:text-4xl">
            Medical equipment we supply and support
          </h2>
          <p className="mt-4 text-muted-foreground">
            From dialysis units to complete operation theatres — configured for your facility,
            backed by lifetime service support.
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
        <div className="mt-10 text-center">
          <Button
            asChild
            variant="outline"
            className="border-primary/30 text-primary hover:bg-primary/5"
          >
            <Link to="/products">
              View all products <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </Button>
        </div>
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
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_1.4fr]">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-primary">
              Services
            </span>
            <h2 className="mt-3 text-3xl font-bold text-foreground sm:text-4xl">
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
      title: "15+ Years of Experience",
      body: "Trusted by hospitals, diagnostic chains and nursing homes across the region.",
    },
    {
      Icon: ShieldCheck,
      title: "Certified Biomedical Engineers",
      body: "In-house team trained across leading OEM platforms — ensuring precision every time.",
    },
    {
      Icon: Zap,
      title: "Rapid Response Times",
      body: "Same-day dispatch for critical downtime, backed by a 24x7 emergency support line.",
    },
    {
      Icon: HeartPulse,
      title: "Patient-safety First",
      body: "Calibrated installs, AERB compliance and audit-ready service records.",
    },
  ];
  return (
    <section className="bg-secondary/40 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-primary">
            Why choose us
          </span>
          <h2 className="mt-3 text-3xl font-bold text-foreground sm:text-4xl">
            Built for healthcare teams who cannot afford downtime
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
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="py-20 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-primary">
            Testimonials
          </span>
          <h2 className="mt-3 text-3xl font-bold text-foreground sm:text-4xl">
            Trusted by healthcare teams
          </h2>
          <p className="mt-4 text-muted-foreground">
            Real feedback from hospitals, clinics and diagnostic centers we serve.
          </p>
        </div>
        <div className="mt-12">
          <TestimonialCarousel />
        </div>
        <div className="mt-10 text-center">
          <Link
            to="/feedback"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline underline-offset-4"
          >
            <Star className="h-4 w-4" />
            Share your experience with us
            <ArrowRight className="h-4 w-4" />
          </Link>
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
    <section className="bg-secondary/40 py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-primary">FAQ</span>
          <h2 className="mt-3 text-3xl font-bold text-foreground sm:text-4xl">Frequently asked</h2>
          <p className="mt-4 text-muted-foreground">
            Answers to what procurement teams ask us most.
          </p>
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
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="px-4 pb-20 pt-20 sm:px-6 lg:px-8">
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl gradient-hero p-10 text-primary-foreground shadow-elegant-lg sm:p-14">
        <div className="relative z-10 grid gap-8 lg:grid-cols-[1.4fr_1fr] lg:items-center">
          <div>
            <h2 className="text-3xl font-bold sm:text-4xl">
              Let us support your facility together.
            </h2>
            <p className="mt-4 max-w-2xl text-primary-foreground/85">
              Get a tailored quote or book a service visit. Our team responds within one business
              hour — because your patients cannot wait.
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
        <div className="pointer-events-none absolute -left-16 -bottom-16 h-56 w-56 rounded-full bg-primary-foreground/10 blur-3xl" />
      </div>
    </section>
  );
}
