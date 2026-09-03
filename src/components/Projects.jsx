import { useState } from "react";
import { PROJECTS } from "../data.js";
import ProjectModal from "./ProjectModal.jsx";

const CATEGORIES = ["All", "Academic", "Client-Based", "Personal", "Hardware"];

const CATEGORY_TONE = {
  Academic: "bg-surface-muted text-ink-900/70",
  "Client-Based": "bg-accent-soft text-accent",
  Personal: "bg-data-soft text-data",
  Hardware: "bg-qa-soft text-qa",
};

const TYPE_LABEL = {
  software: "Software",
  figma: "Figma",
  multimedia: "Multimedia",
  hardware: "Hardware",
};

export default function Projects() {
  const [active, setActive] = useState("All");
  const [selected, setSelected] = useState(null);

  const list = PROJECTS.filter((p) => active === "All" || p.category === active);

  return (
    <section id="projects" className="section-container py-20 border-t border-border">
      <div className="max-w-xl mb-10">
        <p className="eyebrow mb-3">03 · Projects</p>
        <h2 className="font-display font-bold text-2xl md:text-3xl tracking-tight">
          Projects
        </h2>
      </div>

      <div className="flex flex-wrap gap-2 mb-10">
        {CATEGORIES.map((c) => (
          <button
            key={c}
            onClick={() => setActive(c)}
            className={`rounded-full px-4 py-2 text-sm font-medium border transition-colors ${
              active === c
                ? "bg-ink-900 text-white border-ink-900"
                : "border-border text-ink-900/60 hover:border-ink-900 hover:text-ink-900"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      {list.length === 0 ? (
        <p className="text-sm text-ink-900/40 font-mono">No projects in this category yet.</p>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {list.map((p) => {
            const thumb = p.cover || (p.images && p.images[0]);
            return (
              <button
                key={p.id}
                onClick={() => setSelected(p)}
                className="text-left bg-white border border-border rounded-xl overflow-hidden shadow-card hover:shadow-cardHover hover:-translate-y-0.5 transition-all"
              >
                <div className="aspect-[16/10] bg-surface-muted relative flex items-center justify-center overflow-hidden">
                  <span
                    className={`absolute top-3 left-3 rounded-full px-2.5 py-1 text-[11px] font-mono ${
                      CATEGORY_TONE[p.category] || "bg-surface-muted text-ink-900/60"
                    }`}
                  >
                    {TYPE_LABEL[p.type]}
                  </span>
                  {thumb ? (
                    <img
                      src={thumb}
                      alt={`${p.name} preview`}
                      loading="lazy"
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <span className="text-[11px] font-mono text-ink-900/30 text-center px-8">
                      Add a screenshot in public/images/projects/
                    </span>
                  )}
                </div>
                <div className="p-5">
                  <span className="font-mono text-[11px] uppercase tracking-wide text-ink-900/40">
                    {p.category}
                  </span>
                  <h3 className="font-display font-semibold text-base mt-1">{p.name}</h3>
                  <p className="mt-1.5 text-sm text-ink-900/60 line-clamp-2">{p.overview}</p>
                  {p.images && p.images.length > 1 && (
                    <span className="mt-2 inline-block text-[11px] font-mono text-ink-900/35">
                      {p.images.length} images
                    </span>
                  )}
                </div>
              </button>
            );
          })}
        </div>
      )}

      {selected && (
        <ProjectModal project={selected} onClose={() => setSelected(null)} />
      )}
    </section>
  );
}
