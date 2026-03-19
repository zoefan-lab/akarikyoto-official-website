# AKARI KYOTO SHIJO - Deployment Guide

## 📋 Pre-Deployment Checklist

Before uploading your website, ensure you complete ALL of these tasks:

### ✅ 1. Export All Images
You need to export **43 images** from your React application to the `assets/images/` folder.

**Critical Images:**
- [ ] `logo.png` - Main AKARI KYOTO SHIJO logo
- [ ] `hero-1.png` through `hero-4.png` - Hero slideshow images
- [ ] All bedroom, living room, bathroom, and view images (see README.md for full list)
- [ ] Background images for all detail pages

### ✅ 2. Update Airbnb Links
Find and replace **ALL instances** of `https://airbnb.com` with your actual Airbnb listing URL:

**Files to update:**
- [ ] `index.html` (2 instances)
- [ ] `heritage-site.html` (1 instance in navigation)
- [ ] `natural-landscape.html`
- [ ] `urban-exploration.html`
- [ ] `cafe-restaurant.html`
- [ ] `supermarket.html`
- [ ] `transportation.html`

### ✅ 3. Verify Contact Information
Check that email and phone numbers are correct:
- [ ] Email: `Shingewa@outlook.com`
- [ ] Phone: `+81 80 2992 2199`
- [ ] Address: `43-8 Mibu Takahi-cho, Nakagyo-ku, Kyoto City, Japan 604-8804`

### ✅ 4. Create Missing Detail Pages
You still need to create these HTML pages (use `heritage-site.html` as template):
- [ ] `natural-landscape.html`
- [ ] `urban-exploration.html`
- [ ] `cafe-restaurant.html`
- [ ] `supermarket.html`
- [ ] `transportation.html`

### ✅ 5. Test Locally
Before uploading, test everything works:
- [ ] Open `index.html` in a browser
- [ ] Test all navigation links
- [ ] Test language switcher (EN/JP/中文)
- [ ] Test hero slideshow
- [ ] Click on space images to test gallery modal
- [ ] Test mobile menu (resize browser window)
- [ ] Test all detail page links

---

## 🚀 Deployment Methods

### Method 1: Traditional Hosting (Lolipop, Xserver, etc.)

#### Step-by-Step Instructions:

**1. Prepare Your Files**
```
static-site/
├── index.html
├── heritage-site.html
├── (other .html files)
└── assets/
    ├── css/
    ├── js/
    └── images/
```

**2. Connect via FTP**
- Download an FTP client (FileZilla recommended)
- Get FTP credentials from your hosting provider
- Connect to your server

**3. Upload Files**
- Navigate to your `public_html` or `www` directory
- Upload the ENTIRE `static-site` folder contents
- Preserve the folder structure

**4. Set Permissions**
- Files: 644
- Folders: 755

**5. Test Your Site**
- Visit `https://yourdomain.com`
- Test all functionality

#### Common Issues:

**Images not showing?**
```
✓ Check file paths are correct (case-sensitive!)
✓ Ensure images are uploaded to assets/images/
✓ Clear browser cache
```

**404 errors on navigation?**
```
✓ Ensure all .html files are in root directory
✓ Check file names match exactly (case-sensitive)
```

---

### Method 2: Netlify (Easiest - Recommended for Beginners)

**1. Create Netlify Account**
- Go to https://netlify.com
- Sign up for free account

**2. Deploy via Drag & Drop**
- Click "Add new site" → "Deploy manually"
- Drag the `static-site` folder into the upload area
- Wait for deployment (usually < 1 minute)

**3. Configure Domain**
- Click "Domain settings"
- Add your custom domain (optional)
- Or use the free `yoursite.netlify.app` subdomain

**Advantages:**
- ✅ Free HTTPS certificate
- ✅ Automatic CDN (fast loading worldwide)
- ✅ Easy to update (just drag & drop again)
- ✅ No server maintenance

---

### Method 3: Vercel

**1. Install Vercel CLI** (optional - can also use web interface)
```bash
npm install -g vercel
```

**2. Deploy**
```bash
cd static-site
vercel
```

**3. Follow Prompts**
- Link to your account
- Configure project settings
- Deploy!

**Advantages:**
- ✅ Lightning-fast global CDN
- ✅ Free SSL
- ✅ Excellent performance
- ✅ One-command updates

---

### Method 4: GitHub Pages

**1. Create GitHub Repository**
- Go to github.com
- Create new repository
- Name it whatever you want

**2. Push Your Code**
```bash
cd static-site
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/USERNAME/REPO-NAME.git
git push -u origin main
```

**3. Enable GitHub Pages**
- Go to repository Settings
- Scroll to "Pages" section
- Source: Deploy from branch `main`
- Folder: `/root`
- Save

**4. Access Your Site**
- URL will be: `https://username.github.io/repo-name`

**Advantages:**
- ✅ Free hosting
- ✅ Version control
- ✅ Easy to track changes

---

## 🔧 Post-Deployment Configuration

### Enable GZIP Compression

**For Apache (.htaccess):**
```apache
<IfModule mod_deflate.c>
    AddOutputFilterByType DEFLATE text/html text/plain text/xml text/css text/javascript application/javascript
</IfModule>
```

**For Nginx:**
```nginx
gzip on;
gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript;
```

### Add Browser Caching

**Apache (.htaccess):**
```apache
<IfModule mod_expires.c>
    ExpiresActive On
    ExpiresByType image/jpg "access plus 1 year"
    ExpiresByType image/jpeg "access plus 1 year"
    ExpiresByType image/png "access plus 1 year"
    ExpiresByType text/css "access plus 1 month"
    ExpiresByType application/javascript "access plus 1 month"
</IfModule>
```

### Set Up SSL Certificate

**Most hosting providers offer free SSL:**
- Lolipop: Enable in control panel
- Xserver: Let's Encrypt integration
- Netlify/Vercel/GitHub Pages: Automatic!

### Add Security Headers

**Apache (.htaccess):**
```apache
<IfModule mod_headers.c>
    Header set X-Content-Type-Options "nosniff"
    Header set X-Frame-Options "SAMEORIGIN"
    Header set X-XSS-Protection "1; mode=block"
</IfModule>
```

---

## 📊 Performance Optimization

### Image Optimization

**Before uploading, optimize all images:**

1. **Use online tools:**
   - TinyPNG: https://tinypng.com/
   - Squoosh: https://squoosh.app/
   - ImageOptim (Mac): https://imageoptim.com/

2. **Target file sizes:**
   - Hero images: 200-500 KB
   - Gallery images: 150-300 KB
   - Thumbnails: 50-150 KB
   - Logo: < 50 KB

3. **Recommended dimensions:**
   - Hero: 1920 x 1080px
   - Gallery: 1600 x 1200px
   - Thumbnails: 800 x 600px

### Loading Speed Tips

1. **Enable lazy loading** (already implemented)
2. **Use CDN** (automatic with Netlify/Vercel)
3. **Minify CSS/JS** (optional for production)
4. **Compress images** (critical!)

---

## 🔍 SEO Optimization

### Add to Each HTML Page:

**In `<head>` section:**
```html
<!-- SEO Meta Tags -->
<meta name="description" content="AKARI KYOTO SHIJO - Exclusive boutique homestay in Kyoto's historic district">
<meta name="keywords" content="kyoto accommodation, boutique homestay, airbnb kyoto, traditional japanese stay">
<meta name="author" content="AKARI KYOTO SHIJO">

<!-- Open Graph (Facebook/Social) -->
<meta property="og:title" content="AKARI KYOTO SHIJO | Exclusive Boutique Homestay">
<meta property="og:description" content="Experience luxury and privacy in Kyoto's historic district">
<meta property="og:image" content="https://yourdomain.com/assets/images/hero-1.png">
<meta property="og:url" content="https://yourdomain.com">
<meta property="og:type" content="website">

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="AKARI KYOTO SHIJO">
<meta name="twitter:description" content="Exclusive boutique homestay in Kyoto">
<meta name="twitter:image" content="https://yourdomain.com/assets/images/hero-1.png">
```

### Create sitemap.xml

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
        <loc>https://yourdomain.com/</loc>
        <priority>1.0</priority>
    </url>
    <url>
        <loc>https://yourdomain.com/heritage-site.html</loc>
        <priority>0.8</priority>
    </url>
    <url>
        <loc>https://yourdomain.com/natural-landscape.html</loc>
        <priority>0.8</priority>
    </url>
    <!-- Add other pages -->
</urlset>
```

### Submit to Search Engines

1. **Google Search Console**
   - Add your site
   - Submit sitemap
   - Request indexing

2. **Bing Webmaster Tools**
   - Add your site
   - Submit sitemap

---

## 📱 Testing Checklist

### Before Going Live:

**Desktop Testing:**
- [ ] Chrome (latest version)
- [ ] Firefox (latest version)
- [ ] Safari (latest version)
- [ ] Edge (latest version)

**Mobile Testing:**
- [ ] iPhone Safari (iOS 14+)
- [ ] Chrome on Android
- [ ] Test portrait and landscape modes

**Functionality Testing:**
- [ ] Hero slideshow auto-plays
- [ ] Language switcher changes all text
- [ ] All navigation links work
- [ ] Gallery modal opens and closes
- [ ] Gallery prev/next buttons work
- [ ] Mobile menu opens/closes
- [ ] All external links open in new tab
- [ ] Google Maps embeds load correctly
- [ ] Email/phone links work on mobile

**Content Testing:**
- [ ] All images load correctly
- [ ] No broken links (404 errors)
- [ ] All translations display properly
- [ ] Contact information is correct
- [ ] Airbnb links are updated

---

## 🆘 Troubleshooting

### Problem: Images not loading

**Solution:**
```
1. Check browser console (F12) for errors
2. Verify image file names match exactly (case-sensitive)
3. Ensure images are in assets/images/ folder
4. Check file paths don't have spaces or special characters
5. Try hard refresh (Ctrl+Shift+R or Cmd+Shift+R)
```

### Problem: Language switcher not working

**Solution:**
```
1. Check browser console for JavaScript errors
2. Ensure translations.js loads before script.js
3. Verify localStorage is enabled in browser
4. Try in incognito/private mode
```

### Problem: Gallery modal doesn't open

**Solution:**
```
1. Check that gallery images exist in galleryData object
2. Verify image paths are correct
3. Check browser console for errors
4. Ensure script.js is loading properly
```

### Problem: Mobile menu doesn't toggle

**Solution:**
```
1. Ensure JavaScript is enabled
2. Check console for errors
3. Verify mobile-menu-toggle button has correct ID
4. Test on actual mobile device (not just browser resize)
```

---

## 📈 Analytics Setup (Optional)

### Add Google Analytics

**1. Create GA4 property**
- Go to analytics.google.com
- Create new property

**2. Add tracking code**
Add before `</head>` in all HTML files:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

---

## 🔄 Updating Your Site

### Quick Update Process:

**Netlify/Vercel:**
1. Make changes locally
2. Drag & drop to dashboard
3. Done!

**FTP/Traditional Hosting:**
1. Make changes locally
2. Test locally
3. Upload changed files via FTP
4. Clear browser cache

**GitHub Pages:**
```bash
git add .
git commit -m "Update description"
git push
```

---

## ✅ Final Launch Checklist

Before announcing your site:

- [ ] All 43 images exported and optimized
- [ ] All Airbnb links updated
- [ ] All 7 HTML pages created
- [ ] Tested on desktop browsers
- [ ] Tested on mobile devices
- [ ] Contact information verified
- [ ] Language switcher works in all languages
- [ ] SSL certificate active (HTTPS)
- [ ] Google Search Console configured
- [ ] Analytics tracking added (optional)
- [ ] Social media meta tags added
- [ ] Site speed tested (< 3 seconds load time)
- [ ] 404 page created (optional but recommended)

---

## 📧 Support & Maintenance

### Regular Maintenance Tasks:

**Monthly:**
- Check all links still work
- Update availability/pricing if needed
- Review analytics

**Quarterly:**
- Update images if you have new photos
- Refresh content
- Check for browser compatibility updates

**Yearly:**
- Review and optimize images
- Update contact information
- Refresh design if needed

---

## 🎉 Congratulations!

Your AKARI KYOTO SHIJO website is now ready for deployment!

Remember:
- Test thoroughly before launch
- Start with one deployment method
- Monitor your site after launch
- Update content regularly

Good luck with your boutique homestay! 🏡✨
