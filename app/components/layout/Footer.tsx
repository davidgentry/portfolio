import { sanityFetch } from '@/lib/client'
import { siteSettingsQuery } from '@/lib/queries'

export default async function Footer() {
  const siteSettings = await sanityFetch<any>({
    query: siteSettingsQuery,
  })

  return (
    <footer className="border-t bg-white mt-16">
      <div className="max-w-6xl mx-auto px-6 py-8 text-sm text-gray-500 flex flex-col md:flex-row justify-between gap-4">
        <div>
            <p>&copy; {new Date().getFullYear()} {siteSettings?.footerText}</p>
        </div>
        <div className="flex gap-6">
          {siteSettings?.navigation?.slice(0, 3).map((item: any, index: number) => (
            <a key={index} href={item.href} className="hover:text-gray-700">
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}