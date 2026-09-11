import { Metadata } from 'next'
import { urlFor } from '@/lib/image'

interface GenerateMetadataOptions {
  title?: string
  description?: string
  image?: any
  siteTitle?: string
}

export function generatePageMetadata({
  title,
  description,
  image,
  siteTitle = 'Portfolio',
}: GenerateMetadataOptions): Metadata {
  const ogImage = image 
    ? urlFor(image).width(1200).height(630).url() 
    : undefined

  const pageTitle = title ? `${title} | ${siteTitle}` : siteTitle

  return {
    title: pageTitle,
    description,
    openGraph: {
      title: pageTitle,
      description,
      images: ogImage ? [{ url: ogImage }] : [],
    },
    twitter: {
      card: 'summary_large_image',
      title: pageTitle,
      description,
      images: ogImage ? [{ url: ogImage }] : [],
    },
  }
}

