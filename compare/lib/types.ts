export type City = "台北" | "新北" | "桃園";

export type Discipline = "空中瑜珈" | "空中舞綢" | "空中環" | "空中吊床";

export type Level = "初學" | "進階" | "師資班";

export interface PricingPackage {
  /** 堂數 */
  sessions: number;
  /** 總價 (TWD) */
  price: number;
}

export interface Pricing {
  /** 體驗課價格；null 代表無提供 */
  trial: number | null;
  /** 單堂價格 */
  single: number | null;
  /** 堂數套票 */
  package: PricingPackage[];
  /** 月費吃到飽；null 代表無提供 */
  monthly: number | null;
}

export interface Studio {
  id: string;
  name: string;
  city: City;
  district: string;
  address: string;
  mrt_station: string;
  disciplines: Discipline[];
  pricing: Pricing;
  level: Level[];
  website: string;
  ig: string;
  /** Google 評分 (0–5) */
  google_rating: number;
  notes: string;
}
