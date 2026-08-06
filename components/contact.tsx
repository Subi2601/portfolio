"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Send } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { profile } from "@/lib/data";

const links = [
  { label: profile.email, href: `mailto:${profile.email}`, icon: Mail },
  { label: "LinkedIn", href: profile.linkedin, icon: Linkedin },
  { label: "GitHub", href: profile.github, icon: Github },
];

export function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio contact from ${name || "a visitor"}`);
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  }

  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-28">
      <SectionHeading
        eyebrow="Contact"
        title="Let's talk."
        description="This opens a draft in your own email client — nothing is sent from this page or stored anywhere."
      />

      <Reveal className="mb-10 flex flex-wrap gap-3">
        {links.map(({ label, href, icon: Icon }) => (
          <a
            key={label}
            href={href}
            target={href.startsWith("http") ? "_blank" : undefined}
            rel={href.startsWith("http") ? "noreferrer" : undefined}
            className="glass flex items-center gap-2 rounded-full px-4 py-2.5 text-sm text-muted transition-colors hover:text-foreground"
          >
            <Icon size={16} className="text-primary" />
            {label}
          </a>
        ))}
      </Reveal>

      <div className="max-w-xl">
        <Reveal delay={0.1}>
          <form onSubmit={handleSubmit} className="glass space-y-4 rounded-2xl p-6">
            <div>
              <label htmlFor="name" className="text-xs text-muted">
                Name
              </label>
              <input
                id="name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-1 w-full rounded-lg border border-border bg-foreground/[0.02] px-3 py-2 text-sm outline-none focus-visible:border-primary"
              />
            </div>
            <div>
              <label htmlFor="email" className="text-xs text-muted">
                Your email
              </label>
              <input
                id="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 w-full rounded-lg border border-border bg-foreground/[0.02] px-3 py-2 text-sm outline-none focus-visible:border-primary"
              />
            </div>
            <div>
              <label htmlFor="message" className="text-xs text-muted">
                Message
              </label>
              <textarea
                id="message"
                required
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="mt-1 w-full rounded-lg border border-border bg-foreground/[0.02] px-3 py-2 text-sm outline-none focus-visible:border-primary"
              />
            </div>
            <motion.button
              type="submit"
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-secondary px-6 py-2.5 text-sm font-medium text-white"
            >
              <Send size={15} /> Send message
            </motion.button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
