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
