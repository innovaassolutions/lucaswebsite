import { defineField, defineType } from 'sanity'

export const post = defineType({
  name: 'post',
  title: 'Blog Post',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
      rows: 3,
      description: 'A short description for the post card',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [
            { title: 'Normal', value: 'normal' },
            { title: 'H2', value: 'h2' },
            { title: 'H3', value: 'h3' },
            { title: 'Quote', value: 'blockquote' },
          ],
          marks: {
            decorators: [
              { title: 'Bold', value: 'strong' },
              { title: 'Italic', value: 'em' },
              { title: 'Code', value: 'code' },
            ],
          },
        },
      ],
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Tips & Tricks', value: 'tips' },
          { title: 'News', value: 'news' },
          { title: 'Reviews', value: 'reviews' },
          { title: 'Building', value: 'builds' },
          { title: 'Skins', value: 'skins' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'rarity',
      title: 'Rarity (Card Style)',
      type: 'string',
      options: {
        list: [
          { title: 'Legendary (Orange)', value: 'legendary' },
          { title: 'Epic (Purple)', value: 'epic' },
          { title: 'Rare (Blue)', value: 'rare' },
        ],
      },
      initialValue: 'rare',
    }),
    defineField({
      name: 'readTime',
      title: 'Read Time (minutes)',
      type: 'number',
      initialValue: 5,
    }),
    defineField({
      name: 'featured',
      title: 'Featured Post',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published At',
      type: 'datetime',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      category: 'category',
      featured: 'featured',
    },
    prepare({ title, category, featured }) {
      return {
        title: featured ? `⭐ ${title}` : title,
        subtitle: category,
      }
    },
  },
  orderings: [
    {
      title: 'Published Date, New',
      name: 'publishedAtDesc',
      by: [{ field: 'publishedAt', direction: 'desc' }],
    },
  ],
})
