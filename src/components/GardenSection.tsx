import { Flower2, Sun } from "lucide-react";
import gardenCafe from "@/assets/garden-cafe.jpg";
import riversideSeating from "@/assets/riverside-seating.jpg";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

export function GardenSection() {
  return (
    <section id="garden" className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal className="order-2 grid gap-5 sm:order-1 sm:grid-cols-2">
            <img
              src={gardenCafe}
              alt="Garden café area at Hotel Sun 'N' Wind with colorful umbrellas strung overhead, a wooden kiosk and a hanging egg chair"
              loading="lazy"
              className="aspect-[4/5] w-full rounded-4xl border border-border object-cover shadow-lg"
            />
            <img
              src={riversideSeating}
              alt="Outdoor seating platform with red tables and chairs beside the flowing river near the hotel"
              loading="lazy"
              className="aspect-[4/5] w-full rounded-4xl border border-border object-cover shadow-lg sm:mt-10"
            />
          </Reveal>

          <Reveal delayMs={100} className="order-1 sm:order-2">
            <SectionHeading
              align="left"
              eyebrow="Garden & Relaxation"
              title="Slow Down and Enjoy Your Stay"
              className="max-w-none"
            />
            <div className="mt-5 space-y-4 text-base leading-relaxed text-muted-foreground">
              <p>
                Part of Kasol's charm is doing less, more slowly. The hotel is
                described as having a cozy garden area and a peaceful
                atmosphere — a spot to sit with a cup of tea, read, or simply
                watch the mountains between plans.
              </p>
              <p>
                Outdoor arrangements can vary through the season. If spending
                time in the garden or outdoor seating matters to your stay,
                enquire about the available outdoor space and facilities before
                you arrive.
              </p>
            </div>

            <div className="mt-7 flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-2 text-sm font-semibold text-secondary-foreground">
                <Flower2 className="h-4 w-4 text-gold" aria-hidden="true" />
                Cozy garden area
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-2 text-sm font-semibold text-secondary-foreground">
                <Sun className="h-4 w-4 text-gold" aria-hidden="true" />
                Peaceful mountain atmosphere
              </span>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
