import React from 'react'
import './app.css'
import { Header, Menu, Divider } from './components'

const App = () => {
  return (
    <div className='app'>
      <Header />
      <Menu />
      <Divider />
      <div className='main-content'>
        <p>We can't wait to share our special day with you. Help us capture our wedding with Joy.</p>
      </div>
    </div>
  )
}

export default App
