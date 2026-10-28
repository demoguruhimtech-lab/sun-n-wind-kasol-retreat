import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HOTEL_PHONE_DISPLAY, HOTEL_PHONE_TEL } from "@/lib/hotel";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

const FAQS = [
  {
    question: "Where is Hotel Sun 'N' Wind located?",
    answer: "The hotel is listed at 286C+J2C, Manikaran Road, Kasol, Sosan, Himachal Pradesh 175105.",
  },
  {
    question: "What types of rooms are available?",
    answer: "The supplied information lists standard rooms and suites. Contact the hotel to confirm current room categories and availability.",
  },
  {
    question: "What are the check-in and check-out times?",
    answer: "The supplied information lists check-in from 2:00 PM and check-out by 12:00 PM.",
  },
  {
    question: "Does the hotel have a restaurant?",
    answer: "An on-site multi-cuisine restaurant is reported. Contact the property for the current menu and timings.",
  },
  {
    question: "Is parking available?",
    answer: "Free on-site parking is reported in the supplied information. Confirm current arrangements directly.",
  },
  {
    question: "How can I enquire about room rates?",
    answer: `Call ${HOTEL_PHONE_DISPLAY} or send an enquiry through the website's WhatsApp form.`,
  },
  {
    question: "What is the hotel's rating?",
    answer: "The supplied listing reports 3.6/5 based on over 900 reviews. Ratings may change over time.",
  },
];

export function FAQSection() {
  return (
    <section id="faq" className="bg-secondary/50 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="FAQ"
          title="Frequently Asked Questions"
          description="Quick answers about the hotel's location, rooms, dining, and booking."
        />

        <Reveal className="mx-auto mt-12 max-w-3xl">
          <Accordion type="single" collapsible className="rounded-3xl border border-border bg-card px-6 shadow-sm">
            {FAQS.map((faq, index) => (
              <AccordionItem key={faq.question} value={`faq-${index}`}>
                <AccordionTrigger className="text-left text-base font-bold text-foreground hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                  {faq.question === "How can I enquire about room rates?" ? (
                    <>
                      Call{" "}
                      <a href={HOTEL_PHONE_TEL} className="font-semibold text-primary underline underline-offset-2">
                        {HOTEL_PHONE_DISPLAY}
                      </a>{" "}
                      or send an enquiry through the website's WhatsApp form.
                    </>
                  ) : (
                    faq.answer
                  )}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}
