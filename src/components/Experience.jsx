import Section from "./Section";
import { experience } from "../data/content";

export default function Experience() {
  return (
    <Section id="experience" title="Experience">
      <ol className="divide-y divide-line">
        {experience.map((job) => (
          <li key={job.company} className="grid gap-3 py-8 first:pt-0 last:pb-0 lg:grid-cols-[10rem_1fr] lg:gap-8">
            <p className="text-sm text-muted lg:pt-1.5">{job.period}</p>
            <div>
              <h3 className="font-display text-xl font-semibold tracking-tight">{job.role}</h3>
              <p className="text-accent">{job.company}</p>
              <ul className="mt-4 list-disc space-y-2 pl-5 marker:text-muted">
                {job.bullets.map((b) => <li key={b}>{b}</li>)}
              </ul>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
