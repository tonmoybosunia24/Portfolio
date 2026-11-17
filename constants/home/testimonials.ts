/**
 * The "Testimonials" section. Hidden for now (`visible: false`): the reviews below are samples that show
 * the layout. Replace them with real feedback from clients (with their permission), then set `visible`
 * to true. The pictures are illustrated avatars (Notionists by Zoish via DiceBear, CC0) in
 * `public/images/testimonials/`.
 */
export const TESTIMONIALS = {
  visible: false,
  label: 'Testimonials',
  title: 'What Clients Say',
  description:
    'Honest feedback from founders, product managers and teams I have collaborated with to bring their mobile app ideas to life.',
  items: [
    {
      quote:
        'Tonmoy turned our idea into a polished Flutter app for both Android and iOS. He kept us updated every step of the way and delivered ahead of schedule.',
      name: 'Sarah Mitchell',
      image: '/images/testimonials/sarah.webp',
      role: 'Founder, FitNest',
      rating: 5,
    },
    {
      quote:
        'Our old app was slow and crashed on many devices. After his performance work it loads twice as fast, and our store rating went up within a month.',
      name: 'Rahim Uddin',
      image: '/images/testimonials/rahim.webp',
      role: 'Product Manager, ShopKart',
      rating: 5,
    },
    {
      quote:
        'Clean code, clear communication and a smooth release on Google Play and the App Store. We will definitely work with him again on our next app.',
      name: 'Daniel Brooks',
      image: '/images/testimonials/daniel.webp',
      role: 'CTO, ChatWave',
      rating: 5,
    },
    {
      quote:
        'He rebuilt our Android app in Jetpack Compose and moved the old XML screens over without breaking anything. The new UI feels modern and fast.',
      name: 'Nadia Rahman',
      image: '/images/testimonials/nadia.webp',
      role: 'Co-founder, MediTrack',
      rating: 5,
    },
    {
      quote:
        'Real-time chat with WebSockets and Firebase sync worked perfectly from day one. Great problem solver and always quick to reply.',
      name: 'Kevin Tran',
      image: '/images/testimonials/kevin.webp',
      role: 'Lead Developer, TeamDesk',
      rating: 5,
    },
  ],
} as const;
