import Hero from './sections/Hero'
import FeaturedProjects from './sections/FeaturedProjects'
import About from './sections/About'
import Skills from './sections/Skills'
import Cta from './sections/Cta'
//import Services from './sections/Services'

interface SectionRendererProps {
  sections: any[]
}

export default function SectionRenderer({ sections }: SectionRendererProps) {
  if (!sections || sections.length === 0) return null

  return (
    <>
      {sections.map((section, index) => {
        const key = `${section._type}-${index}`

        switch (section._type) {
          case 'hero':
            return <Hero key={key} heading={section.heading} description={section.description} ctaText={section.ctaText} ctaLink={section.ctaLink} backgroundImage={section.backgroundImage} />

          case 'featuredProjects':
            return <FeaturedProjects key={key} heading={section.heading} projects={section.projects} showViewAll={section.showViewAll} />

          case 'about':
            return <About key={key} heading={section.heading} content={section.content} image={section.image} ctaText={section.ctaText} ctaLink={section.ctaLink} />

          case 'skills':
            return <Skills key={key} heading={section.heading} skillsList={section.skillsList} />

          case 'cta':
            return <Cta key={key} heading={section.heading} description={section.description} ctaText={section.ctaText} ctaLink={section.ctaLink} backgroundColor={section.backgroundColor} />

          default:
            console.warn(`Unknown section type: ${section._type}`)
            return null
        }
      })}
    </>
  )
}