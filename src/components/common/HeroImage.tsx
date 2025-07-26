import { useState } from 'react';
import type { HeroImage } from '@/data/hero-images';

interface HeroImageProps {
  image: HeroImage;
  className?: string;
  loading?: 'lazy' | 'eager';
  priority?: boolean;
}

export default function HeroImageComponent({ 
  image, 
  className = '', 
  loading = 'eager',
  priority = false 
}: HeroImageProps) {
  const [imgLoaded, setImgLoaded] = useState(false);
  const [imgError, setImgError] = useState(false);

  // Fallback to a default image on error
  const fallbackImage = {
    ...image,
    src: 'https://images.unsplash.com/photo-1602085674869-7d5df48d7c83?w=1920&h=1080&fit=crop&q=80',
    webpSrc: 'https://images.unsplash.com/photo-1602085674869-7d5df48d7c83?w=1920&h=1080&fit=crop&q=80'
  };
  
  const currentImage = imgError ? fallbackImage : image;

  return (
    <picture className={`relative ${className}`}>
      {/* WebP source - primary format */}
      <source
        srcSet={currentImage.webpSrc}
        type="image/webp"
        media="(min-width: 640px)"
      />
      
      {/* Mobile WebP source with smaller dimensions */}
      <source
        srcSet={`${currentImage.webpSrc}?w=640&h=360&fit=crop`}
        type="image/webp"
        media="(max-width: 639px)"
      />
      
      {/* Fallback to JPEG/PNG if WebP not supported */}
      <img
        src={currentImage.src}
        alt={currentImage.alt}
        title={currentImage.title}
        width={currentImage.width}
        height={currentImage.height}
        loading={loading}
        decoding={priority ? 'sync' : 'async'}
        className={`w-full h-full object-cover transition-opacity duration-300 ${
          imgLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        onLoad={() => setImgLoaded(true)}
        onError={() => {
          setImgError(true);
          setImgLoaded(true);
        }}
        // SEO and accessibility attributes
        itemProp="image"
        // Preload hint for critical images
        {...(priority && { fetchPriority: 'high' })}
      />
      
      {/* Loading skeleton */}
      {!imgLoaded && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse" />
      )}
    </picture>
  );
}
