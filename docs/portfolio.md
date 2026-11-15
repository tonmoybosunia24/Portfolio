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

The hero background is drawn in code (`HexPattern` and `LightBeams` in `views/home/Hero.tsx`), not an image, so it stays sharp at every size and stays lined up with the portrait.

## Sizes

Header and hero sizes follow the Reeni template. Tailwind's breakpoints are set to match it in `app/globals.css`: `sm` 576px, `md` 768px, `lg` 992px, `xl` 1200px, `2xl` 1400px and `3xl` 1600px. The `section` container gives the same content widths (345px on a 375px phone, then 510, 705, 945, 1125 and at most 1275px).

## Viewing on a phone

With `npm run dev` running, open the **Network** address it prints (e.g. `http://192.168.1.102:3000`) on a phone on the same Wi-Fi. `allowedDevOrigins` in `next.config.ts` allows `192.168.*.*` so the page's scripts load there too. If the phone can't connect, allow Node.js through the Windows firewall for private networks.
