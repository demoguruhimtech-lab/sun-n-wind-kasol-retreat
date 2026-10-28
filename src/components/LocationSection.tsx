import { Clock, MapPin, MessageCircle, Navigation, Phone } from "lucide-react";
import {
  DIRECTIONS_URL,
  HOTEL_ADDRESS,
  HOTEL_NAME,
  HOTEL_PHONE_DISPLAY,
  HOTEL_PHONE_TEL,
  MAP_EMBED_URL,
  createWhatsAppMessage,
} from "@/lib/hotel";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

export function LocationSection() {
  return (
    <section id="location" className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Location"
          title="Find Us on Manikaran Road"
          description="Hotel Sun 'N' Wind is located along Manikaran Road in Kasol, Himachal Pradesh — easy to reach along the Parvati Valley route."
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-[2fr_3fr]">
          <Reveal>
            <div className="flex h-full flex-col rounded-4xl border border-border bg-card p-8 shadow-md">
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-primary text-primary-foreground">
                <MapPin className="h-6 w-6" aria-hidden="true" />
              </span>
              <h3 className="mt-5 text-2xl font-semibold text-foreground">{HOTEL_NAME}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{HOTEL_ADDRESS}</p>

              <p className="mt-5 inline-flex items-center gap-2 rounded-xl bg-secondary px-4 py-2.5 text-sm font-semibold text-secondary-foreground">
                <Clock className="h-4 w-4 text-gold" aria-hidden="true" />
                Check-in from 2:00 PM · Check-out by 12:00 PM
              </p>

              <div className="mt-auto grid gap-3 pt-8">
                <a
                  href={DIRECTIONS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-bold text-primary-foreground shadow-md transition-colors hover:bg-primary/90"
                >
                  <Navigation className="h-4.5 w-4.5" aria-hidden="true" />
                  Get Directions
                </a>
                <a
                  href={HOTEL_PHONE_TEL}
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-primary/30 px-6 py-3.5 text-sm font-bold text-primary transition-colors hover:bg-secondary"
                >
                  <Phone className="h-4.5 w-4.5" aria-hidden="true" />
                  Call the Hotel
                </a>
                <a
                  href={createWhatsAppMessage("Hello Hotel Sun 'N' Wind, I have a question about reaching the hotel in Kasol.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-primary/30 px-6 py-3.5 text-sm font-bold text-primary transition-colors hover:bg-secondary"
                >
                  <MessageCircle className="h-4.5 w-4.5" aria-hidden="true" />
                  WhatsApp Enquiry
                </a>
                <p className="mt-1 text-center text-xs text-muted-foreground">
                  Or call directly at {HOTEL_PHONE_DISPLAY}
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delayMs={120} className="min-h-0">
            <div className="h-full min-h-[24rem] overflow-hidden rounded-4xl border border-border shadow-md">
              <iframe
                title="Google Map showing the location of Hotel Sun 'N' Wind on Manikaran Road, Kasol"
                src={MAP_EMBED_URL}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
                className="h-full min-h-[24rem] w-full border-0"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
