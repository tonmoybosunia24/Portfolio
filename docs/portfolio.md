# Portfolio

The home page (`/`) is the portfolio. It is built one section at a time in `views/home/`; `app/page.tsx` only renders `views/home/Home.tsx`.

## Content

Text, links and contact details live in `constants/profile.ts`. Values marked `TODO` are placeholders. Images are in `public/images/`.

## Theme

Colors and fonts are defined in `app/globals.css` and used as Tailwind classes:

| Class                                | Value                                      |
| ------------------------------------ | ------------------------------------------ |
| `pink-primary` / `red-primary`       | Accent `#ff014f`, hover `#ff0003`          |
| `gray-light`                         | Secondary text `#c2c2c2`                   |
| `black-soft`, `dark`                 | Panels `#151515`, `#141414`                |
| `white-overlay`, `line`              | Subtle fills and borders                   |
| `font-sans` (default) / `font-rubik` | Rajdhani for headings, Rubik for body copy |

`section` is the page-width container every section uses. `text-stroke` draws outlined text. `glow-card` gives a card a pink border glow on hover that follows the pointer (`views/home/GlowTracker.tsx` sets its position); the card needs a border, transparent is fine. `animate-float` and `animate-blink` are off for visitors who prefer reduced motion, and so is the typewriter.

Section headings (a small pink label and a one-line title) use `views/home/SectionHeading.tsx`, so every section below the hero looks the same. The services section (`views/home/Services.tsx`, content in `SERVICES`) shows six numbered cards: one per row on phones, two from 768px and three from 992px. The achievements section (`views/home/Achievements.tsx`, content in `ACHIEVEMENTS`) shows the years of experience in a large card and four numbers in a 2×2 grid beside it, or below it under 992px. The skills section (`views/home/Skills.tsx`, content in `SKILLS`) shows chips in three rows that slide sideways (`animate-marquee`, the middle row `animate-marquee-reverse`) and stop on hover; screen readers get one plain list. Logos are Simple Icons paths in `views/home/SkillIcon.tsx`; a new icon name goes in `SkillIconName` too. The expertise section (`views/home/Expertise.tsx`, content in `EXPERTISE`) shows two groups of skills with a level bar each; the bars fill in one after another when they come on screen (`reveal-grow`, started by `ScrollReveal`) and are simply full without JavaScript or with reduced motion. The projects section (`views/home/Projects.tsx`, content in `PROJECTS`) shows each project as a framed 4:3 banner, a dark one for dark mode and a light one for light mode (`banner.dark`, `banner.light`; the `light:` variant in `app/globals.css` switches them), 2400×1800 in `public/images/projects/` ( give an updated banner a new file name, as the image cache keeps the old one), then its title, tech and an arrow button. The light banners show the app name in the site's pink and two iPhone mockups in a light studio; the dark ones follow the project cards of the Reeni template: a black panel with a crimson glow, "App For" and the app's purpose in pink at the top left, and two large phones cut off by the bottom edge. The dark banners are designed in Figma (the `Banner/<App>/Dark Reeni` frames) and exported at 2x. The current ones were made for this page (the habit tracker from the two screenshots provided, the others from sample screens) and can be replaced with banners of your real apps. They are 2400×1800 and served at quality 95 (`images.qualities` in `next.config.ts`) so small text stays sharp. Without screenshots the phones show a screen drawn in code. With an `href`, the whole card links to it. The testimonials section (`views/home/Testimonials.tsx` and `TestimonialSlider.tsx`, content in `TESTIMONIALS`) is an endless slider: the list is drawn three times and jumps back to the middle copy when it settles, it moves on every 5 seconds (paused on hover or focus, off for reduced motion), it can be dragged with the mouse (snapping is off during the drag, and a drag of 60px or more moves on at least one review), and screen readers get only the middle copy. The reviews and avatars (DiceBear Notionists, CC0) are samples to replace with real client feedback. The contact section (`views/home/Contact.tsx` and `ContactForm.tsx`, content in `CONTACT`) shows the details from `SIDEBAR.contacts` and a form; name, email and message are required, and as there is no server yet, sending opens the visitor's email app with the message filled in.

The hero background is drawn in code (`views/home/HexPattern.tsx`, also used faintly behind the project previews, and `LightBeams` in `views/home/Hero.tsx`), not an image, so it stays sharp at every size and stays lined up with the portrait.

## Animations

All animations are CSS in `app/globals.css`, with no animation library (one small observer starts the scroll reveals), and are off for visitors who prefer reduced motion. The hero text rises in once on load (`animate-intro`, `intro-delay-1` and `-2`). Below it, content fades and slides into place when it scrolls into view: section headings, cards and the footer columns rise (`reveal`), the achievement, expertise and contact columns come in from the sides from 992px (`reveal-left`, `reveal-right`) and the project cards grow slightly (`reveal-zoom`); below 992px these rise too. Cards side by side start one after the other: `revealDelay(index, columns)` in `views/home/reveal.ts` gives the `reveal-delay-*` class. Each reveal plays once, in under a second, when the element comes on screen: `views/home/ScrollReveal.tsx` (an IntersectionObserver) marks the page `reveal-ready`, which hides that content, and adds `is-revealed` to each element as it appears. Without JavaScript the content simply shows. A pink bar under the header shows how far down the page the visitor is (`scroll-progress`, scroll-driven, so it does not show in browsers without scroll-driven animations). The page wrapper clips horizontal overflow (`overflow-x-clip`), so content sliding in from the side never adds a horizontal scrollbar.

## Sizes

Header and hero sizes follow the Reeni template. Tailwind's breakpoints are set to match it in `app/globals.css`: `sm` 576px, `md` 768px, `lg` 992px, `xl` 1200px, `2xl` 1400px and `3xl` 1600px. The `section` container gives the same content widths (345px on a 375px phone, then 510, 705, 945, 1125 and at most 1275px).

## Viewing on a phone

With `npm run dev` running, open the **Network** address it prints (e.g. `http://192.168.1.102:3000`) on a phone on the same Wi-Fi. `allowedDevOrigins` in `next.config.ts` allows `192.168.*.*` so the page's scripts load there too. If the phone can't connect, allow Node.js through the Windows firewall for private networks.
