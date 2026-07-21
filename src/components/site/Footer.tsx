import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone, Clock, Facebook, Linkedin, Instagram } from "lucide-react";
import { NAV, SITE } from "@/lib/site";
import logoImg from "@/assets/logo.png";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border bg-secondary/40">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div>
          <div className="flex items-center gap-2.5">
            <img
              src={logoImg}
              alt="MH Solutions Logo"
              className="h-10 w-10 shrink-0 rounded-xl object-contain bg-black p-0.5 shadow-elegant"
            />
            <div className="leading-tight">
              <div className="text-base font-bold text-foreground">{SITE.shortName}</div>
              <div className="text-[11px] text-muted-foreground">{SITE.tagline}</div>
            </div>
          </div>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
            Trusted partner to hospitals, clinics and diagnostic centers for supply, installation,
            maintenance and repair of medical equipment.
          </p>
          <div className="mt-5 flex gap-2">
            {[
              { href: SITE.social.facebook, Icon: Facebook },
              { href: SITE.social.linkedin, Icon: Linkedin },
              { href: SITE.social.instagram, Icon: Instagram },
            ].map(({ href, Icon }, i) => (
              <a
                key={i}
                href={href}
                aria-label="Social link"
                className="grid h-9 w-9 place-items-center rounded-full border border-border bg-background text-muted-foreground transition-colors hover:border-primary hover:text-primary"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-foreground">Quick links</h4>
          <ul className="mt-4 space-y-2">
            {NAV.map((n) => (
              <li key={n.to}>
                <Link to={n.to} className="text-sm text-muted-foreground hover:text-primary">
                  {n.label}
                </Link>
              </li>
            ))}
            <li>
              <Link to="/quote" className="text-sm text-muted-foreground hover:text-primary">
                Request a Quote
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-foreground">Contact</h4>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li className="flex items-start gap-2">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              <div className="flex flex-col gap-1">
                <a href={SITE.phoneHref} className="hover:text-primary">
                  {SITE.phone}
                </a>
                <a href={SITE.phone2Href} className="hover:text-primary">
                  {SITE.phone2}
                </a>
              </div>
            </li>
            <li className="flex items-start gap-2">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              <a href={`mailto:${SITE.email}`} className="hover:text-primary">
                {SITE.email}
              </a>
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              <span>{SITE.address}</span>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-foreground">Business hours</h4>
          <p className="mt-4 flex items-start gap-2 text-sm text-muted-foreground">
            <Clock className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
            <span>{SITE.hours}</span>
          </p>
          <p className="mt-4 text-sm text-muted-foreground">
            We respond to service requests within one business hour, with same-day dispatch for
            critical equipment downtime.
          </p>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-5 text-xs text-muted-foreground sm:flex-row sm:px-6 lg:px-8">
          <p>
            © {new Date().getFullYear()} {SITE.name}. All rights reserved.
          </p>
          <p>{SITE.tagline}</p>
        </div>
      </div>
    </footer>
  );
}
