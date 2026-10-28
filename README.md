# Sun ’N’ Wind Kasol Retreat

# Build a Premium Single-Page Website for Hotel Sun 'N' Wind, Kasol

Act as a senior React developer and premium hospitality UI/UX designer. Build a beautiful, modern, fully responsive **single-page website** for Hotel Sun 'N' Wind, located on Manikaran Road, Kasol, Himachal Pradesh.

The website should have a premium mountain-hotel aesthetic, warm colors, elegant typography, smooth animations, detailed homepage content, room enquiry options, WhatsApp integration, and an embedded Google Map.

**Build one homepage only.** All navigation links must scroll to sections on the same page. Do not create separate pages or unnecessary features.

## 1. MANDATORY IMAGE RULE — NO JSON IMAGES

**Do not use JSON images under any circumstances.**

- Do NOT create `images.json`, `image.json`, `gallery.json`, or any JSON-based image mapping.
- Do NOT store image paths or image URLs inside JSON arrays or objects.
- Do NOT use Base64 images.
- Do NOT use Unsplash, Pexels, stock photos, random internet images, or external image URLs.
- Do NOT automatically fetch or generate hotel photographs.
- Use only the actual photographs supplied by the website owner.
- Import every supplied image directly from `src/assets/` using JavaScript ES module imports.
- Use the imported image variables directly inside JSX.
- Use only filenames that actually exist in the project.
- Never invent filenames or import nonexistent files.
- If no photographs have been supplied, build an attractive image-free design using CSS backgrounds, typography, icons, colors, and neutral placeholders. Do not insert random photos.

Example of the required implementation:

```jsx
import hotelExterior from "../assets/hotel-exterior.webp";
import hotelRoom from "../assets/hotel-room.webp";
import restaurantPhoto from "../assets/restaurant.webp";

export default function HotelGallery() {
  return (
    <section className="hotel-gallery">
      <img src={hotelExterior} alt="Hotel Sun 'N' Wind exterior" />
      <img src={hotelRoom} alt="Guest room at Hotel Sun 'N' Wind" />
      <img src={restaurantPhoto} alt="Hotel Sun 'N' Wind restaurant" />
    </section>
  );
}
```

These filenames are examples only. Use them only if the exact files exist in `src/assets/`.

**Before completing the project, check the entire codebase to ensure that no JSON image system, random photos, external image URLs, or fabricated image paths have been introduced.**

## 2. Hotel Information

Use the following supplied details consistently.

- **Hotel Name:** Hotel Sun 'N' Wind
- **Address:** 286C+J2C, Manikaran Road, Kasol, Sosan, Himachal Pradesh 175105, India
- **Phone:** +91 92540 39139
- **Property Type:** Budget-friendly hotel
- **Reported Rating:** 3.6/5 based on over 900 reviews, according to the supplied listing.
- **Reported Price Range:** Approximately ₹3,500–₹4,000 per night, depending on dates, room category, and availability.
- **Check-in:** 2:00 PM
- **Check-out:** 12:00 PM
- **Accommodation:** Standard rooms and suites are reported in the supplied information.
- **Dining:** On-site multi-cuisine restaurant.
- **Reported Facilities:** Free Wi-Fi, free on-site parking, room service, breakfast options, laundry service, and a child-friendly environment.
- **Setting:** Kasol, in the Parvati River valley region of Himachal Pradesh.

Do not invent room counts, room dimensions, bed sizes, email addresses, social media accounts, or unverified hotel facilities.

## 3. Technology and Project Structure

Use:
- React with Vite.
- JavaScript and JSX.
- Tailwind CSS or clean custom CSS.
- React Icons or Lucide React for icons.

Suggested structure:

```text
src/
  assets/
    [only actual owner-provided photographs]
  components/
    Navbar.jsx
    Hero.jsx
    BookingEnquiry.jsx
    AboutSection.jsx
    RoomsSection.jsx
    DiningSection.jsx
    AmenitiesSection.jsx
    GardenSection.jsx
    LocationSection.jsx
    FAQSection.jsx
    Footer.jsx
  App.jsx
  main.jsx
  index.css
```

Keep the code clean, responsive, and maintainable. Create only one homepage. Do not create a JSON-based image system.

## 4. Design Direction

Create a stylish mountain-hotel website inspired by Kasol's natural surroundings.

**Color palette:**
- Deep pine green.
- Warm cream.
- Natural wood brown.
- White.
- Subtle muted-gold accents.

**Visual style:**
- Premium hotel typography.
- Spacious layouts and clear visual hierarchy.
- Elegant cards with soft shadows.
- Rounded corners used consistently.
- Smooth scrolling and subtle entrance animations.
- Attractive room and dining sections.
- A polished sticky navigation bar.
- Clear booking and contact buttons.

Use photographs only if the owner supplies them. Otherwise, use CSS-based design elements and neutral placeholders rather than unrelated images.

## 5. Single-Page Homepage Sections

### A. Sticky Navigation Bar

Create a professional header with:

- Hotel Sun 'N' Wind wordmark.
- Home.
- About.
- Rooms.
- Dining.
- Amenities.
- Experiences.
- Location.
- Contact.

Add a prominent **“Check Availability”** button and a phone button.

All links should smoothly scroll to the appropriate section. On mobile, use a clean responsive menu.

### B. Hero Section

Create a visually impressive hero section with a strong headline.

**Main heading:**

“Your Mountain Escape in the Heart of Kasol”

**Supporting text:**

“Discover Hotel Sun 'N' Wind on Manikaran Road, Kasol — a welcoming stay for travelers exploring the Parvati Valley, enjoying local food, and discovering the beauty of Himachal Pradesh.”

Add three CTA buttons:

- **Enquire About Rooms**
- **WhatsApp Booking**
- **Explore the Location**

Include compact highlights:
- Manikaran Road, Kasol.
- Standard rooms and suites.
- On-site multi-cuisine dining.
- Convenient base for exploring the region.

Use a real hotel photograph imported from `src/assets/` only if supplied. Otherwise, create an elegant CSS hero with pine-green tones, decorative shapes, typography, and clear calls to action.

Do not use external image URLs.

### C. Booking Enquiry Form

Place a booking enquiry panel below the hero.

Fields:
- Guest name.
- Phone number.
- Check-in date.
- Check-out date.
- Number of adults.
- Number of children.
- Number of rooms.
- Preferred room type.
- Optional message.

Requirements:
- Validate required fields.
- Prevent past check-in dates.
- Ensure check-out is later than check-in.
- Show clear validation messages.
- Include a **“Send Enquiry on WhatsApp”** button.
- Include a **“Call to Confirm Availability”** button.

Do not claim that a reservation is confirmed merely because a visitor submits an enquiry.

### D. About Hotel Sun 'N' Wind

Heading:

**“A Relaxed Stay Along the Parvati Valley Route”**

Write natural, detailed content introducing Hotel Sun 'N' Wind as a budget-friendly hotel located on Manikaran Road in Kasol.

Highlight:
- Its location in the Kasol region.
- Standard rooms and suites, as reported in the supplied information.
- On-site dining.
- Its potential as a base for travelers exploring the surrounding valley.

Mention the reported mountain views and peaceful atmosphere carefully, without guaranteeing a particular view or room orientation.

Do not invent a founding year, owner biography, awards, or unsupported luxury claims.

Use a two-column layout with a supplied hotel photo if available. Otherwise, use a decorative CSS panel.

### E. Rooms and Accommodation

Heading:

**“Find the Right Space for Your Stay”**

Create an attractive accommodation section with two room categories:

**Standard Rooms**

Introduce these as a practical accommodation option for travelers visiting Kasol.

**Suites**

Introduce these as another reported accommodation category for guests looking for a different room option.

Each room card should include:
- Room category.
- Short, accurate description.
- Real room photograph only if supplied.
- Confirmed room features only.
- Configurable indicative pricing, if approved by the owner.
- “Enquire About This Room” button.
- WhatsApp enquiry option.

Do not invent room dimensions, bed types, occupancy limits, balconies, views, or facilities. Do not show fake room availability or false scarcity messages.

If room details are not supplied, ask guests to contact the hotel for current options.

### F. Dining Section

Heading:

**“Good Food, Right Here in Kasol”**

Create an elegant section introducing the on-site multi-cuisine restaurant.

Suggested copy:

“Make time for a satisfying meal during your Kasol stay. Hotel Sun 'N' Wind is reported to have an on-site multi-cuisine restaurant offering dining options for guests. Contact the property to confirm the current menu, timings, and prices.”

Highlight:
- On-site multi-cuisine restaurant.
- Breakfast options, as reported.
- Convenient dining during your stay.

Do not invent specific dishes, menu prices, restaurant opening hours, buffet options, or room-service timings.

Use actual restaurant photos only if supplied by the owner. Otherwise, create a polished text-and-icon layout.

### G. Amenities and Guest Facilities

Create an attractive grid of cards with icons for the reported facilities:

- **Free Wi-Fi:** Connectivity is reported to be available.
- **On-Site Parking:** Complimentary parking is reported.
- **Room Service:** Listed among the supplied hotel services.
- **Breakfast Options:** Breakfast options are reported.
- **Laundry Service:** Laundry facilities are reported.
- **Child-Friendly Environment:** The supplied information describes the property as child-friendly.

Keep the descriptions concise and professional. Do not add unverified amenities such as a swimming pool, gym, spa, airport shuttle, or 24-hour room service.

### H. Garden and Relaxation

Heading:

**“Slow Down and Enjoy Your Stay”**

Use the supplied information about the hotel's cozy garden area and peaceful atmosphere to create a relaxing section.

Explain that guests may enquire about the available outdoor space and facilities before arrival.

Do not claim that the garden is private, riverside, accessible from every room, or open at all hours unless confirmed.

Use a real garden photograph only if the owner provides one. Otherwise, use CSS shapes, subtle patterns, and a green-toned layout.

### I. Exploring Kasol and the Surrounding Region

Heading:

**“Make Hotel Sun 'N' Wind Your Base for Exploring Kasol”**

Create a content-rich section about exploring Kasol and the surrounding Parvati Valley region.

Include:
- Exploring Kasol's local surroundings.
- Discovering the Manikaran Road area.
- Enjoying the surrounding mountain landscape.
- Planning onward journeys around the Parvati Valley.

Keep descriptions general and grounded. Do not invent exact distances, travel times, tour services, guided treks, or transportation provided by the hotel.

Use icon cards or CSS-based decorative elements. Only use real photos supplied by the owner.

### J. Why Stay at Hotel Sun 'N' Wind?

Create four attractive feature cards:

- **Kasol Location:** Situated on Manikaran Road.
- **Room Options:** Standard rooms and suites are reported in the supplied information.
- **On-Site Dining:** A multi-cuisine restaurant is reported.
- **Travel Convenience:** A potential base for travelers exploring Kasol and the Parvati Valley.

Avoid exaggerated claims and do not guarantee specific guest experiences.

### K. Guest Rating and Pricing

Display the supplied listing information accurately:

**Reported Rating: 3.6/5 — Based on 900+ reviews**

Use this as supplied listing information, not a live rating guarantee.

For pricing, show:

**Indicative nightly range: ₹3,500–₹4,000**

Include a note:

“Rates vary by dates, room category, occupancy, and availability. Please contact the hotel to confirm the final price and booking conditions.”

Do not fabricate testimonials, reviewer names, discounts, or review quotes. Do not guarantee a rate without live pricing integration.

### L. Location and Google Maps

Display the full address:

**Hotel Sun 'N' Wind**  
286C+J2C, Manikaran Road, Kasol, Sosan, Himachal Pradesh 175105, India.

Add:
- Responsive Google Maps embed.
- “Get Directions” button.
- “Call the Hotel” button.
- “WhatsApp Enquiry” button.

Use this exact Google Maps embed URL:

```text
https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3383.1312773757686!2d77.31742941125069!3d32.01155747388442!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39045c42a585ec1d%3A0xb54e4962649f20b8!2sHotel%20Sun%20'N'%20Wind!5e0!3m2!1sen!2sin!4v1793179359583!5m2!1sen!2sin
```

Render it inside a responsive iframe with `loading="lazy"`, a descriptive title, and accessible markup. Do not replace the supplied map location.

### M. Frequently Asked Questions

Create an attractive FAQ accordion with these questions:

**Where is Hotel Sun 'N' Wind located?**  
The hotel is listed at 286C+J2C, Manikaran Road, Kasol, Sosan, Himachal Pradesh 175105.

**What types of rooms are available?**  
The supplied information lists standard rooms and suites. Contact the hotel to confirm current room categories and availability.

**What are the check-in and check-out times?**  
The supplied information lists check-in from 2:00 PM and check-out by 12:00 PM.

**Does the hotel have a restaurant?**  
An on-site multi-cuisine restaurant is reported. Contact the property for the current menu and timings.

**Is parking available?**  
Free on-site parking is reported in the supplied information. Confirm current arrangements directly.

**How can I enquire about room rates?**  
Call +91 92540 39139 or send an enquiry through the website's WhatsApp form.

**What is the hotel's rating?**  
The supplied listing reports 3.6/5 based on over 900 reviews. Ratings may change over time.

### N. Final Booking Call to Action

Create a visually striking final section with a dark-green background and elegant typography.

**Heading:**

“Your Kasol Stay Starts Here”

**Supporting text:**

“Planning a visit to Kasol? Contact Hotel Sun 'N' Wind to enquire about rooms, dining, current rates, and availability for your travel dates.”

Buttons:
- Call +91 92540 39139.
- Send Enquiry on WhatsApp.
- Get Directions.

### O. Footer

Include:
- Hotel Sun 'N' Wind name.
- Full address.
- Click-to-call phone number.
- Internal section links.
- Booking enquiry button.
- Copyright notice with the current year.

Do not invent an email address, website domain, or social media profile.

## 6. WhatsApp Booking Integration

Use the hotel number in international format:

`919254039139`

Create a reusable JavaScript function to prepare a WhatsApp booking enquiry.

Example:

```jsx
const HOTEL_PHONE = "919254039139";

function createWhatsAppEnquiry(form) {
  const message = [
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
    `Message: ${form.message || "Please share current rates and availability."}`
  ].join("\n");

  return `https://wa.me/${HOTEL_PHONE}?text=${encodeURIComponent(message)}`;
}
```

Adapt this function to the actual form state. Validate the details and avoid undefined values.

Add WhatsApp buttons to the hero, room cards, booking form, contact section, and footer.

Use this call link:

`tel:+919254039139`

Use this directions link:

`https://www.google.com/maps/dir/?api=1&destination=Hotel%20Sun%20%27N%27%20Wind%2C%20286C%2B%2BJ2C%2C%20Manikaran%20Road%2C%20Kasol%2C%20Himachal%20Pradesh%20175105`

Do not claim a WhatsApp message has been sent automatically or that a booking is confirmed.

## 7. SEO Requirements

Optimize the homepage naturally for:
- Hotel Sun 'N' Wind Kasol.
- Hotel on Manikaran Road Kasol.
- Budget hotel in Kasol.
- Hotel in Kasol Himachal Pradesh.
- Stay near the Parvati Valley.

Implement:
- Descriptive page title.
- Meta description.
- One clear H1.
- Logical H2 and H3 headings.
- Open Graph metadata.
- Descriptive alt text for supplied images.
- Local business or hotel structured data using verified information only.
- `robots.txt` and `sitemap.xml` if appropriate for deployment.

Do not invent the hotel's website domain or email address. Do not promise guaranteed Google rankings.

## 8. Responsive Design and Final Checks

Ensure:
- Excellent mobile, tablet, and desktop layouts.
- Smooth scrolling between homepage sections.
- Functional mobile navigation.
- Booking form validation.
- Correct phone, WhatsApp, and directions links.
- Responsive Google Maps.
- Accessible form labels and visible keyboard focus states.
- No horizontal overflow.
- Good loading performance.
- No broken imports or missing files.

**Final non-negotiable checklist:**

1. Build one single-page homepage only.
2. Include substantial, attractive content.
3. Do not use JSON images.
4. Do not create `images.json`, `image.json`, or JSON image mappings.
5. Do not use stock photos, random photos, or external image URLs.
6. Import only the actual owner-provided photographs directly from `src/assets/`.
7. If no photos are supplied, use an image-free CSS design.
8. Use the correct hotel phone number, address, timings, and supplied Google Maps location.
9. Do not invent room features, amenities, or reviews.
10. Do not falsely confirm reservations.

**Deliver a complete, polished React single-page website for Hotel Sun 'N' Wind. NO JSON IMAGES. NO RANDOM PHOTOS. ONLY DIRECT IMPORTS OF THE OWNER'S ACTUAL IMAGES.**

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/fce5b480-af3a-4879-9755-22a9c5a8cacc).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
