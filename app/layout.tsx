import type { Metadata } from 'next'
import { Big_Shoulders, Work_Sans } from 'next/font/google'
import './globals.css'
import { sanityFetch } from '@/lib/client'
import { siteSettingsQuery } from '@/lib/queries'
import { urlFor } from '@/lib/image'
import Header from '@/app/components/layout/Header'
import Footer from '@/app/components/layout/Footer'


const bigShoulders = Big_Shoulders({
  subsets: ['latin'],
  weight: ['700', '900'],
  variable: '--font-heading',
})

const workSans = Work_Sans({
  subsets: ['latin'],
  variable: '--font-body',
})

const siteSettings = await sanityFetch<any>({
    query: siteSettingsQuery,
})

const seo = siteSettings?.seo

const ogImage = seo?.ogImage ? urlFor(seo.ogImage).width(1200).height(630).url() : null

export const metadata: Metadata = {
  title: seo?.metaTitle,
  description: seo?.metaDescription,
  openGraph: {
    title: seo?.openGraph?.title || siteSettings?.siteTitle,
    description: seo?.openGraph?.description || siteSettings?.siteDescription,
    images: ogImage ? [{ url: ogImage }] : [],
  },
  twitter: {
    card: seo?.openGraph?.card || 'summary',
    title: seo?.openGraph?.title || siteSettings?.siteTitle,
    description: seo?.openGraph?.description || siteSettings?.siteDescription,
    images: ogImage ? [{ url: ogImage }] : [],
  },
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // Fetch site settings for navigation and metadata
  

  return (
    <html lang="en" className={`${bigShoulders.variable} ${workSans.variable}`}>
      <body className="bg-white text-gray-900">
        
        <Header />

        {/* Page Content */}
        <main>{children}</main>

        <Footer />        
      </body>
    </html>
  )
}