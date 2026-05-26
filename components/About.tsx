"use client";

import React from "react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

const principles = [
  {
    number: "01",
    title: "Build for real users.",
    description: "Focus on performance, usability, and production-grade code from day one — not just what looks good in screenshots.",
  },
  {
    number: "02",
    title: "Clean code, clean architecture.",
    description: "Readable, maintainable code with proper separation of concerns. The codebase should make sense six months later.",
  },
  {
    number: "03",
    title: "Ship, then iterate.",
    description: "Launch early, gather real feedback, improve continuously. Waiting for perfect is the enemy of useful.",
  },
];

const rows = [
  ["Role", "MERN Stack Developer"],
  ["Stack", "React · Node.js · MongoDB · Express"],
  ["Focus", "Full-Stack · React.js · Web Apps"],
  ["Based in", "Ahmedabad, India · GMT+5:30"],
];

const reachable = [
  { label: "Email", value: "butanijenil@gmail.com", href: "mailto:butanijenil@gmail.com" },
  { label: "GitHub", value: "github.com/jenilbutani-webdev", href: "https://github.com/jenilbutani-webdev" },
  { label: "LinkedIn", value: "linkedin.com/in/jenil-patel-440811313", href: "https://www.linkedin.com/in/jenil-patel-440811313/" },
];

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

function About() {
  return (
    <section
      id="about"
      className="px-6 py-24"
      style={{ borderBottom: "1px solid var(--border)" }}
    >
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mx-auto max-w-6xl"
      >
        {/* Eyebrow */}
        <motion.div
          variants={item}
          className="mb-12"
        >
          <div className="flex items-center gap-4">
            {/* Orange Dot */}
            <span className="h-2 w-2 rounded-full bg-orange-500" />

            {/* Left Text */}
            <span
              className="font-mono text-[12px] tracking-wide uppercase"
              style={{ color: "var(--text)" }}
            >
              02 / ABOUT
            </span>

            {/* Small Line */}
            <span
              className="h-px w-24"
              style={{ background: "var(--border)" }}
            />

            {/* Right Text */}
            <span
              className="font-mono text-[12px] tracking-wide uppercase"
              style={{ color: "var(--muted)" }}
            >
              BACKGROUND &amp; APPROACH
            </span>
          </div>
          <span
            className="mt-6 block h-px w-full"
            style={{ background: "var(--border)" }}
          />
        </motion.div>

        {/* Giant heading */}
        <motion.h2
          variants={item}
          className="mb-16 font-heading font-bold leading-[1.0] tracking-tight"
          style={{ fontSize: "clamp(2rem, 5.5vw, 4.2rem)", color: "var(--text)" }}
        >
          A developer building useful web software —{" "}
          <span style={{ color: "var(--text)" }}>
            with the full-stack depth that production actually requires.
          </span>
        </motion.h2>

        {/* Two columns */}
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
          {/* Left: bio */}
          <motion.div variants={item}>
            <div className="space-y-5 text-[15px] leading-relaxed" style={{ color: "var(--muted)" }}>
              <p>
                I&apos;m Jenil Butani — a MERN Stack developer focused on building clean,
                practical web products with React.js, Node.js, Express, and MongoDB.
              </p>
              <p>
                I build responsive frontends, reliable backend APIs, and complete product
                flows that stay maintainable after launch. My day-to-day work involves
                turning designs into working interfaces and turning requirements into working APIs.
              </p>
              <p>
                Long-term, I&apos;m focused on becoming a strong React.js and full-stack
                developer — shipping real-world applications with strong architecture,
                performance, and code quality.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <motion.a
                whileHover={{ scale: 1.02 }}
                href="/Jenil_Butani_Full_Stack_resume.pdf"
                download
                className="resume-btn-filled inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium transition rounded-full"
                style={{ background: "var(--text)", color: "var(--bg)" }}
              >
                Download résumé ↓
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.02 }}
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm transition rounded-full border border-[var(--border)] dark:border-neutral-700/60"
                style={{
                  // Is border approach se dark mode me thoda clear aur bright grayish overlay dikhega
                  borderColor: "currentColor",
                  opacity: 0.85,
                  color: "var(--text)"
                }}
              >
                Reach out
              </motion.a>
            </div>
          </motion.div>

          {/* Right: info card (Jinish ke premium layout jaisa same structural design) */}
          <motion.div
            variants={item}
            className="info-card p-8"
            style={{
              background: "var(--card)",
              border: "1px solid var(--border)",
            }}
          >
            {/* SECTION 1: CURRENTLY */}
            <p className="mb-6 font-mono text-[11px] uppercase tracking-widest text-neutral-500">
              Currently
            </p>

            <div className="flex flex-col">
              {rows.map(([label, value]) => (
                <div
                  key={label}
                  className="grid grid-cols-[100px_1fr] gap-4 py-3.5 border-b border-[var(--border)] items-baseline first:pt-0"
                >
                  <span className="font-mono text-[10px] uppercase tracking-wider text-neutral-500">
                    {label}
                  </span>
                  <span className="text-[14px] font-medium tracking-tight" style={{ color: "var(--text)" }}>
                    {value}
                  </span>
                </div>
              ))}
            </div>

            {/* SECTION 2: REACHABLE (Bina labels ke, clear list layout border ke sath) */}
            <p className="mt-10 mb-6 font-mono text-[11px] uppercase tracking-widest text-neutral-500">
              Reachable
            </p>

            <div className="flex flex-col">
              {reachable.map((link) => (
                <div
                  key={link.label}
                  className="border-b border-[var(--border)] py-3.5 last:border-0 first:pt-0"
                >
                  <a
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="block text-[14px] tracking-tight transition duration-200 hover:opacity-70"
                    style={{ color: "var(--text)" }}
                  >
                    {link.value}
                  </a>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Operating Principles — row list */}
        <motion.div variants={item} className="mt-24">
          <p className="mb-12 font-mono text-xs uppercase tracking-widest" style={{ color: "var(--text)" }}>
            Operating Principles
          </p>

          <div>
            {principles.map((p, i) => (
              <motion.div
                key={p.number}
                variants={item}
                className="grid grid-cols-1 gap-6 py-10 md:grid-cols-[60px_1fr_1fr]"
                style={{
                  borderTop: i === 0 ? "1px solid var(--border)" : "1px solid var(--border)",
                  borderBottom: i === principles.length - 1 ? "1px solid var(--border)" : "none",
                }}
              >
                <span className="font-mono text-xs" style={{ color: "var(--text)" }}>{p.number}</span>
                <h3
                  className="font-heading font-bold leading-tight"
                  style={{ fontSize: "clamp(1.5rem, 3vw, 2.2rem)", color: "var(--text)" }}
                >
                  {p.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
                  {p.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default About;