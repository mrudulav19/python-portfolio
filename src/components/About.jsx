import Section from "./Section";
import { profile, facts } from "../data/content";

export default function About() {
  return (
    <Section id="about" title="About">
      <div className="max-w-prose space-y-4 text-lg">
        <p>{profile.summary}</p>
        <p className="text-muted">{profile.summaryExtra}</p>
      </div>
      <dl className="mt-10 grid gap-x-8 gap-y-5 sm:grid-cols-2">
        {facts.map((f) => (
          <div key={f.label} className="border-t border-line pt-3">
            <dt className="text-sm text-muted">{f.label}</dt>
            <dd className="font-medium">{f.value}</dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
