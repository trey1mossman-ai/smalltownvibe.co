export interface BusinessImage {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export interface BusinessImages {
  thumbnail: BusinessImage;
  hero: BusinessImage;
}

// Helper function to check if we should use WebP or fallback
export const getBusinessImagePath = (path: string, fallbackUrl?: string): string => {
  // In production, this would check if the file exists
  // For now, return the path as all WebP images are provided
  const useWebP = true;
  return useWebP ? path : (fallbackUrl || path);
};

// Business-specific image configurations
export const businessImageConfig = {
  'dream-dinners': {
    primary: 'meal-prep-packages.webp',
    gallery: ['meal-prep-packages.webp']
  },
  'goldie-links': {
    primary: 'permanent-jewelry-artist.webp',
    gallery: ['permanent-jewelry-artist.webp']
  },
  'dapper-barbershop': {
    primary: 'barber-at-work.webp',
    gallery: ['barber-at-work.webp']
  },
  'life-at-home': {
    primary: 'butterfly-home-decor.webp',
    gallery: ['butterfly-home-decor.webp']
  },
  'pegasus-restaurant': {
    primary: 'interior-dining-fireplace.webp',
    gallery: ['interior-dining-fireplace.webp']
  },
  'castle-rock-museum': {
    primary: 'museum-watercolor-art.webp',
    gallery: ['museum-watercolor-art.webp']
  }
};
