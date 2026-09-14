import { sanityFetch } from '@/lib/client'
import { allServicesQuery } from '@/lib/queries'

export default async function ServicesPage() {
  const services = await sanityFetch<any[]>({
    query: allServicesQuery,
  })

  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-10">Services</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {services?.map((service) => (
          <a 
            key={service._id} 
            href={`/services/${service.slug.current}`}
            className="block p-8 border rounded-lg hover:shadow-md"
          >
            <h2 className="text-2xl font-semibold">{service.title}</h2>
            <p className="mt-3 text-gray-600">{service.shortDescription}</p>
            {service.price && <p className="mt-4 font-medium">{service.price}</p>}
          </a>
        ))}
      </div>
    </div>
  )
}