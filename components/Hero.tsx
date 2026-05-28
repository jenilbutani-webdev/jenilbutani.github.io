"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Hero = () => {
  const [time, setTime] = useState("");

  useEffect(() => {
    const update = () => {
      setTime(
        new Intl.DateTimeFormat("en-IN", {
          timeZone: "Asia/Kolkata",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false,
        }).format(new Date())
      );
    };
    update();
    const t = setInterval(update, 1000);
    return () => clearInterval(t);
  }, []);

  const socials = [
    { icon: <FaGithub size={12} />, label: "GITHUB", href: "https://github.com/jenilbutani-webdev" },
    { icon: <FaLinkedin size={12} />, label: "LINKEDIN", href: "https://www.linkedin.com/in/jenil-patel-440811313/" },
    { icon: <FaEnvelope size={12} />, label: "EMAIL", href: "mailto:butanijenil@gmail.com" },
  ];

  return (
    <section
      id="home"
      className="flex min-h-screen flex-col justify-between px-6 pb-10 pt-20"
    // style={{ borderBottom: "1px solid var(--border)" }}
    >
      {/* Top bar */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mx-auto flex w-full max-w-6xl items-center justify-between"
      >
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 animate-pulse rounded-full bg-orange-500" />
          <span className="font-mono text-xs" style={{ color: "var(--muted)" }}>
            AVAILABLE FOR SELECT WORK
          </span>
        </div>
        <p className="font-mono text-xs" style={{ color: "var(--muted)" }}>
          SURAT, IN&nbsp;&nbsp;/&nbsp;&nbsp;{time} IST
        </p>
      </motion.div>

      {/* Main 2-col */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="mx-auto flex w-full max-w-6xl flex-1 items-start gap-8 pt-12 lg:pt-16"
      >
        {/* Left */}
        <div className="flex-1">
          <div className="mb-6 flex items-center gap-4">
            <span className="font-mono text-xs" style={{ color: "var(--text)" }}>
              01 / INDEX
            </span>
            <span className="h-px w-24" style={{ background: "var(--border)" }} />
            <span className="font-mono text-xs" style={{ color: "var(--text)" }}>
              JENIL BUTANI
            </span>
          </div>

          <h1
            className="font-heading font-bold leading-[0.92] tracking-tight"
            style={{
              fontSize: "clamp(3rem, 8vw, 6.5rem)",
              color: "var(--text)",
            }}
          >
            MERN Stack
            <br />
            <span style={{ color: "#737373" }}>&amp;</span> React.js
            <br />
            for modern
            <br />
            web products<span style={{ color: "#f59e0b" }}>.</span>
          </h1>

          <p
            className="mt-8 max-w-sm text-sm leading-relaxed"
            style={{ color: "var(--muted)" }}
          >
            I build full-stack web products with React, Node.js, Next.js and MongoDB — focused on clean
            architecture and real-world performance.
          </p>

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
              className="inline-flex items-center gap-2 px-5 py-2.5 text-sm transition rounded-full"
              style={{
                border: "1px solid var(--border)",
                color: "var(--text)",
              }}
            >
              Get in touch ↗
            </motion.a>
          </div>
        </div>

        {/* Right: terminal box */}
        <div className="hidden lg:flex lg:w-[340px] lg:flex-col">
          <div
            className="flex flex-col"
            style={{
              minHeight: "420px",
              background: "var(--card)",
              border: "1px solid var(--border)",
            }}
          >
            <div
              className="flex items-center justify-between px-4 py-2"
              style={{ borderBottom: "1px solid var(--border)" }}
            >
              <span className="font-mono text-xs" style={{ color: "var(--faint)" }}>
                ./PORTFOLIO.TSX
              </span>
              <div className="flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
                <span className="font-mono text-xs text-green-500">LIVE</span>
              </div>
            </div>

            <div className="flex-1 p-4">
              <div className="space-y-2 font-mono text-xs" style={{ color: "var(--text)" }}>
                <p>
                  <span style={{ color: "var(--muted)" }}>const</span>{" "}
                  <span style={{ color: "var(--text)" }}>jenil</span>{" "}
                  <span style={{ color: "var(--muted)" }}>=</span> {"{"}
                </p>
                <p className="pl-4">
                  <span style={{ color: "var(--text)" }}>name</span>:{" "}
                  <span style={{ color: "var(--muted)" }}>&quot;Jenil Butani&quot;</span>,
                </p>
                <p className="pl-4">
                  <span style={{ color: "var(--text)" }}>role</span>:{" "}
                  <span style={{ color: "var(--muted)" }}>&quot;MERN Stack Dev&quot;</span>,
                </p>
                <p className="pl-4">
                  <span style={{ color: "var(--text)" }}>stack</span>: [
                </p>
                <p className="pl-8">
                  <span style={{ color: "var(--muted)" }}>&quot;React&quot;</span>,{" "}
                  <span style={{ color: "var(--muted)" }}>&quot;Node.js&quot;</span>,
                </p>
                <p className="pl-8">
                  <span style={{ color: "var(--muted)" }}>&quot;MongoDB&quot;</span>,{" "}
                  <span style={{ color: "var(--muted)" }}>&quot;Express&quot;</span>
                </p>
                <p className="pl-4">],</p>
                <p className="pl-4">
                  <span style={{ color: "var(--text)" }}>available</span>:{" "}
                  <span className="text-green-500">true</span>
                </p>
                <p>{"}"}</p>
                <p className="mt-4" style={{ color: "var(--text)" }}>
                  // building useful
                </p>
                <p style={{ color: "var(--text)" }}>// web products.</p>
              </div>
            </div>

            <div
              className="flex items-center justify-between px-4 py-2"
              style={{ borderTop: "1px solid var(--border)" }}
            >
              <span className="font-mono text-xs" style={{ color: "var(--text)" }}>
                HAND-CODED
              </span>
              <span className="font-mono text-xs" style={{ color: "var(--text)" }}>
                V0.1 — INTERACTIVE
              </span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Bottom social links */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mx-auto mt-10 flex w-full max-w-6xl items-center justify-between pt-6"
        style={{ borderTop: "1px solid var(--border)" }}
      >
        <div className="flex flex-wrap gap-6">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target={s.href.startsWith("http") ? "_blank" : undefined}
              rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="inline-flex items-center gap-2 font-mono text-xs transition"
              style={{ color: "var(--muted)" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--muted)")}
            >
              {s.icon}
              {s.label}
            </a>
          ))}
        </div>
        <span className="hidden font-mono text-xs sm:block" style={{ color: "var(--text)" }}>
          SCROLL ↓
        </span>
      </motion.div>
    </section>
  );
};

export default Hero;