import { allCategoriesQuery } from '@/lib/queries'
import { client } from '@/lib/client'
import Link from 'next/link'

export default async function AllCategories() {
  const categories = await client.fetch(allCategoriesQuery)

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-8">All Categories</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {categories.map((cat: any) => (
          <Link 
            key={cat._id}
            href={`/blog/category/${cat.slug.current}`}
            className="p-6 border rounded-xl hover:shadow-md transition"
          >
            <h3 className="text-xl font-semibold">{cat.title}</h3>
            <p className="text-sm text-gray-500 mt-1">
              {cat.postCount} posts
            </p>
          </Link>
        ))}
      </div>
    </div>
  )
}