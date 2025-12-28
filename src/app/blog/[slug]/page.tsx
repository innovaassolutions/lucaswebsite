import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getPostBySlug, getAllPostSlugs, categoryLabels, categoryColors } from '@/data/posts';
import { PortableText } from '@portabletext/react';
import type { Metadata } from 'next';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export const revalidate = 60;

export async function generateStaticParams() {
  const slugs = await getAllPostSlugs();
  return slugs.map((item) => ({
    slug: item.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: `${post.title} | Cascavo's Fortnite Blog`,
    description: post.excerpt,
  };
}

export default async function BlogPost({ params }: PageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const formatDate = (dateString: string) => {
    if (!dateString) return 'Recently';
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const rarityGradients = {
    legendary: 'from-[var(--legendary-orange)] to-amber-600',
    epic: 'from-[var(--epic-purple)] to-violet-600',
    rare: 'from-[var(--rare-blue)] to-blue-600'
  };

  return (
    <article className="py-12">
      {/* Hero Header */}
      <div className="relative py-16 mb-12 overflow-hidden">
        <div className={`absolute inset-0 bg-gradient-to-br ${rarityGradients[post.rarity || 'rare']} opacity-20`} />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--dark-bg)] to-transparent" />

        {/* Decorative shapes */}
        <div className="absolute top-4 left-4 w-24 h-24 border-2 border-white/10 rotate-45" />
        <div className="absolute bottom-4 right-4 w-20 h-20 border border-white/10 rounded-full" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-gray-400 mb-6">
            <Link href="/" className="hover:text-[var(--loot-blue)] transition-colors">Home</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-[var(--loot-blue)] transition-colors">Blog</Link>
            <span>/</span>
            <Link
              href={`/blog/category/${post.category}`}
              className="hover:text-[var(--loot-blue)] transition-colors"
            >
              {categoryLabels[post.category]}
            </Link>
          </nav>

          {/* Category & Meta */}
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className={`${categoryColors[post.category]} px-3 py-1 rounded text-sm font-medium text-white`}>
              {categoryLabels[post.category]}
            </span>
            {post.featured && (
              <span className="bg-[var(--victory-gold)] text-black px-3 py-1 rounded text-sm font-bold">
                ⭐ Featured
              </span>
            )}
          </div>

          {/* Title */}
          <h1
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            {post.title}
          </h1>

          {/* Meta info */}
          <div className="flex flex-wrap items-center gap-6 text-gray-400">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[var(--victory-gold)] to-[var(--legendary-orange)] flex items-center justify-center text-black font-bold text-sm">
                C
              </div>
              <span>Cascavo</span>
            </div>
            <span>📅 {formatDate(post.date)}</span>
            <span>⏱️ {post.readTime || 5} min read</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[var(--card-bg)] border border-[var(--card-border)] rounded-xl p-6 md:p-10">
          <div className="blog-content">
            {post.content ? (
              <PortableText value={post.content} />
            ) : (
              <p className="text-gray-400">No content available.</p>
            )}
          </div>
        </div>

        {/* Post Footer */}
        <div className="mt-10 p-6 bg-[var(--card-bg)] border border-[var(--card-border)] rounded-xl">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[var(--victory-gold)] to-[var(--legendary-orange)] flex items-center justify-center text-black font-bold text-2xl">
              C
            </div>
            <div className="text-center md:text-left">
              <h3 className="text-lg font-bold text-white mb-1" style={{ fontFamily: 'var(--font-display)' }}>
                Written by Cascavo
              </h3>
              <p className="text-gray-400 text-sm">
                I LOVE Fortnite! Thanks for reading my blog! 🎮
              </p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-between">
          <Link
            href="/blog"
            className="btn-secondary text-center"
          >
            ← Back to All Posts
          </Link>
          <Link
            href={`/blog/category/${post.category}`}
            className="btn-primary text-center"
          >
            More {categoryLabels[post.category]} →
          </Link>
        </div>
      </div>
    </article>
  );
}
