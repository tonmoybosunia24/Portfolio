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

`section` is the page-width container every section uses. `text-stroke` draws outlined text. `animate-float` and `animate-blink` are off for visitors who prefer reduced motion, and so is the typewriter.

Section headings (a small pink label and a one-line title) use `views/home/SectionHeading.tsx`, so every section below the hero looks the same. The services section (`views/home/Services.tsx`, content in `SERVICES`) shows six numbered cards: one per row on phones, two from 768px and three from 992px. The achievements section (`views/home/Achievements.tsx`, content in `ACHIEVEMENTS`) shows the years of experience in a large card and four numbers in a 2×2 grid beside it, or below it under 992px. The skills section (`views/home/Skills.tsx`, content in `SKILLS`) shows chips in three rows that slide sideways (`animate-marquee`, the middle row `animate-marquee-reverse`) and stop on hover; screen readers get one plain list. Logos are Simple Icons paths in `views/home/SkillIcon.tsx`; a new icon name goes in `SkillIconName` too. The expertise section (`views/home/Expertise.tsx`, content in `EXPERTISE`) shows two groups of skills with a level bar each; the bars fill in on scroll (`animate-grow-in-view`) in browsers with scroll-driven animations and are simply full elsewhere. The projects section (`views/home/Projects.tsx`, content in `PROJECTS`) shows each project as a framed preview with two phones, then its title, tech and an arrow button. Put up to two screenshots per project in `public/images/projects/` and list them in `screens`. The previews are plain dark with the hero's hexagon lines. The phones are shaped like a real phone (390×844); a taller screenshot is shrunk to fit whole and its `background` color fills the strips beside it. The shop, fitness and chat screens are sample designs made for this page. Without screenshots the phones show a screen drawn in code. With an `href`, the whole card links to it. The testimonials section (`views/home/Testimonials.tsx` and `TestimonialSlider.tsx`, content in `TESTIMONIALS`) is an endless slider: the list is drawn three times and jumps back to the middle copy when it settles, it moves on every 5 seconds (paused on hover or focus, off for reduced motion), and screen readers get only the middle copy. The reviews and avatars (DiceBear Notionists, CC0) are samples to replace with real client feedback. The contact section (`views/home/Contact.tsx` and `ContactForm.tsx`, content in `CONTACT`) shows the details from `SIDEBAR.contacts` and a form; name, email and message are required, and as there is no server yet, sending opens the visitor's email app with the message filled in.

The hero background is drawn in code (`views/home/HexPattern.tsx`, also used faintly behind the project previews, and `LightBeams` in `views/home/Hero.tsx`), not an image, so it stays sharp at every size and stays lined up with the portrait.

## Sizes

Header and hero sizes follow the Reeni template. Tailwind's breakpoints are set to match it in `app/globals.css`: `sm` 576px, `md` 768px, `lg` 992px, `xl` 1200px, `2xl` 1400px and `3xl` 1600px. The `section` container gives the same content widths (345px on a 375px phone, then 510, 705, 945, 1125 and at most 1275px).

## Viewing on a phone

With `npm run dev` running, open the **Network** address it prints (e.g. `http://192.168.1.102:3000`) on a phone on the same Wi-Fi. `allowedDevOrigins` in `next.config.ts` allows `192.168.*.*` so the page's scripts load there too. If the phone can't connect, allow Node.js through the Windows firewall for private networks.
