import { createClient } from 'next-sanity'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-01-01'

// Check if Sanity is configured
export const isSanityConfigured = !!projectId

// Create client only if configured
export const client = projectId
  ? createClient({
      projectId,
      dataset,
      apiVersion,
      useCdn: false,
    })
  : null
