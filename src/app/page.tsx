import Link from 'next/link';
import { blogPosts, getFeaturedPosts } from '@/data/posts';
import BlogCard from '@/components/BlogCard';

export default function Home() {
  const featuredPosts = getFeaturedPosts();
  const recentPosts = blogPosts.slice(0, 6);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        {/* Decorative shapes */}
        <div className="absolute top-10 left-10 w-32 h-32 border-2 border-[var(--loot-blue)]/20 rotate-45 hidden lg:block" />
        <div className="absolute bottom-20 right-20 w-24 h-24 border-2 border-[var(--legendary-orange)]/20 -rotate-12 hidden lg:block" />
        <div className="absolute top-1/2 right-10 w-16 h-16 border border-[var(--epic-purple)]/30 rounded-full hidden lg:block" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          {/* Victory banner */}
          <div className="inline-flex items-center gap-2 bg-[var(--card-bg)] border border-[var(--victory-gold)]/30 rounded-full px-4 py-2 mb-6">
            <span className="text-[var(--victory-gold)]">🏆</span>
            <span className="text-sm text-[var(--victory-gold)]">Welcome to the Storm!</span>
          </div>
          
          <h1 
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-white victory-text"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            CASCAVO&apos;S<br />
            <span className="text-[var(--victory-gold)]">FORTNITE BLOG</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            Hey there! I&apos;m Lucas, and I love everything Fortnite! Join me for tips, tricks, news, skin reviews, and all things Battle Royale! 🎮
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/blog" className="btn-primary inline-block">
              Read the Blog
            </Link>
            <Link href="/about" className="btn-secondary inline-block">
              About Me
            </Link>
          </div>
        </div>
        
        {/* Stats bar */}
        <div className="max-w-4xl mx-auto mt-16 px-4">
          <div className="bg-[var(--card-bg)]/60 backdrop-blur-sm border border-[var(--card-border)] rounded-xl p-6 grid grid-cols-3 gap-4 text-center">
            <div>
              <div className="text-2xl md:text-3xl font-bold text-[var(--loot-blue)]" style={{ fontFamily: 'var(--font-display)' }}>
                {blogPosts.length}+
              </div>
              <div className="text-sm text-gray-400">Blog Posts</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-bold text-[var(--epic-purple)]" style={{ fontFamily: 'var(--font-display)' }}>
                5
              </div>
              <div className="text-sm text-gray-400">Categories</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-bold text-[var(--legendary-orange)]" style={{ fontFamily: 'var(--font-display)' }}>
                ∞
              </div>
              <div className="text-sm text-gray-400">Victory Royales</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-8">
            <div className="h-1 w-12 bg-[var(--victory-gold)]" />
            <h2 
              className="text-2xl md:text-3xl font-bold text-white"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              <span className="text-[var(--victory-gold)]">⭐</span> FEATURED POSTS
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredPosts.map((post) => (
              <BlogCard key={post.slug} post={post} featured />
            ))}
          </div>
        </div>
      </section>

      {/* Latest Posts */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-4">
              <div className="h-1 w-12 bg-[var(--loot-blue)]" />
              <h2 
                className="text-2xl md:text-3xl font-bold text-white"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                <span className="text-[var(--loot-blue)]">📝</span> LATEST POSTS
              </h2>
            </div>
            <Link href="/blog" className="link-glow text-sm font-medium">
              View All →
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recentPosts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative bg-gradient-to-r from-[var(--storm-purple)] to-[var(--storm-blue)] rounded-2xl p-8 md:p-12 overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--victory-gold)]/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-[var(--loot-blue)]/10 rounded-full blur-3xl" />
            
            <div className="relative z-10 text-center">
              <h2 
                className="text-2xl md:text-4xl font-bold text-white mb-4"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                READY TO DROP IN? 🪂
              </h2>
              <p className="text-gray-300 max-w-xl mx-auto mb-6">
                Check out all my posts for the latest Fortnite tips, news, and guides. Let&apos;s get that Victory Royale together!
              </p>
              <Link href="/blog" className="btn-primary inline-block">
                Explore All Posts
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
