import Link from 'next/link';
import { BlogPost, categoryLabels, categoryColors } from '@/data/posts';

interface BlogCardProps {
  post: BlogPost;
  featured?: boolean;
}

export default function BlogCard({ post, featured = false }: BlogCardProps) {
  const rarityClasses = {
    legendary: 'rarity-legendary',
    epic: 'rarity-epic',
    rare: 'rarity-rare'
  };

  const formatDate = (dateString: string) => {
    if (!dateString) return 'Recently';
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const rarity = post.rarity || 'rare';
  const readTime = post.readTime || 5;

  if (featured) {
    return (
      <Link href={`/blog/${post.slug}`} className="block group">
        <article className={`card-glow rounded-xl overflow-hidden ${rarityClasses[rarity]}`}>
          {/* Featured banner gradient */}
          <div className="h-48 bg-gradient-to-br from-[var(--storm-purple)] via-[var(--storm-blue)] to-[var(--dark-bg)] relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute inset-0 opacity-30">
              <div className="absolute top-4 left-4 w-20 h-20 border-2 border-[var(--loot-blue)] rotate-45" />
              <div className="absolute bottom-4 right-4 w-16 h-16 border-2 border-[var(--legendary-orange)] rotate-12" />
              <div className="absolute top-1/2 left-1/2 w-32 h-32 border border-[var(--epic-purple)] rounded-full -translate-x-1/2 -translate-y-1/2" />
            </div>

            {/* Featured badge */}
            <div className="absolute top-4 right-4 bg-[var(--victory-gold)] text-black px-3 py-1 rounded text-xs font-bold uppercase tracking-wider">
              ⭐ Featured
            </div>

            {/* Category badge */}
            <div className="absolute bottom-4 left-4">
              <span className={`${categoryColors[post.category]} px-3 py-1 rounded text-sm font-medium text-white`}>
                {categoryLabels[post.category]}
              </span>
            </div>
          </div>

          <div className="p-6">
            <h3
              className="text-xl font-bold text-white mb-3 group-hover:text-[var(--victory-gold)] transition-colors line-clamp-2"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              {post.title}
            </h3>
            <p className="text-gray-400 mb-4 line-clamp-2">
              {post.excerpt}
            </p>
            <div className="flex items-center justify-between text-sm text-gray-500">
              <span>{formatDate(post.date)}</span>
              <span>{readTime} min read</span>
            </div>
          </div>
        </article>
      </Link>
    );
  }

  return (
    <Link href={`/blog/${post.slug}`} className="block group">
      <article className={`card-glow rounded-xl overflow-hidden h-full ${rarityClasses[rarity]}`}>
        {/* Top gradient accent */}
        <div className="h-2 bg-gradient-to-r from-[var(--loot-blue)] via-[var(--epic-purple)] to-[var(--legendary-orange)]" />

        <div className="p-5">
          {/* Category badge */}
          <span className={`${categoryColors[post.category]} px-2 py-0.5 rounded text-xs font-medium text-white`}>
            {categoryLabels[post.category]}
          </span>

          <h3
            className="text-lg font-bold text-white mt-3 mb-2 group-hover:text-[var(--victory-gold)] transition-colors line-clamp-2"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            {post.title}
          </h3>

          <p className="text-gray-400 text-sm mb-4 line-clamp-2">
            {post.excerpt}
          </p>

          <div className="flex items-center justify-between text-xs text-gray-500">
            <span>{formatDate(post.date)}</span>
            <span>{readTime} min read</span>
          </div>
        </div>
      </article>
    </Link>
  );
}
