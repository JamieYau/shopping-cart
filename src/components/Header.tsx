// Header.tsx
import { NavLink } from "react-router-dom";
import { IoCartOutline } from "react-icons/io5";
import styles from "./Header.module.css";
import { useBasket } from "../contexts/BasketContext";

export default function Header() {
  const { toggleBasket } = useBasket();
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
              onClick={toggleBasket}
            >
              <IoCartOutline />
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}
