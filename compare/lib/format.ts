/** 格式化台幣金額，例如 800 → "NT$800"；null → "—"。 */
export function ntd(value: number | null | undefined): string {
  if (value == null) return "—";
  return `NT$${value.toLocaleString("zh-Hant")}`;
}
