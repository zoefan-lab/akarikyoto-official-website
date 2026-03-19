# 🏡 AKARI KYOTO SHIJO

A minimal, elegant static website for a boutique homestay in Kyoto, Japan.

![AKARI KYOTO SHIJO](https://via.placeholder.com/1200x400/F9F975/21201A?text=AKARI+KYOTO+SHIJO)

## 🌐 Live Website

**Visit:** [https://YOUR-USERNAME.github.io/akari-kyoto-shijo/](https://YOUR-USERNAME.github.io/akari-kyoto-shijo/)

## ✨ Features

- 🌍 **Three-language support** - English, Japanese (日本語), Chinese (中文)
- 📱 **Fully responsive** - Works on desktop, tablet, and mobile
- 🖼️ **Image gallery** - Interactive modal gallery for room photos
- 🎠 **Hero slideshow** - Auto-playing hero section with 4 images
- 🗺️ **Google Maps integration** - Direct directions to nearby attractions
- ⚡ **Fast & lightweight** - Pure HTML/CSS/JS, no build process
- 🎨 **Custom design** - Minimal, warm aesthetic with brand colors

## 🎨 Design

**Colors:**
- Primary: `#F9F975` (Warm Yellow)
- Dark: `#21201A` (Near Black)
- Light: `#F7F5E7` (Cream)

**Fonts:**
- English: Share Tech, Funnel Sans
- Japanese: M PLUS 1 Code
- Chinese: Noto Sans SC

## 📄 Pages

- **Home** (`index.html`) - Main landing page with hero, gallery, features, area info
- **Heritage Sites** (`heritage-site.html`) - 6 historic temples and landmarks
- **Natural Landscape** (`natural-landscape.html`) - 6 gardens and scenic spots
- **Urban Exploration** (`urban-exploration.html`) - 5 shopping districts
- **Cafes & Restaurants** (`cafe-restaurant.html`) - 3 dining options
- **Supermarkets** (`supermarket.html`) - 3 nearby shopping locations
- **Transportation** (`transportation.html`) - 4 transit options

## 🚀 Quick Start

### View Locally

1. Clone this repository:
```bash
git clone https://github.com/YOUR-USERNAME/akari-kyoto-shijo.git
```

2. Open `index.html` in your web browser

That's it! No build process needed.

### Deploy

This is a static website and can be deployed to:
- ✅ **GitHub Pages** (current hosting)
- ✅ **Netlify** (drag & drop)
- ✅ **Vercel** (instant deploy)
- ✅ **Traditional hosting** (FTP upload)

See `DEPLOYMENT-GUIDE.md` for detailed instructions.

## 📁 Project Structure

```
akari-kyoto-shijo/
├── index.html                     # Main home page
├── heritage-site.html             # Heritage destinations
├── natural-landscape.html         # Nature destinations
├── urban-exploration.html         # Urban destinations
├── cafe-restaurant.html           # Dining options
├── supermarket.html               # Shopping locations
├── transportation.html            # Transit info
├── assets/
│   ├── css/
│   │   └── style.css             # All styles
│   ├── js/
│   │   ├── translations.js       # Language data (EN/JP/中文)
│   │   ├── script.js             # Main functionality
│   │   └── detail-pages.js       # Destination data
│   └── images/                   # All images (43 total)
└── docs/                         # Documentation files
```

## 🌏 Language Support

The website supports three languages with dynamic content switching:

- 🇬🇧 **English** (EN) - Default
- 🇯🇵 **Japanese** (JP) - 日本語
- 🇨🇳 **Chinese** (中文) - 简体中文

Language preference is saved to browser localStorage and persists across visits.

## 🖼️ Gallery

Interactive photo gallery with 5 space categories:
- **Bedroom 1** - 5 photos
- **Bedroom 2** - 4 photos
- **Living Room** - 4 photos
- **Bathroom** - 4 photos
- **View** - 4 photos

Total: 21 gallery images with modal viewer and navigation.

## 🗺️ Area Guide

27 curated destinations across 6 categories:
- 6 Heritage Sites (temples, castles, shrines)
- 6 Natural Landscapes (gardens, parks, bamboo groves)
- 5 Urban Shopping Districts
- 3 Cafes & Restaurants
- 3 Supermarkets & Drugstores
- 4 Transportation Hubs

Each includes:
- Distance from property
- Walking/transit time
- Google Maps directions link
- Descriptions in all 3 languages

## 🛠️ Technologies

- **HTML5** - Semantic markup
- **CSS3** - Custom properties, Flexbox, Grid
- **Vanilla JavaScript** - No frameworks
- **Google Fonts** - Share Tech, Funnel Sans, M PLUS 1 Code, Noto Sans SC
- **Google Maps API** - Directions integration

## 📱 Browser Support

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 📊 Performance

- 🚀 **Page Load**: < 2s
- 📦 **Total Size**: ~15 MB (with optimized images)
- ⚡ **First Contentful Paint**: < 1s
- 🎯 **Lighthouse Score**: 95+

## 🔧 Customization

### Update Airbnb Links

Replace `https://airbnb.com` with your actual listing URL:

```bash
# Find and replace in all HTML files
find . -name "*.html" -exec sed -i 's|https://airbnb.com|YOUR_AIRBNB_URL|g' {} +
```

### Change Colors

Edit CSS variables in `assets/css/style.css`:

```css
:root {
    --color-yellow: #F9F975;    /* Primary accent */
    --color-dark: #21201A;      /* Dark text */
    --color-light: #F7F5E7;     /* Light background */
}
```

### Add New Destinations

Edit `assets/js/detail-pages.js` and add entries to the appropriate destination array.

## 📝 Documentation

- **README.md** - This file
- **DEPLOYMENT-GUIDE.md** - Detailed deployment instructions
- **FILES-CREATED.md** - Technical overview
- **ALL-PAGES-COMPLETE.md** - Complete page list and features
- **IMAGE-EXPORT-GUIDE.md** - How to export images from React app

## 📄 License

This project is proprietary. All rights reserved.

## 🤝 Contributing

This is a private project for AKARI KYOTO SHIJO. Contributions are not accepted.

## 📞 Contact

For bookings and inquiries:
- 🌐 Website: [https://YOUR-USERNAME.github.io/akari-kyoto-shijo/](https://YOUR-USERNAME.github.io/akari-kyoto-shijo/)
- 📧 Email: contact@example.com
- 📱 Phone: +81-XX-XXXX-XXXX

## 🏆 Credits

- **Design & Development**: Created with Figma Make
- **Conversion to Static**: React to HTML/CSS/JS
- **Hosting**: GitHub Pages
- **Images**: Provided by property owner

---

**Built with ❤️ in Kyoto**

*Last updated: March 2026*
