import "./App.css";
import { NavLink, Outlet } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header>
        <h1>
          <span className="logo">🦕</span>
        </h1>
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
      <main>
        <Outlet />
      </main>
      <footer />
    </div>
  );
}

export default App;
