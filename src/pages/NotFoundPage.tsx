import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

export default function NotFoundPage() {
  return (
    <>
      <Helmet>
        <title>Page Not Found | Small Town Vibes</title>
        <meta name="description" content="The page you're looking for doesn't exist." />
      </Helmet>
      
      <div className="min-h-screen flex items-center justify-center bg-background px-4">
        <div className="text-center max-w-md">
          <h1 className="text-6xl font-bold text-brand mb-4">404</h1>
          <h2 className="text-2xl font-semibold mb-4">Page Not Found</h2>
          <p className="text-muted-foreground mb-8">
            Sorry, we couldn't find the page you're looking for. 
            It might have been moved or doesn't exist.
          </p>
          <div className="space-y-3">
            <Link
              to="/"
              className="block w-full bg-brand text-white py-3 px-6 rounded-md hover:bg-brand-dark transition-colors"
            >
              Go to Homepage
            </Link>
            <Link
              to="/businesses"
              className="block w-full bg-muted text-foreground py-3 px-6 rounded-md hover:bg-muted/80 transition-colors"
            >
              Browse All Businesses
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}