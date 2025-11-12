'use client';

import { usePathname } from 'next/navigation';
import { createContext, useContext, useEffect, useRef, useState } from 'react';

const BackgroundContext = createContext('/dark/chat');

// Routes that should be intercepted as modals
const MODAL_ROUTES = new Set([
  '/dark/profile',
  '/dark/setting',
  '/dark/changelog',
]);

export function BackgroundProvider({ children }) {
  const pathname = usePathname();
  const [backgroundPath, setBackgroundPath] = useState(() =>
    MODAL_ROUTES.has(pathname) ? '/dark/chat' : pathname
  );
  const previousPathRef = useRef(pathname);
  const isInitialMount = useRef(true);

  useEffect(() => {
    const isModalRoute = MODAL_ROUTES.has(pathname);
    const previousWasModal = MODAL_ROUTES.has(previousPathRef.current);

    if (isInitialMount.current) {
      isInitialMount.current = false;
      if (isModalRoute) {
        try {
          const savedBackground =
            globalThis.window?.sessionStorage.getItem('background-path');
          if (savedBackground && !MODAL_ROUTES.has(savedBackground)) {
            setBackgroundPath(savedBackground);
          }
        } catch {
          // Ignore sessionStorage errors
        }
      } else {
        setBackgroundPath(pathname);
        previousPathRef.current = pathname;
        try {
          globalThis.window?.sessionStorage.setItem(
            'background-path',
            pathname
          );
        } catch {
          // Ignore sessionStorage errors
        }
      }
      return;
    }

    if (isModalRoute && !previousWasModal) {
      try {
        globalThis.window?.sessionStorage.setItem(
          'background-path',
          previousPathRef.current
        );
      } catch {
        // Ignore sessionStorage errors
      }
    } else if (!isModalRoute) {
      setBackgroundPath(pathname);
      previousPathRef.current = pathname;
      try {
        globalThis.window?.sessionStorage.setItem('background-path', pathname);
      } catch {
        // Ignore sessionStorage errors
      }
    }
  }, [pathname]);

  return (
    <BackgroundContext.Provider value={backgroundPath}>
      {children}
    </BackgroundContext.Provider>
  );
}

export function useBackgroundPath() {
  return useContext(BackgroundContext);
}
