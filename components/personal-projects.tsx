"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, ExternalLink } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { personalProjects, type PersonalProject } from "@/lib/data";

function ProjectFaq({ faqs }: { faqs: PersonalProject["faqs"] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  if (faqs.length === 0) return null;

  return (
    <div className="mt-5 divide-y divide-border border-t border-border">
      {faqs.map((faq, i) => {
        const open = openIndex === i;
        return (
          <div key={faq.question}>
            <button
              onClick={() => setOpenIndex(open ? null : i)}
              aria-expanded={open}
              className="flex w-full items-center justify-between gap-3 py-3 text-left text-sm font-medium text-foreground"
            >
              {faq.question}
              <ChevronDown
                size={16}
                className={cn(
                  "shrink-0 text-muted transition-transform duration-300",
                  open && "rotate-180"
                )}
              />
            </button>
            <AnimatePresence initial={false}>
              {open && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                  className="overflow-hidden"
                >
                  <p className="pb-4 text-sm leading-relaxed text-muted">
                    {faq.answer}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}

export function PersonalProjects() {
  return (
    <section id="personal-projects" className="mx-auto max-w-6xl px-6 py-28">
      <SectionHeading
        eyebrow="Personal Projects"
        title="Built on my own time, for my own reasons."
        description="No client brief here — just problems I wanted to solve, and what I learned solving them."
      />

      <div className="grid gap-6 lg:grid-cols-2">
        {personalProjects.map((project, i) => (
          <Reveal key={project.title} delay={i * 0.07}>
            <article className="glass h-full rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-secondary/40">
              <h3 className="text-lg font-semibold text-foreground">
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

              <ProjectFaq faqs={project.faqs} />

              {project.sampleUrl && (
                <a
                  href={project.sampleUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-secondary hover:text-foreground"
                >
                  {project.sampleLabel ?? "View Sample Output"}
                  <ExternalLink size={14} />
                </a>
              )}
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
