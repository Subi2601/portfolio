import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { Badge } from "@/components/ui/badge";

const focusAreas = [
  { label: "Data Science", highlight: true },
  { label: "AI/ML", highlight: true },
  { label: "API Design" },
  { label: "Event-Driven Systems" },
  { label: "Cloud Deployment" },
];

export function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-28">
      <SectionHeading
        eyebrow="About"
        title="Backend-first, moving toward data."
      />

      <div className="grid gap-10 md:grid-cols-[1.3fr_1fr]">
        <Reveal delay={0.05} className="space-y-4 text-[15px] leading-relaxed text-muted">
          <p>
            I&apos;m a backend engineer with 4.5+ years of experience building
            systems that can&apos;t afford to break — financial wallets, a
            vehicle-tracking platform, blockchain transfers. My main tools are
            FastAPI, PostgreSQL, RabbitMQ, and Celery.
          </p>
          <p>
            I&apos;m now moving into data science. I&apos;ve already used the
            Claude API to automate real work in production, and I&apos;m
            building on that with Pandas, NumPy, and statistics to work more
            deeply with data.
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="glass rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40">
            <p className="font-mono text-xs uppercase tracking-widest text-primary">
              Current focus
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {focusAreas.map((area) => (
                <Badge key={area.label} highlight={area.highlight}>
                  {area.label}
                </Badge>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
