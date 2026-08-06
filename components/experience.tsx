import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { experience } from "@/lib/data";

export function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-6xl px-6 py-28">
      <SectionHeading eyebrow="Experience" title="Four companies, one thread: async APIs at scale." />

      <div className="relative border-l border-foreground/10 pl-8">
        {experience.map((role, i) => (
          <Reveal key={role.company} delay={i * 0.08} className="relative mb-14 last:mb-0">
            <span className="absolute -left-[41px] top-1.5 h-3 w-3 rounded-full border-2 border-background bg-primary" />

            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="text-lg font-semibold text-foreground">
                {role.role} <span className="text-muted">· {role.company}</span>
              </h3>
              <span className="font-mono text-xs text-muted">{role.duration}</span>
            </div>
            <p className="mt-1 font-mono text-xs uppercase tracking-wide text-secondary">
              {role.focus}
            </p>

            <ul className="mt-4 space-y-2">
              {role.bullets.map((bullet) => (
                <li key={bullet} className="flex gap-3 text-[15px] leading-relaxed text-muted">
                  <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-primary/70" />
                  {bullet}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
