interface HeroProps {
  heading?: string
  description?: string
  ctaText?: string
  ctaLink?: string
  backgroundImage?: string
}

export default function Hero({ heading, description, ctaText, ctaLink, backgroundImage }: HeroProps) {
  return (
    <section className="hero hero--home py-20 px-6 text-center" style={{ backgroundImage: backgroundImage ? `url(${backgroundImage})` : 'none', backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="max-w-3xl mx-auto">
        <h1 className="text-5xl font-bold tracking-tight">
          {heading || 'Default Heading'}
        </h1>
        {description && (
          <p className="mt-4 text-xl text-gray-600">
            {description}
          </p>
        )}
        {ctaLink && (
          <a
            href={ctaLink}
            className="mt-6 inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-full transition duration-300"
          >
            {ctaText || 'Get Started'}
          </a>
        )}
      </div>
    </section>
  )
}