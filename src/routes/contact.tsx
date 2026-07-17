import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, Phone, Clock } from "lucide-react";
import { ContactForm } from "@/components/site/ContactForm";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us — MH Solutions Sales & Services" },
      {
        name: "description",
        content:
          "Reach MH Solutions for medical equipment enquiries, quotations and service requests. Phone, email and address.",
      },
      { property: "og:title", content: "Contact MH Solutions" },
      {
        property: "og:description",
        content: "Call, WhatsApp, email or visit — we respond within one business hour.",
      },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

function Contact() {
  return (
    <div>
      <section className="gradient-soft">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-20 lg:px-8">
          <span className="text-xs font-semibold uppercase tracking-widest text-primary">
            Contact
          </span>
          <h1 className="mt-3 max-w-3xl text-4xl font-bold text-foreground sm:text-5xl">
            Talk to our biomedical team.
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-muted-foreground">
            Reach out for equipment enquiries, quotations, AMC contracts or emergency service. We
            respond within one business hour.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr]">
          <div className="space-y-4">
            <InfoCard Icon={Phone} title="Phone">
              <div className="flex flex-col gap-1">
                <a href={SITE.phoneHref} className="text-foreground hover:text-primary">
                  {SITE.phone}
                </a>
                <a href={SITE.phone2Href} className="text-foreground hover:text-primary">
                  {SITE.phone2}
                </a>
              </div>
            </InfoCard>
            <InfoCard Icon={Mail} title="Email">
              <a href={`mailto:${SITE.email}`} className="text-foreground hover:text-primary">
                {SITE.email}
              </a>
            </InfoCard>
            <InfoCard Icon={MapPin} title="Address">
              <span className="text-foreground">{SITE.address}</span>
            </InfoCard>
            <InfoCard Icon={Clock} title="Business hours">
              <span className="text-foreground">{SITE.hours}</span>
            </InfoCard>

            <div className="overflow-hidden rounded-2xl border border-border shadow-sm">
              <iframe
                title="Map"
                src={SITE.mapEmbed}
                className="h-64 w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
          <ContactForm />
        </div>
      </section>
    </div>
  );
}

function InfoCard({
  Icon,
  title,
  children,
}: {
  Icon: typeof Phone;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5 shadow-sm">
      <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-teal-soft text-primary">
        <Icon className="h-5 w-5" />
      </div>
      <div className="min-w-0">
        <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          {title}
        </div>
        <div className="mt-1 text-sm">{children}</div>
      </div>
    </div>
  );
}
