import React from 'react'
import './menu.css'

const Menu = ({ items, selectedIndex, onClick }) => {
  if (!items || items.length === 0) {
    return null
  }
  return (
    <ul className='menu'>
      {items.map((item, index) => {
        return (
          <li
            key={item.text}
            title={item.text}
            className={selectedIndex === index ? ['menu-item', 'selected'].join(' ') : 'menu-item'}
            onClick={() => onClick(index)}
          >
            {item.text}
          </li>
        )
      })}
    </ul>
  )
}

export { Menu }