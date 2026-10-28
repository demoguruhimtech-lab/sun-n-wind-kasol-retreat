import { describe, expect, it } from "vitest";
import {
  HOTEL_PHONE_TEL,
  HOTEL_WHATSAPP_NUMBER,
  createWhatsAppEnquiry,
  createWhatsAppMessage,
  type EnquiryForm,
} from "@/lib/hotel";

const form: EnquiryForm = {
  name: "Test Guest",
  phone: "+91 98765 43210",
  checkIn: "2026-05-10",
  checkOut: "2026-05-12",
  adults: 2,
  children: 1,
  rooms: 1,
  roomType: "Standard Room",
  message: "Flexible dates",
};

describe("hotel contact helpers", () => {
  it("targets the hotel's WhatsApp number", () => {
    const link = createWhatsAppEnquiry(form);
    expect(link).toContain(`https://wa.me/${HOTEL_WHATSAPP_NUMBER}?text=`);
    expect(HOTEL_WHATSAPP_NUMBER).toBe("919254039139");
  });

  it("includes the guest's enquiry details in the message", () => {
    const link = createWhatsAppEnquiry(form);
    const decoded = decodeURIComponent(link.split("?text=")[1] ?? "");
    expect(decoded).toContain("Name: Test Guest");
    expect(decoded).toContain("Check-in: 2026-05-10");
    expect(decoded).toContain("Check-out: 2026-05-12");
    expect(decoded).toContain("Adults: 2");
    expect(decoded).toContain("Children: 1");
    expect(decoded).toContain("Room preference: Standard Room");
  });

  it("falls back to friendly placeholders for empty fields", () => {
    const link = createWhatsAppEnquiry({
      ...form,
      name: "",
      message: "",
    });
    const decoded = decodeURIComponent(link.split("?text=")[1] ?? "");
    expect(decoded).toContain("Name: Not provided");
    expect(decoded).toContain("Please share current rates and availability.");
  });

  it("builds tel: and quick-message links correctly", () => {
    expect(HOTEL_PHONE_TEL).toBe("tel:+919254039139");
    const link = createWhatsAppMessage("I'm interested in a Suite.");
    expect(link).toContain("https://wa.me/919254039139?text=");
    expect(decodeURIComponent(link.split("?text=")[1] ?? "")).toContain("I'm interested in a Suite.");
  });
});
