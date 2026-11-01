import Section from "./Section";
import { education } from "../data/content";

export default function Education() {
  return (
    <Section id="education" title="Education">
      <ul className="divide-y divide-line">
        {education.map((e) => (
          <li key={e.degree} className="grid gap-1 py-6 first:pt-0 last:pb-0 lg:grid-cols-[10rem_1fr] lg:gap-8">
            <p className="text-sm text-muted lg:pt-1.5">{e.period}</p>
            <div>
              <h3 className="font-display text-xl font-semibold tracking-tight">{e.degree}</h3>
              <p className="text-accent">{e.school}</p>
              <p className="mt-1 text-sm text-muted">GPA: {e.gpa}</p>
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
}
