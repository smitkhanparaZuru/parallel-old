'use client';

import { usePathname } from 'next/navigation';
import { useBackgroundPath } from '../preserve-background';
import { BackgroundContent } from '../background-content';

export default function ProfilePage() {
  const pathname = usePathname();
  const backgroundPath = useBackgroundPath();

  if (pathname === '/dark/profile' && backgroundPath !== pathname) {
    return <BackgroundContent path={backgroundPath} />;
  }

  return <div className='text-white'>Profile Page</div>;
}
