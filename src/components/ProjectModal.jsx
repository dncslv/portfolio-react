import { useEffect, useState } from "react";
import { FiX, FiChevronLeft, FiChevronRight, FiExternalLink } from "react-icons/fi";

const TYPE_LABEL = {
  software: "Software",
  figma: "Figma",
  multimedia: "Multimedia",
  hardware: "Hardware",
};

export default function ProjectModal({ project, onClose }) {
  const [index, setIndex] = useState(0);
  const images =
    project.images && project.images.length
      ? project.images
      : project.cover
      ? [project.cover]
      : [];

  useEffect(() => {
    setIndex(0);
  }, [project]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  const prev = () => setIndex((i) => (i - 1 + images.length) % images.length);
  const next = () => setIndex((i) => (i + 1) % images.length);

  return (
    <div
      className="fixed inset-0 z-50 bg-ink-900/60 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[88vh] overflow-y-auto shadow-2xl relative">
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-white/90 border border-border flex items-center justify-center hover:bg-surface-muted"
        >
          <FiX />
        </button>

        <div className="relative aspect-[16/9] bg-ink-900">
          {images.length ? (
            <>
              <div
                className="flex h-full transition-transform duration-300"
                style={{ transform: `translateX(-${index * 100}%)` }}
              >
                {images.map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt={`${project.name} screenshot ${i + 1}`}
                    className="w-full h-full object-cover flex-shrink-0"
                  />
                ))}
              </div>
              {images.length > 1 && (
                <>
                  <button
                    onClick={prev}
                    aria-label="Previous image"
                    className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/90 border border-border flex items-center justify-center"
                  >
                    <FiChevronLeft />
                  </button>
                  <button
                    onClick={next}
                    aria-label="Next image"
                    className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/90 border border-border flex items-center justify-center"
                  >
                    <FiChevronRight />
                  </button>
                  <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-1.5">
                    {images.map((_, i) => (
                      <span
                        key={i}
                        className={`w-1.5 h-1.5 rounded-full ${
                          i === index ? "bg-white" : "bg-white/40"
                        }`}
                      />
                    ))}
                  </div>
                </>
              )}
            </>
          ) : (
            <div className="w-full h-full flex items-center justify-center text-white/40 text-xs font-mono text-center px-10">
              Add screenshots for this project in public/images/projects/ and
              list them in src/data.js — add as many as you like.
            </div>
          )}
        </div>

        <div className="p-8">
          <p className="eyebrow mb-2">
            {project.category} · {TYPE_LABEL[project.type]}
          </p>
          <h3 className="font-display font-bold text-2xl mb-6">{project.name}</h3>

          {project.overview && (
            <Field label="Overview" text={project.overview} />
          )}
          {project.problem && <Field label="Problem" text={project.problem} />}
          {project.solution && <Field label="Solution" text={project.solution} />}

          {project.tech && project.tech.length > 0 && (
            <div className="mb-6">
              <span className="font-mono text-xs uppercase tracking-wide text-ink-900/40">
                Technologies Used
              </span>
              <div className="flex flex-wrap gap-2 mt-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-full bg-surface-muted px-3 py-1 text-xs font-medium text-ink-900/70"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          )}

          {project.links && (
            <div className="flex flex-wrap gap-3 mt-2">
              {project.links.figma && (
                <LinkBtn href={project.links.figma} label="View in Figma" />
              )}
              {project.links.live && (
                <LinkBtn href={project.links.live} label="View Live" />
              )}
              {project.links.github && (
                <LinkBtn href={project.links.github} label="View Code" />
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function Field({ label, text }) {
  return (
    <div className="mb-5">
      <span className="font-mono text-xs uppercase tracking-wide text-ink-900/40">
        {label}
      </span>
      <p className="mt-1.5 text-ink-900/75 text-sm leading-relaxed">{text}</p>
    </div>
  );
}

function LinkBtn({ href, label }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1.5 rounded-md border border-border px-4 py-2 text-sm font-medium text-ink-900 hover:border-accent hover:text-accent transition-colors"
    >
      {label} <FiExternalLink className="w-3.5 h-3.5" />
    </a>
  );
}
