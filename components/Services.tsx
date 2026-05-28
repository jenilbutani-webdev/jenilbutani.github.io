"use client";

import React from "react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

const capabilities = [
  {
    id: "01",
    title: "Frontend Development",
    description: "Building responsive and interactive user interfaces using React.js and Next.js with a strong focus on usability and performance.",
    technologies: ["React", "Next.js", "TypeScript", "Tailwind", "Framer Motion"],
    signals: ["SPA / SSR applications", "Responsive UI systems", "Component architecture"],
  },
  {
    id: "02",
    title: "Backend Development",
    description: "Building secure and scalable backend systems using Node.js, Express, and MongoDB. RESTful APIs and efficient server-side logic.",
    technologies: ["Node.js", "Express", "MongoDB", "PostgreSQL", "REST API"],
    signals: ["RESTful API design", "JWT Auth & RBAC", "Real-time backends"],
  },
  {
    id: "03",
    title: "Full-Stack Delivery",
    description: "End-to-end application development — from database schema to deployed UI — with modern frameworks and scalable architectures.",
    technologies: ["MERN Stack", "Next.js", "Vercel", "Git"],
    signals: ["End-to-end products", "Type-safe API contracts", "CI/CD pipelines"],
  },
  {
    id: "04",
    title: "Tools & Workflow",
    description: "Practical project setup, version control, deployment decisions, and tooling that keeps web products easy to ship and maintain.",
    technologies: ["Git", "VS Code", "Postman", "Figma", "Linux"],
    signals: ["Clean git history", "API testing workflows", "Design-to-code"],
  },
];

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

const Service = () => {
  return (
    <section
      id="service"
      className="px-6 py-20"
    // style={{ borderBottom: "1px solid var(--border)" }}
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
          <div className="flex items-center gap-2">
            {/* Orange Dot */}
            <span className="h-2 w-2 rounded-full bg-orange-500" />

            {/* Left Text */}
            <span
              className="font-mono text-[12px] tracking-wide uppercase"
              style={{ color: "var(--text)" }}
            >
              03 / CAPABILITIES
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
              WHAT I DO, IN DETAIL
            </span>
          </div>
          <span
            className="mt-6 block h-px w-full"
            style={{ background: "var(--border)" }}
          />
        </motion.div>
        {/* Full-width heading */}
        <motion.h2
          variants={item}
          className="mb-20 font-heading font-bold leading-[1.0] tracking-tight"
          style={{ fontSize: "clamp(2rem, 5.5vw, 4rem)", color: "var(--text)" }}
        >
          Four domains I&apos;m useful in —{" "}
          <span style={{ color: "var(--text)" }}>
            not a list of every framework I&apos;ve touched, only the things I&apos;d put my name on in production.
          </span>
        </motion.h2>

        {/* Rows */}
        <motion.div variants={container}>
          {capabilities.map((cap, i) => (
            <motion.div
              key={cap.id}
              variants={item}
              className="grid grid-cols-1 gap-8 py-12 md:grid-cols-[48px_1fr_1px_200px]"
              style={{
                borderTop: "1px solid var(--border)",
                borderBottom: i === capabilities.length - 1 ? "1px solid var(--border)" : "none",
              }}
            >
              {/* Number */}
              <div className="flex flex-col items-start gap-2 pt-1">
                <span className="font-mono text-xs" style={{ color: "var(--text)" }}>{cap.id}</span>
                <div className="flex flex-col gap-1 pt-2">
                  <span className="h-1 w-1 rounded-full" style={{ background: "var(--border)" }} />
                  <span className="h-1 w-1 rounded-full" style={{ background: "var(--border)" }} />
                  <span className="h-1 w-1 rounded-full" style={{ background: "var(--border)" }} />
                </div>
              </div>

              {/* Title + desc + tags */}
              <div>
                <h3
                  className="mb-3 font-heading font-bold"
                  style={{ fontSize: "clamp(1.3rem, 2.5vw, 1.75rem)", color: "var(--text)" }}
                >
                  {cap.title}
                </h3>
                <p className="mb-5 max-w-lg text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
                  {cap.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {cap.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="tag-pill px-2.5 py-1 font-mono text-xs"
                      style={{
                        border: "1px solid var(--border)",
                        color: "var(--muted)",
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Vertical divider */}
              <div
                className="hidden self-stretch md:block"
                style={{ width: "1px", background: "var(--border)" }}
              />
              {/* Signals */}
              <div>
                <p className="mb-3 font-mono text-xs uppercase tracking-widest" style={{ color: "var(--text)" }}>
                  Signals
                </p>
                <ul className="space-y-2">
                  {cap.signals.map((signal) => (
                    <li key={signal} className="text-xs leading-relaxed" style={{ color: "var(--muted)" }}>
                      {signal}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Service;