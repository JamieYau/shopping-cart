import { beforeEach, describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter as Router } from "react-router-dom";
import BasketProvider from "../src/contexts/BasketContext";
import Header from "../src/components/Header";

describe("Header component", () => {
  beforeEach(() => {
    render(
      <BasketProvider>
        <Router>
          <Header />
        </Router>
      </BasketProvider>
    );
  });
  // Renders the Header component with a logo and a navigation menu.
  it("should render the Header component with a logo and a navigation menu", () => {
    expect(screen.getByRole("banner")).toBeInTheDocument();
    const logo = screen.getByAltText("Logo");
    expect(logo).toBeInTheDocument();
    expect(screen.getByRole("navigation")).toBeInTheDocument();
  });

  it("has correct paths for NavLinks", () => {
    expect(screen.getByText("Home").closest("a")).toHaveAttribute("href", "/");
    expect(screen.getByText("Store").closest("a")).toHaveAttribute(
      "href",
      "/store"
    );
  });

  it("applies active class to NavLink for current route", async () => {
    const user = userEvent.setup();

    await user.click(screen.getByText("Home"));
    expect(screen.getByText("Home").closest("a")).toHaveClass("active");
    expect(screen.getByText("Store").closest("a")).not.toHaveClass("active");

    await user.click(screen.getByText("Store"));
    expect(screen.getByText("Store").closest("a")).toHaveClass("active");
    expect(screen.getByText("Home").closest("a")).not.toHaveClass("active");
  });
});
