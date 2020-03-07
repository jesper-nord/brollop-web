import { useState, useEffect } from 'react'

const getRoute = (hash, routes) => Object.keys(routes).find(route => route === hash) || routes.fallback

export const useHashNavigation = routes => {
  const hash = window.location.hash ? window.location.hash.replace('#', '') : ''
  const [route, setRoute] = useState(getRoute(hash, routes))

  useEffect(() => {
    window.location.hash = route
  }, [route])

  return { 
    route,
    navigate: hash => setRoute(getRoute(hash, routes))
  }
}
