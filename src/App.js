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
      <main className='main'>
        <Menu items={menuItems} selectedIndex={currentPage} onClick={setCurrentPage} />
        <Divider />
        <section className='main-content'>
          <Content />
        </section>
      </main>
    </div>
  )
}

export default App
