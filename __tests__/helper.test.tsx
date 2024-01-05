import { describe, expect, it } from "vitest";
import { IoStarHalfSharp, IoStarOutline, IoStarSharp } from "react-icons/io5";
import React from "react";
import formatRating from "../src/utils/helpers";

describe("formatRating", () => {
  it("should return an object with 'stars' and 'count' properties", () => {
    const product = {
      id: 1,
      title: "Product 1",
      category: "Category 1",
      description: "Description 1",
      image: "image1.jpg",
      price: 10,
      rating: {
        rate: 3.5,
        count: 10,
      },
    };

    const result = formatRating(product);

    expect(result).toHaveProperty("stars");
    expect(result).toHaveProperty("count");

    // Check if element has full, half, and empty stars
    expect(result.stars.props.children).toHaveLength(3);
  });

  // Should correctly calculate the number of full, half, and empty stars based on the product rating
  it("should correctly calculate the number of full, half, and empty stars based on the product rating", () => {
    const product = {
      id: 1,
      title: "Product 1",
      category: "Category 1",
      description: "Description 1",
      image: "image1.jpg",
      price: 10,
      rating: {
        rate: 4.5,
        count: 10,
      },
    };

    const result = formatRating(product);

    // Check the number of full stars
    const fullStars = result.stars.props.children[0];
    expect(fullStars.length).toBe(4);
    fullStars.forEach((star: React.ReactElement) =>
      expect(star.type).toBe(IoStarSharp)
    );

    // Check if there is a half star
    const halfStars = result.stars.props.children[1];
    expect(halfStars.length).toBe(1);
    halfStars.forEach((star: React.ReactElement) =>
      expect(star.type).toBe(IoStarHalfSharp)
    );

    // Check the number of empty stars
    const emptyStars = result.stars.props.children[2];
    expect(emptyStars.length).toBe(0);
    emptyStars.forEach((star: React.ReactElement) =>
      expect(star.type).toBe(IoStarOutline)
    );

    // Check the count
    expect(result.count.props.children.join("")).toBe("(10)");
  });

  it("should return 5 empty stars if the product rating is 0", () => {
    const product = {
      id: 1,
      title: "Product 1",
      category: "Category 1",
      description: "Description 1",
      image: "image1.jpg",
      price: 10,
      rating: {
        rate: 0,
        count: 10,
      },
    };

    const result = formatRating(product);

    // Check the number of full stars
    const fullStars = result.stars.props.children[0];
    expect(fullStars.length).toBe(0);

    // Check if there is a half star
    const halfStars = result.stars.props.children[1];
    expect(halfStars.length).toBe(0);

    // Check the number of empty stars
    const emptyStars = result.stars.props.children[2];
    expect(emptyStars.length).toBe(5);
    emptyStars.forEach((star: React.ReactElement) =>
      expect(star.type).toBe(IoStarOutline)
    );

    // Check the count
    expect(result.count.props.children.join("")).toBe("(10)");
  });

  // should correctly calculate the number of full, half, and empty stars when the product rating is a decimal between 0 and 1
  it("should correctly calculate the number of full, half, and empty stars when the product rating is a decimal between 0 and 1", () => {
    const product = {
      id: 1,
      title: "Product 1",
      category: "Category 1",
      description: "Description 1",
      image: "image1.jpg",
      price: 10,
      rating: {
        rate: 0.7,
        count: 10,
      },
    };

    const result = formatRating(product);

    // Check the number of full stars
    const fullStars = result.stars.props.children[0];
    expect(fullStars.length).toBe(0);

    // Check if there is a half star
    const halfStars = result.stars.props.children[1];
    expect(halfStars.length).toBe(1);
    halfStars.forEach((star: React.ReactElement) =>
      expect(star.type).toBe(IoStarHalfSharp)
    );

    // Check the number of empty stars
    const emptyStars = result.stars.props.children[2];
    expect(emptyStars.length).toBe(4);
    emptyStars.forEach((star: React.ReactElement) =>
      expect(star.type).toBe(IoStarOutline)
    );

    // Check the count
    expect(result.count.props.children.join("")).toBe("(10)");
  });

  it("should return 5 full stars if the product rating is more than 5", () => {
    const product = {
      id: 1,
      title: "Product 1",
      category: "Category 1",
      description: "Description 1",
      image: "image1.jpg",
      price: 10,
      rating: {
        rate: 6,
        count: 10,
      },
    };

    const result = formatRating(product);

    // Check the number of full stars
    const fullStars = result.stars.props.children[0];
    expect(fullStars.length).toBe(5);
    fullStars.forEach((star: React.ReactElement) =>
      expect(star.type).toBe(IoStarSharp)
    );

    // Check if there is a half star
    const halfStars = result.stars.props.children[1];
    expect(halfStars.length).toBe(0);

    // Check the number of empty stars
    const emptyStars = result.stars.props.children[2];
    expect(emptyStars.length).toBe(0);

    // Check the count
    expect(result.count.props.children.join("")).toBe("(10)");
  });

  it("shouldnt round up to half star", () => {
    const product = {
      id: 1,
      title: "Product 1",
      category: "Category 1",
      description: "Description 1",
      image: "image1.jpg",
      price: 10,
      rating: {
        rate: 1.4,
        count: 10,
      },
    };

    const result = formatRating(product);

    // Check the number of full stars
    const fullStars = result.stars.props.children[0];
    expect(fullStars.length).toBe(1);
    fullStars.forEach((star: React.ReactElement) =>
      expect(star.type).toBe(IoStarSharp)
    );

    // Check if there is a half star
    const halfStars = result.stars.props.children[1];
    expect(halfStars.length).toBe(0);

    // Check the number of empty stars
    const emptyStars = result.stars.props.children[2];
    expect(emptyStars.length).toBe(4);
    emptyStars.forEach((star: React.ReactElement) =>
      expect(star.type).toBe(IoStarOutline)
    );

    // Check the count
    expect(result.count.props.children.join("")).toBe("(10)");
  });
});
