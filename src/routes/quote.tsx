import { createFileRoute } from "@tanstack/react-router";
import { BadgeCheck, Clock4, ShieldCheck } from "lucide-react";
import { QuoteForm } from "@/components/site/QuoteForm";

export const Route = createFileRoute("/quote")({
  validateSearch: (search: Record<string, unknown>) => ({
    equipment: typeof search.equipment === "string" ? search.equipment : undefined,
    service: typeof search.service === "string" ? search.service : undefined,
  }),
  head: () => ({
    meta: [
      { title: "Get a Quote / Request Service — MH Solutions" },
      {
        name: "description",
        content:
          "Request a tailored quote or service visit for medical equipment. Response within 24 hours.",
      },
      { property: "og:title", content: "Request a quote — MH Solutions" },
      {
        property: "og:description",
        content: "Configuration-based pricing shared within 24 hours.",
      },
      { property: "og:url", content: "/quote" },
    ],
    links: [{ rel: "canonical", href: "/quote" }],
  }),
  component: Quote,
});

function Quote() {
  const { equipment, service } = Route.useSearch();
  return (
    <section className="gradient-soft">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1fr_1.3fr] lg:py-20 lg:px-8">
        <div>
          <span className="text-xs font-semibold uppercase tracking-widest text-primary">
            Request a quote
          </span>
          <h1 className="mt-3 text-4xl font-bold text-foreground sm:text-5xl">
            Tell us what you need — we'll do the rest.
          </h1>
          <p className="mt-5 text-muted-foreground">
            Share your equipment and service requirements. Our team will send a detailed quotation
            within 24 hours, tailored to your facility.
          </p>
          <ul className="mt-8 space-y-4">
            {[
              {
                Icon: Clock4,
                title: "Response in 24 hours",
                body: "Detailed quotation with configuration, timelines and options.",
              },
              {
                Icon: BadgeCheck,
                title: "Genuine OEM equipment",
                body: "Original units with valid warranty and installation.",
              },
              {
                Icon: ShieldCheck,
                title: "AMC included",
                body: "Optional AMC / CMC bundled with new equipment purchases.",
              },
            ].map(({ Icon, title, body }) => (
              <li key={title} className="flex items-start gap-3">
                <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl gradient-hero text-primary-foreground shadow-elegant">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-foreground">{title}</div>
                  <p className="text-sm text-muted-foreground">{body}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <QuoteForm defaultEquipment={equipment} defaultService={service} />
      </div>
    </section>
  );
}
