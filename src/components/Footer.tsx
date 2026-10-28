import { MessageCircle, Navigation, Phone } from "lucide-react";
import {
  BOOKING_WHATSAPP_SUBJECT,
  DIRECTIONS_URL,
  HOTEL_ADDRESS,
  HOTEL_NAME,
  HOTEL_PHONE_DISPLAY,
  HOTEL_PHONE_TEL,
  createWhatsAppMessage,
} from "@/lib/hotel";
import { Reveal } from "@/components/Reveal";

export function FinalCta() {
  return (
    <section id="contact" className="bg-pine-deep py-20 sm:py-24">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
        <Reveal>
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-gold">
            Contact & Booking
          </p>
          <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight text-primary-foreground sm:text-5xl">
            Your Kasol Stay Starts Here
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-primary-foreground/80">
            Planning a visit to Kasol? Contact Hotel Sun 'N' Wind to enquire
            about rooms, dining, current rates, and availability for your
            travel dates.
          </p>

          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <a
              href={HOTEL_PHONE_TEL}
              className="inline-flex items-center gap-2 rounded-full bg-primary-foreground px-7 py-3.5 text-sm font-bold text-primary shadow-lg transition-transform hover:scale-[1.03]"
            >
              <Phone className="h-4.5 w-4.5" aria-hidden="true" />
              Call {HOTEL_PHONE_DISPLAY}
            </a>
            <a
              href={createWhatsAppMessage(BOOKING_WHATSAPP_SUBJECT)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-bold text-accent-foreground shadow-lg transition-transform hover:scale-[1.03]"
            >
              <MessageCircle className="h-4.5 w-4.5" aria-hidden="true" />
              Send Enquiry on WhatsApp
            </a>
            <a
              href={DIRECTIONS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/40 px-7 py-3.5 text-sm font-bold text-primary-foreground transition-colors hover:bg-primary-foreground/10"
            >
              <Navigation className="h-4.5 w-4.5" aria-hidden="true" />
              Get Directions
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

const FOOTER_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Rooms", href: "#rooms" },
  { label: "Dining", href: "#dining" },
  { label: "Amenities", href: "#amenities" },
  { label: "Experiences", href: "#experiences" },
  { label: "Location", href: "#location" },
  { label: "FAQ", href: "#faq" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-pine-deep border-t border-primary-foreground/10 pb-10 pt-14 text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <h3 className="font-display text-2xl font-semibold">{HOTEL_NAME}</h3>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-primary-foreground/70">
              {HOTEL_ADDRESS}
            </p>
            <a
              href={HOTEL_PHONE_TEL}
              className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-primary-foreground hover:text-gold"
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              {HOTEL_PHONE_DISPLAY}
            </a>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-gold">Explore</h4>
            <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2">
              {FOOTER_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm font-medium text-primary-foreground/75 transition-colors hover:text-primary-foreground"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-gold">Plan Your Stay</h4>
            <p className="mt-4 text-sm leading-relaxed text-primary-foreground/70">
              Ready to enquire? Send your travel dates on WhatsApp or call us
              — we'll confirm availability and current rates.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <a
                href="#enquiry"
                className="rounded-full bg-accent px-6 py-3 text-sm font-bold text-accent-foreground shadow-md transition-transform hover:scale-[1.03]"
              >
                Booking Enquiry
              </a>
              <a
                href={createWhatsAppMessage(BOOKING_WHATSAPP_SUBJECT)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/40 px-6 py-3 text-sm font-bold text-primary-foreground transition-colors hover:bg-primary-foreground/10"
              >
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
                WhatsApp
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-primary-foreground/10 pt-6 text-center text-xs text-primary-foreground/60">
          © {year} {HOTEL_NAME}, Manikaran Road, Kasol. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
