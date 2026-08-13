"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#client-projects", label: "Client Projects" },
  { href: "#personal-projects", label: "Personal Projects" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-foreground/[0.06] bg-background/70 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a href="#top" className="group flex items-center" aria-label="Home">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-secondary font-display text-sm font-bold text-white shadow-[0_0_20px_-4px_rgb(var(--color-primary)/0.7)] transition-transform duration-300 group-hover:scale-105 group-hover:rotate-3">
            SV
          </span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-sm text-muted transition-[color] duration-300 hover:text-transparent"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <ThemeToggle />

          <Button
            size="sm"
            className="hidden md:inline-flex"
            onClick={() => {
              document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Contact Me
          </Button>

          <button
            className="text-foreground md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden border-t border-foreground/[0.06] md:hidden"
          >
            <ul className="flex flex-col gap-4 px-6 pt-4 pb-6">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-sm text-muted transition-[color] duration-300 hover:text-transparent"
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
