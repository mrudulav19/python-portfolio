import Section from "./Section";
import ProjectCard from "./ProjectCard";
import { projects, profile } from "../data/content";

export default function Projects() {
  return (
    <Section id="projects" title="Projects">
      {profile.github && (
        <p className="mb-8 max-w-prose text-muted">
          Source code and more work on{" "}
          <a href={profile.github} target="_blank" rel="noopener noreferrer" className="text-link">
            GitHub<span className="sr-only"> (opens in a new tab)</span>
          </a>.
        </p>
      )}
      <ul className="grid gap-5 md:grid-cols-2">
        {projects.map((p) => (
          <li key={p.name}><ProjectCard project={p} /></li>
        ))}
      </ul>
    </Section>
  );
}
