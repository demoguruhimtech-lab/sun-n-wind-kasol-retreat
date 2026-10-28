import { IndianRupee, Star, Timer } from "lucide-react";
import { HOTEL_PHONE_TEL } from "@/lib/hotel";
import { Reveal } from "@/components/Reveal";

export function RatesSection() {
  return (
    <section id="rates" className="bg-primary py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-8 lg:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-4xl border border-primary-foreground/15 bg-pine-deep/60 p-8 shadow-lg">
              <p className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/25 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-primary-foreground">
                <Star className="h-3.5 w-3.5 fill-gold text-gold" aria-hidden="true" />
                Reported Rating
              </p>
              <p className="mt-6 font-display text-6xl font-semibold text-primary-foreground">
                3.6<span className="text-3xl text-primary-foreground/60">/5</span>
              </p>
              <p className="mt-3 text-base font-semibold text-primary-foreground">
                Based on 900+ reviews
              </p>
              <p className="mt-4 text-sm leading-relaxed text-primary-foreground/75">
                This rating is shown as reported listing information and may
                change over time — it is not a live rating.
              </p>
            </div>
          </Reveal>

          <Reveal delayMs={120}>
            <div className="h-full rounded-4xl border border-primary-foreground/15 bg-pine-deep/60 p-8 shadow-lg">
              <p className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/25 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-primary-foreground">
                <IndianRupee className="h-3.5 w-3.5 text-gold" aria-hidden="true" />
                Indicative Pricing
              </p>
              <p className="mt-6 font-display text-5xl font-semibold text-primary-foreground sm:text-6xl">
                ₹3,500–₹4,000
              </p>
              <p className="mt-3 text-base font-semibold text-primary-foreground">
                Approximate nightly range
              </p>
              <p className="mt-4 flex items-start gap-2 text-sm leading-relaxed text-primary-foreground/75">
                <Timer className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
                Rates vary by dates, room category, occupancy, and
                availability. Please contact the hotel to confirm the final
                price and booking conditions.
              </p>
              <a
                href={HOTEL_PHONE_TEL}
                className="mt-6 inline-flex rounded-full bg-accent px-6 py-3 text-sm font-bold text-accent-foreground shadow-md transition-transform hover:scale-[1.03]"
              >
                Call to Confirm Current Rates
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
