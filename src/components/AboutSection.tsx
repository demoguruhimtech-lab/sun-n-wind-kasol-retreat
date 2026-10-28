import { BedDouble, MapPin, Sparkles, UtensilsCrossed } from "lucide-react";
import veranda from "@/assets/veranda.jpg";
import balconyView from "@/assets/balcony-view.jpg";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

const ABOUT_POINTS = [
  { icon: MapPin, text: "Set on Manikaran Road, in the Kasol region of the Parvati Valley" },
  { icon: BedDouble, text: "Standard rooms and suites, as reported in the hotel's listing" },
  { icon: UtensilsCrossed, text: "An on-site multi-cuisine restaurant for easy, satisfying meals" },
  { icon: Sparkles, text: "A cozy garden area and a peaceful atmosphere to unwind in" },
];

export function AboutSection() {
  return (
    <section id="about" className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <SectionHeading
              align="left"
              eyebrow="About the Hotel"
              title="A Relaxed Stay Along the Parvati Valley Route"
              className="max-w-none"
            />
            <div className="mt-5 space-y-4 text-base leading-relaxed text-muted-foreground">
              <p>
                Hotel Sun 'N' Wind is a budget-friendly hotel located on
                Manikaran Road in Kasol — a village that has become a favorite
                stop for travelers exploring Himachal Pradesh's Parvati Valley.
                The hotel keeps things simple and welcoming, so you can spend
                your days outside and come back to an easy, comfortable base.
              </p>
              <p>
                The property is reported to offer standard rooms and suites,
                along with an on-site multi-cuisine restaurant serving guests
                throughout their stay. Its setting along the Manikaran Road
                corridor makes it a practical choice for travelers planning to
                explore Kasol and the surrounding valley at their own pace.
              </p>
              <p>
                Many guests appreciate the peaceful atmosphere around the
                property. Views and room orientations can vary, so if a
                particular kind of room matters to you, our team is happy to
                talk through current options before you arrive.
              </p>
            </div>

            <ul className="mt-7 grid gap-3 sm:grid-cols-2">
              {ABOUT_POINTS.map(({ icon: Icon, text }) => (
                <li
                  key={text}
                  className="flex items-start gap-3 rounded-2xl border border-border bg-card px-4 py-3 shadow-sm"
                >
                  <Icon className="mt-0.5 h-5 w-5 shrink-0 text-gold" aria-hidden="true" />
                  <span className="text-sm font-semibold leading-snug text-foreground">{text}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delayMs={120} className="relative">
            <div className="relative mx-auto max-w-xl lg:max-w-none">
              <img
                src={veranda}
                alt="Covered veranda corridor at Hotel Sun 'N' Wind with white pillars, potted plants and pine trees beyond"
                loading="lazy"
                className="aspect-[4/3] w-full rounded-4xl border border-border object-cover shadow-xl"
              />
              <img
                src={balconyView}
                alt="View of the mountain town and forested valley from a hotel balcony"
                loading="lazy"
                className="absolute -bottom-8 -left-4 hidden w-44 rounded-3xl border-4 border-card object-cover shadow-xl sm:block lg:-left-10 lg:w-56"
              />
              <div className="absolute -top-5 right-4 rounded-2xl bg-primary px-5 py-3 text-primary-foreground shadow-lg lg:right-8">
                <p className="font-display text-xl font-semibold leading-none">Manikaran Road</p>
                <p className="mt-1 text-[11px] font-bold uppercase tracking-[0.2em] text-primary-foreground/80">
                  Kasol · Sosan · HP 175105
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
