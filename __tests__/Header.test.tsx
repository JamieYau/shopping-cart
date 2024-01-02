import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "../src/components/Header";

describe("Header component", () => {
  // Renders the Header component with a logo and a navigation menu.
  it("should render the Header component with a logo and a navigation menu", () => {
    render(
      <Router>
        <Header />
      </Router>
    );
    expect(screen.getByRole("banner")).toBeInTheDocument();
    const logo = screen.getByAltText("Logo");
    expect(logo).toBeInTheDocument();
    expect(screen.getByRole("navigation")).toBeInTheDocument();
  });

  it("has correct paths for NavLinks", () => {
    render(
      <Router>
        <Header />
      </Router>
    );
    expect(screen.getByText("Home").closest("a")).toHaveAttribute("href", "/");
    expect(screen.getByText("Store").closest("a")).toHaveAttribute(
      "href",
      "/store"
    );
  });

  it("applies active class to NavLink for current route", async () => {
    const user = userEvent.setup();
    render(
      <Router>
        <Header />
      </Router>
    );

    await user.click(screen.getByText("Home"));
    expect(screen.getByText("Home").closest("a")).toHaveClass("active");
    expect(screen.getByText("Store").closest("a")).not.toHaveClass("active");

    await user.click(screen.getByText("Store"));
    expect(screen.getByText("Store").closest("a")).toHaveClass("active");
    expect(screen.getByText("Home").closest("a")).not.toHaveClass("active");
  });
});
