#!/bin/bash

# Image verification script for Small Town Vibes
# Run this after adding WebP images to verify everything is in place

echo "🖼️  Checking Small Town Vibes hero images..."
echo "=========================================="

HERO_DIR="public/images/hero"
REQUIRED_IMAGES=(
  "castle-rock-downtown-street-view.webp"
  "castle-rock-aerial-downtown-view.webp"
  "castle-rock-downtown-landmark-view.webp"
)

# Check if hero directory exists
if [ ! -d "$HERO_DIR" ]; then
  echo "❌ Hero directory not found at $HERO_DIR"
  echo "   Please create the directory first."
  exit 1
fi

echo "✅ Hero directory found"
echo ""

# Check for each required image
missing_images=0
for image in "${REQUIRED_IMAGES[@]}"; do
  if [ -f "$HERO_DIR/$image" ]; then
    # Get file size
    size=$(ls -lh "$HERO_DIR/$image" | awk '{print $5}')
    echo "✅ Found: $image (Size: $size)"
  else
    echo "❌ Missing: $image"
    ((missing_images++))
  fi
done

echo ""
echo "=========================================="

if [ $missing_images -eq 0 ]; then
  echo "✅ All hero images are in place!"
  echo ""
  echo "Next steps:"
  echo "1. Update src/data/hero-images.ts"
  echo "   - Change 'useWebP = false' to 'useWebP = true'"
  echo "2. Test the site locally"
  echo "3. Run PageSpeed Insights to verify improvements"
else
  echo "⚠️  Missing $missing_images images"
  echo ""
  echo "Please convert and add the missing images to:"
  echo "$HERO_DIR/"
fi

# Optional: Check file sizes
echo ""
echo "Checking file sizes (should be < 150KB for optimal performance)..."
for image in "${REQUIRED_IMAGES[@]}"; do
  if [ -f "$HERO_DIR/$image" ]; then
    size_kb=$(du -k "$HERO_DIR/$image" | cut -f1)
    if [ $size_kb -gt 150 ]; then
      echo "⚠️  $image is ${size_kb}KB (larger than recommended 150KB)"
    fi
  fi
done
