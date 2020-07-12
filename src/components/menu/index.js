import React from 'react';
import styles from './menu.module.scss';

const Menu = ({ items, currentPage, onClick }) => {
  if (!items || Object.keys(items).length === 0) {
    return null;
  }
  return (
    <nav className={styles.menuHolder} id="nav-menu">
      <ul className={styles.menu}>
        {Object.keys(items).map(page => {
          const item = items[page];
          return (
            <li
              key={page}
              title={item.text}
              className={[styles.menuItem, page === currentPage && styles.selected].join(' ')}
              onClick={() => onClick(page)}
            >
              {item.text}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export { Menu };
