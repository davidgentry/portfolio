import { sanityFetch } from '@/lib/client'
import { pageBySlugQuery, siteSettingsQuery } from '@/lib/queries'
import { generatePageMetadata } from '@/lib/generateMetadata'
import SectionRenderer from '@/app/components/SectionRenderer'

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params

  const [pageData, siteSettings] = await Promise.all([
    sanityFetch<any>({ query: pageBySlugQuery, params: { slug } }),
    sanityFetch<any>({ query: siteSettingsQuery }),
  ])

  const title = pageData?.seo?.metaTitle || siteSettings?.seo?.metaTitle || siteSettings?.siteTitle
  const description = pageData?.seo?.metaDescription || siteSettings?.seo?.metaDescription || siteSettings?.siteDescription
  const image = pageData?.seo?.ogImage || siteSettings?.seo?.ogImage

  return generatePageMetadata({
    title,
    description,
    image,
    siteTitle: siteSettings?.siteTitle,
  })
}

export default async function DynamicPage({ params }: any) {
  const { slug } = await params
  const pageData = await sanityFetch<any>({
    query: pageBySlugQuery,
    params: { slug },
  })

  if (!pageData) return <div>Page not found</div>

  return <SectionRenderer sections={pageData.sections} />
}