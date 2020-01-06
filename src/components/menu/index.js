import React from 'react'
import './menu.css'

const Menu = ({ items, selectedIndex, onClick }) => {
  if (!items || items.length === 0) {
    return null
  }
  return (
    <nav className='menu-holder'>
      <ul className='menu'>
        {items.map((item, index) => {
          return (
            <li
              key={item.text}
              title={item.text}
              className={`menu-item ${selectedIndex === index ? 'selected' : ''}`}
              onClick={() => onClick(index)}
            >
              {item.text}
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export { Menu }