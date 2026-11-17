# Changelog

Notable changes to the starter kit. The format follows [Keep a Changelog](https://keepachangelog.com/), and versions follow [Semantic Versioning](https://semver.org/).

## [Unreleased]

### Added

- Portfolio home page: header with side panel and hero (typewriter roles, portrait, background drawn in code). Content lives in `constants/profile.ts`; see `docs/portfolio.md`.
- Portfolio services section: six numbered cards under a shared `SectionHeading`, which the next sections reuse.
- Portfolio achievements section: years of experience and four numbers.
- Portfolio skills section: three sliding rows of skill chips with logos (36px tall on phones and 44px from 768px, rounded 8px and 10px, 10px and 16px apart).
- Portfolio expertise section: two groups of skills with level bars.
- Portfolio projects section: project cards with 4:3 app banners (iPhone mockups in a light studio; in dark mode, a black and crimson panel in the style of the Reeni template).
- Portfolio testimonials section: an endless, auto-playing review slider with dots that can also be dragged with the mouse.
- Portfolio contact section: contact details and a form that opens the visitor's email app.
- Portfolio blog: `/blog` lists every post and `/blog/<slug>` shows one, laid out like a project page (cover, author, date and reading time, the article with an "On this page" sidebar, then three more posts); both are in the sitemap. On the home page, a blogs section (`#blogs`, which the header's Blogs link now reaches) shows the three newest posts as cards with cover photos, date, reading time and excerpt, and a "View All Posts" button. Posts live in `constants/blog.ts`: a post about the Flutter Architecture Template (with its screenshots and a code block) and four samples. The template post's cover is its own banner; the other covers are Unsplash photos, credited on each post. Covers are 16:9. Write-ups can now hold screenshot galleries and code blocks.
- Portfolio project pages at `/work/<slug>`, one per project, built ahead of time: breadcrumb, title, summary, tech chips, store and code links, the banner, five quick-fact cards and a full blog-style write-up with an "On this page" sidebar. Projects moved to `constants/projects.ts`. The project cards on the home page link to them, and they are listed in `/sitemap.xml`. Sample content for now.
- Portfolio animations in CSS: the hero text rises in on load, sections reveal and skill level bars fill in as they come into view, and a pink bar under the header shows reading progress. Off for reduced motion.
- `glow-card` utility: a pink border glow on hover that follows the pointer, on the service, achievement and education cards.
- `allowedDevOrigins` for `192.168.*.*`, so the dev server can be opened from a phone on the same Wi-Fi.
- Example CRUD module at `/projects` (list with pagination, create and edit forms with zod and API validation errors, delete, 404), with unit and e2e tests and mock API endpoints. See `docs/example-module.md`.
- `parsePage` (`services/api/pagination.ts`): reads paginated lists from Laravel, Django REST Framework and other common shapes into one `Page<T>`. `components/Pagination.tsx` renders previous / next links.
- `responseType: 'text' | 'blob'` on `handleRequest` for text and file downloads. A caller's `Accept` header is no longer overwritten.

- Login page and server action, `httpOnly` session cookie, and route protection in `proxy.ts` (`constants/routes.ts`). An example protected page at `/dashboard`.
- After an expired session, users return to the page they were on once they log in again.
- `parse` option on `handleRequest` to check API responses at runtime; zod is included.
- `timeoutMs` option on API requests, defaulting to 10 seconds (`API_TIMEOUT_MS`).
- `app/global-error.tsx`, `instrumentation.ts` (server error reporting hook), `robots.txt`, `sitemap.xml` and a social preview image.
- Unit and component tests (Vitest, React Testing Library), end-to-end tests (Playwright) with a mock backend, and coverage thresholds.
- Pre-commit hook (husky, lint-staged), `npm audit` in CI, Dependabot.
- Security headers, error and 404 pages.
- `AGENTS.md` with project rules for AI coding agents, plus Next.js's managed docs block; `CLAUDE.md` imports it.
- `LICENSE` (MIT), `CONTRIBUTING.md`, pull request template, and guides for every area in `docs/`.
- Environment variables are checked when the server starts (`utils/validate-env.ts`, called from `register()` in `instrumentation.ts`); a missing `API_URL` or malformed key stops the server with a list of problems.
- Logout revokes the token on the API (`AuthService.logout`, `AUTH_LOGOUT`) before deleting the cookies. Set `AUTH_LOGOUT` to `null` if your API has no logout endpoint.
- Token refresh for APIs that issue refresh tokens: the proxy refreshes an expired access token before the page renders (`/api/auth/refresh`), and `handleRequest` refreshes and retries once on a 401. Parallel refreshes with the same refresh token share one API call, so rotating refresh tokens work. `AUTH_REFRESH = null` turns it off.
- Login and refresh responses are read by `TokenResponseSchema` (`services/api/auth-tokens.ts`), which accepts `token`, `access_token`, `accessToken` or `access`, plus an optional refresh token and `expires_in`. The access cookie expires with the token.
- `query` option on `handleRequest` for encoded query parameters.
- `endSessionOn401` option on `handleRequest`, to get the `ApiError` instead of ending the session.
- `ApiError.fieldErrors`: field errors as `{ field: ['message'] }` from the common API formats (Laravel, FastAPI, express-validator, zod, JSON:API).

### Changed

- Portfolio project cards: the arrow in the corner button is larger (22px, 24px from 768px, instead of 18px).
- Portfolio side panel banner is a photo of Md Tonmoy Bosunia at his BlackDevs desk (`sidebar-banner-v2.webp`, 1360×784 for sharp 2x screens, with alt text) instead of a stock photo at 340×196.
- Portfolio side panel: the page behind it is blurred as well as dimmed while it is open (`backdrop-blur-sm` on a lighter `bg-black/60` overlay instead of `bg-black/80`).
- Portfolio contact section gives the details column more room (5:8 instead of 4:9 from 992px), so the email address no longer breaks onto a second line on a 13" laptop.
- Portfolio banners for Crave, Precise Clock, Amar Seba and ClassyShop and the three blog covers are exported again from Figma without the old website address at the bottom. They have new names (`*-banner-v2.webp`; Precise Clock's is now `precise-clock-banner-v2.webp`) so the image cache does not serve the old ones.
- Portfolio projects add Vehicle Log (`/work/vehicle-log`), a mobile app UI/UX design made in Figma, with its Figma banner. Projects have a third `kind`, `design`, and `/work` a fourth tab, "UI/UX Design"; below 640px the tabs show short labels (All, Mobile, Web, UI/UX) so all four fit on a phone.
- Portfolio projects add Glacial Rental (`/work/glacial-rental`), a refrigerated trailer rental site built with Laravel, Inertia.js and React in 10 days, with its Figma banner and a link to the live site. It takes ClassyShop’s place on the home page; ClassyShop stays on `/work`.
- Portfolio sample web projects (TaskFlow, Foodie, EduLearn, TravelNest) and their placeholder banners are removed; `/work` lists only the four real projects until more are added.
- Portfolio contact form sends a styled HTML and plain-text email (`utils/contact-email.ts`) to your inbox with Nodemailer (Gmail) through a server action, instead of opening the visitor's email app. Needs `EMAIL_USER` and `EMAIL_PASSWORD`.
- Portfolio theme switch: the new theme spreads out in a circle from the toggle button. Off for reduced motion.
- Portfolio colours: the page uses GitHub's neutrals (dark `#0d1117` with `#161b22` panels, light white with `#f6f8fa` panels and `#1f2328` text). The highlight cards (years of experience, "Have an app idea?") turn soft pink with dark text in light mode instead of staying dark crimson. The accent token is now `primary` (was `pink-primary`), still `#ff014f`.
- Portfolio post titles are smaller (30px beside the cover at 992px, 36px from 1200px, 40px from 1400px and on tablets) so a long title takes two lines instead of three.
- Portfolio blog covers are new 4:3 banners (1600×1200, `*-banner.webp`, new names so the image cache does not serve the old ones), shown at 4:3 like the project banners instead of 16:9, so they stand taller on the cards and at the top of a post.
- Portfolio header links are Home, Services, Experience, Projects, Blog and Contact (the broken "About" is gone). Projects and Blog open `/work` and `/blog`; the rest jump to home page sections from any page. The current link turns pink: the section in view while scrolling the home page, or the page link on `/work` and `/blog` and their detail pages (`use-active-nav.ts`), instead of Home always being pink.
- Portfolio project tabs on `/work` are plain text ("All Projects", "Mobile Apps", "Web Apps") on the left, in line with the title and cards, with only a pink bar that slides under the selected tab and counts after the labels from 640px; they fit phones down to 320px.
- Portfolio "View All Projects" and "View All Posts" are no longer outlined pills: the text and a round arrow sit between two thin fading lines, echoing the section labels; on hover the text turns pink and the round arrow fills pink, staying centred.
- Portfolio projects page at `/work`: every project as a card under tabs for all, mobile and web projects (with counts). Projects have a `kind` and `featured`; the home section shows the four featured ones and a "View All Projects" button. Four sample web projects with placeholder banners fill the page until the real ones are added. The card, grid and "View All" button are now shared (`ProjectCard`, `ProjectGrid`, `ViewAllLink`), and the project breadcrumb leads to `/work`, which the sitemap lists.
- Portfolio contact section asks "Have a Project in Mind?" with a line about full-time roles and freelance work (`CONTACT.text`); the phone number reads +880 1780-259656. The footer drops the dead "Terms & Condition" and "Privacy Policy" links for GitHub and LinkedIn with their icons (`FOOTER.bottomSocials`, taken from `SOCIALS`, opening in a new tab), its quick links follow the page order and include the blog, and the copyright shows the full name.
- Portfolio blog covers for the publishing and performance posts are banners in the style of the template post (Flutter logo, "Blog Post" pill, pink highlighted title, four features, a panel and a phone), replacing the Unsplash photos.
- Portfolio blog keeps three posts: the Flutter template post, "From Code to Store: What I Learned Publishing Six Apps" and "5 Ways to Make Your Flutter App Faster", both rewritten from the client apps and the GetX stack. The Riverpod vs BLoC and offline-first sample posts and their covers are removed.
- Portfolio testimonials are hidden until there are real client reviews (`TESTIMONIALS.visible: false`); the footer's "Testimonials" link is replaced by "Experience".
- Portfolio projects use real details: Crave, Precise Clock (renamed from "Time Tracking App", now at `/work/precise-clock`) and Amar Seba are written from their Google Play listings, with Play Store links, 2026, 1–2 months, Android and iOS, and the shared Flutter stack (`MOBILE_TECH`; Precise Clock adds WebSocket). ClassyShop is described from its client and server code (React, TanStack Query, Express, MongoDB, SSLCommerz) with links to the live site and both repositories.
- Portfolio "Education" section is now "Experience & Education": the BlackDevs internship (Nov 2025 - Apr 2026) and mobile developer role (since May 2026) come first, then the bachelor's and HSC; the SSC and JSC cards are gone. `EDUCATION` holds `groups` of cards (`title`, `period`, `place`, `text`).
- Portfolio tech stack and skill levels match the real skills: React Native, React, Next.js, JavaScript, HTML, CSS, Tailwind CSS, Express, Supabase and Blender join the chips (new Simple Icons logos; JSON removed), in rows for mobile, web and backend, and tools. The skill levels are now two groups of five, "Mobile Development" and "Web & Design".
- Portfolio achievements use real numbers: 1 year of experience (singular "Year" for one), 10+ projects, 6 published apps, 3 platforms and 4 frameworks. A "+" now shows only on lower bounds (`plus`).
- Portfolio services describe the real work: mobile apps with Flutter or React Native, web frontends with React and Next.js, Firebase and Supabase, APIs and Google Maps, UI design in Figma and store publishing (two new icons: `monitor`, `pen`).
- Portfolio hero, side panel and page titles describe Md Tonmoy Bosunia as a mobile-focused frontend developer at BlackDevs (Flutter first, plus React and Next.js), in place of the sample text. The address is Rangpur, Bangladesh, and the social icons link to the real GitHub, LinkedIn, Facebook, Instagram and X profiles (GitHub and LinkedIn first; a GitHub icon is added).
- Portfolio projects: the first three samples are replaced by real projects (Crave, Time Tracking App, Amar Seba: Citizen Services) with banners from Figma, write-ups based on their features, and no store links until real ones are added. The sample chat app is replaced by ClassyShop, an online store web app.
- Portfolio header, footer, card glow and scroll reveals moved from `views/home/` to `components/layout/` (with `PageHero` for the top of inner pages) (with `SiteShell` wrapping a page in them), and the icons, `SectionHeading` and the project banner to `components/ui/`, as the project pages use them too. The write-up parts (`ArticleLayout`, `StoryBlock`, `TableOfContents`, `ContactCta`, `Breadcrumb`) moved to `components/article/` for the blog. Menu, footer and logo links now point to `/#<section>` so they work from any page.

- Portfolio pink buttons turn into a pink outline on hover (transparent fill, pink border and text), and links turn the site pink, instead of the clashing red `#ff0003`; `red-primary` is removed. The contact form's Send button fits its text from 768px instead of spanning the form. Every button shows the hand cursor (Tailwind 4 gives buttons the arrow by default).

- **Breaking:** the API layer is server-only. `executeServerRequest` is no longer a server action; client components call your own server actions, which call the services.
- **Breaking:** `handleRequest` always throws `ApiError` (with `status`, `message`, `errors`). The third `mode` argument is removed: catch `ApiError` instead of using `'raw'`.
- **Breaking:** `utils/redirect-encryption.ts` is replaced by `utils/redirect-path.ts` (`encodeRedirectPath`, `decodeRedirectPath`), without `crypto-js`.
- **Breaking:** `CookieService.clear()` deletes only the auth cookies (or the names you pass), not every cookie.
- **Breaking:** types live in `types/*.ts` instead of `.d.ts`, so type errors in them are reported.
- ESLint uses `eslint-config-next` (React, accessibility and Core Web Vitals rules); `react-hooks/exhaustive-deps` is on.
- TypeScript checks with `noUncheckedIndexedAccess` and `noFallthroughCasesInSwitch`; `typecheck` generates route types first.
- `/api/auth/clear` accepts POST for logout forms and ignores requests started by other sites.
- `/api/auth/refresh` and `/api/auth/clear` answer client-side navigations with a full page load, so a session that expires during a `<Link>` navigation refreshes or ends properly instead of leaving a blank page.
- `handleRequest` ends a session in a server action by deleting the cookies itself and redirecting to `/login`; redirecting a server action to `/api/auth/clear` left the user on that URL with the cookies in place.
- `TokenResponseSchema` also reads tokens inside a `{ status, data: { … } }` envelope, and `refresh_expires_in`, which sets the refresh cookie's lifetime.
- `AUTH_REFRESH_TOKEN_IN` (`constants/api/auth.api.ts`): send the refresh token in the body (default) or as `Authorization: Bearer`.
- `TokenResponseSchema` ignores `null`, empty or malformed optional fields and accepts `expires_in` as a numeric string, instead of failing the login.
- **Breaking:** `saveSession` takes `{ accessToken, refreshToken?, expiresIn? }` instead of a token string, and `AuthService.login` returns that shape. `LoginResponseSchema` is replaced by `TokenResponseSchema`.
- Logout sends the refresh token in its body so the API can revoke it.
- API error bodies are read by `readApiError` (`services/api/api-errors.ts`), which understands `{ message }`, `{ error }`, `{ detail }` and RFC 9457 problem details, not only `{ message, errors }`.
- Code generators run on Node's built-in TypeScript support, refuse to overwrite files, and generate server-only services.
- Prettier formats every file type; GitHub Actions are pinned to commit SHAs.
- Requires Node.js 22.18 or newer.

### Fixed

- API slugs can no longer escape `API_URL` (`/../admin`, `@other-host`).
- Post-login redirects only go to paths on this site.
- The unused `revalidate` server action, which let anyone clear any cache tag, is removed.
- `.env.example` no longer sets `NODE_ENV` or uses unsupported `{{VAR}}` syntax.
- The Geist font is applied (it was overridden by Arial); page titles use `NEXT_PUBLIC_APP_NAME`.
- The pluralizer in the generators (`key` → `keys`, not `kies`).

### Removed

- `crypto-js`, `ts-node`, `fs-extra`, `services/app/cache.service.ts`.

## [1.0.3] and earlier

Not recorded.
