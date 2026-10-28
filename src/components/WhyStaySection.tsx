import { BedDouble, Compass, MapPin, UtensilsCrossed } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

const REASONS = [
  {
    icon: MapPin,
    title: "Kasol Location",
    text: "Situated on Manikaran Road — right along the valley's main travel corridor.",
  },
  {
    icon: BedDouble,
    title: "Room Options",
    text: "Standard rooms and suites are reported in the supplied listing information.",
  },
  {
    icon: UtensilsCrossed,
    title: "On-Site Dining",
    text: "A multi-cuisine restaurant is reported at the property for easy meals.",
  },
  {
    icon: Compass,
    title: "Travel Convenience",
    text: "A practical base for travelers exploring Kasol and the Parvati Valley.",
  },
];

export function WhyStaySection() {
  return (
    <section id="why" className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Why Stay With Us"
          title="Why Stay at Hotel Sun 'N' Wind?"
          description="Four simple reasons travelers choose this hotel for their Kasol stay."
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {REASONS.map(({ icon: Icon, title, text }, index) => (
            <Reveal key={title} delayMs={index * 80}>
              <div className="h-full rounded-3xl border border-border bg-card p-6 text-center shadow-sm transition-shadow hover:shadow-md">
                <span className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-secondary text-primary">
                  <Icon className="h-7 w-7" aria-hidden="true" />
                </span>
                <h3 className="mt-4 text-lg font-bold text-foreground">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
