import { Reveal } from "@/components/reveal";
import { AnimatedCounter } from "@/components/animated-counter";
import { achievements } from "@/lib/data";

export function Achievements() {
  return (
    <section className="border-y border-foreground/[0.06] bg-foreground/[0.015]">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-6 py-16 sm:grid-cols-5">
        {achievements.map((stat, i) => (
          <Reveal key={stat.label} delay={i * 0.05} className="text-center">
            <p className="font-display text-3xl font-semibold text-gradient sm:text-4xl">
              <AnimatedCounter value={stat.value} />
            </p>
            <p className="mt-2 text-xs text-muted">{stat.label}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
