"use client";

import React from "react";
import { motion } from "framer-motion";

const stats = [
  { value: "15+", label: "Projects Completed" },
  { value: "7+", label: "Months Experience" },
  { value: "4+", label: "Technologies" },
  { value: "100%", label: "Dedication" },
];

const Stats = () => {
  return (
    <section
      className="stats-section px-6 py-16"
      style={{ borderBottom: "1px solid var(--border)", background: "var(--bg-2)" }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55 }}
        className="mx-auto max-w-6xl"
      >
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
            >
              <p className="font-heading text-4xl font-bold" style={{ color: "var(--text)" }}>
                {stat.value}
              </p>
              <p className="mt-1 font-mono text-xs uppercase tracking-widest" style={{ color: "var(--text)" }}>
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Stats;