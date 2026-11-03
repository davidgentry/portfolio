import { sanityFetch } from '@/lib/client'
import { siteSettingsQuery } from '@/lib/queries'

export default async function Footer() {
  const siteSettings = await sanityFetch<any>({
    query: siteSettingsQuery,
  })

  return (
    <footer className="site-footer">
      <section className="site-footer__inner">
        <div className="site-footer__copy">
            <p>&copy; {new Date().getFullYear()} {siteSettings?.footerText}</p>
        </div>
        <div className="site-footer__nav">
          {siteSettings?.navigation?.slice(0, 3).map((item: any, index: number) => (
            <a key={index} href={item.href} className="hover:text-gray-700">
              {item.label}
            </a>
          ))}
        </div>
      </section>
    </footer>
  )
}