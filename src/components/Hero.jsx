import { PROFILE } from "../data.js";

const ROLE_BADGES = [
  { label: "Ready to Learn", tone: "bg-data-soft text-data" },
  { label: "Ready to Adapt", tone: "bg-qa-soft text-qa" },
  { label: "Ready to make an impact", tone: "bg-web-soft text-web" },
];

export default function Hero() {
  return (
    <section id="top" className="section-container pt-20 pb-24 md:pt-28 md:pb-32">
      <p className="eyebrow mb-5">Valenzuela City, Philippines</p>

      <h1 className="font-display font-extrabold text-4xl md:text-6xl leading-[1.05] tracking-tight max-w-3xl">
        {PROFILE.name}
      </h1>

      <p className="mt-6 text-lg md:text-xl text-ink-900/70 max-w-2xl leading-relaxed">
        {PROFILE.tagline}
      </p>

      <div className="mt-8 flex flex-wrap gap-2.5">
        {ROLE_BADGES.map((r) => (
          <span
            key={r.label}
            className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium ${r.tone}`}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-current" />
            {r.label}
          </span>
        ))}
      </div>

      <div className="mt-10 flex flex-wrap gap-3">
        <a
          href="#projects"
          className="inline-flex items-center gap-2 rounded-md bg-accent text-white px-6 py-3 text-sm font-semibold hover:bg-accent-dark transition-colors"
        >
          View Projects
        </a>
        <a
          href={PROFILE.resumeFile}
          download
          className="inline-flex items-center gap-2 rounded-md border border-border px-6 py-3 text-sm font-semibold text-ink-900 hover:border-ink-900 transition-colors"
        >
          Download Resume
        </a>
        <a
          href="#contact"
          className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-ink-900/70 hover:text-ink-900 transition-colors"
        >
          Get in touch →
        </a>
      </div>
    </section>
  );
}
