import Section from "./Section";
import Icon from "./Icon";
import { profile } from "../data/content";

function Row({ label, children }) {
  return (
    <div className="grid gap-1 py-4 sm:grid-cols-[8rem_1fr]">
      <dt className="text-sm text-muted">{label}</dt>
      <dd className="font-medium">{children}</dd>
    </div>
  );
}

export default function Contact() {
  return (
    <Section id="contact" title="Contact">
      <p className="max-w-prose text-lg">The quickest way to reach me is by email. You can also connect on LinkedIn or call.</p>

      <dl className="mt-8 divide-y divide-line border-y border-line">
        <Row label="Email"><a href={`mailto:${profile.email}`} className="text-link">{profile.email}</a></Row>
        <Row label="Phone"><a href={`tel:${profile.phoneHref}`} className="text-link">{profile.phone}</a></Row>
        <Row label="LinkedIn">
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="text-link">
            linkedin.com/in/mrudulavmithula<span className="sr-only"> (opens in a new tab)</span>
          </a>
        </Row>
        {profile.github && (
          <Row label="GitHub">
            <a href={profile.github} target="_blank" rel="noopener noreferrer" className="text-link">
              {profile.github.replace(/^https?:\/\//, "")}<span className="sr-only"> (opens in a new tab)</span>
            </a>
          </Row>
        )}
        <Row label="Location">{profile.location}</Row>
      </dl>

      <div className="mt-8 flex flex-wrap gap-3">
        <a href={`mailto:${profile.email}`} className="btn btn-primary"><Icon name="mail" />Email Me</a>
        <a href={profile.resume} download="Mrudula_V_Resume.pdf" className="btn btn-secondary"><Icon name="download" />Download Resume</a>
      </div>
    </Section>
  );
}
