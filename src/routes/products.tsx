import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";
import { EQUIPMENT } from "@/components/site/equipment";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Products & Equipment — MH Solutions" },
      { name: "description", content: "Dialysis, X-Ray, USG, anesthesia, RO and OT equipment for hospitals and clinics. Request a tailored quote." },
      { property: "og:title", content: "Medical equipment — MH Solutions" },
      { property: "og:description", content: "Browse equipment categories and request configuration-based quotes." },
      { property: "og:url", content: "/products" },
    ],
    links: [{ rel: "canonical", href: "/products" }],
  }),
  component: Products,
});

function Products() {
  return (
    <div>
      <section className="gradient-soft">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-20 lg:px-8">
          <span className="text-xs font-semibold uppercase tracking-widest text-primary">Products</span>
          <h1 className="mt-3 max-w-3xl text-4xl font-bold text-foreground sm:text-5xl">
            Medical equipment tailored to your facility.
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-muted-foreground">
            We supply, install and service the equipment your clinical teams
            rely on every day. Pricing is configuration-dependent — share your
            requirement and we'll respond with a detailed quotation.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2">
          {EQUIPMENT.map((e) => (
            <article
              key={e.slug}
              className="group grid overflow-hidden rounded-3xl border border-border bg-card shadow-sm transition-all hover:-translate-y-1 hover:shadow-elegant-lg sm:grid-cols-[1fr_1.1fr]"
            >
              <div className="relative aspect-[4/3] overflow-hidden sm:aspect-auto">
                <img
                  src={e.image}
                  alt={e.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-col p-6 sm:p-8">
                <div className="flex items-center gap-3">
                  <div className="grid h-10 w-10 place-items-center rounded-xl gradient-hero text-primary-foreground shadow-elegant">
                    <e.icon className="h-5 w-5" />
                  </div>
                  <h2 className="text-xl font-semibold text-foreground">{e.name}</h2>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  {e.description}
                </p>
                <ul className="mt-4 space-y-2">
                  {e.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-foreground/80">
                      <Check className="h-4 w-4 text-primary" /> {f}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 flex flex-wrap gap-3">
                  <Button asChild className="gradient-hero border-0 text-primary-foreground shadow-elegant">
                    <Link to="/quote">
                      Get a Quote <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline">
                    <Link to="/contact">Enquire Now</Link>
                  </Button>
                </div>
                <p className="mt-4 text-xs text-muted-foreground">
                  Pricing depends on configuration & site conditions. Quotation shared within 24 hours.
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}