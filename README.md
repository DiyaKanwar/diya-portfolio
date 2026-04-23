# Diya Kanwar — Graphic Design Portfolio

A luxury editorial dark-themed portfolio website to showcase your graphic design work.

---

## 📁 Project Structure

```
diya-portfolio/
├── index.html          ← Main HTML file
├── css/
│   └── style.css       ← All styles
├── js/
│   └── main.js         ← Cursor, lightbox & upload logic
├── images/             ← 📌 PLACE YOUR DESIGN IMAGES HERE
│   ├── 719ab22a.jpg
│   ├── back_business_card.jpg
│   ├── c0ac0703.jpg
│   ├── de1db327.jpg
│   ├── design.jpg
│   ├── design-5.jpg
│   ├── front_business_card.jpg
│   ├── hoarding-1.jpg
│   ├── instagram-post-4.jpg
│   ├── mobile-app-design-1.jpg
│   ├── mobile-app-design-2.jpg
│   ├── mobile-app-design-3.jpg
│   ├── mobile-app-design-4.jpg
│   ├── moodboard-kreuz-vinyl.jpg
│   ├── photo-manipulation.jpg
│   ├── poster-2.jpg
│   ├── poster-design.jpg
│   ├── work-1-2.jpg
│   └── investor-balance-sheet.jpg
└── README.md
```

---

## 🖥️ How to Run in VS Code

### Option 1 — Live Server (Recommended)

1. Open VS Code
2. Go to **Extensions** (Ctrl+Shift+X)
3. Search for **"Live Server"** by Ritwick Dey and install it
4. Open the `diya-portfolio` folder in VS Code (`File → Open Folder`)
5. Right-click `index.html` in the file explorer → **"Open with Live Server"**
6. The website opens at `http://127.0.0.1:5500`

### Option 2 — Open Directly

Simply double-click `index.html` — it will open in your default browser. *(Note: image uploads work in both modes.)*

---

## 🖼️ Adding Your Design Images

### Method A — Pre-load into the `images/` folder (Permanent)

Rename your files to match the names listed in the structure above, then place them inside the `images/` folder. Reload the page and your designs appear automatically in the gallery.

**Image name mapping from your folder:**

| Your file name                              | Rename to                        |
|---------------------------------------------|----------------------------------|
| 719ab22a-c138-4681-a9b1-0c9dec8715d9        | `719ab22a.jpg`                   |
| back_business_card                          | `back_business_card.jpg`         |
| c0ac0703-3d9d-4ef8-89ba-58d2581f0a25        | `c0ac0703.jpg`                   |
| de1db327-bd90-4b84-9a9a-df1af4d1c506        | `de1db327.jpg`                   |
| design                                      | `design.jpg`                     |
| Design-5                                    | `design-5.jpg`                   |
| Front_business_card                         | `front_business_card.jpg`        |
| Hoarding 1                                  | `hoarding-1.jpg`                 |
| Instagram post - 4                          | `instagram-post-4.jpg`           |
| Mobile_app_Design-1                         | `mobile-app-design-1.jpg`        |
| Mobile_app_Design-2                         | `mobile-app-design-2.jpg`        |
| Mobile_app_Design-3                         | `mobile-app-design-3.jpg`        |
| Mobile_app_Design-4                         | `mobile-app-design-4.jpg`        |
| Moodboard_Kreuz Vinyl.                      | `moodboard-kreuz-vinyl.jpg`      |
| photo minupilation 2nd version              | `photo-manipulation.jpg`         |
| poster 2                                    | `poster-2.jpg`                   |
| Poster Design                               | `poster-design.jpg`              |
| work 1.2                                    | `work-1-2.jpg`                   |
| 36887854-eb90-42cd-bfb8-c8ffc958dae7        | `investor-balance-sheet.jpg`     |

### Method B — Upload from browser (Quick, no renaming needed)

1. Open the website
2. Scroll to the **Gallery** section
3. Click the **"Add Images"** button in the upload strip
4. Select any images from your PC — they load instantly into the gallery
5. *(Note: browser uploads are session-only — refresh clears them)*

---

## ✏️ Customisation

- **Change your name/bio**: Edit `index.html` (Hero and About sections)
- **Update contact links**: Find the `#contact` section in `index.html`
- **Change accent colour**: Edit `--rose` in `css/style.css` (line 10)
- **Add/remove gallery cards**: Duplicate or delete `<div class="gallery-card">` blocks in `index.html`

---

## 🌐 Deploying Online (Free)

1. Create a free account at [vercel.com](https://vercel.com)
2. Drag and drop the `diya-portfolio` folder onto the Vercel dashboard
3. Your portfolio goes live with a shareable link instantly

---

Built with HTML5 · CSS3 · Vanilla JS · Google Fonts (Playfair Display + DM Sans)
