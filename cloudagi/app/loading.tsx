export default function Loading() {
    return (
        <div className="min-h-screen bg-dark-bg px-6 py-24">
            <div className="max-w-6xl mx-auto space-y-12">
                {/* Hero Skeleton */}
                <div className="space-y-4 text-center">
                    <div className="h-8 w-48 bg-white/5 animate-pulse rounded-full mx-auto" />
                    <div className="h-16 w-3/4 bg-white/5 animate-pulse rounded-2xl mx-auto" />
                    <div className="h-24 w-1/2 bg-white/5 animate-pulse rounded-xl mx-auto" />
                </div>

                {/* Grid Skeleton */}
                <div className="grid md:grid-cols-3 gap-8 pt-12">
                    {[1, 2, 3].map((i) => (
                        <div key={i} className="h-64 bg-white/5 animate-pulse rounded-2xl border border-white/5" />
                    ))}
                </div>

                {/* Long Section Skeleton */}
                <div className="h-96 w-full bg-white/5 animate-pulse rounded-3xl border border-white/5" />
            </div>
        </div>
    );
}
