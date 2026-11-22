import { ImageResponse } from 'next/og';

import { readFile } from 'node:fs/promises';
import { join } from 'node:path';

/**
 * The favicon: the logo mark (`public/images/logo.png`), generated at build time. 48px is Google's
 * minimum for the icon in search results (a multiple of 48px), and browsers scale it down for tabs.
 */
export const size = { width: 48, height: 48 };
export const contentType = 'image/png';

export default async function Icon() {
  const logo = await readFile(join(process.cwd(), 'public/images/logo.png'));

  return new ImageResponse(
    // eslint-disable-next-line @next/next/no-img-element -- ImageResponse needs a plain img
    <img src={`data:image/png;base64,${logo.toString('base64')}`} alt="" width={size.width} height={size.height} />,
    size,
  );
}
