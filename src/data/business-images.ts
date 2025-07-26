// Business images configuration for Small Town Vibes Castle Rock
// IMPORTANT: Change useLocalImages to true once WebP images are added

export interface BusinessImage {
  thumbnail: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  hero: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
}

// Check if local images exist, otherwise use placeholder
const useLocalImages = true; // Images are now available

// Map of actual image filenames
const imageFiles: Record<string, string> = {
  'dream-dinners': 'dream-dinners-castle-rock-meal-prep.webp',
  'goldie-links': 'custom-gold-chains-goldie-links-colorado.webp',
  'dapper-barbershop': 'dapper haircut castle-rock.webp',
  'life-at-home': 'Life At Home gift shop interior Castle Rock Colorado featuring curated home decor.webp',
  'pegasus-restaurant': 'pegasus-restaurant-castle-rock-colorado.webp',
  'castle-rock-museum': 'Free admission Castle Rock Museum railroad exhibits and local history displays.webp',
};

const getImagePath = (businessSlug: string, _imageName?: string): string => {
  if (useLocalImages && imageFiles[businessSlug]) {
    return `/images/businesses/${businessSlug}/${imageFiles[businessSlug]}`;
  }
  // Return placeholder if image not found
  const placeholders: Record<string, string> = {
    'dream-dinners': 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1600&h=900&fit=crop',
    'goldie-links': 'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=1600&h=900&fit=crop',
    'dapper-barbershop': 'https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=1600&h=900&fit=crop',
    'life-at-home': 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1600&h=900&fit=crop',
    'pegasus-restaurant': 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1600&h=900&fit=crop',
    'castle-rock-museum': 'https://images.unsplash.com/photo-1566308350734-af54bc36dc81?w=1600&h=900&fit=crop',
  };
  return placeholders[businessSlug] || placeholders['dream-dinners'];
};

export const businessImages: Record<string, BusinessImage> = {
  'dream-dinners': {
    thumbnail: {
      src: getImagePath('dream-dinners'),
      alt: 'Dream Dinners meal prep packages ready for pickup',
      width: 400,
      height: 300,
    },
    hero: {
      src: getImagePath('dream-dinners'),
      alt: 'Dream Dinners meal prep packages ready for pickup in Castle Rock',
      width: 1600,
      height: 900,
    },
  },
  'goldie-links': {
    thumbnail: {
      src: getImagePath('goldie-links'),
      alt: 'Goldie Links permanent jewelry artist at work',
      width: 400,
      height: 300,
    },
    hero: {
      src: getImagePath('goldie-links'),
      alt: 'Goldie Links permanent jewelry artist creating custom gold chains',
      width: 1600,
      height: 900,
    },
  },
  'dapper-barbershop': {
    thumbnail: {
      src: getImagePath('dapper-barbershop'),
      alt: 'Dapper Barbershop professional barber at work',
      width: 400,
      height: 300,
    },
    hero: {
      src: getImagePath('dapper-barbershop'),
      alt: 'Professional barber providing classic grooming services at Dapper Barbershop',
      width: 1600,
      height: 900,
    },
  },
  'life-at-home': {
    thumbnail: {
      src: getImagePath('life-at-home'),
      alt: 'Life At Home butterfly home decor',
      width: 400,
      height: 300,
    },
    hero: {
      src: getImagePath('life-at-home'),
      alt: 'Handcrafted butterfly home decor at Life At Home Castle Rock',
      width: 1600,
      height: 900,
    },
  },
  'pegasus-restaurant': {
    thumbnail: {
      src: getImagePath('pegasus-restaurant'),
      alt: 'Pegasus Restaurant cozy dining room',
      width: 400,
      height: 300,
    },
    hero: {
      src: getImagePath('pegasus-restaurant'),
      alt: 'Cozy dining room with brick fireplace at Pegasus Restaurant Castle Rock',
      width: 1600,
      height: 900,
    },
  },
  'castle-rock-museum': {
    thumbnail: {
      src: getImagePath('castle-rock-museum'),
      alt: 'Castle Rock Museum historic depot artwork',
      width: 400,
      height: 300,
    },
    hero: {
      src: getImagePath('castle-rock-museum'),
      alt: 'Watercolor painting of historic Castle Rock Museum train depot',
      width: 1600,
      height: 900,
    },
  },
};

// Schema.org ImageObject generator for business images
export const generateBusinessImageSchema = (businessSlug: string, imageType: 'thumbnail' | 'hero') => {
  const image = businessImages[businessSlug]?.[imageType];
  if (!image) return null;
  
  return {
    "@type": "ImageObject",
    "url": `https://smalltownvibes.co${image.src}`,
    "contentUrl": `https://smalltownvibes.co${image.src}`,
    "name": image.alt,
    "width": {
      "@type": "QuantitativeValue",
      "value": image.width,
      "unitCode": "PX"
    },
    "height": {
      "@type": "QuantitativeValue",
      "value": image.height,
      "unitCode": "PX"
    },
    "encodingFormat": "image/webp",
    "uploadDate": new Date().toISOString(),
    "copyrightHolder": {
      "@type": "Organization",
      "name": "Small Town Vibes"
    }
  };
};
