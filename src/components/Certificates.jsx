import { FiExternalLink } from "react-icons/fi";
import { CERTIFICATES } from "../data.js";

export default function Certificates() {
  return (
    <section id="certificates" className="bg-surface-soft border-t border-border">
      <div className="section-container py-20">
        <div className="max-w-xl mb-10">
          <p className="eyebrow mb-3">04 · Certificates</p>
          <h2 className="font-display font-bold text-2xl md:text-3xl tracking-tight">
            Trainings, seminars &amp; certifications
          </h2>
        </div>

        {CERTIFICATES.length === 0 ? (
          <p className="text-sm text-ink-900/40 font-mono">No certificates added yet.</p>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {CERTIFICATES.map((c, i) => (
              <div
                key={i}
                className="bg-white border border-border rounded-xl overflow-hidden shadow-card flex flex-col"
              >
                {c.image && (
                  <div className="aspect-[4/3] bg-surface-soft border-b border-border overflow-hidden">
                    <img
                      src={c.image}
                      alt={c.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="font-display font-semibold text-base">{c.title}</h3>
                  <p className="font-mono text-[11px] text-ink-900/40 mt-1">{c.date}</p>
                  {c.description && (
                    <p className="text-sm text-ink-900/60 mt-3">{c.description}</p>
                  )}
                  {c.link && (
                    <a
                      href={c.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 mt-4 text-sm font-medium text-accent hover:underline"
                    >
                      View certificate <FiExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
