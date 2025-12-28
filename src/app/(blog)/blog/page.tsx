import Link from 'next/link';
import { getAllPosts, getAllCategories, categoryLabels } from '@/data/posts';
import BlogCard from '@/components/BlogCard';

export const metadata = {
  title: "All Posts | Cascavo's Fortnite Blog",
  description: "Browse all of Cascavo's Fortnite blog posts including tips, news, skin reviews, building guides, and more!"
};

export const revalidate = 60;

export default async function BlogPage() {
  const [posts, categories] = await Promise.all([
    getAllPosts(),
    Promise.resolve(getAllCategories())
  ]);

  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1
            className="text-3xl md:text-5xl font-bold text-white mb-4"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            ALL <span className="text-[var(--victory-gold)]">BLOG POSTS</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Everything I&apos;ve written about Fortnite! Browse by category or scroll through all my posts.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <Link
            href="/blog"
            className="px-4 py-2 bg-[var(--card-bg)] border border-[var(--victory-gold)] text-[var(--victory-gold)] rounded-lg font-medium hover:bg-[var(--victory-gold)] hover:text-black transition-colors"
          >
            All Posts
          </Link>
          {categories.map((category) => (
            <Link
              key={category}
              href={`/blog/category/${category}`}
              className="px-4 py-2 bg-[var(--card-bg)] border border-[var(--card-border)] text-gray-300 rounded-lg font-medium hover:border-[var(--loot-blue)] hover:text-[var(--loot-blue)] transition-colors"
            >
              {categoryLabels[category]}
            </Link>
          ))}
        </div>

        {/* Posts Grid */}
        {posts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">🎮</div>
            <h3 className="text-xl font-bold text-white mb-2">No posts yet!</h3>
            <p className="text-gray-400">Check back soon for awesome Fortnite content!</p>
          </div>
        )}
      </div>
    </div>
  );
}
