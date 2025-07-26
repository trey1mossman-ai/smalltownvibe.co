import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { lazy, Suspense } from 'react';
import Layout from '@/components/layout/Layout';
import ScrollToTop from '@/components/common/ScrollToTop';
import ErrorBoundary from '@/components/common/ErrorBoundary';
import PageLoader from '@/components/common/PageLoader';

// Lazy load pages for better performance
const HomePage = lazy(() => import('@/pages/HomePage'));
const BusinessesPage = lazy(() => import('@/pages/BusinessesPage'));
const BusinessDetailPage = lazy(() => import('@/pages/BusinessDetailPage'));
const NotFoundPage = lazy(() => import('@/pages/NotFoundPage'));

export default function App() {
  return (
    <ErrorBoundary>
      <HelmetProvider>
        <BrowserRouter>
          <ScrollToTop />
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<HomePage />} />
                <Route path="businesses" element={<BusinessesPage />} />
                <Route path="business/:slug" element={<BusinessDetailPage />} />
                <Route path="*" element={<NotFoundPage />} />
              </Route>
            </Routes>
          </Suspense>
        </BrowserRouter>
      </HelmetProvider>
    </ErrorBoundary>
  );
}
