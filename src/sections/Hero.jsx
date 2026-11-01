import { profile } from '../data/content'

export default function Hero() {
  return (
    <section id="top" className="mx-auto max-w-5xl px-6 pb-16 pt-24 sm:pt-32">
      <p className="rise text-xl font-semibold text-accent dark:text-teal-400">{profile.title}</p>
      <h1 className="rise mt-3 text-6xl font-extrabold leading-none tracking-tighter sm:text-8xl" style={{ animationDelay: '.08s' }}>{profile.name}</h1>
      <p className="rise mt-8 max-w-2xl text-xl leading-relaxed text-neutral-600 dark:text-neutral-400" style={{ animationDelay: '.16s' }}>{profile.pitch}</p>
      <div className="rise mt-10 flex flex-wrap gap-3" style={{ animationDelay: '.24s' }}>
        <a href="#projects" className="btn-primary">View Projects</a>
        <a href="#contact" className="btn-ghost">Contact Me</a>
        <a href={profile.resume} download="Mrudula_V_Resume.pdf" className="btn-ghost">Download Resume</a>
        {profile.github && <a href={profile.github} target="_blank" rel="noopener noreferrer" className="btn-ghost">GitHub</a>}
        <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="btn-ghost">LinkedIn</a>
      </div>
    </section>
  )
}
