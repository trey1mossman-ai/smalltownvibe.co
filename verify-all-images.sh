#!/bin/bash

# Image verification script for Small Town Vibes
# Run this after placing all WebP images to verify everything is in place

echo "🖼️  Verifying Small Town Vibes images..."
echo "=========================================="

# Define base directories
HERO_DIR="public/images/hero"
BUSINESS_DIR="public/images/businesses"

# Define required images
declare -A HERO_IMAGES=(
  ["castle-rock-aerial-downtown-view.webp"]="Aerial view (Image 1)"
  ["castle-rock-downtown-landmark-view.webp"]="Landmark view (Image 2)"
  ["castle-rock-downtown-street-view.webp"]="Street view (Image 3)"
)

declare -A BUSINESS_IMAGES=(
  ["dream-dinners/meal-prep-packages.webp"]="Dream Dinners (Image 9)"
  ["goldie-links/permanent-jewelry-artist.webp"]="Goldie Links (Image 8)"
  ["dapper-barbershop/barber-at-work.webp"]="Dapper Barbershop (Image 6)"
  ["life-at-home/butterfly-home-decor.webp"]="Life At Home (Image 4)"
  ["pegasus-restaurant/interior-dining-fireplace.webp"]="Pegasus Restaurant (Image 7)"
  ["castle-rock-museum/museum-watercolor-art.webp"]="Castle Rock Museum (Image 5)"
)

# Check hero images
echo "Checking hero images..."
echo "----------------------"
missing_hero=0
for image in "${!HERO_IMAGES[@]}"; do
  if [ -f "$HERO_DIR/$image" ]; then
    size=$(ls -lh "$HERO_DIR/$image" | awk '{print $5}')
    echo "✅ ${HERO_IMAGES[$image]}: $image ($size)"
  else
    echo "❌ ${HERO_IMAGES[$image]}: $image"
    ((missing_hero++))
  fi
done

# Check business images
echo ""
echo "Checking business images..."
echo "--------------------------"
missing_business=0
for image in "${!BUSINESS_IMAGES[@]}"; do
  if [ -f "$BUSINESS_DIR/$image" ]; then
    size=$(ls -lh "$BUSINESS_DIR/$image" | awk '{print $5}')
    echo "✅ ${BUSINESS_IMAGES[$image]}: $image ($size)"
  else
    echo "❌ ${BUSINESS_IMAGES[$image]}: $image"
    ((missing_business++))
  fi
done

# Summary
echo ""
echo "=========================================="
total_missing=$((missing_hero + missing_business))

if [ $total_missing -eq 0 ]; then
  echo "✅ All images are in place!"
  echo ""
  echo "Next steps:"
  echo "1. Run 'npm run dev' to test locally"
  echo "2. Check that all images load properly"
  echo "3. Build for production with 'npm run build'"
else
  echo "⚠️  Missing $total_missing images"
  echo ""
  echo "Please add the missing images to their respective directories."
fi

# Check file sizes
echo ""
echo "Checking image optimization..."
echo "------------------------------"
large_files=0

# Function to check file size
check_size() {
  local file=$1
  local max_size=$2
  local label=$3
  
  if [ -f "$file" ]; then
    size_kb=$(du -k "$file" | cut -f1)
    if [ $size_kb -gt $max_size ]; then
      echo "⚠️  $label is ${size_kb}KB (recommended < ${max_size}KB)"
      ((large_files++))
    fi
  fi
}

# Check hero images (should be < 150KB)
for image in "${!HERO_IMAGES[@]}"; do
  check_size "$HERO_DIR/$image" 150 "${HERO_IMAGES[$image]}"
done

# Check business images (should be < 100KB for thumbnails)
for image in "${!BUSINESS_IMAGES[@]}"; do
  check_size "$BUSINESS_DIR/$image" 100 "${BUSINESS_IMAGES[$image]}"
done

if [ $large_files -eq 0 ]; then
  echo "✅ All images are well optimized!"
else
  echo ""
  echo "Consider further optimizing large images for better performance."
fi
