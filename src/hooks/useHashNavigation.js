import { useState, useEffect } from 'react';

export const useHashNavigation = (routes, fallback) => {
  const parseRoute = hash => Object.keys(routes).find(route => route === hash) || fallback;

  const hash = window.location.hash ? window.location.hash.replace('#', '') : '';
  const [route, setRoute] = useState(parseRoute(hash));

  useEffect(() => {
    window.location.hash = route;
  }, [route]);

  return {
    route,
    navigate: h => setRoute(parseRoute(h))
  };
};
