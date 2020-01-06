import React, { useState } from 'react'
import './app.css'
import { Header, Menu, Divider } from './components'
import { Accomondation, Home, Information, Schedule } from './content'

const menuItems = [
  {
    text: 'Hem',
    content: Home
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
      <Menu items={menuItems} selected={currentPage} onClick={setCurrentPage} />
      <Divider />
      <div className='main-content'>
      <Content />
      </div>
    </div>
  )
}

export default App
