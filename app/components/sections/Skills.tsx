interface SkillsProps {
  heading?: string
  skillsList?: string[]
}

export default function Skills({ heading, skillsList }: SkillsProps) {
  return (
    <section className="skills">
      <div className="skills__inner">
        <h1 className="skills__title">
          {heading || 'Default Heading'}
        </h1>
        <div className="skills__grid">
          {skillsList?.map((skill, index) => (
            <div key={index} className="skills__item">
              <h2 className="skills__item-title">{skill}</h2>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}   