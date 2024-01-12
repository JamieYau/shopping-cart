import { Product } from "../types/types";

export function formatItemCount(count: number): string {
  return `${count} Item${count !== 1 ? "s" : ""}`;
}

export function formatPrice(
  price: number,
  locale: string = "en-GB",
  currency: string = "GBP"
): string {
  const formatter = new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
    minimumFractionDigits: 2,
  });

  return formatter.format(price);
}

export function filterProducts(
  products: Product[],
  category: string
): Product[] {
  if (category === "all") {
    return products;
  }
  return products.filter((product) => product.category === category);
}

export function sortProducts(products: Product[], sort: string): Product[] {
  if (sort === "default") {
    return products;
  }
  if (sort === "price-lowest") {
    return products.sort((a, b) => a.price - b.price);
  }
  if (sort === "price-highest") {
    return products.sort((a, b) => b.price - a.price);
  }
  if (sort === "rating") {
    return products.sort((a, b) => b.rating.rate - a.rating.rate);
  }
  return products;
}
