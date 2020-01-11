import { useState, useEffect } from 'react'

export const useHashNavigation = routes => {
  const getPage = hash => Object.keys(routes).find(route => route === hash) || routes.fallback

  const hash = window.location.hash ? window.location.hash.replace('#', '') : ''
  const [currentPageName, setCurrentPageName] = useState(getPage(hash))

  useEffect(() => {
    window.location.hash = currentPageName
  }, [currentPageName])

  const navigate = pageName => setCurrentPageName(getPage(pageName))

  return { currentRoute: routes[currentPageName], currentPageName, navigate }
}
