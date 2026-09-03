import { INTERNSHIP } from "../data.js";

export default function Internship() {
  return (
    <section id="internship" className="section-container py-20 border-t border-border">
      <div className="max-w-xl mb-10">
        <p className="eyebrow mb-3">05 · Internship</p>
        <h2 className="font-display font-bold text-2xl md:text-3xl tracking-tight">
          Internship experience
        </h2>
      </div>

      <div className="bg-white border border-border rounded-2xl shadow-card p-8 md:p-10">
        <div className="flex flex-wrap justify-between gap-6 pb-6 border-b border-border">
          <div>
            <h3 className="font-display font-bold text-xl">{INTERNSHIP.role}</h3>
            <p className="text-accent font-mono text-sm mt-1">{INTERNSHIP.company}</p>
          </div>
          <div className="text-right">
            <span className="font-mono text-xs uppercase tracking-wide text-ink-900/40">
              Duration
            </span>
            <p className="text-sm mt-1">
              {INTERNSHIP.duration} ({INTERNSHIP.startDate} – {INTERNSHIP.endDate})
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-3 gap-8 py-8 border-b border-border">
          <div>
            <span className="font-mono text-xs uppercase tracking-wide text-ink-900/40">
              Address
            </span>
            <p className="text-sm text-ink-900/70 mt-1">{INTERNSHIP.address}</p>
          </div>
          <div>
            <span className="font-mono text-xs uppercase tracking-wide text-ink-900/40">
              Industry
            </span>
            <p className="text-sm text-ink-900/70 mt-1">{INTERNSHIP.industry}</p>
          </div>
          <div>
            <span className="font-mono text-xs uppercase tracking-wide text-ink-900/40">
              Specialization
            </span>
            <ul className="text-sm text-ink-900/70 mt-1 space-y-0.5">
              {INTERNSHIP.specialization.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 grid md:grid-cols-2 gap-x-10 gap-y-8">
          {INTERNSHIP.responsibilities.map((group) => (
            <div key={group.group}>
              <h4 className="font-mono text-sm text-accent mb-2">{group.group}</h4>
              <ul className="space-y-1.5">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="text-sm text-ink-900/65 pl-4 relative leading-relaxed"
                  >
                    <span className="absolute left-0 text-accent">›</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
