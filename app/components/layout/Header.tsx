import {sanityFetch} from '@/lib/client'
import { siteSettingsQuery } from '@/lib/queries'
import AnimatedLogo from '@/app/components/layout/AnimatedLogo'

export default async function Header() {
    const siteSettings = await sanityFetch<any>({
        query: siteSettingsQuery,
    })

    return (

        <header className="site-header">
            <section className="site-header__inner">
                <div className="site-header__logo">
                    <img src={siteSettings?.logo?.asset?.url} alt={siteSettings?.siteTitle || 'Logo'} className="h-12" />
                </div>
                <nav className="site-header__nav">
                    <div className="site-header__nav-inner">
                        <a href="/" className="site-header__logo">
                            <AnimatedLogo />
                        </a>

                        <nav className="site-header__nav">
                            <ul className="site-header__nav-list">
                                {siteSettings?.navigation?.map((item: any, index: number) => (
                                    <a 
                                        key={index} 
                                        href={item.href} 
                                        className="site-header__nav-item"
                                        >
                                        {item.label}
                                    </a>
                                ))}
                            </ul>
                        </nav>
                    </div>
                </nav>
            </section>
        </header>
    )
}