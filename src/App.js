import React, { useState } from 'react'
import './app.css'
import { Header, Menu, Divider } from './components'
import { Accomondation, Home, Information, RSVP, Schedule } from './content'

const menuItems = [
  {
    text: 'Hem',
    content: Home
  },
  {
    text: 'OSA',
    content: RSVP
  },
  {
    text: 'Information',
    content: Information
  },
  {
    text: 'Boende',
    content: Accomondation
  },
  {
    text: 'Schema',
    content: Schedule
  }
]

const App = () => {

  const [currentPage, setCurrentPage] = useState(0)

  const Content = menuItems[currentPage].content 

  return (
    <div className='app'>
      <Header />
      <div className='main-wrapper'>
        <main className='main'>
          <Menu items={menuItems} selectedIndex={currentPage} onClick={setCurrentPage} />
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
