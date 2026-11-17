import type { BlogPost } from '@/types';

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
          text: 'The Flutter Architecture Template is the answer to that. It is a production-ready, feature-first starter built on GetX. Every screen follows the same View → Controller → Repository → NetworkCaller layering, the design system is token-based, and the rules are enforced by tests, so the codebase stays consistent as it grows. It is open source under the MIT license.',
        },
        { type: 'heading', text: 'What You Get Out of the Box' },
        {
          type: 'list',
          items: [
            'Splash → onboarding → login → a five-tab main shell, ready to fill with your screens.',
            'Light and dark themes, with the choice saved between launches.',
            'English, Bengali and Arabic, including a full right-to-left layout.',
            'Responsive sizing for phones, tablets, desktops and TVs.',
            'A network layer with secure token storage, automatic token refresh and offline detection.',
            'Loading skeletons and empty, error and offline screens that look the same on every data screen.',
            'A home feed built as a complete reference feature, from binding to view.',
            'Tests that fail the build when code breaks the conventions, and CI on GitHub Actions that builds signed releases from tags.',
          ],
        },
        { type: 'heading', text: 'Getting Started' },
        {
          type: 'paragraph',
          text: 'You need Flutter 3.47 or newer and Dart 3.13.7 or newer. Android and iOS (15.0 or newer) are the main targets; the web and desktop runners are included, but review token storage before shipping to them. Clone the repository, fetch the packages and run it:',
        },
        {
          type: 'code',
          language: 'Terminal',
          code: 'git clone https://github.com/tonmoybosunia24/flutter_template.git\ncd flutter_template\nflutter pub get\nflutter run --dart-define=ENV=dev',
        },
        {
          type: 'paragraph',
          text: 'ENV can be dev, staging or prod, and anything else falls back to dev. It is fixed at compile time, so a release build can never point at a dev server by accident. The dev and staging hosts use a public mock server that serves the home feed, so the template runs without a backend of your own. To point any build at another server, override the base URL; release builds work the same way:',
        },
        {
          type: 'code',
          language: 'Terminal',
          code: 'flutter run --dart-define=API_BASE_URL=https://your.api.com\n\nflutter build apk --release --dart-define=ENV=prod\nflutter build appbundle --release --dart-define=ENV=prod\nflutter build ipa --release --dart-define=ENV=prod',
        },
        { type: 'heading', text: 'Project Structure' },
        {
          type: 'paragraph',
          text: 'Shared code lives in core/, and every feature gets its own folder with the same shape. The network folder is deliberately left out of the core barrel export, so only repositories can reach it.',
        },
        {
          type: 'code',
          language: 'Text',
          code: 'lib/\n├── main.dart          # GetStorage init + StorageService\n├── app.dart           # GetMaterialApp: ScreenUtil, themes, locales, routes\n├── bindings/          # Global dependencies (NetworkCaller)\n├── core/\n│   ├── config/        # EnvConfig: dev / staging / prod + base URL\n│   ├── network/       # NetworkCaller, ApiEndpoints, ResponseData, AppError\n│   ├── storage/       # StorageService (GetStorage + secure storage)\n│   ├── theme/         # AppColors, AppColorScheme, AppTheme\n│   ├── localization/  # English, Bengali and Arabic\n│   ├── utils/         # Dimensions, strings, assets, validators, ViewStateMixin\n│   └── widgets/       # Custom* reusable widgets\n├── features/\n│   ├── splash/  onboarding/  auth/  main/\n│   ├── home/          # The reference feature\n│   ├── search/  notification/  settings/   # "Coming soon" tabs\n│   └── profile/       # Theme switch, language screen, logout\n└── routes/            # AppRoutes + AppPages\n\nfeatures/<feature>/\n├── binding/  controller/  view/\n└── model/  repository/  widgets/   # when needed',
        },
        { type: 'heading', text: 'Feature-First Architecture' },
        {
          type: 'paragraph',
          text: 'Each layer has one job, and the rules are strict so every feature reads the same:',
        },
        {
          type: 'list',
          items: [
            'Models are immutable classes with a const constructor and a fromJson factory.',
            'Repositories are the only layer that talks to NetworkCaller. They turn JSON into typed models, take every request value as a typed named parameter and never a raw map, and turn a parsing error into a logged, typed failure.',
            'Controllers own all state as .obs values, check isClosed after every await, and dispose their text, page and scroll controllers and timers in onClose.',
            'Bindings register repositories and controllers with Get.lazyPut, so a controller is created when its screen opens and disposed when it closes.',
            'Views are logic-free GetView screens with a const constructor. No _buildXxx() helper methods and no StatefulWidget: a large block becomes its own widget class.',
            'A widget used by one feature lives in that feature’s widgets folder with the feature’s prefix (HomePostCard); a widget shared by several features goes to core/widgets as Custom*.',
          ],
        },
        {
          type: 'paragraph',
          text: 'The home feed is the reference implementation: a complete vertical slice from binding to controller, repository, typed model (HomePost) and view, with a skeleton while loading, empty, error and offline screens, pull-to-refresh and a create-post flow. When you add a feature, you copy its shape.',
        },
        { type: 'heading', text: 'A Network Layer You Can Trust' },
        {
          type: 'list',
          items: [
            'Every call returns one result type, ResponseData, with either data or a typed AppError: no internet, timeout, 400, 401, 403, 404, 5xx or unknown. The UI decides how to show it.',
            'Access and refresh tokens live in secure storage; preferences and flags in GetStorage.',
            'An expired token is refreshed before the request, and a 401 triggers one refresh and one retry.',
            'Parallel requests share a single refresh, so a backend that rotates refresh tokens never logs the user out.',
            'Only a refused refresh (400, 401 or 403) logs the user out. Timeouts, network errors and server errors keep the session.',
            'Requests fail fast as offline when the device has no network, and also when it is on a network that can’t reach the server, like Wi-Fi without internet.',
            'File uploads use the same refresh-and-retry behaviour.',
            'NetworkCaller takes its HTTP client, connectivity check and storage as parameters, so it is unit-tested without sockets or plugins.',
          ],
        },
        {
          type: 'quote',
          text: 'Users should never be logged out because the Wi-Fi dropped. The network layer is built around that rule.',
        },
        { type: 'heading', text: 'Connecting Your Backend' },
        {
          type: 'paragraph',
          text: 'NetworkCaller works with most REST APIs as they are. Every request sends a Bearer token with JSON headers, and both common success shapes work: an envelope whose data field is unwrapped, or plain JSON. An empty body, like 204 No Content, is a success with no data.',
        },
        {
          type: 'code',
          language: 'JSON',
          code: '// Envelope: "data" becomes the result\n{ "status": "success", "data": { "id": 1, "title": "Hello" } }\n\n// Plain JSON: the whole body becomes the result\n{ "id": 1, "title": "Hello" }\n\n// Errors: "message" is shown to the user as it is\n{ "message": "Email is already registered" }',
        },
        {
          type: 'paragraph',
          text: 'For an error, a message string is shown as it is, and a list of messages, like NestJS validation errors, one per line. Without a message, a translated default for the status code is used. When the access token has expired, or a request returns 401, the app refreshes it:',
        },
        {
          type: 'code',
          language: 'HTTP',
          code: 'POST {baseUrl}/auth/refresh\n{ "refresh_token": "<refresh_token>" }\n\n→ { "data": { "access_token": "...", "refresh_token": "...", "expires_in": 3600 } }',
        },
        {
          type: 'list',
          items: [
            '200 with valid tokens: the tokens are saved and the original request is retried once.',
            '400, 401 or 403: the session is cleared and the user is sent to login.',
            '5xx, a timeout or no network: the session is kept and the request fails with an error.',
            'expires_in is in seconds. Without it, the app reads the JWT exp claim; without both, it refreshes only when a request returns 401. A known expiry is refreshed 30 seconds early.',
            'The backend must answer a missing or invalid token with 401, not 403.',
          ],
        },
        {
          type: 'paragraph',
          text: 'The login screen ships as UI only. To connect it, add an AuthRepository that calls the login endpoint with isAuthCall: true, so no stale token is attached, and save the result with StorageService.saveTokens. The splash screen already treats a saved token as a logged-in session, and the profile tab’s logout clears the tokens and opens login.',
        },
        { type: 'heading', text: 'Screen States and the Dev Switcher' },
        {
          type: 'paragraph',
          text: 'Every screen that loads data uses the same system, so loading, empty, error, offline and content look and behave the same everywhere. The controller mixes in ViewStateMixin and implements fetchData; the mixin calls it on init, and retry and pull-to-refresh call it again.',
        },
        {
          type: 'code',
          language: 'Dart',
          code: 'class OrderController extends GetxController with ViewStateMixin {\n  final OrderRepository _repository = Get.find<OrderRepository>();\n  final RxList<Order> orders = <Order>[].obs;\n\n  @override\n  Future<void> fetchData() async {\n    final response = await runLoad(_repository.getOrders);\n    // Null when the screen closed, a newer load started, or a dev scenario is forced.\n    if (response == null) return;\n\n    if (response.isSuccess) orders.assignAll(response.data ?? const []);\n    showResult(\n      isSuccess: response.isSuccess,\n      isEmpty: orders.isEmpty,\n      error: response.errorMessage,\n      isOffline: response.error?.isNoInternet ?? false,\n    );\n  }\n}',
        },
        {
          type: 'paragraph',
          text: 'The view wraps its content in CustomStateView, which shows a skeleton shaped like the content while loading, and empty, error and offline screens with a Try again button:',
        },
        {
          type: 'code',
          language: 'Dart',
          code: 'body: Obx(\n  () => CustomStateView(\n    state: controller.state.value,\n    isRetrying: controller.isLoading.value,\n    errorMessage: controller.errorMessage.value,\n    onRetry: controller.fetchData,\n    loadingChild: const OrderListSkeleton(),\n    child: const OrderList(),\n  ),\n),',
        },
        {
          type: 'list',
          items: [
            'Success with items shows the content; success with no items shows the empty screen.',
            'A failed refresh while content is on screen keeps the content and shows a “Couldn’t refresh” snackbar.',
            'A failure with nothing on screen shows the offline screen without internet, otherwise the error screen with the server’s message.',
            'A reply from an older request, or from a screen that has closed, is ignored.',
          ],
        },
        {
          type: 'paragraph',
          text: 'In debug builds, every data screen shows a small ⚙ button. Pick Live, Loading, Empty, Error or Offline and the screen shows that state without touching the backend, which makes designing and testing those states quick. Release builds never draw it, and the code is removed at compile time.',
        },
        { type: 'heading', text: 'Adding a New Feature' },
        {
          type: 'list',
          items: [
            'Create lib/features/<feature>/ with binding, controller and view folders, plus model, repository and widgets when needed.',
            'Add any new endpoint as a getter in ApiEndpoints, built from the base URL.',
            'Add the new strings to AppStrings and translate them in English, Bengali and Arabic.',
            'Add the route name to AppRoutes and register the page and its binding in AppPages; for a main tab, register the binding in MainBinding instead.',
            'If the screen loads data, use ViewStateMixin and CustomStateView, and check every state with the ⚙ switcher.',
            'Run flutter analyze and flutter test. The architecture test flags anything that breaks the conventions.',
          ],
        },
        { type: 'heading', text: 'Design System and Responsive Sizing' },
        {
          type: 'list',
          items: [
            'Colors come from AppColorScheme, a theme extension with light and dark variants, read with context.appColors. No hardcoded colors in the UI, so changing the brand color in AppColors updates every screen.',
            'Text always goes through CustomText with a style from the theme (Poppins via Google Fonts), scaled automatically. No fontSize or fontWeight on single widgets.',
            'Every padding, radius, icon and font size is a token in AppDimensions, scaled with getWidth, getHeight, getRadius or getSp. No magic numbers.',
            'Assets are typed: IconPath for SVG icons, IllustrationPath for artwork and ImagePath for photos. No asset path strings in code.',
            'Reusable widgets cover the common needs: CustomAppBar, CustomButton, CustomPillButton, CustomTextField, CustomText, CustomSvgIcon, CustomNetworkImage, CustomRingAvatar, CustomLoader, CustomStateView, CustomSkeleton and more.',
            'flutter_screenutil scales from a 412 × 917 design, and AppSizeClass detects mobile, tablet, desktop and TV, with a maximum content width, side padding and per-breakpoint values.',
          ],
        },
        { type: 'heading', text: 'Languages and RTL' },
        {
          type: 'paragraph',
          text: 'Every string is a key in AppStrings, read with .tr and translated into English, Bengali and Arabic. Arabic flips the whole layout: spacing uses directional insets and alignment, and directional icons like the back arrow flip with it. The theme (light, dark or system) and the language are saved and restored on launch. Adding a language means one new translation file, registering it in AppTranslations and adding its locale; a test fails if any language is missing a key.',
        },
        { type: 'heading', text: 'App Flow' },
        {
          type: 'list',
          items: [
            'The splash screen runs startup work alongside a minimum display time, then opens onboarding on the first run, the main shell for a valid session, or login.',
            'The main shell keeps all five tabs alive in an IndexedStack, so scroll position and state survive tab switches.',
            'Search, notifications and settings are “Coming soon” placeholder tabs, ready to be replaced with your screens.',
          ],
        },
        { type: 'heading', text: 'Tests That Guard the Rules' },
        {
          type: 'list',
          items: [
            'Network: response parsing, error mapping, token refresh, single-flight refresh, logout rules, timeouts, offline handling and file-upload retry.',
            'Screen states: content, empty, error and offline, failed refreshes, late and closed replies, and forced dev scenarios.',
            'Localization: every language has every key, with no empty values.',
            'Architecture: the build fails on hardcoded colors or asset paths, raw Text widgets, print statements, network imports in views or controllers, _buildXxx() methods, hoisted sizes, unprefixed feature widgets and malformed doc comments.',
          ],
        },
        {
          type: 'paragraph',
          text: 'Unit tests inject fakes, a mock HTTP client and a fake storage service, instead of touching platform channels. The same rules are written down for people in docs/ARCHITECTURE.md and for AI coding agents in AGENTS.md, which CLAUDE.md imports, so Claude Code, Cursor and Codex follow the same conventions as every other contributor.',
        },
        { type: 'heading', text: 'CI/CD and Releases' },
        {
          type: 'list',
          items: [
            'A pull request to main or dev runs the format check, flutter analyze and flutter test, with a coverage report.',
            'A push to dev builds a release APK for the dev environment; a push to main builds one for staging.',
            'A version tag builds a signed APK and app bundle for production and publishes them as a GitHub Release.',
            'The version name comes from the tag and the build number from the workflow run, so every build has a higher version code.',
            'Signing uses four repository secrets for the upload keystore. Without them, branch builds use debug keys and tag releases fail.',
          ],
        },
        {
          type: 'code',
          language: 'Terminal',
          code: 'git tag v1.0.0\ngit push origin v1.0.0',
        },
        { type: 'heading', text: 'Starting a Real App' },
        {
          type: 'paragraph',
          text: 'The docs include a NEW_PROJECT checklist that takes you from the template to your own app:',
        },
        {
          type: 'list',
          items: [
            'Set the bundle id and app name (the rename package is already included), the in-app name and the pubspec description.',
            'Delete the platforms you won’t ship, and set your colors, font, app icon, native splash and onboarding artwork.',
            'Remove the demo content and point EnvConfig at your real servers, then wire up login and logout.',
            'Keep or remove languages, add only the permissions you need, and write a privacy policy for both stores.',
            'Create the Android upload key, add the CI secrets and set up iOS signing in Xcode.',
            'Run a release build on a real device and check that the CI run is green.',
          ],
        },
        { type: 'heading', text: 'Tech Stack' },
        {
          type: 'list',
          items: [
            'get (GetX) for state, dependency injection, routing and translations.',
            'flutter_screenutil for responsive sizing.',
            'get_storage for preferences and flutter_secure_storage for tokens.',
            'http and connectivity_plus for networking.',
            'flutter_svg for icons and google_fonts for typography.',
            'logger, wrapped in a debug-only AppLogger, and flutter_lints.',
          ],
        },
        { type: 'heading', text: 'What Is Next' },
        {
          type: 'list',
          items: [
            'A real login API: the login screen is UI only for now.',
            'An iOS build job in CI, with code signing.',
            'Real Android and iOS flavors for separate app ids and icons per environment.',
            'Crash reporting, with a step-by-step Firebase Crashlytics guide already in the docs.',
            'A custom app icon and native splash, which are still the Flutter defaults.',
          ],
        },
        {
          type: 'paragraph',
          text: 'If the template saves you a few days on your next app, give it a star on GitHub. Pull requests against the dev branch are always welcome; just follow the rules in AGENTS.md and make sure flutter analyze and flutter test pass.',
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
