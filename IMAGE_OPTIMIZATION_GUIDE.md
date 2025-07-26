# Image Optimization & SEO Guide for Small Town Vibes

## Hero Images to Convert

### 1. Street View Image (castle-rock-downtown-street-view.webp)
- **Current**: Image 1 - Street view with lamp post
- **Location**: `/public/images/hero/castle-rock-downtown-street-view.webp`
- **Optimal Dimensions**: 1920x1080 (16:9) for hero, with responsive variants
- **Target File Size**: < 150KB for WebP at 85% quality
- **SEO Metadata**:
  - Title: "Castle Rock Downtown Shopping District"
  - Alt: "Downtown Castle Rock Colorado street view with historic lamp posts and Castle Rock butte"
  - Description: "Vibrant downtown Castle Rock street showcasing local businesses, outdoor dining, and the Castle Rock landmark"

### 2. Aerial View Image (castle-rock-aerial-downtown-view.webp)
- **Current**: Image 2 - Aerial view with American flag
- **Location**: `/public/images/hero/castle-rock-aerial-downtown-view.webp`
- **Optimal Dimensions**: 1920x1080 (16:9) for hero
- **Target File Size**: < 150KB for WebP at 85% quality
- **SEO Metadata**:
  - Title: "Castle Rock Colorado Downtown Aerial View"
  - Alt: "Aerial view of downtown Castle Rock Colorado with iconic Castle Rock formation at sunset"
  - Description: "Stunning aerial view showcasing downtown Castle Rock businesses with the iconic Castle Rock geological formation"

### 3. Landmark View Image (castle-rock-downtown-landmark-view.webp)
- **Current**: Image 3 - Downtown with prominent Castle Rock
- **Location**: `/public/images/hero/castle-rock-downtown-landmark-view.webp`
- **Optimal Dimensions**: 1920x1080 (16:9) for hero
- **Target File Size**: < 150KB for WebP at 85% quality
- **SEO Metadata**:
  - Title: "Castle Rock Landmark and Downtown Business District"
  - Alt: "Castle Rock Colorado downtown district with Castle Rock geological formation and American flags"
  - Description: "Panoramic view of Castle Rock downtown featuring local businesses, tree-lined streets, and the famous Castle Rock"

## Conversion Instructions

### Using cwebp (Command Line)
```bash
# Install WebP tools
brew install webp  # macOS
# or
sudo apt-get install webp  # Ubuntu/Debian

# Convert with metadata preservation
cwebp -q 85 -metadata all input.jpg -o castle-rock-downtown-street-view.webp

# Add specific metadata
exiftool -Title="Castle Rock Downtown Shopping District" \
         -Description="Vibrant downtown Castle Rock street..." \
         -Keywords="Castle Rock, Colorado, downtown, shopping, local business" \
         castle-rock-downtown-street-view.webp
```

### Using Online Tools
1. **Squoosh.app** (Google's tool)
   - Upload image
   - Select WebP
   - Quality: 85%
   - Resize to 1920x1080 if needed
   - Download

2. **CloudConvert**
   - Supports batch conversion
   - Can preserve metadata
   - WebP output with quality settings

## Responsive Image Variants

Create these variants for each hero image:

1. **Desktop (1920x1080)**: `castle-rock-*-view.webp`
2. **Tablet (1024x576)**: `castle-rock-*-view-tablet.webp`
3. **Mobile (640x360)**: `castle-rock-*-view-mobile.webp`

## SEO Implementation Checklist

### ✅ Image Files
- [ ] Convert all 3 images to WebP format
- [ ] Create responsive variants (desktop, tablet, mobile)
- [ ] Optimize file sizes (< 150KB for desktop, < 75KB for tablet, < 50KB for mobile)
- [ ] Add metadata to files

### ✅ Code Implementation
- [x] Created hero-images.ts configuration
- [x] Created HeroImage component with picture element
- [x] Added structured data (Schema.org ImageObject)
- [x] Implemented preload for critical images
- [x] Added Open Graph image tags
- [x] Responsive image loading with proper srcset

### ✅ Performance Optimizations
- [x] Priority loading for above-the-fold hero image
- [x] Lazy loading for other images
- [x] WebP with fallback support
- [x] Proper width/height attributes to prevent CLS

### ✅ SEO Features
- [x] Descriptive alt text with location keywords
- [x] Title attributes for additional context
- [x] Schema.org markup for images
- [x] Open Graph image metadata
- [x] Canonical URLs for images

## Business Images to Update

Each business also needs proper WebP images:
1. Dream Dinners - storefront and interior
2. Goldie Links - jewelry displays and workspace
3. Dapper Barbershop - interior and barber chairs
4. Life At Home - store displays and products
5. Pegasus Restaurant - exterior and dining room
6. Castle Rock Museum - historic depot building

## Next Steps

1. Convert the 3 hero images to WebP
2. Place them in `/public/images/hero/`
3. Test the site with new images
4. Update business images similarly
5. Run PageSpeed Insights to verify improvements

## Additional SEO Enhancements Implemented

1. **Structured Data**: Each page now includes proper Schema.org markup
2. **Meta Tags**: Comprehensive meta tags for social sharing
3. **Image Preloading**: Critical images are preloaded for faster rendering
4. **Responsive Images**: Picture elements ensure optimal image delivery
5. **Local SEO**: NAP consistency across all business listings

## Notes

- Always maintain aspect ratios when resizing
- Keep original high-resolution versions for future use
- Consider using a CDN for image delivery in production
- Monitor Core Web Vitals after implementation
