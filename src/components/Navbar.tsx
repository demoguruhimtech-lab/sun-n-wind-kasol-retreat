import { useEffect, useState } from "react";
import { Menu, Phone, TreePine, X } from "lucide-react";
import {
  HOTEL_NAME,
  HOTEL_PHONE_TEL,
  NAV_LINKS,
} from "@/lib/hotel";

function Wordmark() {
  return (
    <a href="#home" className="flex items-center gap-3" aria-label="Hotel Sun 'N' Wind — back to top">
      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-primary text-primary-foreground shadow-md">
        <TreePine className="h-6 w-6" aria-hidden="true" />
      </span>
      <span className="min-w-0">
        <span className="block truncate font-display text-lg font-semibold leading-tight text-foreground">
          {HOTEL_NAME}
        </span>
        <span className="block text-[10px] font-bold uppercase tracking-[0.22em] text-muted-foreground">
          Kasol · Himachal Pradesh
        </span>
      </span>
    </a>
  );
}

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!menuOpen) return;
    const close = () => setMenuOpen(false);
    window.addEventListener("hashchange", close);
    return () => window.removeEventListener("hashchange", close);
  }, [menuOpen]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/95 shadow-sm backdrop-blur-md">
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Wordmark />

        <nav aria-label="Main navigation" className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full px-3 py-2 text-sm font-semibold text-foreground/80 transition-colors hover:bg-secondary hover:text-primary"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-2">
          <a
            href="#enquiry"
            className="hidden rounded-full bg-primary px-5 py-2.5 text-sm font-bold text-primary-foreground shadow-md transition-colors hover:bg-primary/90 md:inline-flex"
          >
            Check Availability
          </a>
          <a
            href={HOTEL_PHONE_TEL}
            aria-label={`Call ${HOTEL_NAME} at +91 92540 39139`}
            className="grid h-10 w-10 place-items-center rounded-full border border-border bg-card text-primary transition-colors hover:bg-secondary"
          >
            <Phone className="h-4.5 w-4.5" aria-hidden="true" />
          </a>
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            className="grid h-10 w-10 place-items-center rounded-full border border-border bg-card text-primary lg:hidden"
          >
            {menuOpen ? (
              <X className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Menu className="h-5 w-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {menuOpen ? (
        <nav
          id="mobile-nav"
          aria-label="Mobile navigation"
          className="border-t border-border bg-background px-4 pb-6 pt-2 shadow-lg lg:hidden"
        >
          <ul className="flex flex-col">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block rounded-xl px-3 py-3 text-base font-semibold text-foreground transition-colors hover:bg-secondary"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#enquiry"
            onClick={() => setMenuOpen(false)}
            className="mt-3 block rounded-full bg-primary px-5 py-3 text-center text-sm font-bold text-primary-foreground"
          >
            Check Availability
          </a>
        </nav>
      ) : null}
    </header>
  );
}
