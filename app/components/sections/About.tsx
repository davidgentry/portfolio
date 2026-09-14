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
    <section className="py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-5xl font-bold tracking-tight">
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
            >
              <img 
                src={imageSrc} 
                alt={imageAlt} 
                className="mx-auto my-8 rounded-lg shadow-lg" 
              />
            </a>
          ) : (
            <div>
              <img 
                src={imageSrc} 
                alt={imageAlt} 
                className="mx-auto my-8 rounded-lg shadow-lg" 
              />
            </div>
          )
        )}
        {ctaLink && (
          <a
            href={ctaLink}
            className="mt-6 inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-full transition duration-300"
            style={{ textDecoration: 'none', display: 'inline-block' }}
          >
            {ctaText || 'Learn More'}
          </a>
        )}
      </div>
    </section>
  )
}
