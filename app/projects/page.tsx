import { sanityFetch } from '@/lib/client'
import { allProjectsQuery } from '@/sanity/queries'

export default async function ProjectsPage() {
  const projects = await sanityFetch<any[]>({
    query: allProjectsQuery,
  })

  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-10">Projects</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects?.map((project) => (
          <a 
            key={project._id} 
            href={`/projects/${project.slug.current}`}
            className="block border rounded-lg overflow-hidden hover:shadow-lg transition"
          >
            {project.mainImage && (
              <img 
                src={project.mainImage.asset?.url} 
                alt={project.title} 
                className="w-full h-48 object-cover"
              />
            )}
            <div className="p-6">
              <h2 className="text-xl font-semibold">{project.title}</h2>
              <p className="mt-2 text-gray-600 line-clamp-3">{project.description}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  )
}