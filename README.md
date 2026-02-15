# Basketball Brothers Website 🏀

A modern, responsive website for sharing basketball photos and videos with an interactive gallery system.

## Features

### 📷 Photo Gallery
- **Filter by category**: Games, Training, Team
- **Upload multiple photos** at once
- **Lightbox view** - Click any photo for full-screen viewing
- **Custom titles and categories** for each photo
- **Responsive grid layout** that adapts to any screen size

### 🎥 Video Gallery
- **Upload video files** directly from your device
- **Embed YouTube videos** by pasting URLs
- **Custom video titles**
- **Responsive video player**

### 🎨 Design Features
- Basketball-themed color scheme (Orange, Blue, Gold)
- Smooth animations and transitions
- Hover effects on photos and videos
- Mobile-responsive design
- Sticky navigation bar

## How to Use

### Getting Started
1. Open `index.html` in any modern web browser
2. No installation or server required - it's a pure HTML/CSS/JavaScript website

### Navigation
- **Home**: Welcome section
- **Photo Gallery**: Browse and filter photos
- **Video Gallery**: Watch uploaded videos
- **Upload Media**: Add new photos and videos

### Adding Photos
1. Click on **Upload Media** in the navigation
2. Under "Upload Photos" section:
   - Click **Choose Photos** to select image files
   - Enter a **title** for your photos
   - Select a **category** (Games, Training, or Team)
   - Click **Add to Gallery**
3. Your photos will appear in the Photo Gallery section

### Adding Videos
1. Go to **Upload Media** section
2. Under "Add Video" section:
   - **Option 1**: Click **Choose Video** to upload a video file
   - **Option 2**: Paste a YouTube URL in the URL field
   - Enter a **title** for your video
   - Click **Add to Gallery**
3. Your video will appear in the Video Gallery section

### Filtering Photos
- Use the filter buttons above the photo gallery:
  - **All Photos**: Show everything
  - **Games**: Show only game photos
  - **Training**: Show only training photos
  - **Team**: Show only team photos

### Viewing Photos in Lightbox
- Click any photo to view it in full-screen lightbox mode
- Click the **X** in the top-right corner or press **Escape** to close
- Click outside the image to close

## File Structure

```
basketball-brothers/
│
├── index.html          # Main HTML file
├── styles.css          # All styling and design
├── script.js           # Interactive functionality
└── README.md          # This file
```

## Browser Compatibility

Works on all modern browsers:
- ✅ Chrome
- ✅ Firefox
- ✅ Safari
- ✅ Edge

## Customization Tips

### Change Colors
Edit the CSS variables in `styles.css`:
```css
:root {
    --orange: #FF6B35;  /* Primary accent color */
    --blue: #004E89;    /* Secondary color */
    --gold: #F77F00;    /* Tertiary color */
    --dark: #1a1a1a;    /* Text and dark elements */
    --light: #f4f4f4;   /* Light backgrounds */
}
```

### Add More Categories
1. Add new filter button in `index.html`:
```html
<button class="filter-btn" data-filter="tournament">Tournament</button>
```

2. Add option in category dropdown:
```html
<option value="tournament">Tournament</option>
```

### Modify Layout
- Change grid columns in `styles.css`:
```css
.photo-grid {
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    /* Change 300px to your preferred minimum width */
}
```

## Features Breakdown

### JavaScript Functionality
- ✅ Smooth scrolling navigation
- ✅ Photo filtering by category
- ✅ Lightbox image viewer
- ✅ File upload preview
- ✅ Dynamic gallery updates
- ✅ YouTube URL parsing
- ✅ Success notifications
- ✅ Keyboard controls (Escape to close lightbox)

### Responsive Design
- Desktop: 3-4 columns
- Tablet: 2-3 columns
- Mobile: 1 column

## Tips for Best Results

1. **Photo Quality**: Use high-resolution images (at least 1200px wide)
2. **Video Format**: MP4 works best for uploaded videos
3. **YouTube URLs**: Both standard and short URLs work
   - `https://youtube.com/watch?v=VIDEO_ID`
   - `https://youtu.be/VIDEO_ID`
4. **Organization**: Use categories consistently for easier filtering

## Future Enhancement Ideas

- Add delete functionality for photos/videos
- Include social sharing buttons
- Add photo commenting system
- Create player profiles
- Add game statistics section
- Implement search functionality
- Add date/time stamps to uploads

## Support

For issues or questions, modify the code directly or consult web development resources.

---

**Keep ballin'! 🏀**
