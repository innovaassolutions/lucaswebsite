import { client } from '../../sanity/lib/client'
import {
  postsQuery,
  postQuery,
  featuredPostsQuery,
  postsByCategoryQuery,
  postSlugsQuery
} from '../../sanity/lib/queries'

export type Category = 'tips' | 'news' | 'reviews' | 'builds' | 'skins'
export type Rarity = 'legendary' | 'epic' | 'rare'

export interface BlogPost {
  _id: string
  slug: string
  title: string
  excerpt: string
  content?: any[] // Portable Text content from Sanity
  date: string
  category: Category
  rarity: Rarity
  readTime: number
  featured?: boolean
}

// Fetch all posts from Sanity
export async function getAllPosts(): Promise<BlogPost[]> {
  return await client.fetch(postsQuery)
}

// Fetch a single post by slug from Sanity
export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  return await client.fetch(postQuery, { slug })
}

// Fetch featured posts from Sanity
export async function getFeaturedPosts(): Promise<BlogPost[]> {
  return await client.fetch(featuredPostsQuery)
}

// Fetch posts by category from Sanity
export async function getPostsByCategory(category: Category): Promise<BlogPost[]> {
  return await client.fetch(postsByCategoryQuery, { category })
}

// Get all post slugs for static generation
export async function getAllPostSlugs(): Promise<{ slug: string }[]> {
  return await client.fetch(postSlugsQuery)
}

// Get all categories (static)
export function getAllCategories(): Category[] {
  return ['tips', 'news', 'reviews', 'builds', 'skins']
}

// Category labels with emojis
export const categoryLabels: Record<Category, string> = {
  tips: 'Tips & Tricks',
  news: 'News',
  reviews: 'Reviews',
  builds: 'Building',
  skins: 'Skins'
}

// Category colors for badges
export const categoryColors: Record<Category, string> = {
  tips: 'bg-green-500',
  news: 'bg-blue-500',
  reviews: 'bg-yellow-500',
  builds: 'bg-orange-500',
  skins: 'bg-purple-500'
}
