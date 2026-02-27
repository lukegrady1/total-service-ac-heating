Claude Code Instructions: Total Service Air Conditioning and Heating LLC Website
Project Overview
Build a premium, multi-page HVAC website for Total Service Air Conditioning and Heating LLC — an HVAC contractor serving Orlando, Winter Garden, Apopka, Windermere, Maitland, Altamonte Springs, and the greater Central Florida area. Their phone number is 407-617-3510 and their address is 2809 Pine Ave, Apopka, FL 32703.
This website must feel worth $10,000+ — production-grade, visually stunning, fully SEO-optimized, conversion-focused, and technically exceptional.

Step 1: Install the Frontend Design Skill
Before writing any code, set up the skills infrastructure:
bashmkdir -p .claude/skills/frontend-design
Then create .claude/skills/frontend-design/SKILL.md with the following content:
markdown# Frontend Design Skill

## Design Thinking

Before coding, commit to a BOLD aesthetic direction:
- **Purpose**: What problem does this interface solve? Who uses it?
- **Tone**: Pick an extreme and execute with precision: luxury/refined, editorial/magazine, industrial/utilitarian, etc.
- **Differentiation**: What makes this UNFORGETTABLE?

## Aesthetic Guidelines

- **Typography**: Choose fonts that are beautiful and distinctive. NEVER use Inter, Roboto, Arial, or system fonts. Pair a distinctive display font with a refined body font.
- **Color**: Commit to a cohesive palette. Dominant colors with sharp accents. Use CSS variables for consistency.
- **Motion**: High-impact animations — staggered reveals on page load, scroll-triggered transitions, meaningful hover states. CSS-first.
- **Spatial Composition**: Unexpected layouts. Asymmetry. Overlap. Grid-breaking. Generous negative space OR controlled density.
- **Backgrounds**: Create atmosphere and depth. Gradient meshes, noise textures, geometric patterns, layered transparencies, dramatic shadows, grain overlays.

NEVER produce generic AI aesthetics. Every design must feel intentional and context-specific.

Step 2: Tech Stack
Use the following stack (install all dependencies):

Framework: Next.js 14 (App Router)
Styling: Tailwind CSS + custom CSS for advanced animations
Animations: Framer Motion
Forms: React Hook Form + Zod validation
Icons: Lucide React
Fonts: Google Fonts via next/font — use Playfair Display (display/headings) + DM Sans (body)
SEO: Next.js built-in metadata API + JSON-LD structured data
Images: Next.js <Image> component with proper alt tags
Sitemap: next-sitemap package
Analytics-ready: Add Google Tag Manager placeholder in _document

bashnpx create-next-app@latest total-service-hvac --typescript --tailwind --eslint --app --src-dir
cd total-service-hvac
npm install framer-motion react-hook-form @hookform/resolvers zod lucide-react next-sitemap

Step 3: Brand Identity & Design Direction
Color Palette (CSS variables in globals.css)
css:root {
  --color-primary: #0A2540;       /* Deep navy — trust, professionalism */
  --color-primary-light: #1A3F6F;
  --color-accent: #E8621A;        /* Vibrant orange — Florida heat, energy, urgency */
  --color-accent-light: #FF7A35;
  --color-surface: #F7F9FC;       /* Near-white background */
  --color-surface-dark: #0D1B2A;  /* Dark section backgrounds */
  --color-text: #1C2B3A;
  --color-text-muted: #6B7C8E;
  --color-white: #FFFFFF;
  --color-border: #E2E8F0;
}
Typography

Headings (H1–H3): Playfair Display, serif — conveys premium quality
Body/UI: DM Sans — clean, modern, readable
Accent/labels: DM Sans 600 uppercase with letter-spacing

Aesthetic Direction
"Florida Luxury Industrial" — The heat of Orlando, the professionalism of a premium service company. Deep navy backgrounds with dramatic orange accents. Diagonal section dividers. Bold typographic hierarchy. Subtle texture overlays (noise grain at 3% opacity). Air-conditioning blue-cool shadows contrasted with warm orange CTAs. The site should feel like the HVAC equivalent of a luxury car dealership — trustworthy, premium, and urgency-driving.

Step 4: Site Architecture (Pages)
Create the following pages under src/app/:
src/app/
├── page.tsx                          # Home
├── layout.tsx                        # Root layout (nav + footer)
├── services/
│   ├── page.tsx                      # Services overview
│   ├── ac-repair/page.tsx
│   ├── ac-installation/page.tsx
│   ├── ac-maintenance/page.tsx
│   ├── heating/page.tsx
│   ├── duct-cleaning/page.tsx
│   └── indoor-air-quality/page.tsx
├── about/page.tsx
├── contact/page.tsx
├── free-estimate/page.tsx            # Dedicated lead capture page
├── service-areas/
│   ├── page.tsx                      # All service areas
│   ├── orlando/page.tsx
│   ├── winter-garden/page.tsx
│   ├── apopka/page.tsx
│   ├── windermere/page.tsx
│   └── maitland/page.tsx
├── blog/
│   ├── page.tsx                      # Blog index
│   └── [slug]/page.tsx               # Blog post template
├── financing/page.tsx
└── sitemap.ts                        # Dynamic sitemap

Step 5: Global Components
Create these components in src/components/:
Navbar.tsx

Sticky on scroll with backdrop blur + subtle shadow after 80px scroll
Logo: "Total Service" in Playfair Display bold + "Air & Heat" in DM Sans
Nav links: Home, Services (mega dropdown), Service Areas (dropdown), About, Blog, Financing
Two CTAs always visible:

Phone number: (407) 617-3510 with phone icon — clicking calls on mobile
"Free Estimate" button in orange accent


Mobile: hamburger with full-screen slide-in menu
Announcement bar above nav: "🌡️ Same-Day AC Repair Available — Call (407) 617-3510 Now"

Footer.tsx

Dark navy background (--color-surface-dark)
4-column layout: Company info + logo | Services links | Service Areas links | Contact + hours
Hours: Mon–Fri 8am–6pm, Sat 9am–4pm, Emergency service available
Bottom bar: license number placeholder, copyright, privacy policy, sitemap link
Trust badges row: Licensed & Insured | NATE Certified | 5-Star Rated | Local & Family Owned
Final CTA strip: "AC Emergency? We're Ready 24/7" with large phone number

CTABanner.tsx

Reusable section component
Two variants: primary (orange bg, white text) and dark (navy bg, white text)
Props: headline, subtext, buttonText, buttonHref, phoneNumber
Used between page sections

LeadForm.tsx

Reusable lead capture form
Fields: Name, Phone, Email, Service Needed (dropdown), Message, ZIP code
Zod validation schema
On submit: POST to /api/leads (create this API route that emails + saves to a JSON file as placeholder)
Success state with animated checkmark
Privacy note: "We never share your information"

TrustBar.tsx

Horizontal scrolling bar of trust signals
Items: "Licensed CAC Contractor" | "Locally Owned & Operated" | "Free Estimates" | "Same-Day Service" | "100% Satisfaction Guaranteed" | "Trane & Carrier Certified"

ReviewCard.tsx + ReviewsSection.tsx

Star rating display (5 stars in orange)
Reviewer name, date, platform (Google)
Carousel/slider with Framer Motion on desktop, stacked on mobile
Include 6 sample 5-star reviews written for Orlando/Central Florida homeowners


Step 6: Page-by-Page Specifications

HOME PAGE (src/app/page.tsx)
Section 1 — Hero

Full-viewport-height hero with a dark overlay gradient
Background: CSS animated gradient mesh (navy + steel blue + dark teal) — NO stock photo dependency
LARGE H1 (Playfair Display, 72–96px on desktop): "Orlando's Most Trusted HVAC Experts"
Subheadline (DM Sans, 20px): "Fast, reliable AC repair, installation & maintenance across Central Florida. Same-day service available."
Two buttons: "Get a Free Estimate →" (orange, large) + "Call (407) 617-3510" (white outline)
Trust badges row below buttons: ⭐ 5-Star Rated | ✓ Licensed & Insured | 🏠 Locally Owned | ⚡ Same-Day Service
Scroll indicator with animated chevron
Framer Motion: staggered fade-up on all hero elements (delay 0, 0.15, 0.3, 0.45, 0.6s)

Section 2 — Emergency CTA Banner

Orange background
"AC Broken? We're Available Now — (407) 617-3510"
Pulsing phone icon animation

Section 3 — Services Grid

H2: "Complete HVAC Services for Central Florida Homes & Businesses"
3×2 card grid (or 6-card responsive grid)
Cards: AC Repair | AC Installation | AC Maintenance | Heating | Duct Cleaning | Indoor Air Quality
Each card: icon (Lucide), service name, 1-sentence description, "Learn More →" link
Cards have hover: lift + orange border-left highlight + subtle glow
Framer Motion: staggered card entrance on scroll

Section 4 — Why Choose Us

Split layout: left text + stats, right visual (CSS-animated AC unit or abstract technical pattern)
4 USPs with icons:

🔧 Expert Technicians — "NATE-certified with 10+ years average experience"
⚡ Fast Response — "Same-day and emergency service available"
💰 Upfront Pricing — "No hidden fees, free estimates on all jobs"
⭐ 5-Star Service — "Hundreds of happy customers across Central Florida"


Stats row: "500+ Systems Installed" | "15+ Years Serving Orlando" | "4.9 ⭐ Google Rating"

Section 5 — How It Works

3-step process: 1. Call or Book Online → 2. Expert Diagnosis → 3. Fast, Clean Repair
Timeline/connector visual between steps
Each step: large number, icon, title, description

Section 6 — Service Areas Map

H2: "Serving All of Central Florida"
Visual: Styled CSS grid of area name "pills" that link to area pages
Areas: Orlando, Winter Garden, Apopka, Windermere, Maitland, Altamonte Springs, Ocoee, Clermont, Kissimmee, Lake Mary, Longwood, Casselberry, Sanford, Celebration
"Don't see your city? Call us — we likely serve your area."

Section 7 — Testimonials

ReviewsSection component
H2: "What Central Florida Homeowners Say"

Section 8 — Lead Form Section

Split layout: left = "Get Your Free Estimate Today" with trust bullets, right = LeadForm component
Background: dark navy
Bullets: ✓ No-obligation quote | ✓ Same-day appointments | ✓ 100% satisfaction guaranteed

Section 9 — Blog Preview

H2: "HVAC Tips for Florida Homeowners"
3 blog post card previews (use placeholder content, fully styled)
"Read All Tips →" link


SERVICES OVERVIEW PAGE (src/app/services/page.tsx)
Meta title: "HVAC Services in Orlando, FL | Total Service Air Conditioning & Heating"
Meta description: "Total Service Air Conditioning & Heating offers expert AC repair, installation, maintenance, heating, duct cleaning & more in Orlando and Central Florida. Call (407) 617-3510."

Hero section: "Complete HVAC Services Across Central Florida" — smaller than homepage, 50vh
Service cards in a 2-column grid (larger than homepage cards) — each linking to individual service page
Each card: large icon, title, full description paragraph, list of what's included, "Learn More" + "Get a Quote" CTAs
Bottom: LeadForm section


INDIVIDUAL SERVICE PAGES
Create for each: ac-repair, ac-installation, ac-maintenance, heating, duct-cleaning, indoor-air-quality
Each service page must include:
SEO metadata (unique per page):
tsxexport const metadata: Metadata = {
  title: "AC Repair in Orlando, FL | Total Service Air Conditioning",
  description: "Fast, affordable AC repair in Orlando and Central Florida. Licensed technicians, same-day service. Call (407) 617-3510.",
  // etc.
}
JSON-LD structured data (Service schema + LocalBusiness schema on each page):
tsxconst jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "AC Repair",
  "provider": {
    "@type": "LocalBusiness",
    "name": "Total Service Air Conditioning and Heating LLC",
    "telephone": "407-617-3510",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "2809 Pine Ave",
      "addressLocality": "Apopka",
      "addressRegion": "FL",
      "postalCode": "32703"
    }
  }
}
Page structure:

Hero (40vh) — service name + CTA + phone number
What's Included (bullet-style with icons)
Signs You Need This Service (visual checklist)
Our Process (numbered steps)
Pricing transparency section ("honest upfront pricing" + free estimate CTA)
FAQ section (5–8 questions, using details/summary accordion with animation) — include FAQ JSON-LD schema
Related service area cities (linking to area pages)
Testimonials related to that service
LeadForm at bottom


ABOUT PAGE (src/app/about/page.tsx)
Meta title: "About Total Service Air Conditioning & Heating | Orlando HVAC Company"
Sections:

Hero: "Locally Owned. Orlando Proud." — team-oriented messaging
Our Story — 3–4 paragraphs about the company's commitment to Central Florida (write compelling placeholder copy)
Our Values: 4 cards — Integrity, Expertise, Reliability, Community
Meet the Team (placeholder cards for 3–4 team members with avatar icons, name, role, bio)
Licenses & Certifications (Florida CAC license, NATE certification, EPA 608 certified, BBB member)
Service Stats: animated count-up numbers on scroll (Framer Motion useInView)
LeadForm CTA


CONTACT PAGE (src/app/contact/page.tsx)
Meta title: "Contact Us | Total Service AC & Heating Orlando | (407) 617-3510"
Sections:

Hero: "We're Ready to Help — Reach Out Today"
3-column contact methods: Phone card | Email card | Address card

Phone: "(407) 617-3510" — large, clickable, with "Available for Emergencies"
Hours: Monday–Friday 8am–6pm | Saturday 9am–4pm


Full LeadForm (all fields)
Embedded Google Maps iframe placeholder (comment indicating where to embed real map)
Emergency service callout: orange banner at top


FREE ESTIMATE PAGE (src/app/free-estimate/page.tsx)
This is the primary lead capture page — treat it as a landing page.

No distracting navigation links (simplified header with just logo + phone)
H1: "Get Your Free HVAC Estimate in Orlando"
Trust signals row
Multi-step form (3 steps with progress bar):

Step 1: Service Type + Property Type (residential/commercial)
Step 2: Contact Info (name, phone, email, ZIP)
Step 3: Brief description + preferred contact time


Right side (desktop): testimonial + trust bullets + photo
Framer Motion step transitions (slide left/right)
Thank you page/state after submission with "We'll call you within 1 hour" message


SERVICE AREA PAGES
Each area page (e.g., orlando, winter-garden, apopka) must be geo-targeted:
Example for Orlando (src/app/service-areas/orlando/page.tsx):
tsxexport const metadata: Metadata = {
  title: "AC Repair & HVAC Services in Orlando, FL | Total Service Air Conditioning",
  description: "Expert AC repair, installation, and maintenance in Orlando, FL. Total Service Air Conditioning & Heating — licensed, local, same-day service. Call (407) 617-3510.",
}
Page content:

Hero: "HVAC Services in [City Name], FL"
Intro paragraph with city-specific content (neighborhood mentions, local context)
Services offered in that area (full list with links)
Why choose us for [city]
Local testimonials (filter by area in copy)
Service area map visual showing proximity
FAQ specific to that area
LeadForm with city pre-populated

Create unique, substantive copy for each of these 5 cities: Orlando, Winter Garden, Apopka, Windermere, Maitland.

BLOG PAGE + POSTS
Blog Index (src/app/blog/page.tsx):

Grid of blog post cards
Categories: AC Tips | Maintenance | Energy Savings | Florida Climate | Buying Guides

Create 5 pre-built blog posts (full content, SEO-optimized):

how-often-should-you-service-your-ac-in-florida — "How Often Should You Service Your AC in Florida?"
signs-your-ac-needs-replacement-orlando — "7 Signs Your AC Needs Replacement (Orlando Homeowner's Guide)"
best-ac-temperature-settings-florida-summer — "Best AC Temperature Settings for Florida Summer"
hvac-maintenance-checklist-central-florida — "The Ultimate HVAC Maintenance Checklist for Central Florida Homes"
how-to-improve-indoor-air-quality-orlando — "How to Improve Indoor Air Quality in Your Orlando Home"

Each post: 800–1,200 words, proper H1/H2/H3 hierarchy, internal links, meta title + description, JSON-LD Article schema, author (Total Service Team), date.

FINANCING PAGE (src/app/financing/page.tsx)

Hero: "Flexible Financing Options for Your HVAC System"
Content: "We understand a new HVAC system is a major investment. We work with financing partners to offer flexible payment options."
3 financing plan cards (placeholder terms)
FAQ: 5 questions about financing
CTA: "Apply Online" button (placeholder) + phone number


Step 7: SEO Implementation
Root Layout (src/app/layout.tsx)
tsxexport const metadata: Metadata = {
  metadataBase: new URL('https://totalserviceacandheat.com'),
  title: {
    template: '%s | Total Service Air Conditioning & Heating',
    default: 'HVAC Services in Orlando, FL | Total Service Air Conditioning & Heating',
  },
  description: 'Expert AC repair, installation & maintenance in Orlando and Central Florida. Licensed, insured, same-day service. Call (407) 617-3510.',
  keywords: ['HVAC Orlando', 'AC repair Orlando', 'air conditioning Orlando', 'AC installation Central Florida', 'Total Service Air Conditioning'],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://totalserviceacandheat.com',
    siteName: 'Total Service Air Conditioning and Heating LLC',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image' },
  robots: { index: true, follow: true },
}
LocalBusiness JSON-LD (in root layout)
tsxconst localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "HVACBusiness",
  "name": "Total Service Air Conditioning and Heating LLC",
  "url": "https://totalserviceacandheat.com",
  "telephone": "+1-407-617-3510",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "2809 Pine Ave",
    "addressLocality": "Apopka",
    "addressRegion": "FL",
    "postalCode": "32703",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 28.4827535,
    "longitude": -81.3427941
  },
  "openingHours": ["Mo-Fr 08:00-18:00", "Sa 09:00-16:00"],
  "areaServed": [
    "Orlando", "Winter Garden", "Apopka", "Windermere", "Maitland",
    "Altamonte Springs", "Ocoee", "Clermont", "Kissimmee"
  ],
  "priceRange": "$$",
  "sameAs": ["https://www.google.com/maps/place/Total+Service+Air+Conditioning+and+Heating+LLC"]
}
Sitemap (src/app/sitemap.ts)
Generate dynamic sitemap including all pages:
tsxexport default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://totalserviceacandheat.com'
  return [
    { url: baseUrl, lastModified: new Date(), changeFrequency: 'weekly', priority: 1 },
    { url: `${baseUrl}/services`, changeFrequency: 'weekly', priority: 0.9 },
    // ... all service pages, area pages, blog posts
  ]
}
Robots.txt (src/app/robots.ts)
tsxexport default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: '*', allow: '/' },
    sitemap: 'https://totalserviceacandheat.com/sitemap.xml',
  }
}
Internal Linking Strategy

Every service page links to: 3 related service pages + 3 service area pages
Every area page links to: all 6 service pages
Blog posts link to: relevant service pages + 2 other blog posts
Footer links to all major pages


Step 8: Performance & Technical Requirements
Image Optimization

Use next/image for ALL images
Add priority prop to hero images
Use WebP format
All images must have descriptive alt tags (SEO-critical)
Create SVG illustrations/icons for service icons instead of raster images where possible

Core Web Vitals

No layout shift: define explicit width and height on all images
Lazy load below-fold images
Minimize JavaScript: use CSS animations over JS where possible
Font preloading: next/font handles this automatically

Accessibility

All interactive elements must be keyboard navigable
aria-label on all icon-only buttons (phone button, menu toggle)
Color contrast ratio: minimum 4.5:1 for body text
Semantic HTML: <main>, <nav>, <header>, <footer>, <article>, <section>, <aside>
Skip to main content link (hidden, shown on focus)


Step 9: Lead Capture & Conversion Features
Sticky CTA Bar
On mobile, show a fixed bottom bar:
[📞 Call Now]  |  [Get Free Estimate]
Exit-Intent Popup (optional enhancement)

Triggers on mouse-leave (desktop) or after 60s idle (mobile)
"Wait! Get a FREE AC tune-up estimate before you go"
Simple 2-field form: Name + Phone

Click-to-Call
Every instance of the phone number (407) 617-3510 must be wrapped in:
tsx<a href="tel:+14076173510">(407) 617-3510</a>
Lead Form API Route
Create src/app/api/leads/route.ts:

Accepts POST with form data
Validates with Zod
Console logs the lead (placeholder for email/CRM integration)
Returns success/error JSON
Include comment: // TODO: Connect to GoHighLevel CRM or Mailgun for production

Floating Chat Widget Placeholder
Add a floating orange button (bottom right) with a phone icon. On click, open a modal with:

"Chat with us!"
Phone number
Link to Free Estimate page


Step 10: Animation Specifications
Use Framer Motion throughout. Key animations:
Page Load
tsx// Staggered hero entrance
const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } }
}
const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
}
Scroll-triggered section entrances
tsx// Use useInView from framer-motion
const { ref, inView } = useInView({ once: true, margin: "-100px" })
Apply to: service cards, stats, testimonials, team members, process steps
Counter Animation
Stats section (e.g., "500+ Systems Installed") — animate count from 0 to target on scroll into view
Card Hover
css.service-card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.service-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(10, 37, 64, 0.15);
}
Diagonal Section Dividers
Use CSS clip-path for visual interest between sections:
css.section-diagonal {
  clip-path: polygon(0 0, 100% 0, 100% 90%, 0 100%);
}

Step 11: File Structure Summary
total-service-hvac/
├── .claude/
│   └── skills/
│       └── frontend-design/
│           └── SKILL.md
├── public/
│   ├── favicon.ico
│   ├── og-image.jpg (placeholder)
│   └── robots.txt (auto-generated)
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── globals.css
│   │   ├── sitemap.ts
│   │   ├── robots.ts
│   │   ├── api/leads/route.ts
│   │   ├── services/[...all service pages]
│   │   ├── service-areas/[...all area pages]
│   │   ├── about/page.tsx
│   │   ├── contact/page.tsx
│   │   ├── free-estimate/page.tsx
│   │   ├── financing/page.tsx
│   │   └── blog/[...posts]
│   └── components/
│       ├── Navbar.tsx
│       ├── Footer.tsx
│       ├── CTABanner.tsx
│       ├── LeadForm.tsx
│       ├── TrustBar.tsx
│       ├── ReviewCard.tsx
│       ├── ReviewsSection.tsx
│       ├── ServiceCard.tsx
│       ├── FAQAccordion.tsx
│       ├── StatsCounter.tsx
│       ├── ProcessSteps.tsx
│       └── StickyMobileCTA.tsx

Step 12: Content & Copy Guidelines
All copy must be:

Local: Mention Central Florida, Orlando area, Florida heat/humidity context
Urgency-driven: "Same-day", "Fast response", "Don't suffer in the heat"
Trust-building: Licensed, insured, local, family-owned, years of experience
Benefit-focused: Comfort, savings, peace of mind — not just features
Action-oriented: Every section ends with a CTA

Sample H1 Variations by Page

Home: "Orlando's Most Trusted HVAC Experts"
AC Repair: "Fast AC Repair in Orlando — Same-Day Service Available"
AC Installation: "Expert AC Installation for Orlando Homes & Businesses"
Winter Garden: "HVAC Services in Winter Garden, FL — Call Today"


Step 13: Quality Checklist
Before considering complete, verify:

 All pages have unique <title> and <meta description> tags
 JSON-LD LocalBusiness schema in root layout
 JSON-LD Service schema on each service page
 JSON-LD FAQPage schema on pages with FAQ sections
 JSON-LD Article schema on all blog posts
 Every phone number is a clickable tel: link
 All forms have Zod validation
 All images have descriptive alt attributes
 Sitemap includes all pages
 robots.txt references sitemap URL
 Mobile-responsive at 375px, 768px, 1024px, 1440px
 Sticky mobile CTA bar visible on all pages
 Internal links connect all major pages
 Footer on every page
 Navbar on every page (simplified on free-estimate page)
 No TypeScript errors (npm run build passes)
 Framer Motion animations on: hero, service cards, stats, testimonials
 .claude/skills/frontend-design/SKILL.md created
 Lead form API route working


Final Notes
This website represents Total Service Air Conditioning and Heating LLC's primary digital presence. Build it as if real customers in Orlando are searching Google for "AC repair near me" — every page should convert visitors to leads via the phone number (407) 617-3510 or the Free Estimate form.
The design must feel premium and trustworthy. The deep navy + orange palette is non-negotiable. Playfair Display headings give authority. The animations must feel smooth and professional — not gimmicky.
When in doubt: make it more impressive, not less.