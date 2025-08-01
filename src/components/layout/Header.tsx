import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import clsx from 'clsx';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/businesses', label: 'All Businesses' },
  ];

  const categories = [
    { to: '/businesses?category=Shopping', label: 'Shop' },
    { to: '/businesses?category=Attractions', label: 'Explore' },
    { to: '/businesses?category=Services', label: 'Services' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 border-b border-border">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex flex-col items-start">
            <span className="text-2xl font-bold text-brand leading-tight">Small Town Vibes</span>
            <span className="text-sm font-medium text-accent tracking-wider -mt-1">EXIT 182</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={clsx(
                  'text-sm font-medium transition-colors hover:text-brand',
                  location.pathname === link.to ? 'text-brand' : 'text-foreground'
                )}
              >
                {link.label}
              </Link>
            ))}
            <div className="h-4 w-px bg-border" />
            {categories.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={clsx(
                  'text-sm font-medium transition-colors hover:text-brand',
                  location.pathname + location.search === link.to ? 'text-brand' : 'text-muted-foreground'
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md hover:bg-muted"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setIsMenuOpen(false)}
                  className={clsx(
                    'text-sm font-medium transition-colors hover:text-brand',
                    location.pathname === link.to ? 'text-brand' : 'text-foreground'
                  )}
                >
                  {link.label}
                </Link>
              ))}
              <div className="h-px bg-border" />
              {categories.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setIsMenuOpen(false)}
                  className={clsx(
                    'text-sm font-medium transition-colors hover:text-brand',
                    location.pathname + location.search === link.to ? 'text-brand' : 'text-muted-foreground'
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
