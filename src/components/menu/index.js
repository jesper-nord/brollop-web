import React from 'react';
import styles from './menu.module.scss';
import { routes } from '../../routes';

const Menu = ({ currentPage, onClick }) => (
  <nav className={styles.menuHolder} id="nav-menu">
    <ul className={styles.menu}>
      {Object.keys(routes).map(page => {
        const item = routes[page];
        return (
          <li
            key={page}
            title={item.title}
            className={[styles.menuItem, page === currentPage && styles.selected].join(' ')}
            onClick={() => onClick(page)}
          >
            {item.title}
          </li>
        );
      })}
    </ul>
  </nav>
);

export { Menu };
