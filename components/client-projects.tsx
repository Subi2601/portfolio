import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { Badge } from "@/components/ui/badge";
import { clientProjects } from "@/lib/data";

export function ClientProjects() {
  return (
    <section id="client-projects" className="mx-auto max-w-6xl px-6 py-28">
      <SectionHeading
        eyebrow="Client Projects"
        title="What I've shipped for clients."
        description="Real work, real outcomes — no placeholder cards."
      />

      <div className="grid gap-6 sm:grid-cols-2">
        {clientProjects.map((project, i) => (
          <Reveal key={project.title} delay={i * 0.07}>
            <article className="glass group h-full rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40">
              <p className="font-mono text-[11px] uppercase tracking-widest text-primary">
                {project.type}
              </p>
              <h3 className="mt-2 text-lg font-semibold text-foreground">
                {project.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {project.description}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <Badge key={tech}>{tech}</Badge>
                ))}
              </div>

              <ul className="mt-5 space-y-1.5 border-t border-foreground/10 pt-4">
                {project.outcomes.map((outcome) => (
                  <li
                    key={outcome}
                    className="flex items-center gap-2 text-[13px] font-mono text-secondary"
                  >
                    <span className="h-1 w-1 rounded-full bg-secondary" />
                    {outcome}
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
