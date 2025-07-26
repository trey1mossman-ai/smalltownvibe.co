import { Link } from 'react-router-dom';
import { MapPin, Clock, Phone, ExternalLink } from 'lucide-react';
import type { Business } from '@/types/business';
import clsx from 'clsx';
import { formatTime } from '@/utils/formatTime';

interface BusinessCardProps {
  business: Business;
  className?: string;
}

export default function BusinessCard({ business, className }: BusinessCardProps) {
  // Get today's hours
  const today = new Date().toLocaleDateString('en-US', { weekday: 'long' }).toLowerCase();
  const todayHours = business.hours[today];
  
  const isOpen = () => {
    if (!todayHours) return false;
    const now = new Date();
    const currentTime = `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}`;
    return currentTime >= todayHours.open && currentTime < todayHours.close;
  };
  
  const isClosingSoon = () => {
    if (!todayHours || !isOpen()) return false;
    const now = new Date();
    const [closeHour, closeMinute] = todayHours.close.split(':').map(Number);
    const closeTime = new Date();
    closeTime.setHours(closeHour, closeMinute, 0);
    const timeDiff = closeTime.getTime() - now.getTime();
    const minutesUntilClose = Math.floor(timeDiff / 60000);
    return minutesUntilClose <= 60 && minutesUntilClose > 0;
  };

  return (
    <article className={clsx('card group hover:shadow-lg transition-all', className)}>
      <Link to={`/business/${business.slug}`} className="block">
        {/* Image */}
        <div className="relative -m-6 mb-4 overflow-hidden rounded-t-lg">
          <img 
            src={business.images.thumbnail.src} 
            alt={business.images.thumbnail.alt}
            width={business.images.thumbnail.width}
            height={business.images.thumbnail.height}
            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
            loading="lazy"
            decoding="async"
          />
          {business.featured && (
            <span className="absolute top-4 left-4 bg-brand text-white text-xs font-semibold px-3 py-1 rounded-full">
              Featured
            </span>
          )}
          {todayHours && (
            <span className={clsx(
              'absolute top-4 right-4 text-xs font-semibold px-3 py-1 rounded-full',
              isClosingSoon() 
                ? 'bg-warning text-black animate-pulse' 
                : isOpen() 
                  ? 'bg-success text-white' 
                  : 'bg-error text-white'
            )}>
              {isClosingSoon() ? 'Closing Soon' : isOpen() ? 'Open Now' : 'Closed'}
            </span>
          )}
        </div>

        {/* Content */}
        <div className="space-y-3">
          {/* Category Badge */}
          <div className="flex items-center gap-2">
            <span className="text-xs font-medium text-brand bg-brand/10 px-2 py-1 rounded">
              {business.primaryCategory}
            </span>
            {business.specialNotes && business.specialNotes.includes('FREE') && (
              <span className="text-xs font-medium text-success bg-success/10 px-2 py-1 rounded">
                FREE Admission
              </span>
            )}
          </div>

          {/* Title & Description */}
          <div>
            <h3 className="text-lg font-semibold group-hover:text-brand transition-colors">
              {business.name}
            </h3>
            <p className="text-sm text-muted-foreground line-clamp-2 mt-1">
              {business.description}
            </p>
          </div>

          {/* Quick Info */}
          <div className="space-y-2 text-sm">
            <div className="flex items-start gap-2 text-muted-foreground">
              <MapPin size={16} className="mt-0.5 flex-shrink-0" />
              <span className="line-clamp-1">{business.address.street}</span>
            </div>
            
            {todayHours && (
              <div className="flex items-center gap-2 text-muted-foreground">
                <Clock size={16} className="flex-shrink-0" />
                <span>
                  Today: {formatTime(todayHours.open)} - {formatTime(todayHours.close)}
                </span>
              </div>
            )}
            
            <a href={`tel:${business.phone.e164}`} className="flex items-center gap-2 text-muted-foreground hover:text-brand transition-colors">
              <Phone size={16} className="flex-shrink-0" />
              <span>{business.phone.display}</span>
            </a>
          </div>
        </div>
      </Link>

      {/* Quick Actions */}
      <div className="mt-4 pt-4 border-t border-border space-y-2">
        <a
          href={`tel:${business.phone.e164}`}
          className="w-full bg-brand text-white py-2 px-4 rounded-md text-center font-medium hover:bg-brand-dark transition-colors flex items-center justify-center gap-2"
          onClick={(e) => e.stopPropagation()}
        >
          <Phone size={16} />
          Call Now
        </a>
        {business.links.website && (
          <a
            href={business.links.website}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-muted text-foreground py-2 px-4 rounded-md text-center text-sm hover:bg-muted/80 transition-colors flex items-center justify-center gap-2"
            onClick={(e) => e.stopPropagation()}
          >
            Visit Website
            <ExternalLink size={14} />
          </a>
        )}
      </div>
    </article>
  );
}
