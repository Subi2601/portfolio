import { Reveal } from "@/components/reveal";

export function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <Reveal className="mb-12 max-w-2xl">
      <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3.5 py-1.5">
        <span className="h-1.5 w-1.5 rounded-full bg-primary" />
        <p className="font-mono text-[13px] font-medium uppercase tracking-[0.2em] text-primary">
          {eyebrow}
        </p>
      </span>
      <h2 className="mt-4 text-3xl font-semibold text-foreground sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-[15px] leading-relaxed text-muted">
          {description}
        </p>
      )}
    </Reveal>
  );
}
