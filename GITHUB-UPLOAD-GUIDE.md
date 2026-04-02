# 🚀 GitHub Upload Guide for AKARI KYOTO SHIJO

## ✅ Pre-Upload Checklist

Before uploading to GitHub, make sure you have:

- [x] Updated all Airbnb links to `airbnb.cn/h/akari-kyoto-shijo`
- [x] Converted all images from PNG to JPG (except logo.png)
- [ ] Exported all 43 images to `assets/images/` folder
- [ ] Tested website locally (opened index.html in browser)

---

## 📁 Files to Upload to GitHub

### Upload **ALL** files from your `static-site` folder:

```
static-site/
├── index.html ✅
├── heritage-site.html ✅
├── natural-landscape.html ✅
├── urban-exploration.html ✅
├── cafe-restaurant.html ✅
├── supermarket.html ✅
├── transportation.html ✅
├── assets/
│   ├── css/
│   │   └── style.css ✅
│   ├── js/
│   │   ├── translations.js ✅
│   │   ├── script.js ✅
│   │   └── detail-pages.js ✅
│   └── images/
│       ├── logo.png ⚠️ (PNG format)
│       ├── hero-1.jpg ⚠️ (JPG format)
│       ├── hero-2.jpg
│       ├── hero-3.jpg
│       ├── hero-4.jpg
│       └── ... (38 more JPG images)
├── README.md (optional)
└── Documentation files (optional)
```

---

## 🎯 IMPORTANT: What to Upload

### ✅ MUST Upload (Required for website to work):
1. All 7 HTML files
2. `assets/css/style.css`
3. `assets/js/translations.js`
4. `assets/js/script.js`
5. `assets/js/detail-pages.js`
6. All 43 images in `assets/images/`

### 📝 Optional (Documentation only):
- README.md
- DEPLOYMENT-GUIDE.md
- FILES-CREATED.md
- IMAGE-FORMAT-CONVERSION-COMPLETE.md
- AIRBNB-LINK-UPDATE-COMPLETE.md
- LOGO-PNG-CHANGE-SUMMARY.md

---

## 🌐 Step-by-Step GitHub Upload

### Method: GitHub Web Interface (Easiest)

#### Step 1: Create GitHub Account
1. Go to **https://github.com**
2. Click **"Sign up"** (if you don't have an account)
3. Verify your email address

#### Step 2: Create New Repository
1. Click the **"+"** icon in top-right corner
2. Select **"New repository"**
3. Fill in:
   ```
   Repository name: akari-kyoto-shijo
   Description: Boutique Homestay Website in Kyoto
   Visibility: Public ✓ (required for free GitHub Pages)
   ```
4. **DO NOT** check:
   - ❌ Add a README file
   - ❌ Add .gitignore
   - ❌ Choose a license
5. Click **"Create repository"**

#### Step 3: Upload Files
1. You'll see: **"Quick setup — if you've done this kind of thing before"**
2. Look for: **"uploading an existing file"** link - Click it!
3. **Important:** Open your `static-site` folder on your computer
4. **Select ALL files and folders inside** `static-site`:
   - Select all 7 HTML files
   - Select `assets` folder (entire folder)
   - Select any documentation files (optional)
5. **Drag and drop** everything into GitHub upload area
6. Wait for upload to complete (may take 2-5 minutes for images)
7. In "Commit changes" box at bottom:
   ```
   Commit message: Initial commit - AKARI KYOTO SHIJO website
   ```
8. Click green **"Commit changes"** button

#### Step 4: Enable GitHub Pages
1. Click **"Settings"** tab (top menu)
2. Scroll down left sidebar → Click **"Pages"**
3. Under "Build and deployment":
   - Source: **Deploy from a branch**
   - Branch: Select **main** (or **master**)
   - Folder: Select **/ (root)**
4. Click **"Save"**
5. Wait 1-2 minutes for deployment

#### Step 5: Get Your Website URL
1. Refresh the Pages settings page
2. You'll see:
   ```
   Your site is live at https://YOUR-USERNAME.github.io/akari-kyoto-shijo/
   ```
3. Click the link to view your live website! 🎉

---

## 🔍 Verify Upload Success

After uploading, check that your repository shows:

```
akari-kyoto-shijo/
├── index.html
├── heritage-site.html
├── natural-landscape.html
├── urban-exploration.html
├── cafe-restaurant.html
├── supermarket.html
├── transportation.html
└── assets/
    ├── css/
    │   └── style.css
    ├── js/
    │   ├── translations.js
    │   ├── script.js
    │   └── detail-pages.js
    └── images/
        ├── logo.png
        ├── hero-1.jpg
        └── ... (42 more images)
```

---

## 🧪 Test Your Live Website

Once deployed, test these features:

### Homepage Tests:
- [ ] Hero slideshow displays 4 images
- [ ] Logo displays in hero section
- [ ] Language switcher works (EN/JP/中文)
- [ ] Navigation menu works
- [ ] Click "Book Now" → opens airbnb.cn/h/akari-kyoto-shijo
- [ ] Gallery modal opens when clicking space images
- [ ] All 5 space gallery thumbnails load
- [ ] Google Maps displays in contact section

### Detail Page Tests:
- [ ] Click each area card from homepage
- [ ] Heritage Site page loads correctly
- [ ] Natural Landscape page loads correctly
- [ ] Urban Exploration page loads correctly
- [ ] Cafe & Restaurant page loads correctly
- [ ] Supermarket page loads correctly
- [ ] Transportation page loads correctly
- [ ] Background images display on all pages
- [ ] "Back to Home" link works
- [ ] Directions links open Google Maps

### Booking Links Tests:
- [ ] Click "Book Now" in navigation
- [ ] Click "Book on Airbnb" in hero section
- [ ] Click "Book on Airbnb" in contact section
- [ ] All links open `airbnb.cn/h/akari-kyoto-shijo`
- [ ] All links open in new tab

### Language Tests:
- [ ] Switch to Japanese (JP) - content changes
- [ ] Switch to Chinese (中文) - content changes
- [ ] Switch back to English (EN) - content changes
- [ ] Language preference persists on page reload

### Mobile Tests:
- [ ] Open website on mobile device
- [ ] Mobile menu icon appears
- [ ] Mobile menu opens/closes
- [ ] Images display correctly
- [ ] Buttons are tappable
- [ ] Site is responsive

---

## 🆘 Troubleshooting

### Problem: Images Not Showing
**Solution:**
1. Check file names match exactly (case-sensitive!)
   - ✅ `hero-1.jpg` (correct)
   - ❌ `Hero-1.jpg` (wrong)
   - ❌ `hero-1.JPG` (wrong)
2. Verify images are in `assets/images/` folder
3. Check browser console (F12) for 404 errors

### Problem: Website Not Loading
**Solution:**
1. Wait 2-3 minutes after enabling GitHub Pages
2. Check Settings → Pages for deployment status
3. Verify repository is set to **Public**
4. Hard refresh: `Ctrl+Shift+R` (Windows) or `Cmd+Shift+R` (Mac)

### Problem: 404 Error on GitHub Pages
**Solution:**
1. Verify `index.html` is in **root folder** (not in subfolder)
2. Check GitHub Pages source is set to `/ (root)`
3. Make sure repository is **Public** not Private

### Problem: Airbnb Links Not Working
**Solution:**
1. Verify links contain: `https://airbnb.cn/h/akari-kyoto-shijo`
2. Check all 7 HTML files were uploaded
3. Clear browser cache and reload

### Problem: Changes Not Showing
**Solution:**
1. GitHub Pages takes 1-2 minutes to update
2. Hard refresh your browser
3. Clear browser cache
4. Try incognito/private mode

---

## 🎨 Optional: Add README to Repository

After uploading, you can create a README.md file:

1. In your repository, click **"Add file"** → **"Create new file"**
2. Name it: `README.md`
3. Add content (sample provided in `README-GITHUB.md`)
4. Click **"Commit changes"**

---

## 🔄 How to Update Website Later

### Option 1: Upload Files via Web (Easy)
1. Go to your repository on GitHub
2. Navigate to the file you want to update
3. Click the file → Click pencil icon (Edit)
4. Make changes → Commit
5. Wait 1-2 minutes for GitHub Pages to update

### Option 2: Upload New Version (Replace)
1. Delete old file in repository
2. Upload new file with same name
3. Commit changes

### Option 3: Use Git (Advanced)
```bash
# Navigate to your local folder
cd /path/to/static-site

# Make your changes to files

# Stage changes
git add .

# Commit changes
git commit -m "Update content"

# Push to GitHub
git push
```

---

## 📊 GitHub Pages Features

### Free Hosting Includes:
- ✅ **Free HTTPS** (secure connection)
- ✅ **Free CDN** (fast global delivery)
- ✅ **Unlimited bandwidth**
- ✅ **Custom domain support**
- ✅ **Automatic updates** (within 1-2 minutes)
- ✅ **99.9% uptime**

### Your Website URL:
```
https://YOUR-USERNAME.github.io/akari-kyoto-shijo/
```

**Example:**
If your GitHub username is `johndoe`:
```
https://johndoe.github.io/akari-kyoto-shijo/
```

---

## 🌟 Optional: Custom Domain

Want to use your own domain like `www.akari-kyoto.com`?

1. Go to Settings → Pages
2. Under "Custom domain", enter: `www.akari-kyoto.com`
3. Click Save
4. Update your domain's DNS settings:
   ```
   Type: CNAME
   Name: www
   Value: YOUR-USERNAME.github.io
   ```
5. Wait 24 hours for DNS propagation

---

## 📈 Monitor Your Website

### Check Deployment Status:
1. Go to repository
2. Click **"Actions"** tab
3. See deployment history and status

### View Traffic (if repository is Public):
1. Go to **"Insights"** tab
2. Click **"Traffic"**
3. View page views and visitors

---

## ✅ Final Checklist Before Upload

- [ ] All 43 images exported and optimized
- [ ] Logo is PNG, others are JPG
- [ ] All Airbnb links updated
- [ ] Tested website locally
- [ ] All images display correctly
- [ ] Language switcher works
- [ ] Gallery modal works
- [ ] No broken links
- [ ] Mobile responsive

---

## 🎉 You're Ready!

Your website is complete and ready to upload to GitHub!

### Quick Summary:
1. ✅ Create GitHub account
2. ✅ Create new repository: `akari-kyoto-shijo`
3. ✅ Upload all files from `static-site` folder
4. ✅ Enable GitHub Pages in Settings
5. ✅ Visit your live website!

**Your website will be live at:**
```
https://YOUR-USERNAME.github.io/akari-kyoto-shijo/
```

---

## 📞 Need Help?

If you encounter issues:
1. Check the troubleshooting section above
2. Review GitHub Pages documentation: https://docs.github.com/pages
3. Verify all files are uploaded correctly
4. Check browser console for errors (F12)

---

*Good luck with your deployment!* 🚀  
*Your beautiful Kyoto homestay website will be live soon!*

---

*Last updated: March 21, 2026*  
*Ready for GitHub deployment*
