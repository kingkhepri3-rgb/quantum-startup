# Quantum Solutions & Services: landing page

Static one-page site. No framework, no backend, no build step, no third-party scripts. Open `index.html` in a browser.

## What I built

- `index.html`, `styles.css`, `script.js` and `logo.png` (a copy of the real Quantum logo, `quantum-logo.png`).
- Sections in the prompt's order: header (with a thin contact bar above it), hero, the problem, services (four groups, 14 services), who it's for, the 3-week pilot, what we don't do, pricing after the pilot, quick facts, contact form, footer.
- `script.js` handles the contact form (it opens the visitor's own email app with the details filled in, addressed to info@quantumsolutionsandservices.com) and the phone menu button.
- Colours come from the logo: brown #703000 and maroon #984050, on warm off-white #FBF7F2 with charcoal #2B2118 text.
- The small circuit-line mark (a node on a line) is taken from the logo's own circuit traces. It marks each section heading and runs through the four pilot steps.

## Left out because it is unconfirmed

- **Pilot price.** The prompt says "starting at [pilot price — Scarlett to confirm]". No figure is shown. The page says "Fixed scope, fixed price, agreed before we start. 50% upfront, 50% on delivery. One firm at a time."
- **Logistics firms.** Section 3 lists five audiences, but section 5 asks for four cards. I followed section 5, so logistics is not on the page.
- No certifications, partnerships, awards, client names, testimonials, founder name, or compliance claims.
- No prices beyond the three MSP tiers and the Microsoft 365 licence note. ERP and CCTV are "on request".

## Differences from the prompt (for your decision)

- **Pink accent.** The prompt lists pink #C050C0. Its hue reads as violet, which the design rules ban, so the small highlights use a rose, #C04C8E. The logo itself is untouched and keeps its real pink.
- **Top contact bar.** The prompt wants contact details in the header, so a thin strip above the sticky nav holds the email and phone. It scrolls away; only the nav is sticky.
- **Phone menu.** `script.js` also contains the menu button for phones, so the file is not strictly "form handling only".
- **Heading names.** The prompt gave no headings for three sections, so I named them: "Three everyday problems", "Pricing after the pilot" and "Quick facts".

## `<!-- TODO: confirm with owner -->` items in the HTML

1. In the pilot section: the pilot price is not confirmed, and no figure is shown.
2. In the pricing section: re-check the Microsoft 365 Business Premium price (about ₹1,830 per user/month in India) at quote time.

## Checks

See the report in the conversation: sections present, links, form, 390px width.


## Update (pricing)

Brought up to the current landing-page-prompt.md (sections 4, 6 and 8): the MSP card and the Pricing section now show the three tiers (Essential $399, Business $499, Premium $599 per month) AND the Western range ($1,500-$1,800 per month, depending on size and needs), clearly labelled, with the note that the exact price is confirmed on the call because plan details are not yet finalised. No other prices were added. Still open (TODO in the HTML): the pilot price, and the M365 licence price re-check.

## Taste consistency check

Run three times; FAIL count went 193 to 151. Fixed: text contrast (7:1), nav on one line, focus ring on the top-bar links, the gap in the first problem card, price figure size, overflow at 320px, hero fills the first screen, and a "Book a 20-minute call" button under the prices (same label as the existing button). Left alone on purpose, because fixing them would change the copy, the headings, the prompt's fixed section order, or a required tap-to-call link: heading naming rules, "no visual" and one-section-per-screen rules, the international-format phone number, and the checker's container-edge convention (the real margins are 32px on tablet and 20px on phone).
