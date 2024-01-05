// Header.tsx
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <NavLink to="/" className={styles.logoLink}>
        <img src="/logo.png" alt="Logo" className={styles.logoImage} />
      </NavLink>
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
            <button
              className={styles.basket}
              type="button"
              aria-label="Shopping Basket"
            >
              <FontAwesomeIcon
                icon={faCartShopping}
                className={styles.basketIcon}
              />
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}
