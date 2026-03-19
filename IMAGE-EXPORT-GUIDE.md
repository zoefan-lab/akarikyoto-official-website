# 🖼️ Image Export Guide

## How to Export Images from the React App to Static Site

You need to export **43 images** from the React app and save them to `static-site/assets/images/`.

---

## 📋 Complete Image Mapping

### Method 1: Right-Click & Save (Easiest)

**Step by step:**

1. **Open the React app** in Figma Make preview pane
2. **Scroll through the page** to load all images
3. **Right-click each image** → "Save Image As..."
4. **Rename and save** to `static-site/assets/images/` with these names:

---

## 🗺️ Image Mapping from React to Static Site

### Logo (1 image)
```
React Source: figma:asset/3c21dce4e0199aa125374b5add379126892d7f50.png
Save As: logo.png
Location: Used in header/navigation
```

### Hero Slideshow (4 images)
```
React Source: figma:asset/2f2cfe93695cc08ce4fe5587d3405864452e374c.png
Save As: hero-1.png

React Source: figma:asset/5a372e672370b02bc3587011ae51dfde9b286500.png
Save As: hero-2.png

React Source: figma:asset/532c7d87e687aee123aeff7cba8024113a132bc4.png
Save As: hero-3.png

React Source: figma:asset/5b3939ec69f0a40a8c5280d609bb5444214c439b.png
Save As: hero-4.png

Location: Main hero section slideshow
```

### Bedroom 1 Gallery (5 images)
```
React Source: figma:asset/1748cb98da24d51aec2b3db549b985eaaf85c6cf.png
Save As: bedroom1-main.png

React Source: figma:asset/518d0220946c2914bdf214cebd42d0e58124eebb.png
Save As: bedroom1-1.png

React Source: figma:asset/aa209161b955bfd43cd9c9adf4cf403265e33eaf.png
Save As: bedroom1-2.png

React Source: figma:asset/8df2aeeca0a26f642c33617e4c4eefb2d24444a8.png
Save As: bedroom1-3.png

React Source: figma:asset/c0b1284f373fdb7cac0624aa494a75b89665b745.png
Save As: bedroom1-4.png

Location: "Your Space" section - Bedroom 1
```

### Bedroom 2 Gallery (4 images)
```
React Source: figma:asset/0a8de2cc9805ec6513b1eef35360b0ec31986429.png
Save As: bedroom2-main.png

React Source: figma:asset/2fc45a123f465f64b5d7ebd95723988fcb7a29ec.png
Save As: bedroom2-1.png

React Source: figma:asset/a49e0c18057026e34fb29e2932d5b728eb8317ec.png
Save As: bedroom2-2.png

React Source: figma:asset/43e081c441893ec9d540d08d73d6469f4ed8566c.png
Save As: bedroom2-3.png

Location: "Your Space" section - Bedroom 2
```

### Living Room Gallery (4 images)
```
React Source: figma:asset/b7a3e2e398217549b8d9203fd98f1c0cf047ec3e.png
Save As: living-main.png

React Source: figma:asset/eab1a7f5d27b920ccac83aaef678852cc9bab347.png
Save As: living-1.png

React Source: figma:asset/5182cc8dd6a46bc49b3d4714364649eab930aff5.png
Save As: living-2.png

React Source: figma:asset/2236369d843961635c6757cf985d6985c30f290b.png
Save As: living-3.png

Location: "Your Space" section - Living Room
```

### Bathroom Gallery (4 images)
```
React Source: figma:asset/210c9d4f8a4dd2b4974ec66777a14724958ec536.png
Save As: bathroom-main.png

React Source: figma:asset/20ffff68b87eb5986eca2dd1f7ffbb6928a66b04.png
Save As: bathroom-1.png

React Source: figma:asset/25fe184c8da8005dfef312e5a4342fc48f89920c.png
Save As: bathroom-2.png

React Source: figma:asset/6a5fc62f825c399118dce8662707478b902a0823.png
Save As: bathroom-3.png

Location: "Your Space" section - Bathroom
```

### View Gallery (4 images)
```
React Source: (You'll need to check the React app for these)
Save As: view-main.png
Save As: view-1.png
Save As: view-2.png
Save As: view-3.png

Location: "Your Space" section - View
```

### Detail Page Backgrounds (6 images)
```
Save As: heritage-bg.png
Location: heritage-site.html hero background

Save As: nature-bg.png
Location: natural-landscape.html hero background

Save As: urban-bg.png
Location: urban-exploration.html hero background

Save As: cafe-bg.png
Location: cafe-restaurant.html hero background

Save As: supermarket-bg.png
Location: supermarket.html hero background

Save As: transport-bg.png
Location: transportation.html hero background
```

---

## 🎯 Quick Export Process

### Step 1: Open React App
- Look at the **right preview pane** in Figma Make
- Your AKARI KYOTO SHIJO website should be displayed
- Scroll through to load all images

### Step 2: Export Images

**For each image:**
1. Right-click the image
2. Select "Save Image As..." or "Save Picture As..."
3. Navigate to `static-site/assets/images/`
4. Rename to the correct filename (see mapping above)
5. Save

### Step 3: Organize

Create this folder structure:
```
static-site/
└── assets/
    └── images/
        ├── logo.png
        ├── hero-1.png
        ├── hero-2.png
        ├── hero-3.png
        ├── hero-4.png
        ├── bedroom1-main.png
        ├── bedroom1-1.png
        ├── ... (all 43 images)
```

---

## 🔍 How to Find Images in React App

### Using Browser DevTools:

1. **Right-click on preview** → "Inspect" or press F12
2. **Go to "Network" tab**
3. **Refresh the page** (Ctrl+R or Cmd+R)
4. **Filter by "Img" or "PNG"**
5. **Click each image** to see full resolution
6. **Right-click → "Open in new tab"**
7. **Save from new tab**

### Using Elements Tab:

1. **Right-click on an image** → "Inspect Element"
2. **Look at the HTML**: `<img src="blob:..." />`
3. **Click the blob URL** to open in new tab
4. **Save the image**

---

## 📸 Alternative: Screenshot Method

If right-click doesn't work:

1. **Take screenshots** of each image section
2. **Crop to image only** (use any photo editor)
3. **Save with correct filename**
4. **Export as PNG**

**Tools for cropping:**
- Mac: Preview or Photos
- Windows: Paint or Photos
- Online: photopea.com

---

## ✅ Verification Checklist

After exporting all images:

```
static-site/assets/images/
├── ✅ logo.png
├── ✅ hero-1.png
├── ✅ hero-2.png
├── ✅ hero-3.png
├── ✅ hero-4.png
├── ✅ bedroom1-main.png
├── ✅ bedroom1-1.png
├── ✅ bedroom1-2.png
├── ✅ bedroom1-3.png
├── ✅ bedroom1-4.png
├── ✅ bedroom2-main.png
├── ✅ bedroom2-1.png
├── ✅ bedroom2-2.png
├── ✅ bedroom2-3.png
├── ✅ living-main.png
├── ✅ living-1.png
├── ✅ living-2.png
├── ✅ living-3.png
├── ✅ bathroom-main.png
├── ✅ bathroom-1.png
├── ✅ bathroom-2.png
├── ✅ bathroom-3.png
├── ✅ view-main.png
├── ✅ view-1.png
├── ✅ view-2.png
├── ✅ view-3.png
├── ✅ heritage-bg.png
├── ✅ nature-bg.png
├── ✅ urban-bg.png
├── ✅ cafe-bg.png
├── ✅ supermarket-bg.png
└── ✅ transport-bg.png

Total: 43 images
```

---

## 🚀 After Exporting

1. **Optimize images** at tinypng.com (compress without quality loss)
2. **Test locally**: Open `index.html` and verify all images load
3. **Update Airbnb links** in all HTML files
4. **Deploy!** Follow DEPLOYMENT-GUIDE.md

---

## 💡 Pro Tips

### Image Optimization
- **Hero images**: Resize to 1920px width max
- **Gallery images**: Resize to 1200px width max
- **Thumbnails**: Resize to 600px width max
- **Compress all**: Use TinyPNG to reduce file size by 50-70%

### Quality Settings
- **Format**: PNG for photos with transparency, JPG for photos
- **Quality**: 85-90% for web (perfect balance)
- **File size target**: 
  - Hero: 200-500 KB
  - Gallery: 150-300 KB
  - Thumbnails: 50-150 KB

### Batch Processing
If you have many images:
1. Export all to a temporary folder first
2. Batch rename using a file manager
3. Batch compress using TinyPNG or ImageOptim
4. Move to `static-site/assets/images/`

---

## 🆘 Troubleshooting

### "Can't right-click to save"
- Try opening DevTools (F12) and using Network tab
- Or take screenshots and crop

### "Images are blurry"
- Make sure you're viewing at 100% zoom
- Open image in new tab before saving
- Use DevTools to find original high-res version

### "Can't find all images"
- Scroll through entire React app to trigger lazy loading
- Check different sections: Hero, Space Gallery, Area cards
- Some images might load on scroll

### "Wrong image format"
- The React app uses PNG format
- Save as PNG to maintain quality
- Can convert to JPG later if needed for smaller file size

---

## 📞 Need Help?

If you can't export certain images:
1. Take a screenshot of the React app showing which images you see
2. I can help identify which ones need to be exported
3. We can create placeholder images if needed

**You've got this! 🎉**
