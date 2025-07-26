export default function PageLoader() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center">
        <div className="inline-flex items-center gap-3">
          <div className="w-3 h-3 bg-brand rounded-full animate-pulse" />
          <div className="w-3 h-3 bg-brand rounded-full animate-pulse animation-delay-200" />
          <div className="w-3 h-3 bg-brand rounded-full animate-pulse animation-delay-400" />
        </div>
        <p className="mt-4 text-muted-foreground">Loading...</p>
      </div>
    </div>
  );
}