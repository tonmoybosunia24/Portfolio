import type { ContentBlock } from '@/types';

export interface ProjectLink {
  label: string;
  href: string;
}

export type ProjectKind = 'mobile' | 'web' | 'design';

export interface Project {
  /** The project page's address: `/work/<slug>`. Lowercase words joined by hyphens. */
  slug: string;
  /** Which tab of the `/work` page it is listed under. */
  kind: ProjectKind;
  /** Shown in the home page's projects section; every project is on `/work`. */
  featured: boolean;
  title: string;
  category: string;
  /** One or two sentences at the top of the project page. */
  summary: string;
  /**
   * A 4:3 banner (2400×1800) in `public/images/projects/` for each theme, exported from Figma. The current
   * projects use one banner for both themes.
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

/** What every client app below is built with; Precise Clock adds WebSocket. */
const MOBILE_TECH = [
  'Flutter',
  'Dart',
  'GetX',
  'REST API',
  'Firebase',
  'Push Notifications',
  'Local Notifications',
  'Google Maps',
] as const;

/**
 * The "Projects" section and the project pages, in the order they are shown. The three Flutter apps are
 * client projects built at BlackDevs and live on Google Play; their write-ups follow the store listings.
 * Glacial Rental is a client booking site built with Laravel and React, and ClassyShop a full-stack web store
 * with public code. The `featured` ones are on the home page; all of them are on `/work`, under a tab for
 * their `kind`. Vehicle Log is a mobile app design made in Figma, not a built app.
 */
export const PROJECTS = {
  label: 'Latest Projects',
  title: 'Apps I Have Built',
  description:
    'Client apps I built with Flutter for Android and iOS, live on Google Play, and a rental booking website built with Laravel and React.',
  /** The top of the `/work` page. */
  page: {
    label: 'My Work',
    title: 'Projects I Have Built',
    description:
      'Mobile apps for Android and iOS, websites and UI/UX designs, from client projects at BlackDevs to my own work.',
  },
  /** The tabs of the `/work` page: every project, or only one kind. `short` is shown below 640px, where the full labels don't fit. */
  tabs: [
    { kind: 'all', label: 'All Projects', short: 'All' },
    { kind: 'mobile', label: 'Mobile Apps', short: 'Mobile' },
    { kind: 'web', label: 'Web Apps', short: 'Web' },
    { kind: 'design', label: 'UI/UX Design', short: 'UI/UX' },
  ] satisfies { kind: ProjectKind | 'all'; label: string; short: string }[],
  items: [
    {
      slug: 'crave',
      kind: 'mobile',
      featured: true,
      title: 'Crave',
      category: 'Flutter · Health & Wellbeing',
      summary:
        'A supportive app that helps people understand their cravings: log them in seconds, track the emotions and triggers behind them and get healthier alternatives in the moment.',
      banner: {
        light: '/images/projects/crave-banner-v2.webp',
        dark: '/images/projects/crave-banner-v2.webp',
      },
      facts: {
        role: 'Flutter Developer',
        client: 'Client Project',
        year: '2026',
        duration: '1–2 Months',
        platforms: 'Android & iOS',
      },
      tech: MOBILE_TECH,
      links: [{ label: 'Google Play', href: 'https://play.google.com/store/apps/details?id=live.crave' }],
      story: [
        { type: 'heading', text: 'Overview' },
        {
          type: 'paragraph',
          text: 'Crave (CraveTheApp on Google Play) helps people take control of their cravings. When an urge shows up, the user logs what they crave, when, where and how strongly, notes how they feel, and gets a healthier alternative to ride it out. Over time the app turns those logs into patterns and insights, so the user understands what sets their cravings off.',
        },
        {
          type: 'paragraph',
          text: 'The app was created by a physician with expertise in addiction medicine, cardiovascular health and weight management, and it is built on clinical experience and harm-reduction principles. I built it with Flutter for Android and iOS as a client project at BlackDevs.',
        },
        { type: 'heading', text: 'The Problem' },
        {
          type: 'paragraph',
          text: 'Cravings do not wait for a good moment. They come with stress, a certain time of day, a place or a mood, often when no support is around. People in recovery or working on their health know what they want to change, but there is a gap between that intention and what happens in the moment.',
        },
        { type: 'heading', text: 'The Solution' },
        {
          type: 'paragraph',
          text: 'Crave brings support into that moment. Logging a craving takes only a few taps, so it happens while the urge is real, not hours later. Each entry records the emotion and trigger behind it, and the app answers with an alternative right away. Without judgment, the logs build up into a clear picture of when and why cravings happen.',
        },
        {
          type: 'quote',
          text: 'Your cravings don’t define you. Your choices do.',
        },
        { type: 'heading', text: 'Key Features' },
        {
          type: 'list',
          items: [
            'Quick craving logs: what, when, where and how intense.',
            'Emotion and trigger tracking to uncover patterns.',
            'Real-time alternatives to help ride out an urge.',
            'Simple insights that build awareness over time.',
            'Reminders through push and local notifications.',
            'A private, practical design for early recovery and long-term wellness alike.',
          ],
        },
        { type: 'heading', text: 'Tech Stack & Architecture' },
        {
          type: 'paragraph',
          text: 'The app is built with Flutter and Dart from one codebase for Android and iOS. GetX handles state, navigation and dependency injection, with each screen backed by its own controller. Craving logs and insights come from the client’s REST API, Firebase powers push notifications, local notifications deliver reminders on the device, and Google Maps covers the location side of a log.',
        },
        { type: 'heading', text: 'Challenges' },
        {
          type: 'paragraph',
          text: 'A craving log is only useful if it is made in the moment, so speed mattered more than anything. The logging flow was kept to as few steps as possible, with sensible defaults, and the whole app had to feel calm and non-judgmental, because people open it at difficult moments.',
        },
        { type: 'heading', text: 'Highlights' },
        {
          type: 'list',
          items: [
            'Live on Google Play for a real client.',
            'Turns a difficult moment into useful data and a healthier choice.',
            'Grounded in the clinical experience of its physician founder.',
          ],
        },
      ],
    },
    {
      slug: 'precise-clock',
      kind: 'mobile',
      featured: true,
      title: 'Precise Clock',
      category: 'Flutter · Time Tracking',
      summary:
        'A professional time-tracking app for employees and managers: clock in with one tap, log hours against projects and roles, review every timecard and request corrections in the app.',
      banner: {
        light: '/images/projects/precise-clock-banner-v2.webp',
        dark: '/images/projects/precise-clock-banner-v2.webp',
      },
      facts: {
        role: 'Flutter Developer',
        client: 'Client Project',
        year: '2026',
        duration: '1–2 Months',
        platforms: 'Android & iOS',
      },
      tech: [...MOBILE_TECH, 'WebSocket'],
      links: [
        { label: 'Google Play', href: 'https://play.google.com/store/apps/details?id=com.apexmgmt.preciseclock' },
      ],
      story: [
        { type: 'heading', text: 'Overview' },
        {
          type: 'paragraph',
          text: 'Precise Clock is a time-tracking app built for accountability. Employees record their working hours from the office or the job site with a single tap, assign them to projects and roles, and see their full timecard history. Managers get reliable hours for payroll and project costing, without manual logs or timesheet guesswork. I built it with Flutter for Android and iOS as a client project at BlackDevs.',
        },
        { type: 'heading', text: 'The Problem' },
        {
          type: 'paragraph',
          text: 'Hours kept in manual logs and timesheets are easy to forget, round off or enter twice. Nobody knows exactly where the time went until the pay period is over, and fixing a mistake means emails and back-and-forth between staff and managers.',
        },
        { type: 'heading', text: 'The Solution' },
        {
          type: 'paragraph',
          text: 'Clock In. Clock Out. That’s it. The main screen shows today’s total, the project picker and one large button, and a live timer shows that the clock is running. Every entry lands in the employee’s timecard history, and if something is wrong they flag it and send a correction request from the app instead of writing an email.',
        },
        {
          type: 'quote',
          text: 'If tracking time takes more than one tap, people stop doing it. The whole app is built around that one button.',
        },
        { type: 'heading', text: 'Key Features' },
        {
          type: 'list',
          items: [
            'One-tap clock in and clock out with a clean, distraction-free interface.',
            'Hours assigned to projects and roles for labour costing and reports.',
            'Secure employee profiles with contact details and employee ID.',
            'A full timecard history across every pay period.',
            'Correction requests sent straight from the app.',
            'Encryption for sensitive personal and financial data.',
          ],
        },
        { type: 'heading', text: 'Tech Stack & Architecture' },
        {
          type: 'paragraph',
          text: 'The app is built with Flutter and Dart from one codebase, with GetX for state, navigation and dependency injection. Timecards, projects and profiles come from a REST API, and a WebSocket connection pushes changes in real time, so a clock-in shows up immediately instead of on the next refresh. Firebase delivers push notifications, local notifications handle reminders, and Google Maps shows where work is happening.',
        },
        { type: 'heading', text: 'Challenges' },
        {
          type: 'paragraph',
          text: 'A timer that only counts while the app is open loses time as soon as the phone locks. The app stores the clock-in moment and calculates the elapsed time from it, so the timer stays correct after restarts and long periods in the background, and the WebSocket keeps every device in step with the server.',
        },
        { type: 'heading', text: 'Highlights' },
        {
          type: 'list',
          items: [
            'Live on Google Play for a real client.',
            'Clocking in takes a single tap from the first screen.',
            'Real-time updates over WebSocket keep hours accurate everywhere.',
          ],
        },
      ],
    },
    {
      slug: 'amar-seba',
      kind: 'mobile',
      featured: true,
      title: 'Amar Seba: Citizen Services',
      category: 'Flutter · Citizen Services',
      summary:
        'Union Parishad services for citizens of Bangladesh on their phone: apply for certificates online, follow each application and use holding tax and trade licence services, all in Bangla.',
      banner: { light: '/images/projects/amar-seba-banner-v2.webp', dark: '/images/projects/amar-seba-banner-v2.webp' },
      facts: {
        role: 'Flutter Developer',
        client: 'Client Project',
        year: '2026',
        duration: '1–2 Months',
        platforms: 'Android & iOS',
      },
      tech: MOBILE_TECH,
      links: [{ label: 'Google Play', href: 'https://play.google.com/store/apps/details?id=com.amarsheba.app' }],
      story: [
        { type: 'heading', text: 'Overview' },
        {
          type: 'paragraph',
          text: 'Amar Seba (আমার সেবা, “my service”) brings Union Parishad services in Bangladesh to the phone, with the promise “আমার সেবা আমার হাতেই”, my services in my hands. Citizens apply for certificates and attestations online, follow the progress of every application and use holding tax, trade licence and other services from home. I built the app with Flutter for Android and iOS as a client project at BlackDevs.',
        },
        { type: 'heading', text: 'The Problem' },
        {
          type: 'paragraph',
          text: 'Getting a certificate or a trade licence usually meant visiting the Union Parishad office, filling in paper forms and coming back later to ask about the status. For many citizens that is a long trip and a lost working day, and digital services in English only are hard to use for people new to online forms.',
        },
        { type: 'heading', text: 'The Solution' },
        {
          type: 'paragraph',
          text: 'The app connects citizens with their local government digitally. The home screen gives clear entry points to certificates, trade licences, holdings and other services, each application shows its status, and everything is written in Bangla first for the people who use these services every day.',
        },
        { type: 'heading', text: 'Key Features' },
        {
          type: 'list',
          items: [
            'Online applications for certificates and attestations.',
            'Status and details of every application at any time.',
            'Holding tax, trade licence and other Union Parishad services.',
            'Services shown according to what each Union Parishad has enabled.',
            'A Bangla-first, mobile-friendly design with simple navigation.',
          ],
        },
        { type: 'heading', text: 'Tech Stack & Architecture' },
        {
          type: 'paragraph',
          text: 'The app is built with Flutter and Dart, with GetX for state, navigation and dependency injection. Services and applications come from the Amar Seba REST API, Firebase and local notifications keep citizens updated on their applications, and Google Maps helps with locations. Every screen shares the same loading, empty and error states, so the app behaves predictably on slow connections.',
        },
        { type: 'heading', text: 'Challenges' },
        {
          type: 'paragraph',
          text: 'Not every Union Parishad offers every service, so the app could not have a fixed menu: it shows each citizen only the services their own Parishad has switched on. Bangla text is also longer and taller than English, so cards and buttons were given room to grow and stay clean on small phones.',
        },
        { type: 'heading', text: 'Highlights' },
        {
          type: 'list',
          items: [
            'Live on Google Play for citizens across Bangladesh.',
            'Services that used to need an office visit now start on the phone.',
            'A Bangla-first design that feels natural to its users.',
          ],
        },
      ],
    },
    {
      slug: 'glacial-rental',
      kind: 'web',
      featured: true,
      title: 'Glacial Rental: Refrigerated Trailers',
      category: 'Laravel · Equipment Rental',
      summary:
        'A booking site for refrigerated trailers in Southern Ohio: customers check their address, pick dates and pay online, and admins run it all from one dashboard.',
      banner: {
        light: '/images/projects/glacial-rental-banner.webp',
        dark: '/images/projects/glacial-rental-banner.webp',
      },
      facts: {
        role: 'Web Developer',
        client: 'Client Project',
        year: '2025',
        duration: '10 Days',
        platforms: 'Web',
      },
      tech: ['Laravel', 'Inertia.js', 'React', 'TypeScript', 'MySQL', 'Stripe', 'SendGrid', 'Google Maps'],
      links: [{ label: 'Live Site', href: 'https://glacialrental.potholedoctors.dev/' }],
      story: [
        { type: 'heading', text: 'Overview' },
        {
          type: 'paragraph',
          text: 'Glacial Rental rents mobile refrigerated trailers across Southern Ohio, for catering and weddings, county fairs and festivals, and for restaurants or hospitals whose cold storage breaks down. The website takes a customer from “will you deliver to me?” to a paid booking, and gives the team one dashboard to run orders, invoices and the booking calendar. It was built in 10 days.',
        },
        { type: 'heading', text: 'The Problem' },
        {
          type: 'paragraph',
          text: 'A trailer rental depends on three questions: can the trailer reach the customer, is it free on those dates, and what will it cost. Answering them by phone or email for every request is slow for the customer and for the business, and bookings, invoices and site content end up spread across different places.',
        },
        { type: 'heading', text: 'The Solution' },
        {
          type: 'paragraph',
          text: 'The storefront answers all three on its own. Customers enter their address to check that it is inside the service area, pick dates and times, see tiered per-day pricing and pay with Stripe. Behind it, admins manage orders, invoices, a booking calendar, products and the site’s pages and blog from a single dashboard.',
        },
        { type: 'heading', text: 'Key Features' },
        {
          type: 'list',
          items: [
            'Service area check from the customer’s address with Google Maps.',
            'Date and time selection for each rental.',
            'Tiered per-day pricing shown before checkout.',
            'Online payment with Stripe and emails through SendGrid.',
            'Admin dashboard for orders, invoices, a booking calendar and products.',
            'Pages and blog managed from the dashboard.',
            'An SEO-friendly, mobile-first storefront.',
          ],
        },
        { type: 'heading', text: 'Tech Stack & Architecture' },
        {
          type: 'paragraph',
          text: 'The site is a modular monolith on Laravel with MySQL. Each module (orders, products, customers, pages, blog) has its own controllers, services and repositories, so a feature stays in one place. Inertia.js connects Laravel to a React and TypeScript interface without a separate API. Payments go through a gateway interface, so another provider can sit beside Stripe, SendGrid sends the emails and Google Maps handles addresses.',
        },
        { type: 'heading', text: 'Challenges' },
        {
          type: 'paragraph',
          text: 'The whole site had to be ready in 10 days, from the booking flow to the admin dashboard. Splitting it into modules from the start made that possible: each part could be built and checked on its own, and the shared pieces, like the payment gateway interface, were written once and reused.',
        },
        { type: 'heading', text: 'Highlights' },
        {
          type: 'list',
          items: [
            'Live site for a real rental business.',
            'From address check to paid booking without a phone call.',
            'Built in 10 days on a modular structure that is easy to extend.',
          ],
        },
      ],
    },
    {
      slug: 'classyshop',
      kind: 'web',
      featured: false,
      title: 'ClassyShop: Online Store',
      category: 'MERN · E-Commerce',
      summary:
        'A full-stack online store with product categories, wishlist, cart, online payment, PDF invoices and an admin dashboard with sales charts.',
      banner: {
        light: '/images/projects/classyshop-banner-v2.webp',
        dark: '/images/projects/classyshop-banner-v2.webp',
      },
      // TODO: check the year, duration and client with the user.
      facts: {
        role: 'Full-Stack Developer',
        client: 'Personal Project',
        year: '2025',
        duration: '1–2 Months',
        platforms: 'Web',
      },
      tech: ['React', 'Tailwind CSS', 'TanStack Query', 'Firebase Auth', 'Node.js', 'Express', 'MongoDB', 'JWT'],
      links: [
        { label: 'Live Site', href: 'https://classyshop25.netlify.app/' },
        { label: 'Client Code', href: 'https://github.com/tonmoybosunia24/E-Commerce-Client' },
        { label: 'Server Code', href: 'https://github.com/tonmoybosunia24/E-Commerce-Server' },
      ],
      story: [
        { type: 'heading', text: 'Overview' },
        {
          type: 'paragraph',
          text: 'ClassyShop is a full-stack online store for fashion, electronics, furniture and accessories. Shoppers browse by category, save products to a wishlist, fill a cart, pay online and download a PDF invoice for every order. Admins and moderators manage products, users and orders from a dashboard with live sales charts. I built both sides: the React storefront and the Node.js and Express API.',
        },
        { type: 'heading', text: 'The Problem' },
        {
          type: 'paragraph',
          text: 'A real store needs much more than a product list. Shoppers have to find products quickly, pay safely and get proof of their order, while the people running the store need to add products, handle orders and see how sales are going, without touching the database by hand.',
        },
        { type: 'heading', text: 'The Solution' },
        {
          type: 'paragraph',
          text: 'The storefront puts search and categories on every page, with sale sliders and countdown deals on the home page. Checkout goes through SSLCommerz, a payment gateway used across Bangladesh, and the server creates a PDF invoice and sends an email for each order. Signed-in users see their orders and wishlist, and admins and moderators get their own dashboard with role-based access.',
        },
        {
          type: 'quote',
          text: 'Every page answers the same three questions: what is on offer, how do I find it, and how do I buy it.',
        },
        { type: 'heading', text: 'Key Features' },
        {
          type: 'list',
          items: [
            'Product categories, search, product details and customer reviews with ratings.',
            'Sale sliders and countdown deals on the home page.',
            'Wishlist and cart saved to the account.',
            'Online payment through SSLCommerz, with success and failure handling.',
            'PDF invoices and order emails generated on the server.',
            'Admin dashboard with sales stats and charts, product and user management.',
            'Admin, moderator and customer roles, secured with JWT.',
            'A blog section and a responsive layout from phone to desktop.',
          ],
        },
        { type: 'heading', text: 'Tech Stack & Architecture' },
        {
          type: 'paragraph',
          text: 'The client is a React app built with Vite and styled with Tailwind CSS. TanStack Query fetches and caches server data, Firebase handles sign-in, React Hook Form handles forms and Recharts draws the admin charts. The server is Node.js and Express with MongoDB, issues JWTs for protected routes, takes payments with SSLCommerz, builds invoices with PDFKit and sends email with Nodemailer. The client is hosted on Netlify and the API on Vercel.',
        },
        { type: 'heading', text: 'Challenges' },
        {
          type: 'paragraph',
          text: 'Payments were the hardest part. The order must only be confirmed after the gateway reports success, so the server waits for SSLCommerz to call back with the transaction, marks the order as paid and only then creates the invoice; a failed payment leaves the cart as it was.',
        },
        { type: 'heading', text: 'Highlights' },
        {
          type: 'list',
          items: [
            'A complete store, from browsing to payment, invoice and email.',
            'Role-based dashboards for admins and moderators.',
            'Live site and open source code for both client and server.',
          ],
        },
      ],
    },
    {
      slug: 'vehicle-log',
      kind: 'design',
      featured: false,
      title: 'Vehicle Log: Mobile App Design',
      category: 'Figma · UI/UX Design',
      summary:
        'A mobile app design for car owners and rental businesses: track trips, rentals and expenses for every car and driver, with document reminders and clear profit reports.',
      banner: {
        light: '/images/projects/vehicle-log-banner.webp',
        dark: '/images/projects/vehicle-log-banner.webp',
      },
      // TODO: check the year and client with the user.
      facts: {
        role: 'UI/UX Designer',
        client: 'Personal Project',
        year: '2026',
        duration: '10 Days',
        platforms: 'Mobile App',
      },
      tech: ['Figma', 'UI Design', 'UX Design', 'Mobile App Design'],
      links: [
        { label: 'View in Figma', href: 'https://www.figma.com/design/ISmUcMZI89jEeIzCCwicNt/Vehicle-Log?node-id=1-5' },
      ],
      story: [
        { type: 'heading', text: 'Overview' },
        {
          type: 'paragraph',
          text: 'Vehicle Log is a mobile app I designed in Figma for people who earn from their cars: owners who rent them out, take them on tours or use them themselves. It keeps trips, rentals, expenses, drivers and vehicle papers in one place and turns them into a clear answer to one question: is each car making money?',
        },
        { type: 'heading', text: 'The Problem' },
        {
          type: 'paragraph',
          text: 'A small car rental business usually runs on memory, notebooks and scattered receipts. Fuel, driver salaries, repairs and tolls add up, rent days are counted by hand, and a fitness certificate, insurance or tax token can expire without anyone noticing. At the end of the month it is hard to tell which car earned and which one lost money.',
        },
        { type: 'heading', text: 'The Solution' },
        {
          type: 'paragraph',
          text: 'The home screen opens with this month’s expenses, trips, distance and fuel, quick actions to start a trip or add an expense, a vehicle or a driver, and the reminders that need attention, each marked valid, expiring soon or expired. The reports screen shows net profit, income against expense week by week, profit or loss for every vehicle, where the money went and how each car was used.',
        },
        { type: 'heading', text: 'Key Features' },
        {
          type: 'list',
          items: [
            'An overview of the month: expenses, trips, distance and fuel.',
            'Quick actions to start a trip or add an expense, a vehicle or a driver.',
            'Reminders for fitness certificates, insurance and tax tokens, with clear status colours.',
            'Profit and loss for every vehicle, with its number plate and rent days.',
            'An expense breakdown by fuel, driver salary, maintenance, toll and parking.',
            'A usage split between rent, tours and personal use, and an exportable report.',
            'Home, Garage, Rentals, Reports and Settings in the bottom navigation.',
          ],
        },
        { type: 'heading', text: 'Design Approach' },
        {
          type: 'paragraph',
          text: 'The interface uses one strong orange for the main actions and summary cards on a calm white background, so the important numbers stand out first. Amounts are shown in Taka and number plates in the Bangladeshi format, because the app is made for local rental businesses. Cards, chips, list rows and the bottom navigation are shared components, so every screen feels part of the same app.',
        },
        { type: 'heading', text: 'Challenges' },
        {
          type: 'paragraph',
          text: 'A report screen can easily become a wall of numbers. The design starts with a single headline figure, the net profit and its change from last month, and only then goes into charts, vehicles and expense details, so the owner gets the answer at a glance and the reasons when they scroll.',
        },
        { type: 'heading', text: 'Highlights' },
        {
          type: 'list',
          items: [
            'A complete mobile app designed in Figma, from home screen to reports.',
            'Built for the real needs of small car rental businesses in Bangladesh.',
            'Clear profit and loss for every vehicle at a glance.',
          ],
        },
      ],
    },
  ] satisfies Project[],
} as const;

/** The project with this slug, or undefined. */
export const findProject = (slug: string): Project | undefined => PROJECTS.items.find(item => item.slug === slug);
