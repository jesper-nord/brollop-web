import React from 'react'
import './App.css'
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
  const { currentRoute, currentPageName, navigate } = useHashNavigation(routes)
  const Content = currentRoute.content

  const scrollAndNavigate = page => {
    document.getElementById('nav-menu').scrollIntoView({ behavior: 'smooth' })
    navigate(page)
  }

  return (
    <div className='app'>
      <Header />
      <div className='main-wrapper'>
        <main className='main'>
          <Menu items={routes} currentPage={currentPageName} onClick={scrollAndNavigate} />
          <Divider />
          <section className='main-content'>
            <Content />
          </section>
          <ShortInfo />
        </main>
      </div>
    </div>
  )
}

export default App
