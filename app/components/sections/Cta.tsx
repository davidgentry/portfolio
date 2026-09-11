interface CtaProps {
  heading?: string
  description?: string
  ctaLink?: string
  ctaText?: string
  backgroundColor?: string
}

export default function Cta({ heading, description, ctaLink, ctaText, backgroundColor }: CtaProps) {
  return (
    <section className="py-20 px-6" style={{ backgroundColor: backgroundColor || '#f0f0f0' }}>
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
            {ctaText || 'Default Button Text'}
          </a>
        )}
      </div>
    </section>
  )
}
