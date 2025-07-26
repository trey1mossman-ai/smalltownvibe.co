#!/bin/bash

# Business images verification script for Small Town Vibes
# Run this after adding WebP images to verify everything is in place

echo "🏪 Checking Small Town Vibes business images..."
echo "=========================================="

BUSINESS_DIR="public/images/businesses"

# Define required images for each business
declare -A BUSINESS_IMAGES
BUSINESS_IMAGES["dream-dinners"]="meal-packages.webp"
BUSINESS_IMAGES["goldie-links"]="jewelry-artist.webp"
BUSINESS_IMAGES["dapper-barbershop"]="interior-barber.webp"
BUSINESS_IMAGES["life-at-home"]="butterfly-decor.webp"
BUSINESS_IMAGES["pegasus-restaurant"]="dining-room.webp"
BUSINESS_IMAGES["castle-rock-museum"]="museum-artwork.webp"

# Check if business directory exists
if [ ! -d "$BUSINESS_DIR" ]; then
  echo "❌ Business directory not found at $BUSINESS_DIR"
  echo "   Please create the directory first."
  exit 1
fi

echo "✅ Business directory found"
echo ""

# Check for each business and its images
missing_images=0
for business in "${!BUSINESS_IMAGES[@]}"; do
  business_path="$BUSINESS_DIR/$business"
  image_name="${BUSINESS_IMAGES[$business]}"
  image_path="$business_path/$image_name"
  
  echo "Checking $business:"
  
  if [ ! -d "$business_path" ]; then
    echo "  ❌ Directory missing: $business/"
    ((missing_images++))
  elif [ -f "$image_path" ]; then
    # Get file size
    size=$(ls -lh "$image_path" | awk '{print $5}')
    echo "  ✅ Found: $image_name (Size: $size)"
  else
    echo "  ❌ Missing: $image_name"
    ((missing_images++))
  fi
done

echo ""
echo "=========================================="

if [ $missing_images -eq 0 ]; then
  echo "✅ All business images are in place!"
  echo ""
  echo "Next steps:"
  echo "1. Update src/data/business-images.ts"
  echo "   - Change 'const useLocalImages = false' to 'const useLocalImages = true'"
  echo "2. Test the site locally"
  echo "3. Check that all business pages show the correct images"
else
  echo "⚠️  Missing $missing_images business images"
  echo ""
  echo "Please convert and add the missing images."
fi

# Optional: Check file sizes
echo ""
echo "Checking file sizes (should be < 120KB for optimal performance)..."
for business in "${!BUSINESS_IMAGES[@]}"; do
  image_path="$BUSINESS_DIR/$business/${BUSINESS_IMAGES[$business]}"
  if [ -f "$image_path" ]; then
    size_kb=$(du -k "$image_path" | cut -f1)
    if [ $size_kb -gt 120 ]; then
      echo "⚠️  $business/${BUSINESS_IMAGES[$business]} is ${size_kb}KB (larger than recommended 120KB)"
    fi
  fi
done

# Check hero images too
echo ""
echo "Checking hero images status..."
HERO_DIR="public/images/hero"
if [ -d "$HERO_DIR" ]; then
  hero_count=$(ls -1 "$HERO_DIR"/*.webp 2>/dev/null | wc -l)
  echo "Found $hero_count hero images in $HERO_DIR"
else
  echo "Hero directory not found"
fi
