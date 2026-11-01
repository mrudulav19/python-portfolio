import Section from '../components/Section'
import { publication, certifications } from '../data/content'

export default function Credentials() {
  return (
    <Section id="credentials" title="Publication & Certifications">
      <article className="card mb-4">
        <h3 className="text-xl font-bold">{publication.title}</h3>
        <p className="mt-1 text-neutral-600 dark:text-neutral-400">{publication.venue}, {publication.year}</p>
      </article>
      <ul className="grid gap-4 md:grid-cols-2">
        {certifications.map((c) => (
          <li key={c.name} className="card">
            <h3 className="text-lg font-bold">{c.name}</h3>
            <p className="mt-1 text-neutral-600 dark:text-neutral-400">{c.issuer}, {c.date}</p>
            {c.url && <a className="link mt-3 inline-block" href={c.url} target="_blank" rel="noopener noreferrer">View credential</a>}
          </li>
        ))}
      </ul>
    </Section>
  )
}
