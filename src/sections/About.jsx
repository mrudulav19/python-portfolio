import Section from '../components/Section'
import { profile } from '../data/content'

export default function About() {
  return (
    <Section id="about" title="About">
      <p className="max-w-3xl text-xl leading-relaxed">{profile.summary}</p>
      <p className="mt-4 text-neutral-600 dark:text-neutral-400">Based in {profile.location}.</p>
    </Section>
  )
}
