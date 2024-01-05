import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import ProductsProvider from "../src/contexts/ProductsContext";
import HomePage from "../src/pages/HomePage/HomePage";

describe("HomePage", () => {
  it("renders the IntroSection and FeaturedSection components", () => {
    render(
      <Router>
        <ProductsProvider>
          <HomePage />
        </ProductsProvider>
      </Router>
    );

    expect(
      screen.getByRole("heading", { name: /welcome to the home page!/i })
    ).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /shop now/i })).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /featured items/i })
    ).toBeInTheDocument();
  });
});
