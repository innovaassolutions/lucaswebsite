import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getPostsByCategory, getAllCategories, categoryLabels, categoryColors, Category } from '@/data/posts';
import BlogCard from '@/components/BlogCard';
import type { Metadata } from 'next';

interface PageProps {
  params: Promise<{ category: string }>;
}

export const revalidate = 60;

export async function generateStaticParams() {
  const categories = getAllCategories();
  return categories.map((category) => ({
    category,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { category } = await params;
  const validCategories = getAllCategories();

  if (!validCategories.includes(category as Category)) {
    return {
      title: 'Category Not Found',
    };
  }

  const label = categoryLabels[category as Category];

  return {
    title: `${label} | Cascavo's Fortnite Blog`,
    description: `Browse all ${label.toLowerCase()} posts on Cascavo's Fortnite Blog!`,
  };
}

export default async function CategoryPage({ params }: PageProps) {
  const { category } = await params;
  const validCategories = getAllCategories();

  if (!validCategories.includes(category as Category)) {
    notFound();
  }

  const posts = await getPostsByCategory(category as Category);
  const label = categoryLabels[category as Category];
  const color = categoryColors[category as Category];

  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className={`${color} px-4 py-2 rounded-lg text-lg font-bold text-white`}>
              {label}
            </span>
          </div>
          <h1
            className="text-3xl md:text-5xl font-bold text-white mb-4"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            {label.toUpperCase()} <span className="text-[var(--victory-gold)]">POSTS</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            All my posts about {label.toLowerCase().replace(/[^\w\s]/g, '').trim()}!
            Check out the latest tips and content.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <Link
            href="/blog"
            className="px-4 py-2 bg-[var(--card-bg)] border border-[var(--card-border)] text-gray-300 rounded-lg font-medium hover:border-[var(--loot-blue)] hover:text-[var(--loot-blue)] transition-colors"
          >
            All Posts
          </Link>
          {validCategories.map((cat) => (
            <Link
              key={cat}
              href={`/blog/category/${cat}`}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                cat === category
                  ? `${categoryColors[cat]} text-white`
                  : 'bg-[var(--card-bg)] border border-[var(--card-border)] text-gray-300 hover:border-[var(--loot-blue)] hover:text-[var(--loot-blue)]'
              }`}
            >
              {categoryLabels[cat]}
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
            <h3 className="text-xl font-bold text-white mb-2">No posts in this category yet!</h3>
            <p className="text-gray-400 mb-6">Check back soon for new content!</p>
            <Link href="/blog" className="btn-primary inline-block">
              View All Posts
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
