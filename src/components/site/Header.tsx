import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, Phone, X, Stethoscope, Sun, Moon } from "lucide-react";
import { NAV, SITE } from "@/lib/site";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/ThemeProvider";

export function Header() {
  const [open, setOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/60 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex min-w-0 items-center gap-2.5">
          <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl gradient-hero text-primary-foreground shadow-elegant">
            <Stethoscope className="h-5 w-5" />
          </div>
          <div className="min-w-0 leading-tight">
            <div className="truncate text-sm font-bold text-foreground sm:text-base">
              MH Solutions
            </div>
            <div className="hidden text-[11px] text-muted-foreground sm:block">
              Sales & Services
            </div>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {NAV.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              activeOptions={{ exact: n.to === "/" }}
              className="rounded-md px-3 py-2 text-sm font-medium text-foreground/70 transition-colors hover:bg-secondary hover:text-primary data-[status=active]:text-primary"
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="grid h-9 w-9 place-items-center rounded-lg border border-border bg-background text-foreground hover:bg-secondary transition-colors cursor-pointer"
            aria-label="Toggle Theme"
          >
            {theme === "dark" ? (
              <Sun className="h-4 w-4 text-amber-500" />
            ) : (
              <Moon className="h-4 w-4 text-primary" />
            )}
          </button>
          <a
            href={SITE.phoneHref}
            className="hidden items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1.5 text-sm font-semibold text-primary transition-colors hover:bg-primary/10 sm:inline-flex"
          >
            <Phone className="h-4 w-4" />
            Call Now
          </a>
          <Button
            asChild
            size="sm"
            className="hidden sm:inline-flex gradient-hero border-0 text-primary-foreground shadow-elegant hover:opacity-95"
          >
            <Link to="/quote">Get a Quote</Link>
          </Button>
          <button
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 place-items-center rounded-md text-foreground lg:hidden"
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-3">
            {NAV.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                activeOptions={{ exact: n.to === "/" }}
                className="rounded-md px-3 py-2.5 text-sm font-medium text-foreground/80 hover:bg-secondary data-[status=active]:bg-secondary data-[status=active]:text-primary"
              >
                {n.label}
              </Link>
            ))}
            <Link
              to="/quote"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-md gradient-hero px-3 py-2.5 text-center text-sm font-semibold text-primary-foreground"
            >
              Get a Quote
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
