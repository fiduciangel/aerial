/** 格式化金額（新台幣），例如 800 → "$800"；null → "—"。 */
export function ntd(value: number | null | undefined): string {
  if (value == null) return "—";
  return `$${value.toLocaleString("zh-Hant")}`;
}
