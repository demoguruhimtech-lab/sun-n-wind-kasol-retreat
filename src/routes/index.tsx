import { createFileRoute } from "@tanstack/react-router";

import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { BookingEnquiry } from "@/components/BookingEnquiry";
import { AboutSection } from "@/components/AboutSection";
import { RoomsSection } from "@/components/RoomsSection";
import { DiningSection } from "@/components/DiningSection";
import { AmenitiesSection } from "@/components/AmenitiesSection";
import { GardenSection } from "@/components/GardenSection";
import { ExperiencesSection } from "@/components/ExperiencesSection";
import { WhyStaySection } from "@/components/WhyStaySection";
import { RatesSection } from "@/components/RatesSection";
import { LocationSection } from "@/components/LocationSection";
import { FAQSection } from "@/components/FAQSection";
import { FinalCta, Footer } from "@/components/Footer";
import {
  DIRECTIONS_URL,
  HOTEL_ADDRESS,
  HOTEL_NAME,
  HOTEL_PHONE_DISPLAY,
  HOTEL_PHONE_TEL,
} from "@/lib/hotel";

const META_TITLE = "Hotel Sun 'N' Wind Kasol | Hotel on Manikaran Road, Parvati Valley";
const META_DESCRIPTION =
  "Hotel Sun 'N' Wind is a budget-friendly hotel on Manikaran Road, Kasol — standard rooms and suites, on-site multi-cuisine dining, free Wi-Fi and parking. Enquire about your Parvati Valley stay.";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LodgingBusiness",
  name: HOTEL_NAME,
  description: META_DESCRIPTION,
  telephone: HOTEL_PHONE_DISPLAY,
  address: {
    "@type": "PostalAddress",
    streetAddress: "286C+J2C, Manikaran Road",
    addressLocality: "Kasol, Sosan",
    addressRegion: "Himachal Pradesh",
    postalCode: "175105",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 32.01155747388442,
    longitude: 77.31742941125069,
  },
  checkinTime: "14:00",
  checkoutTime: "12:00",
  priceRange: "₹3,500–₹4,000",
  hasMap: DIRECTIONS_URL,
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: META_TITLE },
      { name: "description", content: META_DESCRIPTION },
      { property: "og:title", content: META_TITLE },
      { property: "og:description", content: META_DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: META_TITLE },
      { name: "twitter:description", content: META_DESCRIPTION },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <main>
        <Hero />
        <BookingEnquiry />
        <AboutSection />
        <RoomsSection />
        <DiningSection />
        <AmenitiesSection />
        <GardenSection />
        <ExperiencesSection />
        <WhyStaySection />
        <RatesSection />
        <LocationSection />
        <FAQSection />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
