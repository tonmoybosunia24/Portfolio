import type { ContentBlock } from '@/types';

export interface ProjectLink {
  label: string;
  href: string;
}

export type ProjectKind = 'mobile' | 'web';

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
 * A placeholder web project for the `/work` page, until the real details are in: the shared sample facts,
 * a "Sample Project" banner (`public/images/projects/sample-<slug>-banner.webp`) and a short write-up.
 */
function sampleProject(sample: {
  slug: string;
  title: string;
  category: string;
  summary: string;
  tech: readonly string[];
  features: readonly string[];
}): Project {
  const banner = `/images/projects/sample-${sample.slug}-banner.webp`;

  return {
    slug: sample.slug,
    kind: 'web',
    featured: false,
    title: sample.title,
    category: sample.category,
    summary: sample.summary,
    banner: { light: banner, dark: banner },
    facts: {
      role: 'Frontend Developer',
      client: 'Sample Project',
      year: '2025',
      duration: '—',
      platforms: 'Web',
    },
    tech: sample.tech,
    links: [],
    story: [
      { type: 'heading', text: 'Overview' },
      {
        type: 'paragraph',
        text: `${sample.summary} This is a sample project that shows how the projects page looks; the real write-up comes soon.`,
      },
      { type: 'heading', text: 'Key Features' },
      { type: 'list', items: sample.features },
      { type: 'heading', text: 'Tech Stack' },
      { type: 'paragraph', text: `Built with ${sample.tech.join(', ')}.` },
    ],
  };
}

/**
 * The "Projects" section and the project pages, in the order they are shown. The three Flutter apps are
 * client projects built at BlackDevs and live on Google Play; their write-ups follow the store listings.
 * ClassyShop is a full-stack web store with public code. The `featured` ones are on the home page; all of
 * them are on `/work`, under a tab for their `kind`.
 */
export const PROJECTS = {
  label: 'Latest Projects',
  title: 'Apps I Have Built',
  description:
    'Client apps I built with Flutter for Android and iOS, live on Google Play, and a full-stack online store built with React.',
  /** The top of the `/work` page. */
  page: {
    label: 'My Work',
    title: 'Projects I Have Built',
    description:
      'Mobile apps for Android and iOS and websites for the web, from client projects at BlackDevs to my own builds.',
  },
  /** The tabs of the `/work` page: every project, or only one kind. */
  tabs: [
    { kind: 'all', label: 'All Projects' },
    { kind: 'mobile', label: 'Mobile Apps' },
    { kind: 'web', label: 'Web Apps' },
  ] satisfies { kind: ProjectKind | 'all'; label: string }[],
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
        light: '/images/projects/crave-banner.webp',
        dark: '/images/projects/crave-banner.webp',
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
      banner: { light: '/images/projects/time-tracker-banner.webp', dark: '/images/projects/time-tracker-banner.webp' },
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
      banner: { light: '/images/projects/amar-seba-banner.webp', dark: '/images/projects/amar-seba-banner.webp' },
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
      slug: 'classyshop',
      kind: 'web',
      featured: true,
      title: 'ClassyShop: Online Store',
      category: 'MERN · E-Commerce',
      summary:
        'A full-stack online store with product categories, wishlist, cart, online payment, PDF invoices and an admin dashboard with sales charts.',
      banner: { light: '/images/projects/classyshop-banner.webp', dark: '/images/projects/classyshop-banner.webp' },
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
    // TODO: samples that show the `/work` page with more web projects. Replace them with real projects.
    sampleProject({
      slug: 'taskflow',
      title: 'TaskFlow: Team Task Manager',
      category: 'Next.js · Productivity',
      summary:
        'A task board where small teams plan work, move tasks from To Do to Done and see who is working on what.',
      tech: ['Next.js', 'Tailwind CSS', 'TanStack Query', 'MongoDB'],
      features: [
        'Boards with To Do, In Progress and Done columns.',
        'Tasks with owners, due dates and labels.',
        'A dashboard of what each person is working on.',
      ],
    }),
    sampleProject({
      slug: 'foodie',
      title: 'Foodie: Restaurant Website',
      category: 'React · Restaurant',
      summary: 'A restaurant website with a menu by category, online table booking and food ordering.',
      tech: ['React', 'Tailwind CSS', 'Firebase'],
      features: [
        'A menu grouped by category, with prices and photos.',
        'Table booking with a date and time picker.',
        'A cart and order form for takeaway.',
      ],
    }),
    sampleProject({
      slug: 'edulearn',
      title: 'EduLearn: Online Courses',
      category: 'MERN · Education',
      summary: 'An online course platform where students enrol in courses, watch lessons and track their progress.',
      tech: ['React', 'Express', 'MongoDB', 'JWT'],
      features: [
        'A course catalogue with search and categories.',
        'Lessons with progress tracking for each student.',
        'An instructor dashboard to add courses and lessons.',
      ],
    }),
    sampleProject({
      slug: 'travelnest',
      title: 'TravelNest: Travel Agency',
      category: 'Next.js · Travel',
      summary: 'A travel agency website with tour packages, destination guides and a booking request form.',
      tech: ['Next.js', 'Tailwind CSS'],
      features: [
        'Tour packages with prices, dates and itineraries.',
        'Destination pages with photos and travel tips.',
        'A booking request form that emails the agency.',
      ],
    }),
  ] satisfies Project[],
} as const;

/** The project with this slug, or undefined. */
export const findProject = (slug: string): Project | undefined => PROJECTS.items.find(item => item.slug === slug);
