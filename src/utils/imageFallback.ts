// Utility to handle missing images with fallbacks

export const getImageWithFallback = (imagePath: string, _category: string = 'general'): string => {
  // Map categories to appropriate placeholder images
  const placeholders: Record<string, string> = {
    dining: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&h=600&fit=crop&q=80',
    shopping: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop&q=80',
    services: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop&q=80',
    beauty: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&h=600&fit=crop&q=80',
    museum: 'https://images.unsplash.com/photo-1566127992631-137a642a90f4?w=800&h=600&fit=crop&q=80',
    general: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop&q=80'
  };

  // For now, return appropriate placeholder based on image path
  if (imagePath.includes('meal-prep') || imagePath.includes('restaurant')) {
    return placeholders.dining;
  } else if (imagePath.includes('jewelry') || imagePath.includes('home-decor')) {
    return placeholders.shopping;
  } else if (imagePath.includes('barber')) {
    return placeholders.services;
  } else if (imagePath.includes('museum')) {
    return placeholders.museum;
  }
  
  return placeholders.general;
};