import { PROFILE, ABOUT } from "../data.js";

export default function About() {
  return (
    <section id="about" className="section-container py-20 border-t border-border">
      <div className="grid md:grid-cols-[280px_1fr] gap-10">
        <div>
          <p className="eyebrow mb-3">01 · About</p>
          <h2 className="font-display font-bold text-2xl md:text-3xl tracking-tight">
            About me
          </h2>
        </div>

        <div>
          <p className="text-ink-900/70 text-base md:text-lg leading-relaxed max-w-2xl">
            {PROFILE.bio}
          </p>

          <dl className="mt-8 grid sm:grid-cols-3 gap-6 max-w-2xl">
            <div className="border-t border-border pt-3">
              <dt className="font-mono text-xs uppercase tracking-wide text-ink-900/40">
                Based in
              </dt>
              <dd className="mt-1 text-sm text-ink-900">{PROFILE.location}</dd>
            </div>
            <div className="border-t border-border pt-3">
              <dt className="font-mono text-xs uppercase tracking-wide text-ink-900/40">
                Email
              </dt>
              <dd className="mt-1 text-sm text-ink-900">
                <a href={`mailto:${PROFILE.email}`} className="hover:text-accent">
                  {PROFILE.email}
                </a>
              </dd>
            </div>
            <div className="border-t border-border pt-3">
              <dt className="font-mono text-xs uppercase tracking-wide text-ink-900/40">
                Phone
              </dt>
              <dd className="mt-1 text-sm text-ink-900">{PROFILE.phone}</dd>
            </div>
          </dl>

          {/* Skills / Abilities */}
          {ABOUT.skills?.length > 0 && (
            <div className="mt-10 max-w-2xl">
              <h3 className="font-mono text-xs uppercase tracking-wide text-ink-900/40 mb-3">
                Skills &amp; Abilities
              </h3>
              <div className="flex flex-wrap gap-2">
                {ABOUT.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full bg-accent-soft text-accent text-sm font-medium px-3.5 py-1.5"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Interests / Hobbies */}
          {ABOUT.interests?.length > 0 && (
            <div className="mt-8 max-w-2xl">
              <h3 className="font-mono text-xs uppercase tracking-wide text-ink-900/40 mb-3">
                Interests &amp; Hobbies
              </h3>
              <div className="flex flex-wrap gap-2">
                {ABOUT.interests.map((interest) => (
                  <span
                    key={interest}
                    className="rounded-full border border-border text-ink-900/70 text-sm font-medium px-3.5 py-1.5"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          )}

          <div className="mt-10 grid sm:grid-cols-2 gap-10 max-w-2xl">
            {/* Education */}
            {ABOUT.education?.length > 0 && (
              <div>
                <h3 className="font-mono text-xs uppercase tracking-wide text-ink-900/40 mb-3">
                  Education
                </h3>
                <ul className="space-y-4">
                  {ABOUT.education.map((edu) => (
                    <li key={edu.school} className="border-t border-border pt-3">
                      <p className="text-sm font-medium text-ink-900">{edu.school}</p>
                      <p className="text-sm text-ink-900/60 mt-0.5">{edu.detail}</p>
                      <p className="font-mono text-[11px] text-ink-900/40 mt-1">
                        {edu.date}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Organizations */}
            {ABOUT.organizations?.length > 0 && (
              <div>
                <h3 className="font-mono text-xs uppercase tracking-wide text-ink-900/40 mb-3">
                  Organizations
                </h3>
                <ul className="space-y-4">
                  {ABOUT.organizations.map((org) => (
                    <li key={org.name} className="border-t border-border pt-3">
                      <p className="text-sm font-medium text-ink-900">{org.name}</p>
                      <p className="text-sm text-ink-900/60 mt-0.5">{org.role}</p>
                      <p className="font-mono text-[11px] text-ink-900/40 mt-1">
                        {org.duration}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
