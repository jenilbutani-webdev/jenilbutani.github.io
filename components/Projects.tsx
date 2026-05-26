"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

const GITHUB_USERNAME = "jenilbutani-webdev";

type Repo = {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  language: string | null;
  topics: string[];
  fork: boolean;
  stargazers_count: number;
  forks_count: number;
  updated_at: string;
};

const categoryLabel = (topics: string[] = [], lang: string | null) => {
  const t = topics.join(" ").toLowerCase();
  if (t.includes("web") || t.includes("frontend") || t.includes("react") || t.includes("html")) return "Web Development";
  if (t.includes("mobile") || t.includes("flutter") || t.includes("android")) return "Mobile Development";
  if (t.includes("ml") || t.includes("ai") || t.includes("machine")) return "AI & Machine Learning";
  if (lang === "Dart") return "Mobile Development";
  if (lang === "Python") return "Software Development";
  return "Software Development";
};

const formatDate = (d: string) =>
  new Intl.DateTimeFormat("en-US", { month: "numeric", day: "numeric", year: "numeric" }).format(new Date(d));

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
};
const item: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Projects = () => {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [visibleCount, setVisibleCount] = useState(6);

  useEffect(() => {
    fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=100`)
      .then((r) => { if (!r.ok) throw new Error(); return r.json(); })
      .then((data: Repo[]) => {
        setRepos(
          data.filter((r) => !r.fork)
            .sort((a, b) => b.stargazers_count - a.stargazers_count || new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime())
        );
      })
      .catch(() => setError("Could not load projects from GitHub."))
      .finally(() => setLoading(false));
  }, []);

  return (
    <section
      id="project"
      className="px-6 py-16"
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
          className="mb-12 flex items-center gap-2"
        >
          {/* Orange Dot */}
          <span className="h-2 w-2 rounded-full bg-orange-500" />

          {/* Left Text */}
          <span
            className="font-mono text-[12px] tracking-wide uppercase"
            style={{ color: "var(--text)" }}
          >
            04 / SELECTED WORK
          </span>

          {/* Small Line */}
          <span
            className="h-px w-24"
            style={{ background: "var(--border)" }}
          />

          {/* Right Link */}
          <a
            href={`https://github.com/${GITHUB_USERNAME}`}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-[12px] tracking-wide uppercase transition hover:opacity-80"
            style={{ color: "var(--muted)" }}
          >
            ★ {repos.length} — GITHUB.COM/{GITHUB_USERNAME.toUpperCase()}
          </a>
        </motion.div>

        {/* Heading */}
        <motion.h2
          variants={item}
          className="mb-20 font-heading font-bold leading-[1.0] tracking-tight"
          style={{ fontSize: "clamp(2rem, 5.5vw, 4rem)", color: "var(--text)" }}
        >
          A short list —{" "}
          <span style={{ color: "var(--text)" }}>
            the work I&apos;d actually walk a senior engineer through, not the long tail of side experiments.
          </span>
        </motion.h2>

        {loading && <p className="font-mono text-sm" style={{ color: "var(--text)" }}>Loading projects...</p>}
        {error && <p className="text-sm" style={{ color: "var(--muted)" }}>{error}</p>}

        {!loading && !error && (
          <>
            <motion.div variants={container}>
              {repos.slice(0, visibleCount).map((repo, i) => (
                <motion.div
                  key={repo.id}
                  variants={item}
                  className="group grid grid-cols-1 gap-4 py-8 md:grid-cols-[48px_80px_1fr_1px_160px]"
                  style={{
                    borderTop: "1px solid var(--border)",
                    borderBottom: i === Math.min(visibleCount, repos.length) - 1 ? "1px solid var(--border)" : "none",
                  }}
                >
                  {/* Number + date */}
                  <div className="flex flex-col gap-1">
                    <span className="font-mono text-xs" style={{ color: "var(--text)" }}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="font-mono text-xs" style={{ color: "var(--text)" }}>
                      {formatDate(repo.updated_at)}
                    </span>
                  </div>

                  <div className="hidden md:block" />

                  {/* Name + desc */}
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <a
                        href={repo.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-heading text-lg font-bold transition hover:opacity-100"
                        style={{ color: "var(--text)" }}
                      >
                        {repo.name}
                      </a>
                      <span className="font-mono text-sm" style={{ color: "var(--text)" }}>↗</span>
                      {repo.homepage && (
                        <a
                          href={repo.homepage}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-mono text-xs transition hover:opacity-80"
                          style={{ color: "var(--text)" }}
                        >
                          ↗ Live
                        </a>
                      )}
                    </div>
                    <p className="mt-1 text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
                      {repo.description || "No description available"}
                    </p>
                  </div>

                  {/* Vertical divider */}
                  <div
                    className="hidden self-stretch md:block"
                    style={{ width: "1px", background: "var(--border)" }}
                  />
                  {/* Category + language + stars */}
                  <div className="text-right">
                    <p className="font-mono text-xs uppercase tracking-wider" style={{ color: "var(--text)" }}>Category</p>
                    <p className="mt-1 text-xs" style={{ color: "var(--muted)" }}>{categoryLabel(repo.topics, repo.language)}</p>
                    {repo.language && (
                      <>
                        <p className="mt-3 font-mono text-xs uppercase tracking-wider" style={{ color: "var(--text)" }}>Primary</p>
                        <p className="mt-1 text-xs" style={{ color: "var(--muted)" }}>{repo.language}</p>
                      </>
                    )}
                    <div className="mt-3 flex items-center justify-end gap-3 font-mono text-xs" style={{ color: "var(--text)" }}>
                      <span>★ {repo.stargazers_count}</span>
                      <span>⑂ {repo.forks_count}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <div className="mt-8 flex justify-end">
              {visibleCount < repos.length ? (
                <button
                  type="button"
                  onClick={() => setVisibleCount((v) => v + 6)}
                  className="font-mono text-xs uppercase tracking-widest transition hover:opacity-80"
                  style={{ color: "var(--text)" }}
                >
                  LOAD MORE ↓
                </button>
              ) : (
                <a
                  href={`https://github.com/${GITHUB_USERNAME}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-xs uppercase tracking-widest transition hover:opacity-80"
                  style={{ color: "var(--text)" }}
                >
                  ALL PROJECTS ↗
                </a>
              )}
            </div>
          </>
        )}
      </motion.div>
    </section>
  );
};

export default Projects;