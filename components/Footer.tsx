"use client";

import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
  const siteLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Projects", href: "#project" },
    { label: "Contact", href: "#contact" },
  ];

  const elsewhereLinks = [
    { label: "GitHub", href: "https://github.com/jenilbutani-webdev" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/jenil-patel-440811313/" },
    { label: "Email", href: "mailto:butanijenil@gmail.com" },
  ];

  return (
    <footer
      className="px-6 pb-12 pt-16"
      style={{
        borderTop: "1px solid var(--border)",
        background: "var(--bg-2)",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55 }}
        className="mx-auto max-w-6xl"
      >
        <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
          <div className="col-span-2 md:col-span-1">
            <h3 className="mb-3 font-heading text-xl font-bold" style={{ color: "var(--text)" }}>
              Jenil.
            </h3>
            <p className="max-w-xs text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
              MERN Stack developer building clean, production-grade web products.
            </p>
          </div>

          <div>
            <p className="mb-4 font-mono text-xs uppercase tracking-widest" style={{ color: "var(--text)" }}>
              Site
            </p>
            <div className="flex flex-col gap-3">
              {siteLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm transition"
                  style={{ color: "var(--muted)" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "var(--muted)")}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="mb-4 font-mono text-xs uppercase tracking-widest" style={{ color: "var(--text)" }}>
              Elsewhere
            </p>
            <div className="flex flex-col gap-3">
              {elsewhereLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="text-sm transition"
                  style={{ color: "var(--muted)" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "var(--muted)")}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="mb-4 font-mono text-xs uppercase tracking-widest" style={{ color: "var(--text)" }}>
              Resources
            </p>
            <a
              href="/Jenil_Butani_Full_Stack_resume.pdf"
              download
              className="text-sm transition"
              style={{ color: "var(--muted)" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--muted)")}
            >
              Résumé
            </a>
          </div>
        </div>

        <div
          className="mt-12 flex flex-col justify-between gap-3 pt-8 md:flex-row"
          style={{ borderTop: "1px solid var(--border)" }}
        >
          <p className="font-mono text-xs" style={{ color: "var(--text)" }}>
            © {new Date().getFullYear()} Jenil Butani — Surat, IN
          </p>
          <div className="flex flex-wrap gap-6 font-mono text-xs" style={{ color: "var(--text)" }}>
            <span>Built with Next.js</span>
            <span>TypeScript</span>
            <span>Tailwind</span>
          </div>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;