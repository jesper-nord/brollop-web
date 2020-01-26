import React from 'react'
import './menu.css'

const Menu = ({ items, currentPage, onClick }) => {
  if (!items || Object.keys(items).length === 0) {
    return null
  }
  return (
    <nav className='menu-holder'>
      <ul className='menu'>
        {Object.keys(items).map(page => {
          if (page === 'fallback') {
            return null
          }
          
          const item = items[page]
          return (
            <li
              key={page}
              title={item.text}
              className={`menu-item ${page === currentPage ? 'selected' : ''}`}
              onClick={() => onClick(page)}
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