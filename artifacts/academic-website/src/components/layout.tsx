import { useEffect, useState, type ReactNode } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { SITE } from "@/lib/site";

const NAV = [
  { href: "/", label: "About" },
  { href: "/research", label: "Research" },
  { href: "/cv", label: "CV" },
  { href: "/contact", label: "Contact" },
];

export function Layout({ children }: { children: ReactNode }) {
  const [pathname] = useLocation();
  // Static hosts may redirect directory entry points to trailing-slash URLs.
  const location = pathname.replace(/\/+$/, "") || "/";
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="min-h-[100dvh] flex flex-col">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 bg-primary text-primary-foreground px-4 py-2 text-sm"
      >
        Skip to content
      </a>
      <header className="sticky top-0 z-40 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 h-16 flex items-center justify-between">
          <Link href="/" className="group flex items-baseline gap-3" data-testid="link-home-logo">
            <span className="font-display text-[1.3rem] text-primary leading-none">Yoo Jung (Erika) Oh</span>
            <span className="hidden md:inline font-mono text-[0.68rem] tracking-[0.12em] uppercase text-muted-foreground">
              Communication &middot; MSU
            </span>
          </Link>
          <nav aria-label="Primary" className="hidden sm:block">
            <ul className="flex items-center gap-1">
              {NAV.map((n) => {
                const active = location === n.href;
                return (
                  <li key={n.href}>
                    <Link
                      href={n.href}
                      aria-current={active ? "page" : undefined}
                      data-testid={`link-nav-${n.label.toLowerCase()}`}
                      className={`relative px-3 py-2 text-[0.93rem] transition-colors ${
                        active ? "text-primary font-semibold" : "text-foreground/75 hover:text-primary"
                      }`}
                    >
                      {n.label}
                      {active && <span className="absolute left-3 right-3 -bottom-[13px] h-[2px] bg-primary" />}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
          <button
            type="button"
            className="sm:hidden p-2 -mr-2 text-primary"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((o) => !o)}
            data-testid="button-mobile-menu"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
        {open && (
          <nav id="mobile-nav" aria-label="Mobile" className="sm:hidden border-t border-border bg-background">
            <ul className="px-5 py-3">
              {NAV.map((n) => (
                <li key={n.href}>
                  <Link
                    href={n.href}
                    aria-current={location === n.href ? "page" : undefined}
                    data-testid={`link-mobile-${n.label.toLowerCase()}`}
                    className={`block py-3 font-display text-xl border-b border-border/70 last:border-0 ${
                      location === n.href ? "text-primary" : "text-foreground/80"
                    }`}
                  >
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </header>

      <main id="main" className="flex-1">
        {children}
      </main>

      <footer className="border-t border-border mt-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-8 py-10 flex flex-col md:flex-row gap-6 md:items-end justify-between">
          <div>
            <p className="font-display text-lg text-primary">{SITE.name}</p>
            <p className="text-sm text-muted-foreground">Assistant Professor, Department of Communication, Michigan State University</p>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
            <a href={`mailto:${SITE.email}`} className="link-u" data-testid="link-footer-email">{SITE.email}</a>
            <a href={SITE.scholar} target="_blank" rel="noopener noreferrer" className="link-u" data-testid="link-footer-scholar">Google Scholar</a>
            <a href={SITE.cv} download className="link-u" data-testid="link-footer-cv">CV (PDF)</a>
          </div>
        </div>
        <p className="mx-auto max-w-6xl px-5 sm:px-8 pb-8 text-xs text-muted-foreground">
          Personal academic website. Not an official Michigan State University page.
        </p>
      </footer>
    </div>
  );
}

export function PageHeader({ eyebrow, title, children }: { eyebrow: string; title: string; children?: ReactNode }) {
  return (
    <div className="mx-auto max-w-6xl px-5 sm:px-8 pt-14 sm:pt-20 pb-10 rise">
      <p className="eyebrow">{eyebrow}</p>
      <h1 className="font-display text-[2.6rem] sm:text-6xl leading-[1.05] mt-4 text-foreground max-w-3xl">{title}</h1>
      {children && <div className="mt-6 max-w-2xl text-lg text-foreground/80">{children}</div>}
    </div>
  );
}
