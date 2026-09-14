// app/blog/tag/[slug]/page.tsx
import Link from 'next/link'
import { postsByTagQuery } from '@/lib/queries'
import { client } from '@/lib/client'

interface Post {
  _id: string
  title: string
  slug: { current: string }
  publishedAt: string
  excerpt?: string
  mainImage?: string
}

export default async function TagArchive({ params }: { params: { slug: string } }) {
  const posts: Post[] = await client.fetch(postsByTagQuery, { 
    slug: params.slug 
  })

  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <Link href="/blog" className="text-sm text-blue-600 hover:underline">
        ← Back to Blog
      </Link>

      <h1 className="text-3xl font-bold mt-4 mb-2 capitalize">
        Tag: #{params.slug.replace(/-/g, ' ')}
      </h1>
      <p className="text-gray-500 mb-8">{posts.length} posts found</p>

      {posts.length === 0 ? (
        <p>No posts found with this tag.</p>
      ) : (
        <div className="grid gap-8 md:grid-cols-2">
          {posts.map((post) => (
            <Link 
              key={post._id} 
              href={`/blog/${post.slug.current}`}
              className="group block border rounded-xl p-6 hover:shadow-md transition"
            >
              {post.mainImage && (
                <img 
                  src={post.mainImage} 
                  alt={post.title} 
                  className="w-full h-48 object-cover rounded-lg mb-4" 
                />
              )}
              <h2 className="text-2xl font-semibold group-hover:text-blue-600">
                {post.title}
              </h2>
              <p className="text-sm text-gray-500 mt-1">
                {new Date(post.publishedAt).toLocaleDateString()}
              </p>
              {post.excerpt && (
                <p className="mt-3 text-gray-600 line-clamp-3">{post.excerpt}</p>
              )}
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}