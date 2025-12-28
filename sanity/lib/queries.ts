import { groq } from 'next-sanity'

// Get all posts
export const postsQuery = groq`
  *[_type == "post"] | order(publishedAt desc) {
    _id,
    title,
    "slug": slug.current,
    excerpt,
    category,
    rarity,
    readTime,
    featured,
    "date": publishedAt
  }
`

// Get a single post by slug
export const postQuery = groq`
  *[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    "slug": slug.current,
    excerpt,
    content,
    category,
    rarity,
    readTime,
    featured,
    "date": publishedAt
  }
`

// Get featured posts
export const featuredPostsQuery = groq`
  *[_type == "post" && featured == true] | order(publishedAt desc) {
    _id,
    title,
    "slug": slug.current,
    excerpt,
    category,
    rarity,
    readTime,
    featured,
    "date": publishedAt
  }
`

// Get posts by category
export const postsByCategoryQuery = groq`
  *[_type == "post" && category == $category] | order(publishedAt desc) {
    _id,
    title,
    "slug": slug.current,
    excerpt,
    category,
    rarity,
    readTime,
    featured,
    "date": publishedAt
  }
`

// Get all post slugs for static generation
export const postSlugsQuery = groq`
  *[_type == "post"] {
    "slug": slug.current
  }
`
