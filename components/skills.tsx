import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { Badge } from "@/components/ui/badge";
import { skillGroups } from "@/lib/data";

export function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-6 py-28">
      <SectionHeading
        eyebrow="Skills"
        title="Tools I reach for, grouped by what they're for."
        description="No proficiency bars — a percentage on a skill chip is a number nobody can actually back up in an interview. These are the tools shipped in production, grouped by role."
      />

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group, i) => (
          <Reveal key={group.category} delay={i * 0.06}>
            <div className="glass h-full rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-secondary/40">
              <h3 className="font-mono text-xs uppercase tracking-widest text-secondary">
                {group.category}
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <Badge key={skill}>{skill}</Badge>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
