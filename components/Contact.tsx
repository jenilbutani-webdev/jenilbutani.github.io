"use client";

import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { FaCheckCircle, FaSpinner } from "react-icons/fa";

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};
const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55 } },
};

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .sendForm("service_7cp1n3o", "template_8krckz8", e.target as HTMLFormElement, "PZyr7pN0eS0zdSuDa")
      .then(() => {
        setLoading(false);
        setSubmitted(true);
        (e.target as HTMLFormElement).reset();
        setTimeout(() => setSubmitted(false), 5000);
      })
      .catch((err) => {
        console.log(err.text);
        setLoading(false);
        alert("Failed to send message");
      });
  };

  const socials = [
    { label: "GitHub", href: "https://github.com/jenilbutani-webdev" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/jenil-patel-440811313/" },
    { label: "Email", href: "mailto:butanijenil@gmail.com" },
  ];

  return (
    <section
      id="contact"
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
        <motion.div variants={item} className="mb-12">

          {/* Top Content */}
          <div className="flex items-center gap-4">

            {/* Orange Dot */}
            <span className="h-2 w-2 rounded-full bg-orange-500" />

            {/* Left Text */}
            <span
              className="font-mono text-[12px] tracking-wide uppercase"
              style={{ color: "var(--text)" }}
            >
              05 / CONTACT
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
              LET&apos;S TALK
            </span>
          </div>

          {/* Bottom Full Line */}
          <span
            className="mt-6 block h-px w-full"
            style={{ background: "var(--border)" }}
          />
        </motion.div>

        {/* 2-col layout */}
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-[1fr_1px_1fr]">

          {/* LEFT */}
          <motion.div variants={item}>
            <h2
              className="font-heading font-bold leading-[0.95] tracking-tight"
              style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)", color: "var(--text)" }}
            >
              Have something<br />
              worth building<span style={{ color: "var(--accent)" }}>?</span>
            </h2>

            <p className="mt-6 max-w-sm text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
              Best for serious work — internship inquiries, contract projects, or collaboration
              with another engineer building something interesting.
            </p>

            <a
              href="mailto:butanijenil@gmail.com"
              className="mt-8 inline-block font-mono text-base transition hover:opacity-100"
              style={{
                color: "var(--text)",
                borderBottom: "1px solid var(--border)",
                paddingBottom: "2px",
              }}
            >
              butanijenil@gmail.com ↗
            </a>

            <div className="mt-8">
              <p className="mb-3 font-mono text-xs uppercase tracking-widest" style={{ color: "var(--text)" }}>
                Elsewhere
              </p>
              <div className="flex flex-wrap gap-6">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target={s.href.startsWith("http") ? "_blank" : undefined}
                    rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="font-mono text-sm transition"
                    style={{ color: "var(--muted)" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text)")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "var(--muted)")}
                  >
                    {s.label}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Vertical divider */}
          <div
            className="hidden self-stretch md:block"
            style={{ width: "1px", background: "var(--border)" }}
          />

          {/* RIGHT: form */}
          <motion.div variants={item}>
            <p className="mb-8 font-mono text-xs uppercase tracking-widest" style={{ color: "var(--text)" }}>
              Or send a note
            </p>

            <form onSubmit={sendEmail} suppressHydrationWarning>
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label className="mb-1 block font-mono text-xs uppercase tracking-widest" style={{ color: "var(--text)" }}>
                    Name
                  </label>
                  <input
                    name="name"
                    required
                    placeholder="Your name"
                    suppressHydrationWarning
                    className="w-full bg-transparent py-3 font-mono text-sm outline-none transition"
                    style={{
                      color: "var(--text)",
                      borderBottom: "1px solid var(--border)",
                    }}
                  />
                </div>
                <div>
                  <label className="mb-1 block font-mono text-xs uppercase tracking-widest" style={{ color: "var(--text)" }}>
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="you@domain.com"
                    suppressHydrationWarning
                    className="w-full bg-transparent py-3 font-mono text-sm outline-none transition"
                    style={{
                      color: "var(--text)",
                      borderBottom: "1px solid var(--border)",
                    }}
                  />
                </div>
              </div>

              <div className="mt-6">
                <label className="mb-1 block font-mono text-xs uppercase tracking-widest" style={{ color: "var(--text)" }}>
                  Subject
                </label>
                <input
                  name="subject"
                  placeholder="What's this about"
                  suppressHydrationWarning
                  className="w-full bg-transparent py-3 font-mono text-sm outline-none transition"
                  style={{
                    color: "var(--text)",
                    borderBottom: "1px solid var(--border)",
                  }}
                />
              </div>

              <div className="mt-6">
                <label className="mb-1 block font-mono text-xs uppercase tracking-widest" style={{ color: "var(--text)" }}>
                  Message
                </label>
                <textarea
                  name="message"
                  required
                  placeholder="A sentence or three is fine."
                  className="w-full resize-none bg-transparent py-3 font-mono text-sm outline-none transition"
                  style={{
                    height: "96px",
                    color: "var(--text)",
                    borderBottom: "1px solid var(--border)",
                  }}
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.01 }}
                type="submit"
                disabled={loading}
                className="send-btn mt-8 inline-flex w-full items-center justify-center gap-2 px-5 py-3 text-sm font-medium transition disabled:cursor-not-allowed disabled:opacity-70 rounded-full"
                style={{
                  background: "var(--text)",
                  color: "var(--bg)",
                }}
              >
                {submitted ? (
                  <span className="inline-flex items-center gap-2"><FaCheckCircle /> Message sent</span>
                ) : loading ? (
                  <span className="inline-flex items-center gap-2"><FaSpinner className="animate-spin" /> Sending...</span>
                ) : (
                  "Send message →"
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;