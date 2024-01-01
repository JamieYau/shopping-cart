import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <span className="logo">🦕</span>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/store">Store</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
