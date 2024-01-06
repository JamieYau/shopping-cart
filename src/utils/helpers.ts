export default function formatItemCount(count: number): string {
  return `${count} Item${count !== 1 ? "s" : ""}`;
}
