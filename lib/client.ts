import { createClient } from 'next-sanity'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'

if (!projectId) {
  throw new Error('Missing NEXT_PUBLIC_SANITY_PROJECT_ID in .env.local')
}

export const client = createClient({
  projectId,
  dataset,
  apiVersion: '2026-09-10',
  useCdn: true,
})


export async function sanityFetch<T>({
  query,
  params = {},
  tags,
}: {
  query: string
  params?: Record<string, any>
  tags?: string[]
}): Promise<T> {
  const fetchOptions = tags?.length
    ? ({
        next: {
          tags,
        },
      } as any)
    : undefined

  return client.fetch<T>(query, params, fetchOptions)
}