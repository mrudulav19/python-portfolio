import Section from "./Section";
import { publication, certifications } from "../data/content";

export default function Credentials() {
  return (
    <Section id="credentials" title="Publication & Certifications">
      <h3 className="font-display text-lg font-semibold">Publication</h3>
      <div className="mt-3 border-b border-line pb-8">
        <p className="font-medium">{publication.title}</p>
        <p className="text-sm text-muted">{publication.venue}, {publication.year}</p>
      </div>

      <h3 className="mt-8 font-display text-lg font-semibold">Certifications</h3>
      <ul className="mt-3 divide-y divide-line">
        {certifications.map((c) => (
          <li key={c.name} className="flex flex-col gap-1 py-4 first:pt-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
            <div>
              <p className="font-medium">{c.name}</p>
              <p className="text-sm text-muted">{c.issuer}</p>
              {c.url && (
                <a href={c.url} target="_blank" rel="noopener noreferrer" className="text-link text-sm">
                  View credential<span className="sr-only"> for {c.name} (opens in a new tab)</span>
                </a>
              )}
            </div>
            <p className="shrink-0 text-sm text-muted">{c.date}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
