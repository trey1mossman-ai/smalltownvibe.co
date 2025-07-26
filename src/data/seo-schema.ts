// SEO Schema Data for Small Town Vibes

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Small Town Vibes",
  "url": "https://smalltownvibes.co",
  "logo": "https://smalltownvibes.co/favicon.ico",
  "description": "Your guide to locally owned businesses in Castle Rock, Colorado",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Castle Rock",
    "addressRegion": "CO", 
    "postalCode": "80104",
    "addressCountry": "US"
  },
  "areaServed": {
    "@type": "City",
    "name": "Castle Rock",
    "containedInPlace": {
      "@type": "State",
      "name": "Colorado"
    }
  },
  "sameAs": [
    "https://www.facebook.com/smalltownvibescastlerock",
    "https://www.instagram.com/smalltownvibesco"
  ]
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Small Town Vibes",
  "url": "https://smalltownvibes.co",
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://smalltownvibes.co/businesses?search={search_term_string}"
    },
    "query-input": "required name=search_term_string"
  }
};