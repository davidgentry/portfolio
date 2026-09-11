interface FeaturedProjectsProps {
  heading?: string
  projects?: any[]
  showViewAll?: boolean
}

export default function FeaturedProjects({ heading, projects, showViewAll }: FeaturedProjectsProps) {
  return (
    <section className="py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-5xl font-bold tracking-tight">
          {heading || 'Default Heading'}
        </h1>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects?.map((project, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-bold">{project.title}</h2>
              <p className="mt-2 text-gray-600">{project.description}</p>
            </div>
          ))}
        </div>
        {showViewAll && (
          <a
            href="/projects"
            className="mt-6 inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-full transition duration-300"
          >
            View All Projects
          </a>
        )}
      </div>
    </section>
  )
}   