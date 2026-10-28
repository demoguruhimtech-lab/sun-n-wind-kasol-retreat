import { useEffect, useState } from "react";
import { CalendarCheck, MessageCircle, Phone, ShieldCheck } from "lucide-react";
import {
  HOTEL_PHONE_DISPLAY,
  HOTEL_PHONE_TEL,
  createWhatsAppEnquiry,
  type EnquiryForm,
} from "@/lib/hotel";
import { Reveal } from "@/components/Reveal";

const INITIAL_FORM: EnquiryForm = {
  name: "",
  phone: "",
  checkIn: "",
  checkOut: "",
  adults: 2,
  children: 0,
  rooms: 1,
  roomType: "",
  message: "",
};

const inputClass =
  "w-full rounded-xl border border-input bg-background px-4 py-2.5 text-sm font-medium text-foreground shadow-sm transition-colors placeholder:text-muted-foreground/70 focus:border-primary";

const errorClass = "mt-1 text-xs font-semibold text-destructive";

function localISODate(date: Date): string {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function validate(form: EnquiryForm, today: string): Partial<Record<keyof EnquiryForm, string>> {
  const errors: Partial<Record<keyof EnquiryForm, string>> = {};

  if (!form.name.trim()) {
    errors.name = "Please enter your name.";
  } else if (form.name.trim().length < 2) {
    errors.name = "Name looks too short.";
  }

  if (!form.phone.trim()) {
    errors.phone = "Please enter a phone number so we can reach you.";
  } else if (!/^\+?[0-9][0-9\s-]{8,14}$/.test(form.phone.trim())) {
    errors.phone = "Enter a valid phone number (digits, spaces or dashes).";
  }

  if (!form.checkIn) {
    errors.checkIn = "Please choose a check-in date.";
  } else if (form.checkIn < today) {
    errors.checkIn = "Check-in date cannot be in the past.";
  }

  if (!form.checkOut) {
    errors.checkOut = "Please choose a check-out date.";
  } else if (form.checkIn && form.checkOut <= form.checkIn) {
    errors.checkOut = "Check-out must be after check-in.";
  }

  return errors;
}

export function BookingEnquiry() {
  const [form, setForm] = useState<EnquiryForm>(INITIAL_FORM);
  const [errors, setErrors] = useState<Partial<Record<keyof EnquiryForm, string>>>({});
  const [minDate, setMinDate] = useState("");
  const [checkOutMin, setCheckOutMin] = useState("");

  useEffect(() => {
    const today = localISODate(new Date());
    setMinDate(today);
  }, []);

  useEffect(() => {
    if (!form.checkIn) {
      setCheckOutMin(minDate);
      return;
    }
    const nextDay = new Date(`${form.checkIn}T00:00:00`);
    nextDay.setDate(nextDay.getDate() + 1);
    setCheckOutMin(localISODate(nextDay));
  }, [form.checkIn, minDate]);

  const update = <K extends keyof EnquiryForm>(field: K, value: EnquiryForm[K]) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => {
      if (!prev[field]) return prev;
      const next = { ...prev };
      delete next[field];
      return next;
    });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = validate(form, minDate);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    window.open(createWhatsAppEnquiry(form), "_blank", "noopener,noreferrer");
  };

  return (
    <section id="enquiry" className="relative z-10 -mt-16 scroll-mt-32 px-4 sm:px-6">
      <Reveal className="mx-auto max-w-6xl">
        <div className="rounded-4xl border border-border bg-card p-6 shadow-2xl sm:p-10">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div className="min-w-0">
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-gold">
                Booking Enquiry
              </p>
              <h2 className="mt-2 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                Plan Your Kasol Stay
              </h2>
              <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted-foreground">
                Fill in your travel details and send the enquiry on WhatsApp —
                our team will reply to confirm availability and current rates
                for your dates.
              </p>
            </div>
            <span className="inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-2 text-xs font-bold text-secondary-foreground">
              <ShieldCheck className="h-4 w-4" aria-hidden="true" />
              Enquiry only — no payment needed
            </span>
          </div>

          <form onSubmit={handleSubmit} noValidate className="mt-8">
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              <div>
                <label htmlFor="guest-name" className="mb-1.5 block text-sm font-bold text-foreground">
                  Guest name <span className="text-destructive">*</span>
                </label>
                <input
                  id="guest-name"
                  type="text"
                  value={form.name}
                  onChange={(e) => update("name", e.target.value)}
                  placeholder="Your full name"
                  autoComplete="name"
                  maxLength={100}
                  aria-invalid={Boolean(errors.name)}
                  className={inputClass}
                />
                {errors.name ? <p className={errorClass}>{errors.name}</p> : null}
              </div>

              <div>
                <label htmlFor="guest-phone" className="mb-1.5 block text-sm font-bold text-foreground">
                  Phone number <span className="text-destructive">*</span>
                </label>
                <input
                  id="guest-phone"
                  type="tel"
                  value={form.phone}
                  onChange={(e) => update("phone", e.target.value)}
                  placeholder="+91 98765 43210"
                  autoComplete="tel"
                  maxLength={16}
                  aria-invalid={Boolean(errors.phone)}
                  className={inputClass}
                />
                {errors.phone ? <p className={errorClass}>{errors.phone}</p> : null}
              </div>

              <div>
                <label htmlFor="room-type" className="mb-1.5 block text-sm font-bold text-foreground">
                  Preferred room type
                </label>
                <select
                  id="room-type"
                  value={form.roomType}
                  onChange={(e) => update("roomType", e.target.value)}
                  className={inputClass}
                >
                  <option value="">No preference</option>
                  <option value="Standard Room">Standard Room</option>
                  <option value="Suite">Suite</option>
                </select>
              </div>

              <div>
                <label htmlFor="check-in" className="mb-1.5 block text-sm font-bold text-foreground">
                  Check-in date <span className="text-destructive">*</span>
                </label>
                <input
                  id="check-in"
                  type="date"
                  min={minDate || undefined}
                  value={form.checkIn}
                  onChange={(e) => update("checkIn", e.target.value)}
                  aria-invalid={Boolean(errors.checkIn)}
                  className={inputClass}
                />
                {errors.checkIn ? <p className={errorClass}>{errors.checkIn}</p> : null}
              </div>

              <div>
                <label htmlFor="check-out" className="mb-1.5 block text-sm font-bold text-foreground">
                  Check-out date <span className="text-destructive">*</span>
                </label>
                <input
                  id="check-out"
                  type="date"
                  min={checkOutMin || undefined}
                  value={form.checkOut}
                  onChange={(e) => update("checkOut", e.target.value)}
                  aria-invalid={Boolean(errors.checkOut)}
                  className={inputClass}
                />
                {errors.checkOut ? <p className={errorClass}>{errors.checkOut}</p> : null}
              </div>

              <div className="grid grid-cols-3 gap-3">
                <div>
                  <label htmlFor="adults" className="mb-1.5 block text-sm font-bold text-foreground">
                    Adults
                  </label>
                  <select
                    id="adults"
                    value={form.adults}
                    onChange={(e) => update("adults", Number(e.target.value))}
                    className={inputClass}
                  >
                    {[1, 2, 3, 4, 5, 6].map((n) => (
                      <option key={n} value={n}>{n}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="children" className="mb-1.5 block text-sm font-bold text-foreground">
                    Kids
                  </label>
                  <select
                    id="children"
                    value={form.children}
                    onChange={(e) => update("children", Number(e.target.value))}
                    className={inputClass}
                  >
                    {[0, 1, 2, 3, 4].map((n) => (
                      <option key={n} value={n}>{n}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="rooms" className="mb-1.5 block text-sm font-bold text-foreground">
                    Rooms
                  </label>
                  <select
                    id="rooms"
                    value={form.rooms}
                    onChange={(e) => update("rooms", Number(e.target.value))}
                    className={inputClass}
                  >
                    {[1, 2, 3, 4].map((n) => (
                      <option key={n} value={n}>{n}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="sm:col-span-2 lg:col-span-3">
                <label htmlFor="message" className="mb-1.5 block text-sm font-bold text-foreground">
                  Message <span className="font-medium text-muted-foreground">(optional)</span>
                </label>
                <textarea
                  id="message"
                  value={form.message}
                  onChange={(e) => update("message", e.target.value)}
                  rows={3}
                  maxLength={1000}
                  placeholder="Anything we should know — travel dates are flexible, early check-in, etc."
                  className={inputClass}
                />
              </div>
            </div>

            <div className="mt-7 flex flex-wrap items-center gap-3">
              <button
                type="submit"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-bold text-primary-foreground shadow-lg transition-transform hover:scale-[1.03]"
              >
                <MessageCircle className="h-4.5 w-4.5" aria-hidden="true" />
                Send Enquiry on WhatsApp
              </button>
              <a
                href={HOTEL_PHONE_TEL}
                className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-background px-7 py-3.5 text-sm font-bold text-primary transition-colors hover:bg-secondary"
              >
                <Phone className="h-4.5 w-4.5" aria-hidden="true" />
                Call to Confirm Availability
              </a>
            </div>

            <p className="mt-4 flex items-start gap-2 text-xs leading-relaxed text-muted-foreground">
              <CalendarCheck className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
              Sending the enquiry opens WhatsApp with your details pre-filled —
              nothing is sent automatically until you press send there. An
              enquiry is not a confirmed reservation; our team confirms
              availability and final rates. You can also call us directly at{" "}
              {HOTEL_PHONE_DISPLAY}.
            </p>
          </form>
        </div>
      </Reveal>
    </section>
  );
}
