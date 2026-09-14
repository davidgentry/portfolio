// app/blog/page.tsx
import Link from 'next/link'
import { allPostsQuery } from '@/lib/queries'
import { client } from '@/lib/client'

interface Post {
  _id: string
  title: string
  slug: { current: string }
  publishedAt: string
  excerpt?: string
  mainImage?: string
  categories?: Array<{ title: string; slug: { current: string } }>
  tags?: Array<{ title: string; slug: { current: string } }>
}

export default async function BlogPage() {
  const posts: Post[] = await client.fetch(allPostsQuery)

  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-10">Blog</h1>

      <div className="grid gap-8 md:grid-cols-2">
        {posts.map((post) => (
          <Link 
            key={post._id} 
            href={`/blog/${post.slug.current}`}
            className="group block"
          >
            <div className="border rounded-xl p-6 hover:shadow-md transition">
              {post.mainImage && (
                <img 
                  src={post.mainImage} 
                  alt={post.title}
                  className="w-full h-48 object-cover rounded-lg mb-4" 
                />
              )}
              
              <h2 className="text-2xl font-semibold group-hover:text-blue-600 transition">
                {post.title}
              </h2>
              
              <p className="text-sm text-gray-500 mt-1">
                {new Date(post.publishedAt).toLocaleDateString()}
              </p>

              {post.excerpt && (
                <p className="mt-3 text-gray-600 line-clamp-3">{post.excerpt}</p>
              )}

              {/* Categories */}
              {post.categories && post.categories.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-4">
                  {post.categories.map((cat) => (
                    <span 
                      key={cat.slug.current}
                      className="text-xs bg-gray-100 px-3 py-1 rounded-full"
                    >
                      {cat.title}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}