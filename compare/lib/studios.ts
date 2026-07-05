import data from "@/data/studios.json";
import type { City, Discipline, Level, Studio } from "./types";

export const studios = data as Studio[];

export function getStudio(id: string): Studio | undefined {
  return studios.find((s) => s.id === id);
}

export function getStudios(ids: string[]): Studio[] {
  return ids.map((id) => getStudio(id)).filter((s): s is Studio => Boolean(s));
}

export const cities: City[] = ["台北", "新北", "桃園"];

export const allDisciplines: Discipline[] = [
  "空中瑜珈",
  "空中舞綢",
  "空中環",
  "空中吊床",
];

export const allLevels: Level[] = ["初學", "進階", "師資班"];

/** 依 city → district 排序後的捷運站清單（去重）。 */
export const mrtStations: string[] = Array.from(
  new Set(studios.map((s) => s.mrt_station))
).sort((a, b) => a.localeCompare(b, "zh-Hant"));

/**
 * 用來做「價格區間」篩選的代表價 —— 取單堂價,若無則用體驗價。
 * 回傳 null 代表沒有可比較的價格。
 */
export function representativePrice(s: Studio): number | null {
  return s.pricing.single ?? s.pricing.trial ?? null;
}

/** 每堂最低單價（拿套票裡最划算的一檔換算），用於卡片上的「每堂最低」。 */
export function bestPerSession(s: Studio): number | null {
  const perSession = s.pricing.package.map((p) => Math.round(p.price / p.sessions));
  const candidates = [
    ...(s.pricing.single ? [s.pricing.single] : []),
    ...perSession,
  ];
  return candidates.length ? Math.min(...candidates) : null;
}
