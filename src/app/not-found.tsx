import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center py-20">
      <div className="text-center px-4">
        {/* Big 404 */}
        <div 
          className="text-8xl md:text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[var(--loot-blue)] via-[var(--epic-purple)] to-[var(--legendary-orange)] mb-4"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          404
        </div>
        
        {/* Storm icon */}
        <div className="text-6xl mb-6">🌀</div>
        
        <h1 
          className="text-2xl md:text-3xl font-bold text-white mb-4"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          LOST IN THE STORM!
        </h1>
        
        <p className="text-gray-400 max-w-md mx-auto mb-8">
          Looks like this page got caught in the storm and couldn&apos;t make it to the circle! 
          Let&apos;s get you back to safety.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/" className="btn-primary">
            🏠 Back to Home
          </Link>
          <Link href="/blog" className="btn-secondary">
            📝 View All Posts
          </Link>
        </div>
      </div>
    </div>
  );
}
