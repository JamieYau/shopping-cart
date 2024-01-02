import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import HomePage from "../src/pages/HomePage/HomePage";

describe("HomePage", () => {
  it("renders the IntroSection and FeaturedSection components", () => {
    render(<HomePage />);
    expect(
      screen.getByRole("heading", { name: /welcome to the home page!/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /shop now/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /featured items/i })
    ).toBeInTheDocument();
  });
});