interface SkillsProps {
  heading?: string
  skillsList?: string[]
}

export default function Skills({ heading, skillsList }: SkillsProps) {
  return (
    <section className="py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-5xl font-bold tracking-tight">
          {heading || 'Default Heading'}
        </h1>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsList?.map((skill, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-bold">{skill}</h2>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}   