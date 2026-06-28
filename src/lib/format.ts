/** Format an ISO date string like "2025-09-18" → "September 18, 2025". */
export function formatDate(iso: string): string {
  const [y, m, d] = iso.split("-").map(Number);
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  if (!y || !m || !d) return iso;
  return `${months[m - 1]} ${d}, ${y}`;
}
