# 北部空中運動教室比較網站 — Phase 1 MVP

整理台北、新北、桃園的**空瑜、舞綢、空環**教室,提供費用與地點比較的靜態網站。

## 技術

- **Next.js 14**(App Router)+ **TypeScript**
- **Tailwind CSS** 3
- 資料來源:本地 JSON(`data/studios.json`),無資料庫
- 輸出:靜態網站(`output: "export"`),部署目標 **Vercel**
- RWD、手機優先

## 頁面

| 路徑 | 說明 |
| --- | --- |
| `/` | 教室卡片列表 + 篩選器(城市、項目、價格上限、捷運站),可勾選 2–3 間加入比較 |
| `/studios/[id]` | 單一教室完整資訊 + Google Maps 地圖 |
| `/compare?ids=a,b,c` | 並排比較 2–3 間教室的費用(綠色標示每項最划算 / 評分最高) |

## 本地開發

```bash
cd compare
npm install
npm run dev
```

開啟 <http://localhost:3000>。

## 產生靜態檔

```bash
npm run build   # 產生 out/ 靜態資料夾
```

## 部署到 Vercel

因為這個專案放在 `aerial` repo 的 `compare/` 子資料夾,在 Vercel 匯入時把
**Root Directory 設成 `compare`**,Framework 會自動偵測為 Next.js,直接 Deploy 即可。

## 資料結構(`data/studios.json`)

```jsonc
{
  "id": "soar-daan",
  "name": "翱翔空中瑜珈 Soar Aerial",
  "city": "台北",                 // 台北 / 新北 / 桃園
  "district": "大安區",
  "address": "台北市大安區忠孝東路四段 45 號 6 樓",
  "mrt_station": "忠孝復興站",
  "disciplines": ["空瑜"],           // 空瑜 / 舞綢 / 空環
  "pricing": {
    "trial": 500,                  // 體驗課;null = 無
    "single": 800,                 // 單堂
    "package": [{ "sessions": 10, "price": 7200 }],
    "monthly": 3800                // 月費吃到飽;null = 無
  },
  "level": ["初學", "進階"],       // 初學 / 進階 / 師資班
  "website": "https://…",
  "ig": "soar.aerial",
  "google_rating": 4.8,
  "notes": "…"
}
```

> 想新增教室,只要在 `data/studios.json` 加一筆資料即可,全站的列表、篩選、詳情頁與比較頁都會自動帶入。

## Phase 1 範圍

- ✅ 專案架構與資料 schema
- ✅ 5 筆示範資料
- ✅ 列表 + 篩選、詳情頁 + 地圖、比較頁
- ⬜ 會員系統、後台、評論功能 → Phase 2
