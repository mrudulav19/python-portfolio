import Section from '../components/Section'
import Tag from '../components/Tag'
import { skills } from '../data/content'

export default function Skills() {
  return (
    <Section id="skills" title="Skills">
      <div className="grid gap-4 sm:grid-cols-2">
        {Object.entries(skills).map(([group, items]) => (
          <div key={group} className="card">
            <h3 className="mb-4 text-xl font-bold">{group}</h3>
            <ul className="flex flex-wrap gap-2">{items.map((s) => <Tag key={s}>{s}</Tag>)}</ul>
          </div>
        ))}
      </div>
    </Section>
  )
}
