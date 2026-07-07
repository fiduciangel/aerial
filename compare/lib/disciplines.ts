import type { Discipline } from "./types";

export interface DisciplineInfo {
  name: Discipline;
  en: string;
  oneLiner: string;
  intro: string;
  features: string[];
  goodFor: string;
  /** 體能強度 1（溫和）– 5（激烈） */
  intensity: number;
  intensityLabel: string;
  /** 與 Bits.tsx 標籤一致的莫蘭迪色系 */
  accent: {
    dot: string;
    chip: string;
    bar: string;
  };
}

export const disciplineInfos: DisciplineInfo[] = [
  {
    name: "空瑜",
    en: "Aerial Yoga",
    oneLiner: "用一條懸掛的布吊床輔助瑜珈,支撐體重、放鬆減壓。",
    intro:
      "空瑜(空中瑜珈)把傳統瑜珈搬到離地的絲質吊床上。吊床像鞦韆一樣支撐你的身體,讓許多在地面上很吃力的體式變得輕鬆,還能透過倒掛放鬆脊椎、伸展全身。動作溫和、包覆感強,是最適合新手入門的空中運動。",
    features: ["吊床支撐體重", "脊椎倒掛減壓", "動作溫和", "初學者友善"],
    goodFor: "想放鬆紓壓、改善姿勢,或第一次嘗試空中的人。",
    intensity: 2,
    intensityLabel: "溫和",
    accent: { dot: "bg-brand-400", chip: "bg-brand-50 text-brand-700 ring-brand-200", bar: "bg-brand-400" },
  },
  {
    name: "舞綢",
    en: "Aerial Silks",
    oneLiner: "兩條垂掛的長綢布,纏繞、攀爬、下墜,展現力量與美感。",
    intro:
      "舞綢(空中舞綢、空中綢緞)使用兩條從天花板垂下的長布。你會學習如何纏繞、攀爬、鎖定,再進到旋轉與下墜等進階動作。它同時鍛鍊上肢與核心力量,也充滿表演張力,是許多人心中最華麗的空中項目。",
    features: ["攀爬與纏繞技巧", "鍛鍊上肢核心", "表演性強", "進程明確"],
    goodFor: "想練力量、喜歡挑戰與表演感的人。",
    intensity: 4,
    intensityLabel: "較強",
    accent: { dot: "bg-rose-400", chip: "bg-rose-50 text-rose-700 ring-rose-200", bar: "bg-rose-400" },
  },
  {
    name: "空環",
    en: "Aerial Hoop / Lyra",
    oneLiner: "懸掛的金屬圓環,在環內外做出各種優雅造型。",
    intro:
      "空環(空中環、Lyra)是一個懸掛在空中的金屬圓環。你會在環的內側、外側與上方做出各種姿勢、平衡與轉動,線條優雅又需要核心與握力。相較於舞綢,環有固定的支點,抓握位置更直覺,不少人覺得比舞綢好上手。",
    features: ["固定圓環支點", "雕塑身體線條", "優雅與力量兼具", "造型豐富"],
    goodFor: "想練身體線條、喜歡優雅造型的人。",
    intensity: 3,
    intensityLabel: "中等偏強",
    accent: { dot: "bg-ochre-400", chip: "bg-ochre-50 text-ochre-700 ring-ochre-200", bar: "bg-ochre-400" },
  },
];
