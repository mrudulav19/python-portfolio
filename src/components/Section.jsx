// Shared layout: sticky heading on the left, content on the right (stacked on mobile).
export default function Section({ id, title, children }) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="border-t border-line">
      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-16 md:grid-cols-[13rem_1fr] md:gap-12 md:py-24">
        <h2 id={`${id}-title`} className="font-display text-2xl font-semibold tracking-tight md:sticky md:top-24 md:self-start">
          {title}
        </h2>
        <div>{children}</div>
      </div>
    </section>
  );
}
