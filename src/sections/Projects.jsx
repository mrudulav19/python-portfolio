import Section from '../components/Section'
import ProjectCard from '../components/ProjectCard'
import { projects } from '../data/content'

export default function Projects() {
  return (
    <Section id="projects" title="Projects">
      <div className="grid gap-4 md:grid-cols-2">{projects.map((p) => <ProjectCard key={p.name} {...p} />)}</div>
    </Section>
  )
}
