import Section from '../components/Section'
import { education } from '../data/content'

export default function Education() {
  return (
    <Section id="education" title="Education">
      <div className="grid gap-4 md:grid-cols-2">
        {education.map((e) => (
          <article key={e.degree} className="card">
            <h3 className="text-xl font-bold">{e.degree}</h3>
            <p className="mt-1 font-semibold text-accent dark:text-teal-400">{e.school}</p>
            <p className="text-base text-neutral-500">{e.period}</p>
            <p className="mt-3">GPA: {e.gpa}</p>
          </article>
        ))}
      </div>
    </Section>
  )
}
