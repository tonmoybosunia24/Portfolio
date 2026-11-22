import { ImageResponse } from 'next/og';

import { readFile } from 'node:fs/promises';
import { join } from 'node:path';

import { PROFILE } from '@/constants/profile';
import { SEO, SITE_URL } from '@/constants/seo';

export const alt = SEO.title;
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

/**
 * The preview image shown when a link to the site is shared (Facebook, LinkedIn, X, WhatsApp): the
 * name, role and address beside the portrait, in the site's colours. Generated at build time.
 */
export default async function OpengraphImage() {
  const portrait = await readFile(join(process.cwd(), 'public', SEO.image));
  const portraitSrc = `data:image/png;base64,${portrait.toString('base64')}`;

  return new ImageResponse(
    <div
      style={{
        display: 'flex',
        width: '100%',
        height: '100%',
        background: 'linear-gradient(135deg, #0d1117 0%, #151b23 60%, #3a0a1c 100%)',
        color: '#f0f6fc',
      }}
    >
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', flex: 1, padding: '0 72px' }}>
        <div style={{ display: 'flex', fontSize: 30, color: '#ff014f', fontWeight: 600, letterSpacing: 2 }}>
          PORTFOLIO
        </div>
        <div style={{ display: 'flex', marginTop: 18, fontSize: 76, fontWeight: 700, lineHeight: 1.1 }}>
          {PROFILE.fullName}
        </div>
        <div style={{ display: 'flex', marginTop: 22, fontSize: 38, color: '#b1bac4' }}>{SEO.jobTitle}</div>
        <div style={{ display: 'flex', marginTop: 10, fontSize: 30, color: '#b1bac4' }}>Flutter · React · Next.js</div>
        <div style={{ display: 'flex', marginTop: 6, fontSize: 30, color: '#b1bac4' }}>
          {SEO.location.locality}, Bangladesh
        </div>
        <div style={{ display: 'flex', marginTop: 48, fontSize: 28, color: '#ff014f' }}>{new URL(SITE_URL).host}</div>
      </div>
      {/* eslint-disable-next-line @next/next/no-img-element -- ImageResponse needs a plain img */}
      <img src={portraitSrc} alt="" width={530} height={580} style={{ alignSelf: 'flex-end', objectFit: 'cover' }} />
    </div>,
    size,
  );
}
