import { allTagsQuery } from '@/lib/queries'
import { client } from '@/lib/client'
import Link from 'next/link'

export default async function AllTags() {
  const tags = await client.fetch(allTagsQuery)

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-8">All Tags</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {tags.map((tag: any) => (
          <Link 
            key={tag._id}
            href={`/blog/tag/${tag.slug.current}`}
            className="p-6 border rounded-xl hover:shadow-md transition"
          >
            <h3 className="text-xl font-semibold">{tag.title}</h3>
            <p className="text-sm text-gray-500 mt-1">
              {tag.postCount} posts
            </p>
          </Link>
        ))}
      </div>
    </div>
  )
}