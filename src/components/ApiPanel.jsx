import { profile, skills } from "../data/content";

// A compact "API response" that summarises the stack. Built from the same content data.
function format(obj) {
  return JSON.stringify(obj, null, 2).replace(/\[\s+([^\]]+?)\s+\]/g, (_, inner) => `[${inner.replace(/\s*\n\s*/g, " ")}]`);
}

export default function ApiPanel({ className = "" }) {
  const body = {
    role: profile.title,
    experience: "2+ years",
    languages: skills.Languages,
    frameworks: skills.Frameworks,
    databases: skills.Databases,
    tools: skills.Tools.slice(0, 3),
    location: "Chennai, India",
  };
  return (
    <figure aria-hidden="true" className={`overflow-hidden rounded-xl border border-line bg-surface font-mono text-xs sm:text-[13px] ${className}`}>
      <figcaption className="flex items-center justify-between border-b border-line px-4 py-2.5 text-muted">
        <span>GET /developer</span>
        <span className="text-accent">200 OK</span>
      </figcaption>
      <pre className="whitespace-pre-wrap break-words p-4 leading-relaxed text-ink">{format(body)}</pre>
    </figure>
  );
}
