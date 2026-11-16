import type { ContentBlock } from '@/types';

import type { ProjectLink } from './projects';

export interface BlogPost {
  /** The post's address: `/blog/<slug>`. Lowercase words joined by hyphens. */
  slug: string;
  title: string;
  /** One or two sentences shown on the post's card and below its title. */
  excerpt: string;
  /** The day it was published, as `YYYY-MM-DD`. Posts are listed newest first. */
  date: string;
  category: string;
  /**
   * The cover: a 16:9 webp (1600×900) in `public/images/blog/`. For a photo from Unsplash (free to use
   * under the Unsplash License), `credit` names the photographer and links to them; leave it out for your
   * own images.
   */
  image: { src: string; alt: string; credit?: { name: string; href: string } };
  /** Buttons below the title, such as the repository. The first one is highlighted. */
  links?: readonly ProjectLink[];
  /** The post itself, in the same blocks as a project's write-up. */
  content: readonly ContentBlock[];
}

/** Where the template post's screenshots are. */
const SCREENS = '/images/blog/flutter-architecture-template';

/**
 * The "Latest Blogs" section and the blog pages. TODO: these are sample posts to show the layout; replace
 * them with your own articles.
 */
export const BLOG = {
  label: 'Latest Blogs',
  title: 'Notes From My Work',
  description:
    'Practical articles about Flutter, Android and building mobile apps, written from real projects and lessons learned along the way.',
  posts: [
    {
      slug: 'flutter-architecture-template',
      title: 'My Flutter Architecture Template: Start Every App Production-Ready',
      excerpt:
        'Why I built a feature-first Flutter starter on GetX, what it gives you out of the box and how to start your next app with it.',
      date: '2026-11-16',
      category: 'Flutter Template',
      image: {
        src: '/images/blog/flutter-architecture-template-cover.webp',
        alt: 'Banner: My Flutter Architecture Template, Start Every App Production-Ready, with the lib folder structure and a phone showing Build Better With Flutter',
      },
      links: [{ label: 'View on GitHub', href: 'https://github.com/tonmoybosunia24/flutter_template' }],
      content: [
        { type: 'heading', text: 'Why I Built It' },
        {
          type: 'paragraph',
          text: 'Every new Flutter app used to start the same way for me: a day or two of setting up folders, a network layer, themes, translations and token storage before the first real screen. Each project did it slightly differently, so moving between them meant relearning the basics every time.',
        },
        {
          type: 'paragraph',
          text: 'The Flutter Architecture Template is the answer to that. It is a production-ready, feature-first starter built on GetX. Every screen follows the same View → Controller → Repository → NetworkCaller layering, the design system is token-based, and the rules are enforced by tests, so the codebase stays consistent as it grows.',
        },
        { type: 'heading', text: 'What You Get Out of the Box' },
        {
          type: 'list',
          items: [
            'Splash → onboarding → login → a five-tab main shell, ready to fill with your screens.',
            'Light and dark themes, with the choice saved between launches.',
            'English, Bengali and Arabic, including a full right-to-left layout.',
            'Responsive sizing for phones, tablets, desktops and TVs.',
            'A network layer with secure token storage and automatic token refresh.',
            'CI on GitHub Actions that checks every pull request and builds signed releases from tags.',
          ],
        },
        {
          type: 'gallery',
          images: [
            { src: `${SCREENS}/onboarding.webp`, alt: 'The onboarding screen', caption: 'Onboarding' },
            { src: `${SCREENS}/login.webp`, alt: 'The login screen', caption: 'Login' },
            { src: `${SCREENS}/home-light.webp`, alt: 'The home feed in light mode', caption: 'Home · Light' },
            { src: `${SCREENS}/home-dark.webp`, alt: 'The home feed in dark mode', caption: 'Home · Dark' },
          ],
        },
        { type: 'heading', text: 'Feature-First Architecture' },
        {
          type: 'paragraph',
          text: 'Each feature lives in its own folder with the same shape: a binding, a controller, a view, and when needed a model, a repository and feature-only widgets. Views are logic-free GetView screens with a const constructor; all state lives in the controller. Only repositories talk to the network, and they turn JSON into typed models, so controllers only deal with state.',
        },
        {
          type: 'paragraph',
          text: 'The home feed is the reference implementation: a complete vertical slice from binding to view, with a skeleton while loading, empty, error and offline screens, pull-to-refresh and a create-post flow. When you add a feature, you copy its shape.',
        },
        { type: 'heading', text: 'A Network Layer You Can Trust' },
        {
          type: 'list',
          items: [
            'Every call returns one result type with either data or a typed error: no internet, timeout, 4xx, 5xx or unknown.',
            'Access and refresh tokens live in secure storage; preferences in GetStorage.',
            'An expired token is refreshed before the request, and a 401 triggers one refresh and one retry.',
            'Parallel requests share a single refresh, so a backend that rotates refresh tokens never logs the user out.',
            'Only a refused refresh logs the user out. Timeouts, network errors and server errors keep the session.',
          ],
        },
        {
          type: 'quote',
          text: 'Users should never be logged out because the Wi-Fi dropped. The network layer is built around that rule.',
        },
        { type: 'heading', text: 'Screen States and the Dev Switcher' },
        {
          type: 'paragraph',
          text: 'Every screen that loads data uses the same pattern: the controller mixes in ViewStateMixin and implements fetchData, and the view wraps its content in CustomStateView. You get a skeleton while loading, plus empty, error and offline screens with a retry button, all looking the same across the app.',
        },
        {
          type: 'paragraph',
          text: 'In debug builds, every data screen shows a small ⚙ button. Pick Live, Loading, Empty, Error or Offline and the screen shows that state without touching the backend, which makes designing and testing those states quick. Release builds leave it out.',
        },
        { type: 'heading', text: 'Design System, Languages and RTL' },
        {
          type: 'paragraph',
          text: 'Colors, text styles, spacing and radii all come from tokens, and the UI reads colors through a theme extension, so changing the brand color updates every screen. Every string lives in one place and is translated into English, Bengali and Arabic; Arabic flips the whole layout, including directional icons.',
        },
        {
          type: 'gallery',
          images: [
            { src: `${SCREENS}/profile-light.webp`, alt: 'The profile screen', caption: 'Profile' },
            { src: `${SCREENS}/language.webp`, alt: 'The language picker', caption: 'Language' },
            {
              src: `${SCREENS}/profile-rtl.webp`,
              alt: 'The profile screen in Arabic, laid out right to left',
              caption: 'Arabic (RTL)',
            },
          ],
        },
        { type: 'heading', text: 'Tests That Guard the Rules' },
        {
          type: 'paragraph',
          text: 'Besides tests for the network layer, screen states and translations, an architecture test fails the build when code breaks the conventions: hardcoded colors or asset paths, raw Text widgets, print statements, network imports in views or controllers, and more. New contributors, and AI coding agents, get the same rules through AGENTS.md.',
        },
        { type: 'heading', text: 'Getting Started' },
        {
          type: 'code',
          language: 'Terminal',
          code: 'git clone https://github.com/tonmoybosunia24/flutter_template.git\ncd flutter_template\nflutter pub get\nflutter run --dart-define=ENV=dev',
        },
        {
          type: 'paragraph',
          text: 'ENV can be dev, staging or prod and is fixed at compile time, so a release build can never point at a dev server by accident. The dev and staging hosts use a public mock server, so the template runs without a backend of your own. When you start a real app, the NEW_PROJECT checklist in the docs walks you through renaming, branding and removing the demo content.',
        },
        { type: 'heading', text: 'What Is Next' },
        {
          type: 'list',
          items: [
            'An iOS build job in CI, with code signing.',
            'Real Android and iOS flavors for separate app ids per environment.',
            'Crash reporting, with a step-by-step Firebase Crashlytics guide already in the docs.',
          ],
        },
        {
          type: 'paragraph',
          text: 'The template is open source under the MIT license. If it saves you a few days on your next app, give it a star on GitHub, and pull requests are always welcome.',
        },
      ],
    },
    {
      slug: 'make-your-flutter-app-faster',
      title: '5 Ways to Make Your Flutter App Faster',
      excerpt:
        'Simple, proven changes that cut jank and load time in real Flutter apps, from smarter rebuilds to lighter images.',
      date: '2025-10-12',
      category: 'Performance',
      image: {
        src: '/images/blog/make-your-flutter-app-faster-cover.webp',
        alt: 'Light trails of night traffic on a road, taken with a long exposure',
        credit: { name: 'Egor Litvinov', href: 'https://unsplash.com/@litvinov' },
      },
      content: [
        { type: 'heading', text: 'Why Speed Matters' },
        {
          type: 'paragraph',
          text: 'People judge an app in its first few seconds. A screen that stutters while scrolling or takes a moment too long to open feels broken, even when everything works. The good news is that most Flutter performance problems come from a handful of habits that are easy to fix.',
        },
        { type: 'heading', text: '1. Rebuild Less' },
        {
          type: 'paragraph',
          text: 'Every setState or provider change rebuilds a part of the widget tree. Keep state as close as possible to the widgets that use it, split large build methods into smaller widgets, and mark everything that never changes as const. Flutter skips const widgets entirely when it rebuilds.',
        },
        { type: 'heading', text: '2. Build Long Lists Lazily' },
        {
          type: 'paragraph',
          text: 'A Column inside a SingleChildScrollView builds every item at once, even the hundreds you cannot see. Use ListView.builder or a SliverList, which only build the items on screen, and give items a fixed extent when they all have the same height.',
        },
        { type: 'heading', text: '3. Size Your Images' },
        {
          type: 'paragraph',
          text: 'A 4000-pixel photo shown in a 100-pixel avatar still has to be decoded at full size. Set cacheWidth and cacheHeight, or resize images on the server, so the phone only decodes the pixels it actually shows.',
        },
        { type: 'heading', text: '4. Move Heavy Work Off the UI Thread' },
        {
          type: 'paragraph',
          text: 'Parsing a large JSON response or processing an image on the main isolate freezes animations. Run that work with compute or Isolate.run, and the interface stays smooth while it finishes in the background.',
        },
        { type: 'heading', text: '5. Measure Before You Guess' },
        {
          type: 'list',
          items: [
            'Profile in profile mode on a real, mid-range phone, never in debug mode.',
            'Use the DevTools performance view to find frames that take longer than 16 ms.',
            'Turn on the rebuild counter to see which widgets rebuild far more often than expected.',
          ],
        },
        {
          type: 'quote',
          text: 'The fastest code is the code that never runs. Most speed-ups come from doing less, not from doing it cleverly.',
        },
        { type: 'heading', text: 'Wrapping Up' },
        {
          type: 'paragraph',
          text: 'You rarely need tricks to make a Flutter app fast. Rebuild less, build lazily, decode only what you show, keep heavy work off the UI thread and measure on real devices. Those five habits cover almost every slow app I have worked on.',
        },
      ],
    },
    {
      slug: 'riverpod-vs-bloc',
      title: 'Riverpod vs BLoC: Which One Should You Choose?',
      excerpt:
        'A practical comparison of the two most popular state management options in Flutter, and how I decide between them.',
      date: '2025-08-28',
      category: 'State Management',
      image: {
        src: '/images/blog/riverpod-vs-bloc-cover.webp',
        alt: 'Code on a computer screen with a dark theme',
        credit: { name: 'Bernd Dittrich', href: 'https://unsplash.com/@hdbernd' },
      },
      content: [
        { type: 'heading', text: 'The Question Everyone Asks' },
        {
          type: 'paragraph',
          text: 'Almost every Flutter developer reaches the same point: the app has grown, setState is no longer enough, and it is time to pick a state management library. Riverpod and BLoC are the two most common answers. Both are excellent; they simply suit different teams and projects.',
        },
        { type: 'heading', text: 'Riverpod in Short' },
        {
          type: 'paragraph',
          text: 'Riverpod lets you declare small providers for each piece of state and read them anywhere, without depending on the widget tree. It handles loading and error states for you, caches results and disposes of what is no longer used.',
        },
        { type: 'heading', text: 'BLoC in Short' },
        {
          type: 'paragraph',
          text: 'BLoC separates the app into events that come in and states that go out. Every change has a clear cause, which makes the flow of a feature easy to follow and to test, at the cost of more code for each feature.',
        },
        { type: 'heading', text: 'How I Choose' },
        {
          type: 'list',
          items: [
            'Small team or solo project, and speed matters: Riverpod.',
            'Large team that needs strict, predictable structure: BLoC.',
            'Many screens that load data from an API: Riverpod, thanks to its async providers.',
            'Complex flows with many steps, like checkout or onboarding: BLoC.',
          ],
        },
        {
          type: 'quote',
          text: 'The best state management library is the one your whole team understands and uses the same way.',
        },
        { type: 'heading', text: 'Conclusion' },
        {
          type: 'paragraph',
          text: 'There is no wrong choice between the two. Pick one, agree on a few conventions with your team and apply them everywhere. Consistency matters far more than the library itself.',
        },
      ],
    },
    {
      slug: 'offline-first-flutter-app',
      title: 'Building an Offline-First App with Flutter and Hive',
      excerpt:
        'How to design an app that works without a connection: store data locally first, sync later and never lose a change.',
      date: '2025-07-15',
      category: 'Architecture',
      image: {
        src: '/images/blog/offline-first-flutter-app-cover.webp',
        alt: 'A phone held up in front of an airplane window',
        credit: { name: 'Valeria Kodra', href: 'https://unsplash.com/photos/j3BEkv_tSrU' },
      },
      content: [
        { type: 'heading', text: 'What Offline-First Means' },
        {
          type: 'paragraph',
          text: 'An offline-first app treats the phone’s own storage as the main source of truth. Every screen reads from the local database, and every change is saved there first. The network is used only to sync in the background, so the app is fast and works anywhere.',
        },
        { type: 'heading', text: 'Choosing Local Storage' },
        {
          type: 'paragraph',
          text: 'Hive is a fast key-value database written in pure Dart, which makes it a good fit for most apps. When you need complex queries or relations, an SQL database such as Drift is the better choice. Either way, put it behind a repository class so the rest of the app never talks to the database directly.',
        },
        { type: 'heading', text: 'Syncing Changes' },
        {
          type: 'list',
          items: [
            'Save each change locally with a status such as pending.',
            'Keep an outbox of pending changes and send them when the connection returns.',
            'Give every item an id created on the phone, so a retry never creates a duplicate.',
            'Mark items as synced only after the server confirms them.',
          ],
        },
        { type: 'heading', text: 'Handling Conflicts' },
        {
          type: 'paragraph',
          text: 'Sometimes the same item changes on two devices. For most apps the simplest rule works: the newest change wins. When data is too important for that, keep both versions and let the user choose.',
        },
        { type: 'heading', text: 'Final Thoughts' },
        {
          type: 'paragraph',
          text: 'Offline-first takes a little more planning at the start, but it pays back quickly: the app feels instant, works on trains and in basements, and users never lose their work.',
        },
      ],
    },
    {
      slug: 'publish-your-first-app',
      title: 'From Code to Store: Publishing Your First App',
      excerpt:
        'A step-by-step checklist for releasing a Flutter app on Google Play and the App Store without last-minute surprises.',
      date: '2025-05-30',
      category: 'Publishing',
      image: {
        src: '/images/blog/publish-your-first-app-cover.webp',
        alt: 'A rocket launching into a clear sky',
        credit: { name: 'SpaceX', href: 'https://unsplash.com/@spacex' },
      },
      content: [
        { type: 'heading', text: 'Before You Build' },
        {
          type: 'list',
          items: [
            'Choose a final app id (package name), as it cannot be changed after the first release.',
            'Prepare the app icon, a short description and a privacy policy page.',
            'Set the version and build number in pubspec.yaml.',
          ],
        },
        { type: 'heading', text: 'Google Play' },
        {
          type: 'paragraph',
          text: 'Create an upload key, configure signing and build an app bundle with flutter build appbundle. Start with an internal testing track: it reaches your testers within minutes and catches problems before the public sees them.',
        },
        { type: 'heading', text: 'The App Store' },
        {
          type: 'paragraph',
          text: 'You need an Apple developer account, a Mac with Xcode and the app registered in App Store Connect. Build with flutter build ipa, upload it, and test it with TestFlight before submitting it for review.',
        },
        { type: 'heading', text: 'Store Listing' },
        {
          type: 'paragraph',
          text: 'Screenshots sell the app more than the description does. Show the most useful screen first, add a short caption to each, and keep the first line of the description clear and specific.',
        },
        {
          type: 'quote',
          text: 'Release early to a small group of testers. Every surprise you find there is one your users never see.',
        },
        { type: 'heading', text: 'After Launch' },
        {
          type: 'paragraph',
          text: 'Watch crash reports and reviews closely in the first weeks, reply to users and ship small fixes quickly. A steady stream of updates also tells the stores, and your users, that the app is alive.',
        },
      ],
    },
  ] satisfies BlogPost[],
} as const;

/** All posts, newest first. */
export const sortedPosts = (): BlogPost[] => [...BLOG.posts].sort((a, b) => b.date.localeCompare(a.date));

/** The post with this slug, or undefined. */
export const findPost = (slug: string): BlogPost | undefined => BLOG.posts.find(post => post.slug === slug);
