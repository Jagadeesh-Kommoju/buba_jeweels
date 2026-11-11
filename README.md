# 👑 BuBa Fashions — Modern Luxury Storefront & Bridal Rental Booking

A modern, high-end, mobile-first e-commerce and bridal rental storefront designed for **BuBa Fashions**, Visakhapatnam's premier boutique for **1-Gram Micro-Gold, Authentic Temple Ornaments, Pearl Chandraharams, Korean Anti-Tarnish Daily Wear, and Grand Bridal Rental Combos**.

📍 **Showroom Location:** Shop F2, Akhanda Complex, Walkers Park Road (Wakers Park Road), Ratnagiri Housing Board Colony, PM Palem (Pothinamallayya Palem), Visakhapatnam, Andhra Pradesh – 530041.  
📞 **Direct WhatsApp / Call:** [+91 90002 39237](https://wa.me/919000239237)  
📺 **YouTube:** [@shopbuba](https://www.youtube.com/@shopbuba) & [@BubaStore](https://www.youtube.com/@BubaStore)  
📸 **Instagram:** [@bubafashions](https://www.instagram.com/bubafashions/)

---

## 💎 Brand Identity & Visual Language

- **Primary Hero Background:** Deep Royal Emerald Green (`#051D11`, `#0E331E`, `#15472B`)
- **Luxury Metallic Highlights:** Royal Metallic Gold (`#D4AF37`, `#F3C64F`, `#ECC875`) for borders, CTAs, glowing rings, and badge accents
- **Secondary Surfaces:** Warm Cream & Soft Ivory (`#FAF8F2`, `#FAF8F5`) and Pure White (`#FFFFFF`) for pristine readability
- **Typography:**
  - *Headings & Brand Title:* **Cinzel** & **Playfair Display** (Royal serif)
  - *Body, SKUs & Prices:* **Plus Jakarta Sans** & **Poppins** (Clean modern sans-serif)
- **Circular Logo Integration:** Crown & bust emblem with radiant golden glow ring in sticky header, mobile drawer, footer, and floating concierge.

---

## 🚀 Key Features & High-Conversion Lead Engines

### 1. Zero-Friction WhatsApp-First Commerce
- **SKU-Specific One-Tap Checkout:** Every piece shows a structured SKU (e.g. `BUBA-BRL-101`, `BUBA-HRM-102`). Clicking **"Order on WhatsApp"** triggers an API link with pre-filled title, SKU, and price.
- **Bridal Rental Booking Modal:** Selects 3-day wedding rental windows, calculates security deposit, captures wedding date, pickup date, and city, sending a structured inquiry directly to `+91 90002 39237`.

### 2. "Why Rent Bridal Jewellery?" Cost-Per-Wear Calculator
- Shows Vizag brides how renting a **₹32,000 heavy bridal set for ₹4,999** saves over ₹3,45,000+ compared to locking funds in 24K real gold (at Vizag's live ₹14,852/g rate).
- Transparent 3-step rental journey: *Choose & Lock Date → Free Store Trial / HD Video → Pickup, Shine & Easy Return*.

### 3. Saree & Outfit Jewellery Matchmaker Tool
- Interactive styling wizard capturing Bride Name, Occasion, Saree/Lehenga Color, and Style Preference.
- Opens WhatsApp allowing customers to upload their outfit photo for matching 1-Gram gold haram, pearl, and bangle suggestions.

### 4. Shoppable Social Video Reels
- Embedded preview cards featuring BuBa Fashions' published YouTube Shorts (`DyCLIeE7CHk`, `63pn_aHj-vc`, `_r0QtuobQPc`, `za0JUk_hVa8`).
- One-tap "Watch Video" popup player with instant **"Order This Piece on WhatsApp"** button.

### 5. Local SEO & Turn-by-Turn Route Guide (PM Palem)
- Addresses the last-mile discoverability challenge on Walkers Park Road.
- Split-screen route hub:
  - Left: Embedded route guide video (`NRVBwFnaUWQ`) + directions from Carshed Junction and Vijetha Super Market.
  - Right: Live interactive Google Maps pin + **"Send Route to My WhatsApp"** button.

### 6. VIP Store Visit & 10% Discount Voucher
- In-store trial scheduler that automatically reveals and copies coupon code **`BUBAFEST10`** (10% OFF at PM Palem showroom).

### 7. Floating WhatsApp Concierge Widget
- Fixed bottom-right pulsing gold/green widget with interactive quick action drawer.

---

## 🛠️ Project Structure

```
BubaJeweels/
├── index.html                   # Master semantic HTML5 luxury application
├── server.js                    # Zero-dependency local Node.js static server
├── package.json                 # Project configuration and launch scripts
├── README.md                    # Comprehensive documentation
└── assets/
    ├── css/
    │   └── luxury-theme.css     # Luxury styling, gold foil shimmer, glassmorphism
    ├── js/
    │   ├── catalog-data.js      # 12+ Sample products, categories, reviews, reels
    │   └── main.js              # Filtering, search, modals, WhatsApp engines
    └── images/
        ├── Main_logo.jpeg       # High-resolution BuBa Fashions circular emblem
        ├── buba-logo.jpg        # Secondary emblem copy
        └── products/            # Authentic South Indian bridal & temple jewellery photography
            ├── buba-bridal-suite.jpg
            ├── buba-kasu-mala.jpg
            ├── buba-pearl-chandraharam.jpg
            ├── buba-kundan-bangles.jpg
            ├── buba-temple-vaddanam.jpg
            ├── buba-jada-billalu.jpg
            ├── buba-gutapusalu-choker.jpg
            └── buba-polki-choker.jpg
```

---

## ⚡ How to Run Locally

### Option 1: Direct Browser Launch
Simply double-click `index.html` or right-click and choose **"Open with Chrome / Edge"**.

### Option 2: Local HTTP Server (Recommended)
Run the built-in lightweight server using Node.js:
```bash
npm start
```
or
```bash
node server.js
```
Then open [http://localhost:3000](http://localhost:3000) in any browser.

---

## 🔍 Local SEO & Schema.org Structured Data
Includes comprehensive `JewelryStore` JSON-LD schema with geo-coordinates, street address in PM Palem, operating hours, accepted payments, and social cross-links (`sameAs`) to establish immediate #1 rank authority for queries like:
- *"1 gram gold jewellery in PM Palem"*
- *"bridal jewellery rental Visakhapatnam"*
- *"BuBa Fashions Vizag"*

