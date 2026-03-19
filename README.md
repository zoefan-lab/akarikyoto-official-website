# AKARI KYOTO SHIJO - Static Website
## Production-Ready HTML/CSS/JS Website

---

## 📁 File Structure

```
static-site/
├── index.html                    # Main home page
├── heritage-site.html            # Heritage destinations page
├── natural-landscape.html        # Nature destinations page
├── urban-exploration.html        # Urban destinations page
├── cafe-restaurant.html          # Dining destinations page
├── supermarket.html              # Supermarket information page
├── transportation.html           # Transportation information page
├── assets/
│   ├── css/
│   │   └── style.css            # Main stylesheet
│   ├── js/
│   │   ├── translations.js      # All language translations
│   │   └── script.js            # Main JavaScript functionality
│   └── images/                  # All images folder
│       ├── logo.png             # Main logo
│       ├── hero-1.png           # Hero slideshow image 1
│       ├── hero-2.png           # Hero slideshow image 2
│       ├── hero-3.png           # Hero slideshow image 3
│       ├── hero-4.png           # Hero slideshow image 4
│       ├── bedroom1-main.png    # Bedroom 1 main thumbnail
│       ├── bedroom1-1.png       # Bedroom 1 gallery image 1
│       ├── bedroom1-2.png       # Bedroom 1 gallery image 2
│       ├── bedroom1-3.png       # Bedroom 1 gallery image 3
│       ├── bedroom1-4.png       # Bedroom 1 gallery image 4
│       ├── bedroom2-main.png    # Bedroom 2 main thumbnail
│       ├── bedroom2-1.png       # Bedroom 2 gallery image 1
│       ├── bedroom2-2.png       # Bedroom 2 gallery image 2
│       ├── bedroom2-3.png       # Bedroom 2 gallery image 3
│       ├── living-main.png      # Living room main thumbnail
│       ├── living-1.png         # Living room gallery image 1
│       ├── living-2.png         # Living room gallery image 2
│       ├── living-3.png         # Living room gallery image 3
│       ├── bathroom-main.png    # Bathroom main thumbnail
│       ├── bathroom-1.png       # Bathroom gallery image 1
│       ├── bathroom-2.png       # Bathroom gallery image 2
│       ├── bathroom-3.png       # Bathroom gallery image 3
│       ├── view-main.png        # View main thumbnail
│       ├── view-1.png           # View gallery image 1
│       ├── view-2.png           # View gallery image 2
│       ├── view-3.png           # View gallery image 3
│       ├── heritage-bg.png      # Heritage page hero background
│       ├── nature-bg.png        # Nature page hero background
│       ├── urban-bg.png         # Urban page hero background
│       └── cafe-bg.png          # Cafe page hero background
└── README.md                    # This file
```

---

## 🎨 Design Specifications

### Color Palette
- **Brand Yellow**: `#F9F975`
- **Deep Charcoal**: `#21201A`
- **Warm Cream**: `#F7F5E7`

### Typography
- **Headlines (English)**: Share Tech (Google Fonts)
- **Body Text (English)**: Funnel Sans (Google Fonts)
- **Japanese Text**: M PLUS 1 Code / M PLUS 1 (Google Fonts)
- **Chinese Text**: Noto Sans SC (Google Fonts)

---

## ⚙️ Features

### ✅ Implemented Features
1. **Hero Slideshow** - Automatic image rotation every 1.5 seconds
2. **Three-Language Support** - EN / JP / 中文 with proper fonts
3. **Gallery Modal** - Click on space images to view full gallery with navigation
4. **Mobile-Responsive** - Fully responsive design for all devices
5. **Smooth Scrolling** - Smooth navigation to page sections
6. **Mobile Menu** - Hamburger menu for mobile devices
7. **Language Persistence** - Saves language preference to localStorage
8. **Interactive Maps** - Google Maps integration for locations
9. **Fixed Navigation** - Sticky navigation bar with scroll effects
10. **Airbnb CTAs** - Multiple booking call-to-action buttons

### 🔄 Interactive Components
- Language switcher (top right)
- Mobile hamburger menu
- Hero image carousel
- Space gallery modal with prev/next navigation
- Smooth scroll to sections
- Hover effects on cards and buttons

---

## 🖼️ Image Export Guide

### Required Images from React App

You need to export these images from your React application:

#### **From `Home.tsx` imports:**
```
figma:asset/5b3939ec69f0a40a8c5280d609bb5444214c439b.png → logo.png

Hero Slideshow:
figma:asset/25fe184c8da8005dfef312e5a4342fc48f89920c.png → hero-1.png
figma:asset/6a5fc62f825c399118dce8662707478b902a0823.png → hero-2.png
figma:asset/1748cb98da24d51aec2b3db549b985eaaf85c6cf.png → hero-3.png
figma:asset/8df2aeeca0a26f642c33617e4c4eefb2d24444a8.png → hero-4.png

Bedroom 1:
figma:asset/1748cb98da24d51aec2b3db549b985eaaf85c6cf.png → bedroom1-main.png
figma:asset/1748cb98da24d51aec2b3db549b985eaaf85c6cf.png → bedroom1-1.png
figma:asset/2236369d843961635c6757cf985d6985c30f290b.png → bedroom1-2.png
figma:asset/210c9d4f8a4dd2b4974ec66777a14724958ec536.png → bedroom1-3.png
figma:asset/20ffff68b87eb5986eca2dd1f7ffbb6928a66b04.png → bedroom1-4.png

Bedroom 2:
figma:asset/532c7d87e687aee123aeff7cba8024113a132bc4.png → bedroom2-main.png
figma:asset/532c7d87e687aee123aeff7cba8024113a132bc4.png → bedroom2-1.png
figma:asset/c0b1284f373fdb7cac0624aa494a75b89665b745.png → bedroom2-2.png
figma:asset/0a8de2cc9805ec6513b1eef35360b0ec31986429.png → bedroom2-3.png

Living Room:
figma:asset/5a372e672370b02bc3587011ae51dfde9b286500.png → living-main.png
figma:asset/5a372e672370b02bc3587011ae51dfde9b286500.png → living-1.png
figma:asset/2fc45a123f465f64b5d7ebd95723988fcb7a29ec.png → living-2.png
figma:asset/a49e0c18057026e34fb29e2932d5b728eb8317ec.png → living-3.png

Bathroom:
figma:asset/2f2cfe93695cc08ce4fe5587d3405864452e374c.png → bathroom-main.png
figma:asset/2f2cfe93695cc08ce4fe5587d3405864452e374c.png → bathroom-1.png
figma:asset/43e081c441893ec9d540d08d73d6469f4ed8566c.png → bathroom-2.png
figma:asset/b7a3e2e398217549b8d9203fd98f1c0cf047ec3e.png → bathroom-3.png

View:
figma:asset/3c21dce4e0199aa125374b5add379126892d7f50.png → view-main.png
figma:asset/3c21dce4e0199aa125374b5add379126892d7f50.png → view-1.png
figma:asset/eab1a7f5d27b920ccac83aaef678852cc9bab347.png → view-2.png
figma:asset/5182cc8dd6a46bc49b3d4714364649eab930aff5.png → view-3.png
```

#### **From detail pages:**
```
Heritage Site:
figma:asset/7499803d4811299269a6575d5dcdc2ae955a2cdd.png → heritage-bg.png

Natural Landscape:
(You'll need to check NaturalLandscape.tsx for the background image)

Urban Exploration:
(You'll need to check UrbanExploration.tsx for the background image)

Cafe & Restaurant:
(You'll need to check CafeRestaurant.tsx for the background image)
```

### Image Optimization Tips:
1. Export images as **PNG** or **JPEG** (JPEG for photos, PNG for logos)
2. Optimize file sizes using tools like:
   - TinyPNG (https://tinypng.com/)
   - ImageOptim (Mac)
   - Squoosh (https://squoosh.app/)
3. Recommended max dimensions:
   - Hero images: 1920x1080px
   - Gallery images: 1600x1200px
   - Thumbnails: 800x600px
   - Logo: 400x auto

---

## 🚀 Deployment Instructions

### Option 1: Traditional Hosting (Lolipop, Xserver, etc.)

1. **Export all images** from your React app to the `assets/images/` folder
2. **Optimize images** for web (compress, resize)
3. **Upload via FTP**:
   - Connect to your hosting server via FTP (FileZilla, Cyberduck, etc.)
   - Upload the entire `static-site` folder to your `public_html` or `www` directory
4. **Access your site**: `https://yourdomain.com`

### Option 2: Netlify / Vercel (Drag & Drop)

1. Create account on Netlify or Vercel
2. Drag and drop the `static-site` folder
3. Your site will be live instantly with HTTPS

### Option 3: GitHub Pages

1. Create a GitHub repository
2. Push the `static-site` contents to the repository
3. Enable GitHub Pages in repository settings
4. Your site will be available at `https://username.github.io/repository-name`

---

## 🔧 Customization Guide

### Changing Colors
Edit `assets/css/style.css` - look for the `:root` variables:
```css
:root {
    --brand-yellow: #F9F975;
    --deep-charcoal: #21201A;
    --warm-cream: #F7F5E7;
}
```

### Adding/Editing Translations
Edit `assets/js/translations.js`:
```javascript
const translations = {
    EN: { ... },
    JP: { ... },
    '中文': { ... }
};
```

### Modifying Slideshow Speed
Edit `assets/js/script.js` line with `setInterval`:
```javascript
heroSlideInterval = setInterval(showNextSlide, 1500); // Change 1500 to desired milliseconds
```

### Updating Airbnb Links
Find and replace all instances of `https://airbnb.com` with your actual Airbnb listing URL in:
- `index.html`
- All detail pages (heritage-site.html, etc.)

---

## 📱 Browser Compatibility

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile Safari (iOS 12+)
- ✅ Chrome Mobile (Android 8+)

---

## ⚠️ Important Notes

### Before Going Live:
1. ✅ Export and optimize ALL images
2. ✅ Test on mobile devices
3. ✅ Update Airbnb booking links
4. ✅ Test language switcher
5. ✅ Test all navigation links
6. ✅ Verify Google Maps embeds work
7. ✅ Test contact email/phone links
8. ✅ Check gallery modal functionality

### SEO Recommendations:
- Add `<meta name="description">` tags to each page
- Add Open Graph tags for social media sharing
- Submit sitemap to Google Search Console
- Add Google Analytics tracking code

### Performance:
- All images should be optimized (<200KB for thumbnails, <500KB for full images)
- Enable GZIP compression on your server
- Consider adding a CDN for faster global loading

---

## 📝 Pending Tasks

You still need to create these detail pages:
- ✅ `index.html` (COMPLETE)
- ⏳ `heritage-site.html` (Template provided in next step)
- ⏳ `natural-landscape.html`
- ⏳ `urban-exploration.html`
- ⏳ `cafe-restaurant.html`
- ⏳ `supermarket.html`
- ⏳ `transportation.html`

---

## 💡 Tips for Maintenance

1. **Updating Prices**: Edit the appropriate translation in `translations.js`
2. **Adding New Areas**: Add new card in the "Around the Area" section and create corresponding detail page
3. **Changing Photos**: Simply replace the image file (keep the same filename)
4. **Updating Contact Info**: Edit in `translations.js` for all languages

---

## 🆘 Troubleshooting

**Images not showing:**
- Check file paths are correct
- Ensure images are in `assets/images/` folder
- Verify image filenames match exactly (case-sensitive on some servers)

**Language switcher not working:**
- Check browser console for JavaScript errors
- Ensure `translations.js` is loaded before `script.js`

**Gallery modal not opening:**
- Verify image paths in `script.js` `galleryData` object
- Check browser console for errors

**Mobile menu not working:**
- Ensure JavaScript is enabled
- Check for console errors

---

## 📧 Support

For questions about this static website conversion, refer to the code comments in:
- `assets/js/script.js` - All JavaScript functionality
- `assets/css/style.css` - All styling rules

---

## 📄 License

© 2026 AKARI KYOTO SHIJO. All rights reserved.

Residential Lodging Management Business: Ministry of Land, Infrastructure, Transport and Tourism (01) No. F05273
