import Icon from "./Icon";

function LinkButton({ href, children, label }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="btn btn-secondary !px-3.5 !py-1.5">
      {children}<Icon name="external" className="h-3.5 w-3.5" />
      <span className="sr-only">{label} (opens in a new tab)</span>
    </a>
  );
}

export default function ProjectCard({ project }) {
  const { name, year, status, tech, description, highlights, github, demo } = project;
  const meta = [year, status].filter(Boolean);
  return (
    <article className="flex h-full flex-col rounded-xl border border-line bg-surface p-6 transition-colors duration-200 hover:border-accent">
      <header>
        <h3 className="font-display text-xl font-semibold tracking-tight">{name}</h3>
        {meta.length > 0 && <p className="mt-0.5 text-sm text-muted">{meta.join(", ")}</p>}
      </header>
      <p className="mt-3">{description}</p>
      <ul className="mt-4 list-disc space-y-1.5 pl-5 text-sm text-muted marker:text-line">
        {highlights.map((h) => <li key={h}>{h}</li>)}
      </ul>
      <ul className="mt-5 flex flex-wrap gap-2" aria-label="Technologies">
        {tech.map((t) => <li key={t} className="chip !py-0.5 text-xs">{t}</li>)}
      </ul>
      {(github || demo) && (
        <div className="mt-6 flex flex-wrap gap-2 pt-1">
          {github && <LinkButton href={github} label={`${name} on GitHub`}>GitHub</LinkButton>}
          {demo && <LinkButton href={demo} label={`${name} live demo`}>Live demo</LinkButton>}
        </div>
      )}
    </article>
  );
}
