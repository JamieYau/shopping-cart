import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import App from "../src/App";

describe("App component", () => {
  // Renders the App component with Header, Outlet and Footer components.
  it("should render the App component with Header, Outlet and Footer components", () => {
    render(
      <Router>
        <App />
      </Router>
    );
    expect(screen.getByRole("banner")).toBeInTheDocument();
    expect(screen.getByRole("contentinfo")).toBeInTheDocument();
  });
});
