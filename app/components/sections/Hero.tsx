interface HeroProps {
  heading?: string
  description?: string
  ctaText?: string
  ctaLink?: string
  backgroundImage?: string
}

export default function Hero({ heading, description, ctaText, ctaLink, backgroundImage }: HeroProps) {
  return (
    <section className="hero" style={{ backgroundImage: backgroundImage ? `url(${backgroundImage})` : 'none', backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="hero__inner">
        <h1 className="hero__title">
          {heading || 'Default Heading'}
        </h1>
        {description && (
          <p className="hero__description">
            {description}
          </p>
        )}
        {ctaLink && (
          <a
            href={ctaLink}
            className="hero__cta cta-link"
          >
            {ctaText || 'Get Started'}
          </a>
        )}
      </div>
    </section>
  )
}