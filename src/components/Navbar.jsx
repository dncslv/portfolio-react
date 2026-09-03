import { useState } from "react";
import { PROFILE } from "../data.js";

const LINKS = [
  { href: "#about", label: "About" },
  { href: "#stack", label: "Stack" },
  { href: "#projects", label: "Projects" },
  { href: "#certificates", label: "Certificates" },
  { href: "#internship", label: "Internship" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-surface/90 backdrop-blur border-b border-border">
      <div className="section-container flex items-center justify-between h-16">
        <a href="#top" className="font-display font-bold text-lg tracking-tight">
          DRS<span className="text-accent">.</span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-ink-900/70 hover:text-ink-900 transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href={PROFILE.resumeFile}
          download
          className="hidden md:inline-flex items-center gap-2 rounded-md bg-ink-900 text-white text-sm font-medium px-4 py-2 hover:bg-accent transition-colors"
        >
          Download Resume
        </a>

        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          <span className="w-5 h-0.5 bg-ink-900" />
          <span className="w-5 h-0.5 bg-ink-900" />
          <span className="w-5 h-0.5 bg-ink-900" />
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-border bg-surface px-6 py-4 flex flex-col gap-4">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-sm text-ink-900/80"
            >
              {l.label}
            </a>
          ))}
          <a
            href={PROFILE.resumeFile}
            download
            className="inline-flex items-center justify-center gap-2 rounded-md bg-ink-900 text-white text-sm font-medium px-4 py-2"
          >
            Download Resume
          </a>
        </div>
      )}
    </header>
  );
}
