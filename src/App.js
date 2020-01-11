import React from 'react'
import './App.css'
import { Header, Menu, Divider } from './components'
import { Accomondation, Home, Information, RSVP, Schedule } from './content'
import { useHashNavigation } from './hooks/useHashNavigation'

const routes = {
  home: {
    text: 'Hem',
    content: Home
  },
  rsvp: {
    text: 'OSA',
    content: RSVP
  },
  information: {
    text: 'Information',
    content: Information
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
            <Content />
          </section>
          <Divider />
          <section className='short-info'>
            <div className='location'>Hesselby Slott</div>
            <div className='date'>Lördag den 27 juni, 2020</div>
          </section>
        </main>
      </div>
    </div>
  )
}

export default App
