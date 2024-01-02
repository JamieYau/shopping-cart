import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import Footer from "../src/components/Footer";

describe("Footer component", () => {
  it("renders correctly", () => {
    render(<Footer />);
    const footerElement = screen.getByRole("contentinfo");
    expect(footerElement).toBeInTheDocument();
  });

  it("displays the correct copyright text", () => {
    render(<Footer />);
    const copyrightElement = screen.getByRole("contentinfo");
    expect(copyrightElement.textContent).toContain("© 2024");
    expect(screen.getByRole("link", { name: "Jamie Yau" })).toBeInTheDocument();
  });

  it("has the correct link", () => {
    render(<Footer />);
    const linkElement = screen.getByRole("link");
    expect(linkElement).toHaveAttribute("href", "https://github.com/JamieYau");
  });
});
