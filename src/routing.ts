import { useEffect, useState } from 'react';

export const normalizePath = (path: string) => {
  const cleanPath = path.split('?')[0].replace(/\/+$/, '');
  return cleanPath || '/';
};

export const navigateTo = (path: string) => {
  window.history.pushState({}, '', path);
  window.dispatchEvent(new PopStateEvent('popstate'));
};

export const usePathname = () => {
  const [pathname, setPathname] = useState(() => normalizePath(window.location.pathname));

  useEffect(() => {
    const handlePopState = () => setPathname(normalizePath(window.location.pathname));
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  return pathname;
};
