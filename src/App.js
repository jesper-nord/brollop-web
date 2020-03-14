import React, { useEffect } from 'react'
import ReactGA from 'react-ga'
import styles from './app.module.scss'
import { Header, Menu, Divider } from './components'
import { Accomondation, Home, Information, RSVP, Toastmasters, ShortInfo } from './content'
import { useHashNavigation } from './hooks/useHashNavigation'

const routes = {
  home: {
    text: 'Hem',
    content: Home
  },
  information: {
    text: 'Information',
    content: Information
  },
  toastmasters: {
    text: 'Toastmasters',
    content: Toastmasters
  },
  accomondation: {
    text: 'Boende & Hitta hit',
    content: Accomondation
  },
  rsvp: {
    text: 'O.S.A.',
    content: RSVP
  },
  fallback: 'home'
}

const App = () => {
  const { route, navigate } = useHashNavigation(routes)
  const Content = routes[route].content

  const scrollAndNavigate = page => {
    document.getElementById('nav-menu').scrollIntoView({ behavior: 'smooth' })
    navigate(page)
  }

  useEffect(() => {
    ReactGA.pageview(route)
  }, [route])

  return (
    <div className={styles.app}>
      <Header />
      <div className={styles.mainWrapper}>
        <main className={styles.main}>
          <Menu items={routes} currentPage={route} onClick={scrollAndNavigate} />
          <Divider />
          <section className={styles.mainContent}>
            <Content />
          </section>
          <ShortInfo />
        </main>
      </div>
    </div>
  )
}

export default App
