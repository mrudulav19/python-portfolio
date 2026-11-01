import Section from '../components/Section'
import { profile } from '../data/content'

export default function Contact() {
  const rows = [
    ['Email', profile.email, `mailto:${profile.email}`],
    ['Phone', profile.phone, `tel:${profile.phone.replace(/\s/g, '')}`],
    ['LinkedIn', 'mrudulavmithula', profile.linkedin],
    ...(profile.github ? [['GitHub', profile.github.replace('https://', ''), profile.github]] : []),
  ]
  return (
    <Section id="contact" title="Contact">
      <p className="mb-8 max-w-2xl text-xl">Open to software developer roles. The quickest way to reach me is by email.</p>
      <dl className="grid gap-4 sm:grid-cols-2">
        {rows.map(([label, text, href]) => (
          <div key={label} className="card">
            <dt className="text-base text-neutral-500">{label}</dt>
            <dd className="mt-1"><a className="link break-all" href={href} {...(href.startsWith('http') && { target: '_blank', rel: 'noopener noreferrer' })}>{text}</a></dd>
          </div>
        ))}
      </dl>
      <div className="mt-8 flex flex-wrap gap-3">
        <a href={`mailto:${profile.email}`} className="btn-primary">Email Me</a>
        <a href={profile.resume} download="Mrudula_V_Resume.pdf" className="btn-ghost">Download Resume</a>
      </div>
    </Section>
  )
}
