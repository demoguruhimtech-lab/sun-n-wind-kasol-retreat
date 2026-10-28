import { BedDouble, MessageCircle, Phone } from "lucide-react";
import roomCozy from "@/assets/room-cozy.jpg";
import roomDeluxe from "@/assets/room-deluxe.jpg";
import {
  HOTEL_PHONE_DISPLAY,
  HOTEL_PHONE_TEL,
  createWhatsAppMessage,
} from "@/lib/hotel";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

const ROOMS = [
  {
    name: "Standard Rooms",
    image: roomCozy,
    alt: "Standard room at Hotel Sun 'N' Wind with wooden wall panels, a padded headboard and cozy bedding",
    description:
      "A practical, comfortable option for travelers visiting Kasol — a warm wooden interior and simple, restful bedding after a day out in the valley.",
    whatsapp: "Hello Hotel Sun 'N' Wind, I'm interested in a Standard Room. Please share current rates and availability.",
  },
  {
    name: "Suites",
    image: roomDeluxe,
    alt: "Suite at Hotel Sun 'N' Wind with a quilted headboard, wooden walls and red curtains",
    description:
      "A reported room category for guests looking for a different option — ask our team what suite configurations are currently available for your dates.",
    whatsapp: "Hello Hotel Sun 'N' Wind, I'm interested in a Suite. Please share current rates and availability.",
  },
];

export function RoomsSection() {
  return (
    <section id="rooms" className="bg-secondary/50 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Rooms & Accommodation"
          title="Find the Right Space for Your Stay"
          description="Hotel Sun 'N' Wind is reported to offer standard rooms and suites. Room details and current configurations are confirmed directly with the hotel."
        />

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {ROOMS.map((room, index) => (
            <Reveal key={room.name} delayMs={index * 120}>
              <article className="group flex h-full flex-col overflow-hidden rounded-4xl border border-border bg-card shadow-md transition-shadow hover:shadow-xl">
                <div className="overflow-hidden">
                  <img
                    src={room.image}
                    alt={room.alt}
                    loading="lazy"
                    className="aspect-[16/10] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6 sm:p-8">
                  <h3 className="flex items-center gap-2 text-2xl font-semibold text-foreground">
                    <BedDouble className="h-5.5 w-5.5 text-gold" aria-hidden="true" />
                    {room.name}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {room.description}
                  </p>
                  <p className="mt-4 text-xs leading-relaxed text-muted-foreground/90">
                    In-room facilities, sizes and bed setups vary — please
                    contact the hotel for the current options before booking.
                  </p>
                  <div className="mt-5 flex flex-wrap gap-3">
                    <a
                      href="#enquiry"
                      className="rounded-full bg-primary px-6 py-3 text-sm font-bold text-primary-foreground shadow-md transition-colors hover:bg-primary/90"
                    >
                      Enquire About This Room
                    </a>
                    <a
                      href={createWhatsAppMessage(room.whatsapp)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-primary/30 px-6 py-3 text-sm font-bold text-primary transition-colors hover:bg-secondary"
                    >
                      <MessageCircle className="h-4 w-4" aria-hidden="true" />
                      WhatsApp Enquiry
                    </a>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delayMs={150} className="mt-10">
          <div className="mx-auto max-w-3xl rounded-3xl border border-border bg-card p-6 text-center shadow-sm">
            <p className="text-sm font-bold text-foreground">
              Indicative nightly range: ₹3,500 – ₹4,000
            </p>
            <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
              Rates vary by dates, room category, occupancy, and availability.
              Please contact the hotel to confirm the final price and booking
              conditions — call{" "}
              <a href={HOTEL_PHONE_TEL} className="font-semibold text-primary underline underline-offset-2">
                {HOTEL_PHONE_DISPLAY}
              </a>{" "}
              or send a WhatsApp enquiry.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
