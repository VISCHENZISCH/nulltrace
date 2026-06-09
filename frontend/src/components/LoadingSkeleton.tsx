export function LoadingSkeleton() {
  return (
    <div className="w-full space-y-6 animate-fade-in py-10">
      <div className="h-12 w-full max-w-sm mx-auto bg-surface-1 rounded-md animate-pulse" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
        <div className="framer-card animate-pulse space-y-4 h-40">
          <div className="h-6 w-1/3 bg-surface-2 rounded" />
          <div className="h-4 w-full bg-surface-2 rounded" />
          <div className="h-4 w-2/3 bg-surface-2 rounded" />
        </div>
        <div className="framer-card animate-pulse space-y-4 h-40">
          <div className="h-6 w-1/3 bg-surface-2 rounded" />
          <div className="h-4 w-full bg-surface-2 rounded" />
          <div className="h-4 w-2/3 bg-surface-2 rounded" />
        </div>
      </div>
      <div className="h-64 w-full mt-6 bg-surface-1 rounded-xl animate-pulse" />
    </div>
  );
}
