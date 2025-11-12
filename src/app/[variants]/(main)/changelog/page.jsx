'use client';

import { usePathname } from 'next/navigation';
import { useBackgroundPath } from '../preserve-background';
import { BackgroundContent } from '../background-content';

export default function ChangelogPage() {
  const pathname = usePathname();
  const backgroundPath = useBackgroundPath();

  if (pathname === '/dark/changelog' && backgroundPath !== pathname) {
    return <BackgroundContent path={backgroundPath} />;
  }

  return <div className='text-white'>Changelog Page</div>;
}
