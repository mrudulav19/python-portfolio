import Section from "./Section";
import { skills } from "../data/content";

export default function Skills() {
  return (
    <Section id="skills" title="Skills">
      <dl className="divide-y divide-line">
        {Object.entries(skills).map(([category, items]) => (
          <div key={category} className="grid gap-3 py-5 first:pt-0 sm:grid-cols-[9rem_1fr]">
            <dt className="font-medium">{category}</dt>
            <dd>
              <ul className="flex flex-wrap gap-2">
                {items.map((s) => <li key={s} className="chip">{s}</li>)}
              </ul>
            </dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
