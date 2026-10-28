import { Baby, CarFront, Shirt, UtensilsCrossed, Wifi, BellRing } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

const AMENITIES = [
  {
    icon: Wifi,
    title: "Free Wi-Fi",
    text: "Connectivity is reported to be available for guests at the property.",
  },
  {
    icon: CarFront,
    title: "On-Site Parking",
    text: "Complimentary parking is reported for guests arriving by vehicle.",
  },
  {
    icon: BellRing,
    title: "Room Service",
    text: "Room service is listed among the hotel's supplied services.",
  },
  {
    icon: UtensilsCrossed,
    title: "Breakfast Options",
    text: "Breakfast options are reported — confirm current arrangements on arrival.",
  },
  {
    icon: Shirt,
    title: "Laundry Service",
    text: "Laundry facilities are reported, handy for longer valley trips.",
  },
  {
    icon: Baby,
    title: "Child-Friendly",
    text: "The supplied information describes the property as child-friendly.",
  },
];

export function AmenitiesSection() {
  return (
    <section id="amenities" className="bg-secondary/50 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Amenities"
          title="Everything You Need for an Easy Stay"
          description="The guest facilities below are as reported in the hotel's listing. Please confirm any specific requirement directly with the hotel."
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {AMENITIES.map(({ icon: Icon, title, text }, index) => (
            <Reveal key={title} delayMs={index * 70}>
              <div className="flex h-full items-start gap-4 rounded-3xl border border-border bg-card p-6 shadow-sm transition-shadow hover:shadow-md">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-primary text-primary-foreground">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <div className="min-w-0">
                  <h3 className="text-base font-bold text-foreground">{title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{text}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
