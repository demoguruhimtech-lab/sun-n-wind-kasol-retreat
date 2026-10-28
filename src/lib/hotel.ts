export const HOTEL_NAME = "Hotel Sun 'N' Wind";
export const HOTEL_PHONE_DISPLAY = "+91 92540 39139";
export const HOTEL_PHONE_TEL = "tel:+919254039139";
export const HOTEL_WHATSAPP_NUMBER = "919254039139";
export const HOTEL_ADDRESS =
  "286C+J2C, Manikaran Road, Kasol, Sosan, Himachal Pradesh 175105, India";
export const HOTEL_SHORT_ADDRESS = "Manikaran Road, Kasol, Himachal Pradesh";

export const MAP_EMBED_URL =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3383.1312773757686!2d77.31742941125069!3d32.01155747388442!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39045c42a585ec1d%3A0xb54e4962649f20b8!2sHotel%20Sun%20'N'%20Wind!5e0!3m2!1sen!2sin!4v1793179359583!5m2!1sen!2sin";

export const DIRECTIONS_URL =
  "https://www.google.com/maps/dir/?api=1&destination=Hotel%20Sun%20%27N%27%20Wind%2C%20286C%2B%2BJ2C%2C%20Manikaran%20Road%2C%20Kasol%2C%20Himachal%20Pradesh%20175105";

export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Rooms", href: "#rooms" },
  { label: "Dining", href: "#dining" },
  { label: "Amenities", href: "#amenities" },
  { label: "Experiences", href: "#experiences" },
  { label: "Location", href: "#location" },
  { label: "Contact", href: "#contact" },
] as const;

export interface EnquiryForm {
  name: string;
  phone: string;
  checkIn: string;
  checkOut: string;
  adults: number;
  children: number;
  rooms: number;
  roomType: string;
  message: string;
}

export function createWhatsAppEnquiry(form: EnquiryForm): string {
  const lines = [
    "Hello Hotel Sun 'N' Wind,",
    "I would like to enquire about a stay in Kasol.",
    `Name: ${form.name || "Not provided"}`,
    `Phone: ${form.phone || "Not provided"}`,
    `Check-in: ${form.checkIn || "Not selected"}`,
    `Check-out: ${form.checkOut || "Not selected"}`,
    `Adults: ${form.adults ?? 2}`,
    `Children: ${form.children ?? 0}`,
    `Rooms: ${form.rooms ?? 1}`,
    `Room preference: ${form.roomType || "Please share available options"}`,
    `Message: ${form.message || "Please share current rates and availability."}`,
  ];
  return `https://wa.me/${HOTEL_WHATSAPP_NUMBER}?text=${encodeURIComponent(lines.join("\n"))}`;
}

export function createWhatsAppMessage(subject: string): string {
  const message = ["Hello Hotel Sun 'N' Wind,", subject].join("\n");
  return `https://wa.me/${HOTEL_WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const BOOKING_WHATSAPP_SUBJECT =
  "I would like to enquire about room availability and current rates for my stay in Kasol.";
