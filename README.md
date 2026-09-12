# PEPTO ($PEPTO) — NO PROMISES. JUST MEMES.

Lightweight cyberpunk meme-coin landing page for Solana. Plain **HTML / CSS / JS** — no frameworks, no database. Optimized for 8GB RAM.

Live stack: `index.html` + `style.css` + `script.js` + `assets/pepto.png` + `render.yaml`

---

## ⚡ Quick Start (PowerShell) — Local Preview

```powershell
# From PEPTO folder:
python -m http.server 8000
# or if python fails:
py -m http.server 8000
```

Open **http://localhost:8000**

Exact command for this project:
```powershell
Set-Location -LiteralPath "C:\Users\DEEKSHITH\Desktop\PEPTO"; python -m http.server 8000
```

> Already running? Check `Get-Process python | Select-Object Id,Path`

---

## 📁 Structure

```
PEPTO/
├── index.html          # 9 sections, SEO + OG
├── style.css           # dark + neon #00ff88 + glassmorphism
├── script.js           # CONFIG (pumpfunUrl, xUrl)
├── render.yaml         # Render static site config
├── README.md
└── assets/pepto.png    # 800×800 placeholder — replace with real meme
```

---

## 🖼️ PEPTO Image

**Path:** `C:\Users\DEEKSHITH\Desktop\PEPTO\assets\pepto.png`
- Replace placeholder with real logo: **800×800 PNG/WebP <500KB**
- Fallback shows `Place your image at assets/pepto.png` if missing

```powershell
Copy-Item -LiteralPath "C:\path\to\real-pepto.png" -Destination "C:\Users\DEEKSHITH\Desktop\PEPTO\assets\pepto.png" -Force
```

---

## 🔧 CONFIG — `script.js:2`

```js
const CONFIG = {
  name: "PEPTO",
  ticker: "$PEPTO",
  pumpfunUrl: "https://pump.fun/coin/Ak9VSiYdt6959zRAPEZxWqfv5owTDReSDFdU6dktpump",
  xUrl: "https://x.com/PEPTODANGEN",
};
```

| Field | Use |
|-------|-----|
| `pumpfunUrl` | **Every BUY PEPTO button** (hero, nav, token, community) |
| `xUrl` | X card + footer — now `@PEPTODANGEN` |
| _(mint removed)_ | Mint address hidden as requested — uncomment `mintAddress` in CONFIG to show again |

Telegram removed completely — X only as requested. No fake links.

---

## 📑 Sections

1. HERO — PEPTO + $PEPTO + BUY / JOIN (BUY → `CONFIG.pumpfunUrl`)
2. MEME IMAGE — `assets/pepto.png`
3. ABOUT — WHAT IS PEPTO?
4. COMMUNITY — **X @PEPTODANGEN** + Pump.fun (2 cards)
5. TOKEN — Name / Ticker / Solana (mint hidden)
6. HOW TO BUY — 3 steps
7. ROADMAP — 3 phases (no promises)
8. FAQ — 5 Q&A
9. FOOTER — disclaimer

---

## 🚀 Deploy to Render (so Pump.fun link works publicly)

Your `localhost` link won't work for others. Deploy to **Render Static Site (free)** and paste the Render URL into Pump.fun's website field.

**Included:** `render.yaml` is already in your project — Render auto-detects it.

### Option A — Deploy via GitHub (recommended, takes 2 min)

1. Create GitHub repo:
```powershell
Set-Location -LiteralPath "C:\Users\DEEKSHITH\Desktop\PEPTO"
git init
git add .
git commit -m "PEPTO launch"
# Create repo on github.com (empty, no README), then:
git remote add origin https://github.com/YOURUSERNAME/pepto.git
git branch -M main
git push -u origin main
```

2. Go to **https://dashboard.render.com** → **New +** → **Static Site** → Connect `pepto` repo
   - **Build Command:** *(leave empty)*
   - **Publish Directory:** `.`  (or `./` )
   - Render will detect `render.yaml` — just click **Create Static Site**

3. After 1-2 min you get: `https://pepto-XXXX.onrender.com`  ← **This is your public link**

4. Paste this link into Pump.fun:
   - Pump.fun coin page → **Add Socials / Website** → paste `https://pepto-XXXX.onrender.com`
   - Also set X to `https://x.com/PEPTODANGEN`

### Option B — No GitHub? Use Render drag or Netlify Drop (instant)

- **Netlify Drop:** go to https://app.netlify.com/drop — drag the entire `PEPTO` folder → instant URL to paste in Pump.fun
- **Cloudflare Pages / Vercel:** same — drag folder

### After deploy

Test:
```powershell
Invoke-WebRequest https://YOUR-RENDER-URL.onrender.com -UseBasicParsing | Select-Object StatusCode
```
If 200, you're live for launch.

> No auto-deploy was done — you control when to push. No money spent unless you upgrade Render.

---

## 🔗 Your links now

- **Website (after Render deploy):** `https://pepto-XXXX.onrender.com` (replace XXXX after deploy)
- **X:** `https://x.com/PEPTODANGEN` → shows `@PEPTODANGEN` on site
- **Pump.fun:** `https://pump.fun/coin/Ak9VSiYdt6959zRAPEZxWqfv5owTDReSDFdU6dktpump` (all BUY buttons)

---

## ✅ Verified

- Mint hidden, Telegram removed, X @PEPTODANGEN only
- `render.yaml` added for one-click Render deploy
- No fake stats, no profit promises, no affiliations
- Responsive + Chrome tested (http://localhost:8000)

---

## ⚠️ Disclaimer

Community meme project. Crypto assets are highly risky. DYOR. Nothing is financial advice.
