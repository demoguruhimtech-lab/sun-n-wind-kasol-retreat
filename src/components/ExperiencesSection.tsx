import { Compass, MapPin, MountainSnow, Signpost } from "lucide-react";
import mountainValley from "@/assets/mountain-valley.jpg";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

const EXPERIENCES = [
  {
    icon: MapPin,
    title: "Explore Kasol's local surroundings",
    text: "Wander the village lanes, cafés, and riverside spots that make Kasol a favorite Himalayan stop.",
  },
  {
    icon: Signpost,
    title: "Discover the Manikaran Road area",
    text: "The hotel sits along the Manikaran Road corridor, a well-travelled route through the Parvati Valley.",
  },
  {
    icon: MountainSnow,
    title: "Take in the mountain landscape",
    text: "Forested hillsides, tall pines, and snow-capped peaks shape the views around this part of Himachal Pradesh.",
  },
  {
    icon: Compass,
    title: "Plan onward journeys",
    text: "Use the hotel as a base while you plan trips deeper into the Parvati Valley and beyond.",
  },
];

export function ExperiencesSection() {
  return (
    <section id="experiences" className="bg-secondary/50 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Experiences"
          title="Make Hotel Sun 'N' Wind Your Base for Exploring Kasol"
          description="From the hotel on Manikaran Road, it's easy to settle into Kasol's rhythm and then range out into the Parvati Valley."
        />

        <div className="mt-12 grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <img
              src={mountainValley}
              alt="Snow-capped Himalayan peaks above a forested valley with tall pine trees near Kasol"
              loading="lazy"
              className="aspect-[4/3] w-full rounded-4xl border border-border object-cover shadow-xl"
            />
          </Reveal>

          <div className="grid gap-5 sm:grid-cols-2">
            {EXPERIENCES.map(({ icon: Icon, title, text }, index) => (
              <Reveal key={title} delayMs={index * 80}>
                <div className="h-full rounded-3xl border border-border bg-card p-6 shadow-sm transition-shadow hover:shadow-md">
                  <span className="grid h-11 w-11 place-items-center rounded-2xl bg-primary text-primary-foreground">
                    <Icon className="h-5.5 w-5.5" aria-hidden="true" />
                  </span>
                  <h3 className="mt-4 text-base font-bold leading-snug text-foreground">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delayMs={150}>
          <p className="mx-auto mt-10 max-w-2xl text-center text-xs leading-relaxed text-muted-foreground">
            Distances, travel times, and local transport vary by season — ask
            our team for local tips when you arrive. The hotel does not
            arrange tours or transportation.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
