import { profile } from "../data/content";
import Icon from "./Icon";
import ApiPanel from "./ApiPanel";

const step = (i) => ({ "--i": i });

export default function Hero() {
  return (
    <section id="top" aria-labelledby="hero-title" className="mx-auto max-w-6xl px-6 pb-20 pt-16 md:pb-28 md:pt-24">
      <div className="grid items-center gap-14 lg:grid-cols-[1.15fr_1fr]">
        <div>
          <h1 id="hero-title" style={step(0)} className="rise font-display text-5xl font-bold tracking-tight sm:text-7xl">
            {profile.name}
          </h1>
          <p style={step(1)} className="rise mt-3 font-display text-2xl font-medium text-accent sm:text-3xl">{profile.title}</p>
          <p style={step(2)} className="rise mt-6 max-w-xl text-lg text-muted">{profile.valueProp}</p>

          <div style={step(3)} className="rise mt-8 flex flex-wrap gap-3">
            <a href="#projects" className="btn btn-primary">View Projects</a>
            <a href="#contact" className="btn btn-secondary">Contact Me</a>
            {profile.github && (
              <a href={profile.github} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                GitHub<span className="sr-only"> (opens in a new tab)</span>
              </a>
            )}
            <a href={profile.resume} download="Mrudula_V_Resume.pdf" className="btn btn-secondary">
              <Icon name="download" />Download Resume
            </a>
          </div>

          <p style={step(4)} className="rise mt-6 text-sm text-muted">
            {profile.location}. Find me on{" "}
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="text-link">
              LinkedIn<span className="sr-only"> (opens in a new tab)</span>
            </a>.
          </p>
        </div>

        <ApiPanel className="rise" />
      </div>
    </section>
  );
}
