import Section from '../components/Section'
import { experience } from '../data/content'

export default function Experience() {
  return (
    <Section id="experience" title="Experience">
      <ol className="space-y-6 border-l-2 border-neutral-200 pl-6 dark:border-neutral-800">
        {experience.map((job) => (
          <li key={job.company} className="card">
            <h3 className="text-xl font-bold">{job.role}</h3>
            <p className="mt-1 font-semibold text-accent dark:text-teal-400">{job.company}</p>
            <p className="text-base text-neutral-500">{job.period}</p>
            <ul className="mt-4 list-disc space-y-2 pl-5 marker:text-accent">
              {job.points.map((p) => <li key={p}>{p}</li>)}
            </ul>
          </li>
        ))}
      </ol>
    </Section>
  )
}
