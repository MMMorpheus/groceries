import { Link, useLocation } from 'react-router-dom';
import styles from './navmenu.module.scss';

const menuItems = ['Home', 'Menu', 'About us', 'Contact'];

export const NavMenu = () => {
  const location = useLocation();

  return (
    <nav>
      <ul className={styles.menu}>
        {menuItems.map((el, i) => {
          return (
            <li
              key={i}
              className={
                location.pathname.slice(1) === el.toLocaleLowerCase() ? styles['menu__link-active'] : undefined
              }
            >
              <Link to={el.toLowerCase()}>{el}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
