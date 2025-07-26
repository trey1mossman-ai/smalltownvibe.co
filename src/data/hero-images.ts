// Hero images configuration for Small Town Vibes Castle Rock
// IMPORTANT: Change useWebP to true in imageExists() function once WebP images are added

export interface HeroImage {
  src: string;
  webpSrc: string;
  alt: string;
  title: string;
  width: number;
  height: number;
  description?: string;
}

// WebP images are now available!
const imageExists = (path: string): string => {
  // Using actual WebP images now
  const useWebP = true;
  return useWebP ? path : 'https://images.unsplash.com/photo-1602085674869-7d5df48d7c83?w=1920&h=1080&fit=crop&q=80';
};

export const heroImages = {
  homepageHero: {
    src: imageExists('/images/hero/castle-rock-aerial-downtown-view.webp'),
    webpSrc: imageExists('/images/hero/castle-rock-aerial-downtown-view.webp'),
    alt: 'Aerial view of downtown Castle Rock Colorado with iconic Castle Rock formation at sunset',
    title: 'Castle Rock Colorado Downtown Aerial View',
    width: 1920,
    height: 1080,
    description: 'Stunning aerial view showcasing downtown Castle Rock businesses with the iconic Castle Rock geological formation'
  },
  
  streetView: {
    src: imageExists('/images/hero/castle-rock-downtown-street-view.webp'),
    webpSrc: imageExists('/images/hero/castle-rock-downtown-street-view.webp'),
    alt: 'Downtown Castle Rock Colorado street view with historic lamp posts and Castle Rock butte',
    title: 'Castle Rock Downtown Shopping District',
    width: 1920,
    height: 1080,
    description: 'Vibrant downtown Castle Rock street showcasing local businesses, outdoor dining, and the Castle Rock landmark'
  },
  
  landmarkView: {
    src: imageExists('/images/hero/castle-rock-downtown-landmark-view.webp'),
    webpSrc: imageExists('/images/hero/castle-rock-downtown-landmark-view.webp'),
    alt: 'Castle Rock Colorado downtown district with Castle Rock geological formation and American flags',
    title: 'Castle Rock Landmark and Downtown Business District',
    width: 1920,
    height: 1080,
    description: 'Panoramic view of Castle Rock downtown featuring local businesses, tree-lined streets, and the famous Castle Rock'
  },
  
  // Fallback placeholder while images are being converted
  placeholder: {
    src: 'https://images.unsplash.com/photo-1602085674869-7d5df48d7c83?w=1920&h=1080&fit=crop&q=80',
    webpSrc: 'https://images.unsplash.com/photo-1602085674869-7d5df48d7c83?w=1920&h=1080&fit=crop&q=80',
    alt: 'Castle Rock formation overlooking the town of Castle Rock, Colorado',
    title: 'Castle Rock Colorado',
    width: 1920,
    height: 1080,
  }
};

// Schema.org ImageObject generator for SEO
export const generateImageSchema = (image: HeroImage, _url: string) => {
  return {
    "@type": "ImageObject",
    "url": `https://smalltownvibes.co${image.src}`,
    "contentUrl": `https://smalltownvibes.co${image.src}`,
    "name": image.title,
    "description": image.description || image.alt,
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
