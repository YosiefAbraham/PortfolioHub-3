# Yosief Abraham

Personal portfolio. Static HTML and CSS.

Live: https://www.yosiefabraham.vercel.app (also https://yosiefabraham.vercel.app)

- `/` — current static portfolio
- `/2025` — previous PortfolioHub

```bash
python3 -m http.server 5173
```

Open http://localhost:5173

| Page | File |
|---|---|
| Home | `index.html` |
| Contact | `contact.html` |

Each listed name is its own row with a small popover. Dynasty’s row is the live link to https://www.trydynasty.app. Files live in `assets/research/`, `assets/work/`, and `assets/experience/`. Drop more there and link them in `index.html`.

Edit the email in `index.html` and `contact.html` if needed.

## Deploy

Vercel project `portfolio-hub-3`. Root static files are the live site. `npm run build:2025` writes the old React hub into `2025/` (Vite `base` `/2025/`).
