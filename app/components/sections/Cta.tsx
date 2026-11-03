interface CtaProps {
  heading?: string
  description?: string
  ctaLink?: string
  ctaText?: string
  backgroundColor?: string
}

export default function Cta({ heading, description, ctaLink, ctaText, backgroundColor }: CtaProps) {
  return (
    <section className="cta" style={{ backgroundColor: backgroundColor || '#f0f0f0' }}>
      <div className="cta__inner">
        <h1 className="cta__title">
          {heading || 'Call To Action'}
        </h1>
        {description && (
          <p className="cta__description">
            {description}
          </p>
        )}
        {ctaLink && (
          <a
            href={ctaLink}
            className="cta__button cta-link"
          >
            {ctaText || 'Click Here'}
          </a>
        )}
      </div>
    </section>
  )
}
