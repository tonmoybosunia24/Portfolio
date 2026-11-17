import type { BlogPost } from '@/types';

/** The template post's screenshots. */
const SCREENS = '/images/blog/flutter-architecture-template';

/** All posts. The home page shows the newest three. */
export const BLOG = {
  label: 'Latest Blogs',
  title: 'Notes From My Work',
  description:
    'Practical articles about Flutter and building mobile apps, written from real client projects and lessons learned along the way.',
  posts: [
    {
      slug: 'flutter-architecture-template',
      title: 'My Flutter Architecture Template: Start Every App',
      excerpt:
        'Why I built a feature-first Flutter starter on GetX, what it gives you out of the box and how to start your next app with it.',
      date: '2026-11-16',
      category: 'Flutter Template',
      image: {
        src: '/images/blog/flutter-architecture-template-banner-v2.webp',
        alt: 'Banner: My Flutter Architecture Template, Start Every App Production-Ready, with four stacked blue layers',
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
      slug: 'publish-your-first-app',
      title: 'From Code to Store: What I Learned Publishing Six Apps',
      excerpt:
        'The checklist I follow before every release on Google Play, from app ids and permissions to testers, the data safety form and the first weeks after launch.',
      date: '2026-10-08',
      category: 'Publishing',
      image: {
        src: '/images/blog/publishing-six-apps-banner-v2.webp',
        alt: 'Banner: From Code to Store, What I Learned Publishing Six Apps, with a play icon linked to six coloured dots',
      },
      content: [
        { type: 'heading', text: 'Why a Checklist' },
        {
          type: 'paragraph',
          text: 'In my first year at BlackDevs I have taken six Flutter apps from code to Google Play, including Crave, Precise Clock and Amar Seba. The code is rarely what delays a release. It is the small things around it: a missing permission note, a rejected screenshot, a signing key nobody can find. This is the checklist I now follow for every app.',
        },
        { type: 'heading', text: 'Before You Build' },
        {
          type: 'list',
          items: [
            'Choose the final app id (package name) early. It cannot be changed after the first release.',
            'Prepare the icon, a short and a full description, screenshots and a privacy policy page.',
            'Set the version and build number in pubspec.yaml, and raise the build number for every upload.',
            'Point the app at the production API and Firebase project, not the staging ones.',
          ],
        },
        { type: 'heading', text: 'Permissions Need a Reason' },
        {
          type: 'paragraph',
          text: 'The apps I build use Google Maps, push notifications and local notifications, and each of those needs a permission the store will ask about. Location access has to be explained in the listing, notifications must be requested at runtime on Android 13 and newer, and exact alarms for scheduled reminders need their own declaration. Ask for each permission at the moment the user needs it, with one sentence that says why, and remove every permission the app does not use.',
        },
        { type: 'heading', text: 'Google Play' },
        {
          type: 'paragraph',
          text: 'Create an upload key, keep it somewhere safe that the whole team can reach, and build an app bundle with flutter build appbundle. Fill in the data safety form honestly: it has to match what the app and its SDKs, such as Firebase, really collect. New personal developer accounts also have to run a closed test with real testers for two weeks before production, so plan that time into the schedule.',
        },
        { type: 'heading', text: 'The App Store' },
        {
          type: 'paragraph',
          text: 'For iOS you need an Apple developer account, a Mac with Xcode and the app registered in App Store Connect. Push notifications need an APNs key added to Firebase, or they silently never arrive. Build with flutter build ipa, upload it and test it with TestFlight before submitting it for review.',
        },
        {
          type: 'quote',
          text: 'Release early to a small group of testers. Every surprise you find there is one your users never see.',
        },
        { type: 'heading', text: 'Store Listing' },
        {
          type: 'paragraph',
          text: 'Screenshots sell the app more than the description does. Show the most useful screen first, add a short caption to each and keep the first line of the description clear and specific. For a Bangla app like Amar Seba, write the listing in the language its users read.',
        },
        { type: 'heading', text: 'After Launch' },
        {
          type: 'paragraph',
          text: 'Watch crash reports and reviews closely in the first weeks, reply to users and ship small fixes quickly. A steady stream of updates tells the store, and your users, that the app is alive.',
        },
      ],
    },
    {
      slug: 'make-your-flutter-app-faster',
      title: '5 Ways to Make Your Flutter App Faster',
      excerpt:
        'Simple changes that cut jank and load time in the GetX apps I build every day, from smaller rebuilds to parsing API responses off the UI thread.',
      date: '2026-08-20',
      category: 'Performance',
      image: {
        src: '/images/blog/flutter-performance-banner-v2.webp',
        alt: 'Banner: 5 Ways to Make Your Flutter App Faster, with five rising bars numbered 1 to 5',
      },
      content: [
        { type: 'heading', text: 'Why Speed Matters' },
        {
          type: 'paragraph',
          text: 'People judge an app in its first few seconds. A screen that stutters while scrolling or takes a moment too long to open feels broken, even when everything works. In the Flutter apps I build at BlackDevs, almost every slow screen came down to one of the five habits below, and each one is easy to fix.',
        },
        { type: 'heading', text: '1. Rebuild Less' },
        {
          type: 'paragraph',
          text: 'With GetX it is tempting to wrap a whole screen in one Obx. Then every change, even a single counter, rebuilds everything inside it. Wrap only the widget that shows the value, split large build methods into smaller widgets and mark everything that never changes as const, which Flutter skips entirely when it rebuilds.',
        },
        { type: 'heading', text: '2. Build Long Lists Lazily' },
        {
          type: 'paragraph',
          text: 'A Column inside a SingleChildScrollView builds every item at once, even the hundreds you cannot see. Lists of timecards, applications or products should use ListView.builder or a SliverList, which only build the items on screen, with a fixed item extent when all items have the same height.',
        },
        { type: 'heading', text: '3. Size Your Images' },
        {
          type: 'paragraph',
          text: 'A 4000-pixel photo shown in a 100-pixel avatar still has to be decoded at full size. Set cacheWidth and cacheHeight, or ask the API for a smaller image, so the phone only decodes the pixels it actually shows.',
        },
        { type: 'heading', text: '4. Parse API Responses Off the UI Thread' },
        {
          type: 'paragraph',
          text: 'Decoding a large JSON response from a REST API on the main isolate freezes animations for a moment. Run that work with compute or Isolate.run, and the interface stays smooth while the data loads. The same goes for frequent WebSocket messages: update only the values that changed instead of rebuilding the whole list.',
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
          text: 'You rarely need tricks to make a Flutter app fast. Rebuild less, build lazily, decode only what you show, keep heavy work off the UI thread and measure on real devices. Those five habits cover almost every slow screen I have worked on.',
        },
      ],
    },
  ] satisfies BlogPost[],
} as const;

export const sortedPosts = (): BlogPost[] => [...BLOG.posts].sort((a, b) => b.date.localeCompare(a.date));

export const findPost = (slug: string): BlogPost | undefined => BLOG.posts.find(post => post.slug === slug);
