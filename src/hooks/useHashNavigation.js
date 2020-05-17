import { useState, useEffect } from 'react'

export const useHashNavigation = (routes, fallback) => {
  const getRoute = hash => 
    Object.keys(routes).find(route => route === hash) || fallback

  const hash = window.location.hash ? window.location.hash.replace('#', '') : ''
  const [route, setRoute] = useState(getRoute(hash))

  useEffect(() => {
    window.location.hash = route
  }, [route])

  return { 
    route,
    navigate: hash => setRoute(getRoute(hash))
  }
}
