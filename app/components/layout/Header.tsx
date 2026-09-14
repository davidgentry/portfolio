import {sanityFetch} from '@/lib/client'
import { siteSettingsQuery } from '@/lib/queries'

export default async function Header() {
    const siteSettings = await sanityFetch<any>({
        query: siteSettingsQuery,
    })

    return (

        <header>
            <div className="site-logo">
                <img src={siteSettings?.logo?.asset?.url} alt={siteSettings?.siteTitle || 'Logo'} className="h-12" />
            </div>
            <nav className="border-b">
                <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
                    <a href="/" className="font-semibold text-xl">
                    {siteSettings?.siteTitle || 'Portfolio'}
                    </a>

                    <div className="flex gap-8 text-sm">
                    {siteSettings?.navigation?.map((item: any, index: number) => (
                        <a 
                        key={index} 
                        href={item.href} 
                        className="hover:text-gray-600 transition-colors"
                        >
                        {item.label}
                        </a>
                    ))}
                    </div>
                </div>
            </nav>
        </header>
    )
}