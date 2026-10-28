import { Coffee, ConciergeBell, UtensilsCrossed } from "lucide-react";
import restaurantLounge from "@/assets/restaurant-lounge.jpg";
import restaurantThali from "@/assets/restaurant-thali.jpg";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

const DINING_POINTS = [
  {
    icon: UtensilsCrossed,
    title: "On-site multi-cuisine restaurant",
    text: "A reported dining option right at the property — no need to head out after a long day of travel.",
  },
  {
    icon: Coffee,
    title: "Breakfast options",
    text: "Breakfast options are reported at the hotel, so you can start your day before heading into the valley.",
  },
  {
    icon: ConciergeBell,
    title: "Convenient during your stay",
    text: "Room service is listed among the hotel's reported services — confirm current arrangements with the team.",
  },
];

export function DiningSection() {
  return (
    <section id="dining" className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <SectionHeading
              align="left"
              eyebrow="Dining"
              title="Good Food, Right Here in Kasol"
              className="max-w-none"
            />
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              Make time for a satisfying meal during your Kasol stay. Hotel
              Sun 'N' Wind is reported to have an on-site multi-cuisine
              restaurant offering dining options for guests. Contact the
              property to confirm the current menu, timings, and prices.
            </p>

            <ul className="mt-8 space-y-4">
              {DINING_POINTS.map(({ icon: Icon, title, text }) => (
                <li key={title} className="flex items-start gap-4">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-secondary text-primary">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="text-base font-bold text-foreground">{title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delayMs={120} className="grid gap-5 sm:grid-cols-2">
            <img
              src={restaurantLounge}
              alt="Indoor lounge and restaurant area at Hotel Sun 'N' Wind with sofas and warm accent lighting"
              loading="lazy"
              className="aspect-[4/5] w-full rounded-4xl border border-border object-cover shadow-lg sm:mt-10"
            />
            <img
              src={restaurantThali}
              alt="A freshly served Indian meal with roti, curry, dal and paneer at the hotel restaurant"
              loading="lazy"
              className="aspect-[4/5] w-full rounded-4xl border border-border object-cover shadow-lg"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
