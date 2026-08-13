"use client";

import { motion } from "framer-motion";
import { ArrowDown, Download, Mail } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { profile } from "@/lib/data";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.09, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
};

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pt-24"
    >
      <div
        className="absolute inset-0 -z-10 bg-grid-glow"
        aria-hidden="true"
      />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="mx-auto max-w-3xl text-center"
      >
        <motion.div
          variants={item}
          className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-signal" />
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
            {profile.role} · {profile.tagline}
          </p>
        </motion.div>

        <motion.h1
          variants={item}
          className="mt-5 text-4xl font-semibold leading-[1.1] sm:text-6xl"
        >
          {profile.name}
        </motion.h1>

        <motion.p
          variants={item}
          className="mx-auto mt-6 max-w-xl text-[15px] leading-relaxed text-muted sm:text-base"
        >
          {profile.intro}
        </motion.p>

        <motion.div
          variants={item}
          className="mt-9 flex flex-wrap items-center justify-center gap-3"
        >
          <Button
            onClick={() =>
              document.querySelector("#client-projects")?.scrollIntoView({ behavior: "smooth" })
            }
          >
            View Projects
          </Button>
          <a
            href="/resume.pdf"
            download="subalakshmi_resume_2026.pdf"
            className={cn(buttonVariants({ variant: "outline" }), "inline-flex items-center gap-2")}
          >
            <Download size={16} /> Download Resume
          </a>
          <Button
            variant="ghost"
            onClick={() =>
              document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })
            }
          >
            <Mail size={16} /> Contact Me
          </Button>
        </motion.div>
      </motion.div>

      <motion.a
        href="#about"
        variants={item}
        initial="hidden"
        animate="show"
        className="absolute bottom-8 text-muted transition-colors hover:text-foreground"
        aria-label="Scroll to About section"
      >
        <ArrowDown size={20} className="animate-bounce motion-reduce:animate-none" />
      </motion.a>
    </section>
  );
}
