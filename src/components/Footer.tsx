import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="relative mt-20">
      {/* Top diagonal accent */}
      <div className="h-16 bg-gradient-to-r from-[var(--storm-purple)]/30 to-[var(--storm-blue)]/30 diagonal-clip-reverse" />
      
      <div className="bg-[var(--card-bg)] border-t border-[var(--card-border)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded bg-gradient-to-br from-[var(--victory-gold)] to-[var(--legendary-orange)] flex items-center justify-center font-bold text-black text-xl">
                  L
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white leading-none" style={{ fontFamily: 'var(--font-display)' }}>
                    LUCAS
                  </h3>
                  <span className="text-xs text-[var(--loot-blue)] tracking-wider">FORTNITE BLOG</span>
                </div>
              </div>
              <p className="text-gray-400 text-sm">
                Your go-to source for Fortnite tips, news, and everything Battle Royale! 🎮
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-[var(--victory-gold)] font-bold mb-4" style={{ fontFamily: 'var(--font-display)' }}>
                QUICK LINKS
              </h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/blog" className="text-gray-400 hover:text-[var(--loot-blue)] transition-colors">
                    All Posts
                  </Link>
                </li>
                <li>
                  <Link href="/blog/category/tips" className="text-gray-400 hover:text-[var(--loot-blue)] transition-colors">
                    Tips & Tricks
                  </Link>
                </li>
                <li>
                  <Link href="/blog/category/news" className="text-gray-400 hover:text-[var(--loot-blue)] transition-colors">
                    News
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-gray-400 hover:text-[var(--loot-blue)] transition-colors">
                    About Me
                  </Link>
                </li>
              </ul>
            </div>

            {/* Categories */}
            <div>
              <h4 className="text-[var(--victory-gold)] font-bold mb-4" style={{ fontFamily: 'var(--font-display)' }}>
                CATEGORIES
              </h4>
              <div className="flex flex-wrap gap-2">
                <Link 
                  href="/blog/category/tips" 
                  className="px-3 py-1 bg-green-500/20 text-green-400 rounded text-sm hover:bg-green-500/30 transition-colors"
                >
                  💡 Tips
                </Link>
                <Link 
                  href="/blog/category/news" 
                  className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded text-sm hover:bg-blue-500/30 transition-colors"
                >
                  📰 News
                </Link>
                <Link 
                  href="/blog/category/builds" 
                  className="px-3 py-1 bg-orange-500/20 text-orange-400 rounded text-sm hover:bg-orange-500/30 transition-colors"
                >
                  🔨 Builds
                </Link>
                <Link 
                  href="/blog/category/skins" 
                  className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded text-sm hover:bg-purple-500/30 transition-colors"
                >
                  🎨 Skins
                </Link>
                <Link 
                  href="/blog/category/reviews" 
                  className="px-3 py-1 bg-yellow-500/20 text-yellow-400 rounded text-sm hover:bg-yellow-500/30 transition-colors"
                >
                  ⭐ Reviews
                </Link>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-10 pt-6 border-t border-[var(--card-border)] flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © 2024 Lucas&apos;s Fortnite Blog. Made with 💛 and lots of Victory Royales!
            </p>
            <p className="text-gray-500 text-sm">
              Not affiliated with Epic Games. Fortnite is a registered trademark of Epic Games, Inc.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
