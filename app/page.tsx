import { sanityFetch } from '@/lib/client'
import { pageBySlugQuery } from '@/sanity/queries'
import HeroHome from '@/app/components/sections/HeroHome'

export default async function HomePage() {
  const pageData = await sanityFetch<any>({
    query: pageBySlugQuery,
    params: { slug: 'home' },
  })

  if (!pageData) {
    return (
      <div className="p-12 text-center">
        <h1 className="text-2xl font-semibold">Homepage not found</h1>
        <p className="mt-2 text-gray-600">
          Please create a Page in Sanity with the slug <strong>home</strong>.
        </p>
      </div>
    )
  }

  return (
    <article>
        <HeroHome />
    </article>
  )
}