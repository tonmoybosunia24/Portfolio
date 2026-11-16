import type { ContentBlock } from '@/types';

export interface ProjectLink {
  label: string;
  href: string;
}

export interface Project {
  /** The project page's address: `/work/<slug>`. Lowercase words joined by hyphens. */
  slug: string;
  title: string;
  category: string;
  /** One or two sentences at the top of the project page. */
  summary: string;
  /**
   * A 4:3 banner (2400×1800) in `public/images/projects/` for each theme: the app name, a short line about it and two
   * phones showing its screens on a light studio background. The current banners were designed for this
   * page from sample screens.
   */
  banner: { light: string; dark: string };
  /** Quick facts shown below the top of the project page. */
  facts: { role: string; client: string; year: string; duration: string; platforms: string };
  /** Languages, frameworks and services the app is built with. */
  tech: readonly string[];
  /** Store pages, repository or demo, as buttons on the project page. The first one is highlighted. */
  links: readonly ProjectLink[];
  /** The full write-up on the project page, read like a blog post. */
  story: readonly ContentBlock[];
}

/**
 * The "Projects" section and the project pages: your four projects, in the order they are shown, with
 * banners exported from Figma (one banner for both themes). TODO: check their facts and tech, and add their
 * links.
 */
export const PROJECTS = {
  label: 'Latest Projects',
  title: 'Apps I Have Built',
  description:
    'A selection of mobile applications I have designed and built for Android and iOS, focused on clean UI and smooth performance.',
  items: [
    {
      slug: 'crave',
      title: 'Crave',
      category: 'Flutter · Health & Wellbeing',
      summary:
        'Build healthy habits, break unhealthy ones and stay on track with daily check-ins, progress rings and evidence-based resources.',
      banner: {
        light: '/images/projects/crave-banner.webp',
        dark: '/images/projects/crave-banner.webp',
      },
      // TODO: check the facts and tech, and add the store or repository links.
      facts: {
        role: 'Flutter Developer',
        client: 'Client Project',
        year: '2025',
        duration: '3 Months',
        platforms: 'Android & iOS',
      },
      tech: ['Flutter', 'Dart', 'GetX', 'REST API', 'Local Notifications'],
      links: [],
      story: [
        { type: 'heading', text: 'Overview' },
        {
          type: 'paragraph',
          text: 'Crave helps people change their daily routines in both directions: build healthy habits such as exercise and reading, and break unhealthy ones such as drinking, smoking or too much sugar. A short daily check-in keeps progress honest, and evidence-based resources explain why each step matters.',
        },
        { type: 'heading', text: 'The Problem' },
        {
          type: 'paragraph',
          text: 'Most habit apps only track good habits. People trying to quit something harmful had to use a separate app, or none at all, and a missed day often went unnoticed until the streak was long gone.',
        },
        { type: 'heading', text: 'The Solution' },
        {
          type: 'paragraph',
          text: 'One app handles both kinds of habit. The home screen greets the user, shows the week as a row of progress rings and lists their habits with today’s progress. Creating a new habit starts from suggestions such as Stop Drinking, Cannabis or Sugar, or from scratch. If a day passes without a log entry, the habit is marked as neglected, so the record stays truthful.',
        },
        { type: 'heading', text: 'Key Features' },
        {
          type: 'list',
          items: [
            'Healthy and unhealthy habits side by side, each with its own goal.',
            'Suggested habits to break, such as drinking, smoking and sugar.',
            'Daily check-ins and a week view with a progress ring for each day.',
            'Timed habits, such as hours of reading, with partial progress.',
            'Evidence-based resources to read when motivation drops.',
            'Progress, Support and Settings screens in the bottom navigation.',
          ],
        },
        { type: 'heading', text: 'Tech Stack & Architecture' },
        {
          type: 'paragraph',
          text: 'The app is built with Flutter for Android and iOS. Habits, check-ins and progress are kept in controllers that the screens only read, and reminders use local notifications so they arrive even without a connection.',
        },
        { type: 'heading', text: 'Challenges' },
        {
          type: 'paragraph',
          text: 'Deciding when a day counts as neglected sounds simple, but it depends on the user’s time zone and on habits that are not daily. The rule runs on the device at the end of each local day, so it is correct wherever the user is.',
        },
        { type: 'heading', text: 'Highlights' },
        {
          type: 'list',
          items: [
            'Building and breaking habits in one place.',
            'A friendly, colourful design that keeps check-ins quick.',
            'Honest progress: missed days are recorded, not hidden.',
          ],
        },
      ],
    },
    {
      slug: 'time-tracker',
      title: 'Time Tracking App',
      category: 'Flutter · Android & iOS',
      summary:
        'Clock in with one tap, track your hours and review pay-period reports on a live dashboard, built for teams that bill by the hour.',
      banner: { light: '/images/projects/time-tracker-banner.webp', dark: '/images/projects/time-tracker-banner.webp' },
      // TODO: check the facts and tech, and add the store or repository links.
      facts: {
        role: 'Flutter Developer',
        client: 'Client Project',
        year: '2025',
        duration: '3 Months',
        platforms: 'Android & iOS',
      },
      tech: ['Flutter', 'Dart', 'GetX', 'REST API', 'Charts'],
      links: [],
      story: [
        { type: 'heading', text: 'Overview' },
        {
          type: 'paragraph',
          text: 'This time tracking app helps employees record their working hours and lets managers see where the time goes. A worker picks the company and project, taps Clock In, and a live timer runs until they clock out. Every entry flows into pay-period totals, costs and reports, so payroll no longer depends on handwritten timesheets.',
        },
        { type: 'heading', text: 'The Problem' },
        {
          type: 'paragraph',
          text: 'Hours were collected on paper and in spreadsheets at the end of each pay period. Entries were forgotten, rounded or typed twice, and nobody could see the totals until the period was over. Correcting mistakes took hours of back and forth between staff and managers.',
        },
        { type: 'heading', text: 'The Solution' },
        {
          type: 'paragraph',
          text: 'The app makes recording time part of the working day. The Entry screen shows today’s total, the company and project pickers and one large Clock In button. A live timer in hours, minutes and seconds shows that the clock is running, and the last clock-out is always visible, so a forgotten clock-out is noticed at once.',
        },
        {
          type: 'quote',
          text: 'If tracking time takes more than one tap, people stop doing it. The whole app is built around that one button.',
        },
        { type: 'heading', text: 'Key Features' },
        {
          type: 'list',
          items: [
            'One-tap clock in and clock out, with a company and project picked per entry.',
            'A live timer and today’s total work time on the Entry screen.',
            'A dashboard with who is clocked in or on break, pay-period hours and costs.',
            'A monthly chart of hours, with the value of each day on tap.',
            'My Status, My Report and Time Off sections in the bottom navigation.',
            'A dark interface that stays easy to read on long shifts.',
          ],
        },
        { type: 'heading', text: 'Tech Stack & Architecture' },
        {
          type: 'paragraph',
          text: 'The app is built with Flutter for Android and iOS from one codebase. Each screen follows the same View → Controller → Repository structure, with GetX for state and dependency injection. Entries and reports come from a REST API, and the timer keeps running correctly even when the app is closed and reopened, because it is calculated from the clock-in time rather than counted on the device.',
        },
        { type: 'heading', text: 'Challenges' },
        {
          type: 'paragraph',
          text: 'A timer that only counts while the app is open loses time as soon as the phone locks. Storing the clock-in moment and calculating the elapsed time from it on every frame made the timer correct after restarts, time zone changes and long periods in the background.',
        },
        { type: 'heading', text: 'Highlights' },
        {
          type: 'list',
          items: [
            'Clocking in takes a single tap from the first screen.',
            'Managers see pay-period hours and costs while the period is still running.',
            'The same clean structure on every screen keeps new features quick to add.',
          ],
        },
      ],
    },
    {
      slug: 'amar-seba',
      title: 'Amar Seba: Citizen Services',
      category: 'Flutter · Bangla-first',
      summary:
        'A Bangla-first app for local government services: apply for certificates and trade licences, pay utility bills and track every application in one place.',
      banner: { light: '/images/projects/amar-seba-banner.webp', dark: '/images/projects/amar-seba-banner.webp' },
      // TODO: check the facts and tech, and add the store or repository links.
      facts: {
        role: 'Flutter Developer',
        client: 'Amar Seba',
        year: '2025',
        duration: '4 Months',
        platforms: 'Android & iOS',
      },
      tech: ['Flutter', 'Dart', 'GetX', 'REST API', 'PDF Printing'],
      links: [],
      story: [
        { type: 'heading', text: 'Overview' },
        {
          type: 'paragraph',
          text: 'Amar Seba (আমার সেবা, “my service”) brings local government services to the phone. Citizens can apply for certificates and trade licences, check their holding tax and pay utility bills, then follow each application until it is issued. The whole app is written in Bangla first, for the people who use these services every day.',
        },
        { type: 'heading', text: 'The Problem' },
        {
          type: 'paragraph',
          text: 'Getting a certificate or renewing a trade licence usually meant visiting an office, filling in paper forms and coming back later to ask about the status. Many existing digital services were in English only and hard to use for people who are not used to online forms.',
        },
        { type: 'heading', text: 'The Solution' },
        {
          type: 'paragraph',
          text: 'The home screen greets the citizen by name and shows four clear cards: total certificates, trade licences, holdings and utility bills, each with its count and buttons to apply or see the list. Every application shows its date, certificate number, issue date and payment status, and issued certificates can be printed straight from the app.',
        },
        { type: 'heading', text: 'Key Features' },
        {
          type: 'list',
          items: [
            'Apply for citizen, character and income certificates from the phone.',
            'Trade licence applications and a list of existing licences.',
            'Holding tax and utility bills in the same place.',
            'Status tracking for every application: applied, issued and paid.',
            'Digital certificates that can be printed when they are issued.',
            'A Bangla-first interface, with Bangla numerals throughout.',
          ],
        },
        { type: 'heading', text: 'Tech Stack & Architecture' },
        {
          type: 'paragraph',
          text: 'The app is built with Flutter and talks to the service’s REST API. Every screen uses the same structure and the same loading, empty, error and offline states, so the app behaves predictably on slow connections. Text, numbers and dates are localised, so counts and dates appear in Bangla numerals.',
        },
        { type: 'heading', text: 'Challenges' },
        {
          type: 'paragraph',
          text: 'Bangla text is longer and taller than English, and many fonts render conjunct letters badly. Choosing a font that renders every letter correctly and giving cards and buttons room to grow kept the layout clean on small phones.',
        },
        { type: 'heading', text: 'Highlights' },
        {
          type: 'list',
          items: [
            'Government services that used to need an office visit now start on the phone.',
            'Citizens can see the status of every application at any time.',
            'A Bangla-first design that feels natural to its users.',
          ],
        },
      ],
    },
    {
      slug: 'classyshop',
      title: 'ClassyShop: Online Store',
      category: 'Web App · E-Commerce',
      summary:
        'A full-featured storefront with categories, deals, wishlist, cart and a user dashboard, built to feel just as good on a phone as on a laptop.',
      banner: { light: '/images/projects/classyshop-banner.webp', dark: '/images/projects/classyshop-banner.webp' },
      // TODO: check the facts and tech, and add the live site or repository links.
      facts: {
        role: 'Full-Stack Developer',
        client: 'Client Project',
        year: '2025',
        duration: '3 Months',
        platforms: 'Web, Desktop & Mobile',
      },
      tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS'],
      links: [],
      story: [
        { type: 'heading', text: 'Overview' },
        {
          type: 'paragraph',
          text: 'ClassyShop, “Big Mega Store”, is an online store for furniture, fashion, electronics and accessories. Shoppers browse by category, find deals on the home page sliders, save products to a wishlist, fill a cart and follow their orders from a personal dashboard. The same storefront adapts from a wide desktop layout to a phone screen.',
        },
        { type: 'heading', text: 'The Problem' },
        {
          type: 'paragraph',
          text: 'A store with a large and changing catalogue needs more than a product list. Shoppers have to find what they want in a few clicks, see the current offers straight away and come back later to finish an order, on whatever device they happen to use.',
        },
        { type: 'heading', text: 'The Solution' },
        {
          type: 'paragraph',
          text: 'The header puts a product search and a Shop by Categories menu on every page, next to the wishlist and cart counters. The home page opens with a large sale slider and side promotions, followed by a row of product categories. Signed-in shoppers get a dashboard with their orders, wishlist and details, and order tracking and a help centre are always one click away.',
        },
        {
          type: 'quote',
          text: 'Every page answers the same three questions: what is on offer, how do I find it, and how do I buy it.',
        },
        { type: 'heading', text: 'Key Features' },
        {
          type: 'list',
          items: [
            'Product search and a Shop by Categories menu in the header.',
            'Home page sliders for sales and side promotions for featured products.',
            'Wishlist and cart with live counters, so products can be saved for later.',
            'A user dashboard with orders, wishlist and account details.',
            'Language and currency switchers, order tracking and a help centre.',
            'Free delivery offers, such as free delivery on the first order.',
            'A responsive layout that works on desktop, tablet and phone.',
          ],
        },
        { type: 'heading', text: 'Tech Stack & Architecture' },
        {
          type: 'paragraph',
          text: 'The storefront is a React single-page app styled with Tailwind CSS, talking to a Node.js and Express API with MongoDB for products, users, carts and orders. Reusable components, such as the product card, slider and category tile, keep every page consistent and make new sections quick to add.',
        },
        { type: 'heading', text: 'Challenges' },
        {
          type: 'paragraph',
          text: 'A wide desktop header with search, categories, language, currency, account, wishlist and cart does not fit on a phone. On small screens the header collapses into a menu button and compact icons, while the most important actions, search and cart, stay visible at all times.',
        },
        { type: 'heading', text: 'Highlights' },
        {
          type: 'list',
          items: [
            'Shoppers reach any category or product in a couple of clicks.',
            'Wishlist and cart keep products saved between visits.',
            'One codebase serves both the desktop and the mobile storefront.',
          ],
        },
      ],
    },
  ] satisfies Project[],
} as const;

/** The project with this slug, or undefined. */
export const findProject = (slug: string): Project | undefined => PROJECTS.items.find(item => item.slug === slug);
