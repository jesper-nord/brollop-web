import React from 'react'
import './App.css'
import { Header, Menu, Divider } from './components'
import { Accomondation, Home, Information, RSVP, Schedule, ShortInfo } from './content'
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
  rsvp: {
    text: 'OSA',
    content: RSVP
  },
  accomondation: {
    text: 'Boende',
    content: Accomondation
  },
  schedule: {
    text: 'Schema',
    content: Schedule
  },
  fallback: 'home'
}

const App = () => {
  const { currentRoute, currentPageName, navigate } = useHashNavigation(routes)

  const Content = currentRoute.content

  return (
    <div className='app'>
      <Header />
      <div className='main-wrapper'>
        <main className='main'>
          <Menu items={routes} currentPage={currentPageName} onClick={navigate} />
          <Divider />
          <section className='main-content'>
            <Content navigate={navigate} />
          </section>
          <Divider />
          <ShortInfo />
        </main>
      </div>
    </div>
  )
}

export default App
