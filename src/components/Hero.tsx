import {
  BedDouble,
  Compass,
  MapPin,
  MessageCircle,
  Star,
  UtensilsCrossed,
} from "lucide-react";
import hotelExterior from "@/assets/hotel-exterior.jpg";
import { BOOKING_WHATSAPP_SUBJECT, createWhatsAppMessage } from "@/lib/hotel";
import { Reveal } from "@/components/Reveal";

const HIGHLIGHTS = [
  { icon: MapPin, label: "Manikaran Road, Kasol" },
  { icon: BedDouble, label: "Standard rooms and suites" },
  { icon: UtensilsCrossed, label: "On-site multi-cuisine dining" },
  { icon: Compass, label: "Base for exploring the region" },
];

export function Hero() {
  return (
    <section
      id="home"
      className="relative isolate flex min-h-[100svh] items-center overflow-hidden pt-24 pb-16"
    >
      <img
        src={hotelExterior}
        alt="Hotel Sun 'N' Wind building on Manikaran Road, Kasol, set against pine-covered mountains"
        className="absolute inset-0 -z-20 h-full w-full object-cover"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-r from-pine-deep/95 via-primary/85 to-primary/40"
      />

      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6">
        <Reveal className="max-w-3xl">
          <p className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/25 bg-primary-foreground/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-primary-foreground">
            <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
            Manikaran Road · Kasol · Parvati Valley
          </p>

          <h1 className="mt-6 font-display text-4xl font-semibold leading-[1.08] tracking-tight text-primary-foreground sm:text-5xl lg:text-6xl">
            Your Mountain Escape in the Heart of Kasol
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-primary-foreground/90">
            Discover Hotel Sun 'N' Wind on Manikaran Road, Kasol — a welcoming
            stay for travelers exploring the Parvati Valley, enjoying local
            food, and discovering the beauty of Himachal Pradesh.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#enquiry"
              className="rounded-full bg-accent px-7 py-3.5 text-sm font-bold text-accent-foreground shadow-lg transition-transform hover:scale-[1.03]"
            >
              Enquire About Rooms
            </a>
            <a
              href={createWhatsAppMessage(BOOKING_WHATSAPP_SUBJECT)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-primary-foreground px-7 py-3.5 text-sm font-bold text-primary shadow-lg transition-transform hover:scale-[1.03]"
            >
              <MessageCircle className="h-4.5 w-4.5" aria-hidden="true" />
              WhatsApp Booking
            </a>
            <a
              href="#location"
              className="rounded-full border border-primary-foreground/40 px-7 py-3.5 text-sm font-bold text-primary-foreground transition-colors hover:bg-primary-foreground/10"
            >
              Explore the Location
            </a>
          </div>

          <p className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary-foreground/85">
            <Star className="h-4 w-4 fill-gold text-gold" aria-hidden="true" />
            Reported rating 3.6/5 · Based on 900+ guest reviews
          </p>
        </Reveal>

        <Reveal delayMs={150} className="mt-12">
          <ul className="grid max-w-3xl grid-cols-2 gap-3 lg:grid-cols-4">
            {HIGHLIGHTS.map(({ icon: Icon, label }) => (
              <li
                key={label}
                className="flex items-center gap-3 rounded-2xl border border-primary-foreground/20 bg-pine-deep/40 px-4 py-3 backdrop-blur-sm"
              >
                <Icon className="h-5 w-5 shrink-0 text-gold" aria-hidden="true" />
                <span className="text-sm font-semibold leading-snug text-primary-foreground">
                  {label}
                </span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
