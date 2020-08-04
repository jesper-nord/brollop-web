import { useState, useEffect } from 'react';
import { routes } from '../routes';

const parseRoute = page => {
  const currentRoute = page || (window.location.hash ? window.location.hash.replace('#', '') : '');
  return Object.keys(routes).find(route => route === currentRoute) || 'home';
};

export const useRouting = () => {
  const [route, setRoute] = useState(parseRoute());

  useEffect(() => {
    window.location.hash = route;
  }, [route]);

  useEffect(() => {
    const updateHash = () => setRoute(parseRoute());
    window.addEventListener('hashchange', updateHash, false);
    return () => window.removeEventListener('hashchange', updateHash, false);
  }, []);

  return {
    pageName: route,
    currentRoute: routes[route],
    navigate: page => setRoute(parseRoute(page))
  };
};
