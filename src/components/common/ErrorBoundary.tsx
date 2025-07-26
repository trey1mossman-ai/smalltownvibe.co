import { Component, ReactNode } from 'react';
import { Link } from 'react-router-dom';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export default class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: any) {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-background">
          <div className="text-center p-8 max-w-md">
            <h1 className="text-2xl font-bold text-error mb-4">Oops! Something went wrong</h1>
            <p className="text-muted-foreground mb-6">
              We're sorry, but something unexpected happened. Please try refreshing the page.
            </p>
            <div className="space-y-3">
              <button
                onClick={() => window.location.reload()}
                className="w-full bg-brand text-white py-2 px-4 rounded-md hover:bg-brand-dark transition-colors"
              >
                Refresh Page
              </button>
              <Link
                to="/"
                className="block w-full bg-muted text-foreground py-2 px-4 rounded-md hover:bg-muted/80 transition-colors"
              >
                Go to Homepage
              </Link>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}