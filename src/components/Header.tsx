// Header.tsx
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <span className={styles.logo}>🦕</span>
      <nav>
        <ul className={styles.navList}>
          <li>
            <NavLink to="/" className={styles.navLink}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/store" className={styles.navLink}>
              Store
            </NavLink>
          </li>
          <li>
            <button className={styles.basket} type="button" aria-label="Shopping Basket">
                <FontAwesomeIcon icon={faCartShopping} />
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}
