import { sanityFetch } from '@/lib/client'
import { generatePageMetadata } from '@/lib/generateMetadata'
import { projectBySlugQuery } from '@/lib/queries'
import { PortableText } from '@portabletext/react'

interface ProjectPageProps {
  params: Promise<{ slug: string }>
}


export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params

  const project = await sanityFetch<any>({
    query: projectBySlugQuery,
    params: { slug },
  })

  if (!project) {
    return { title: 'Project Not Found' }
  }

  return generatePageMetadata({
    title: project.title,
    description: project.shortDescription,
  })
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params

  const project = await sanityFetch<any>({
    query: projectBySlugQuery,
    params: { slug },
  })

  if (!project) return <div>Project not found</div>

  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
      
      {project.mainImage && (
        <img 
          src={project.mainImage.asset?.url} 
          alt={project.title} 
          className="w-full rounded-lg mb-8"
        />
      )}

      {project.content && (
        <div className="prose max-w-none">
          <PortableText value={project.content} />
        </div>
      )}

      <div className="mt-8 flex gap-4">
        {project.liveUrl && (
          <a href={project.liveUrl} target="_blank" className="px-6 py-2 border rounded">
            View Live
          </a>
        )}
        {project.githubUrl && (
          <a href={project.githubUrl} target="_blank" className="px-6 py-2 border rounded">
            GitHub
          </a>
        )}
      </div>
    </div>
  )
}