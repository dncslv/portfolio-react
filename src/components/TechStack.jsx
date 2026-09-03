import {
  SiXampp,
  SiApachenetbeanside,
  SiNodedotjs,
  SiPostman,
  SiGoogleappsscript,
  SiHtml5,
  SiJavascript,
  SiTypescript,
  SiPhp,
  SiPython,
  SiReact,
  SiReactrouter,
  SiBootstrap,
  SiTailwindcss,
  SiIonic,
  SiVite,
  SiExpress,
  SiAxios,
  SiNpm,
  SiDjango,
  SiMysql,
  SiPostgresql,
  SiMongodb,
  SiFirebase,
  SiPhpmyadmin,
  SiPandas,
  SiChartdotjs,
  SiFigma,
  SiBlender,
  SiDiagramsdotnet,
  SiJira,
  SiTrello,
  SiGit,
  SiGithub,
  SiEslint,
  SiPrettier,
} from "react-icons/si";
import { TECH_STACK } from "../data.js";

const ICONS = {
  SiXampp,
  SiApachenetbeanside,
  SiNodedotjs,
  SiPostman,
  SiGoogleappsscript,
  SiHtml5,
  SiJavascript,
  SiTypescript,
  SiPhp,
  SiPython,
  SiReact,
  SiReactrouter,
  SiBootstrap,
  SiTailwindcss,
  SiIonic,
  SiVite,
  SiExpress,
  SiAxios,
  SiNpm,
  SiDjango,
  SiMysql,
  SiPostgresql,
  SiMongodb,
  SiFirebase,
  SiPhpmyadmin,
  SiPandas,
  SiChartdotjs,
  SiFigma,
  SiBlender,
  SiDiagramsdotnet,
  SiJira,
  SiTrello,
  SiGit,
  SiGithub,
  SiEslint,
  SiPrettier,
};

function TechIcon({ name, icon }) {
  const Icon = icon ? ICONS[icon] : null;
  if (Icon) {
    return <Icon className="w-4 h-4 text-accent shrink-0" />;
  }
  return (
    <span className="w-4 h-4 rounded-[4px] bg-accent-soft text-accent text-[9px] font-mono font-semibold flex items-center justify-center shrink-0">
      {name.slice(0, 2).toUpperCase()}
    </span>
  );
}

export default function TechStack() {
  return (
    <section id="stack" className="bg-surface-soft border-t border-border">
      <div className="section-container py-20">
        <div className="max-w-xl mb-12">
          <p className="eyebrow mb-3">02 · Stack</p>
          <h2 className="font-display font-bold text-2xl md:text-3xl tracking-tight">
            Tools &amp; technologies
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-10">
          {TECH_STACK.map((group) => (
            <div key={group.group}>
              <h3 className="font-mono text-xs uppercase tracking-wide text-ink-900/40 mb-3">
                {group.group}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item.name}
                    className="inline-flex items-center gap-2 rounded-full bg-white border border-border px-3 py-1.5 text-xs font-medium text-ink-900/80 hover:border-accent hover:text-ink-900 transition-colors"
                  >
                    <TechIcon name={item.name} icon={item.icon} />
                    {item.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
