import { sanityFetch } from '@/lib/client'
import { serviceBySlugQuery } from '@/sanity/queries'
import { PortableText } from '@portabletext/react'
import { generatePageMetadata } from '@/lib/generateMetadata'
import { Metadata } from 'next'

interface ServicePageProps {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params

  const service = await sanityFetch<any>({
    query: serviceBySlugQuery,
    params: { slug },
  })

  if (!service) {
    return { title: 'Service Not Found' }
  }

  return generatePageMetadata({
    title: service.title,
    description: service.shortDescription,
  })
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params

  const service = await sanityFetch<any>({
    query: serviceBySlugQuery,
    params: { slug },
  })

  if (!service) return <div>Service not found</div>

  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-4">{service.title}</h1>

      {service.shortDescription && (
        <p className="text-xl text-gray-600 mb-8">{service.shortDescription}</p>
      )}

      {service.content && (
        <div className="prose max-w-none">
          <PortableText value={service.content} />
        </div>
      )}

      {service.price && (
        <p className="mt-8 text-lg font-medium">Pricing: {service.price}</p>
      )}
    </div>
  )
}