import {PortableText} from '@portabletext/react'
import { urlFor } from '@/lib/image'

interface AboutProps {
  heading?: string
  content?: any
  image?: any
  ctaText?: string
  ctaLink?: string
}

export default function About({ heading, content, image, ctaText, ctaLink }: AboutProps) {

  const imageSrc = image ? urlFor(image).width(800).height(600).url() : ""
  const imageAlt = image?.alt || 'About Image'

  return (
    <section className="about">
      <div className="about__inner">
        <h1 className="about__title">
          {heading || 'Default Heading'}
        </h1>
        {content && (
             <PortableText value={content} />
        )}
        {image && (
          image.imageURL ? (
            <a 
              href={image.imageURL} 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ display: 'block' }}
              className="about__image-link"
            >
              <img 
                src={imageSrc} 
                alt={imageAlt} 
                className="about__image" 
              />
            </a>
          ) : (
            <div>
              <img 
                src={imageSrc} 
                alt={imageAlt} 
                className="about__image" 
              />
            </div>
          )
        )}
        {ctaLink && (
          <a
            href={ctaLink}
            className="cta-link about__cta"
            style={{ textDecoration: 'none', display: 'inline-block' }}
          >
            {ctaText || 'Learn More'}
          </a>
        )}
      </div>
    </section>
  )
}
