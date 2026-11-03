interface FeaturedProjectsProps {
  heading?: string
  projects?: any[]
  showViewAll?: boolean
}

export default function FeaturedProjects({ heading, projects, showViewAll }: FeaturedProjectsProps) {
  return (
    <section className="featured-projects">
      <div className="featured-projects__inner">
        <h1 className="featured-projects__title">
          {heading || 'Featured Projects'}
        </h1>
        <div className="featured-projects__grid">
          {projects?.map((project, index) => (
            <div key={index} className="featured-projects__item">
              <h2 className="featured-projects__item-title">{project.title}</h2>
              <p className="featured-projects__item-description">{project.description}</p>
            </div>
          ))}
        </div>
        {showViewAll && (
          <a
            href="/projects"
            className="featured-projects__view-all cta-link"
          >
            View All Projects
          </a>
        )}
      </div>
    </section>
  )
}   