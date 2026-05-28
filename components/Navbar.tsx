"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";
import { LuSunMedium, LuMoon, LuMonitor } from "react-icons/lu";

const navLinks = [
  { href: "#home", label: "Home", num: "01" },
  { href: "#about", label: "About", num: "02" },
  { href: "#project", label: "Projects", num: "03" },
  { href: "#contact", label: "Contact", num: "04" },
];

type Theme = "light" | "dark" | "system";

const applyTheme = (theme: Theme) => {
  const root = document.documentElement;
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const isDark = theme === "dark" || (theme === "system" && prefersDark);

  root.setAttribute("data-theme", isDark ? "dark" : "light");

  // CSS variables — all components use these via inline style or var()
  const vars: Record<string, string> = isDark
    ? {
      "--bg": "#0a0a0a",
      "--bg-2": "#111111",
      "--text": "#f0f0f0",
      "--muted": "#999999",
      "--faint": "#555555",
      "--border": "rgba(255,255,255,0.08)",
      "--border-faint": "rgba(255,255,255,0.04)",
      "--card": "#111111",
      "--divider": "rgba(255,255,255,0.06)",
    }
    : {
      "--bg": "#fafaf8",
      "--bg-2": "#f5f3ef",
      "--text": "#1a1a1a",
      "--muted": "#888888",
      "--faint": "#aaaaaa",
      "--border": "rgba(0,0,0,0.08)",
      "--border-faint": "rgba(0,0,0,0.05)",
      "--card": "#ece7df",
      "--divider": "rgba(0,0,0,0.06)",
    };

  Object.entries(vars).forEach(([k, v]) => root.style.setProperty(k, v));
};

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState<Theme>("light");
  const [showThemeMenu, setShowThemeMenu] = useState(false);
  const themeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const saved = (localStorage.getItem("theme") as Theme) || "light";
    setTheme(saved);
    applyTheme(saved);
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 12);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (themeRef.current && !themeRef.current.contains(e.target as Node)) {
        setShowThemeMenu(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const handleThemeSelect = (t: Theme) => {
    setTheme(t);
    localStorage.setItem("theme", t);
    applyTheme(t);
    setShowThemeMenu(false);
  };

  const prefersDark = typeof window !== "undefined" && window.matchMedia("(prefers-color-scheme: dark)").matches;
  const isDark = theme === "dark" || (theme === "system" && prefersDark);

  const ThemeIcon = theme === "dark" ? LuMoon : theme === "system" ? LuMonitor : LuSunMedium;

  return (
    <>
      <motion.nav
        animate={{
          backgroundColor: isDark
            ? scrolled ? "rgba(10,10,10,0.65)" : "rgba(10,10,10,0.75)"
            : scrolled ? "rgba(242,237,230,0.65)" : "rgba(242,237,230,0.75)",
          borderColor: isDark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.08)",
        }}
        transition={{ duration: 0.25 }}
        className="fixed top-0 z-50 w-full border-b backdrop-blur-xl border-[hsl(var(--hairline))]"
      >
        <div className="mx-auto flex max-w-7xl items-center px-8 py-3.5">

          {/* Logo */}
          <a
            href="#home"
            onClick={() => setIsMenuOpen(false)}
            style={{ color: "var(--text)" }}
            className="text-[18px] font-medium tracking-[-0.03em] text-[hsl(var(--ink))]"
          >
            Jenil<span style={{ color: "var(--accent)" }}>.</span>
          </a>

          {/* Center nav links */}
          <div className="hidden flex-1 items-center justify-center gap-2 lg:flex">
            {navLinks.map((link) => {
              const inner = (
                <span className="flex items-baseline gap-2">
                  <span className="font-mono text-[10px] tracking-wider opacity-60 group-hover:opacity-100 transition-opacity">
                    {link.num}
                  </span>
                  <span className="text-[14px] opacity-75 group-hover:opacity-100 transition-opacity">
                    {link.label}
                  </span>
                </span>
              );

              // Light mode me text-neutral-600 aur hover:text-black
              // Dark mode me text-neutral-400 aur hover:text-white
              const baseClasses = isDark
                ? "text-neutral-200 hover:text-white"
                : "text-neutral-700 hover:text-black";

              return (link as any).type === "scroll" ? (
                <button
                  key={link.label}
                  className={`group px-3 py-2 transition-colors duration-200 ${baseClasses}`}
                >
                  {inner}
                </button>
              ) : (
                <a
                  key={link.label}
                  href={link.href}
                  className={`group px-3 py-2 transition-colors duration-200 ${baseClasses}`}
                >
                  {inner}
                </a>
              );
            })}
          </div>

          {/* Right: RÉSUMÉ ↓ | divider | theme icon */}
          <div className="hidden items-center lg:flex">
            <a
              href="/Jenil_Butani_Full_Stack_resume.pdf"
              download
              style={{ color: "var(--text)" }}
              className={`flex items-center gap-1.5 pr-5 font-mono text-xs font-semibold uppercase tracking-widest transition-colors duration-200 ${isDark ? "text-neutral-400 hover:text-white" : "text-neutral-600 hover:text-black"
                }`}
            >
              Résumé <span className="text-sm font-normal">↓</span>
            </a>

            <span
              style={{ backgroundColor: isDark ? "rgba(255,255,255,0.15)" : "rgba(0,0,0,0.15)" }}
              className="h-5 w-px"
            />

            {/* Theme dropdown trigger */}
            <div ref={themeRef} className="relative pl-5">
              <button
                type="button"
                aria-label="Toggle theme"
                onClick={() => setShowThemeMenu((v) => !v)}
                style={{ color: isDark ? "#666" : "#aaa" }}
                className="flex items-center justify-center transition hover:opacity-80"
                suppressHydrationWarning
              >
                <ThemeIcon size={18} />
              </button>

              {/* Dropdown */}
              <AnimatePresence>
                {showThemeMenu && (
                  <motion.div
                    initial={{ opacity: 0, y: 6, scale: 0.97 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 6, scale: 0.97 }}
                    transition={{ duration: 0.15 }}
                    style={{
                      backgroundColor: isDark ? "#1c1c1c" : "#ffffff",
                      border: `1px solid ${isDark ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)"}`,
                      boxShadow: "0 8px 32px rgba(0,0,0,0.14)",
                      borderRadius: "12px",
                    }}
                    className="absolute right-0 top-10 min-w-[150px] overflow-hidden py-2"
                  >
                    {(
                      [
                        { key: "light" as Theme, label: "Light", Icon: LuSunMedium },
                        { key: "dark" as Theme, label: "Dark", Icon: LuMoon },
                        { key: "system" as Theme, label: "System", Icon: LuMonitor },
                      ]
                    ).map(({ key, label, Icon }) => (
                      <button
                        key={key}
                        type="button"
                        onClick={() => handleThemeSelect(key)}
                        style={{
                          color: theme === key
                            ? isDark ? "#f0f0f0" : "#1a1a1a"
                            : "#888",
                          backgroundColor: theme === key
                            ? isDark ? "rgba(255,255,255,0.07)" : "rgba(0,0,0,0.05)"
                            : "transparent",
                        }}
                        className="flex w-full items-center gap-3 px-4 py-2.5 text-sm transition hover:opacity-75"
                      >
                        <Icon size={15} />
                        {label}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Mobile hamburger */}
          <div className="ml-auto lg:hidden">
            <button
              type="button"
              aria-label="Toggle navigation"
              onClick={() => setIsMenuOpen((v) => !v)}
              style={{ color: "var(--text)" }}
              className="flex h-9 w-9 items-center justify-center"
            >
              {isMenuOpen ? <FaTimes size={15} /> : <FaBars size={15} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18 }}
            style={{
              backgroundColor: isDark ? "#111" : "#f2ede6",
              borderColor: isDark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.08)",
            }}
            className="fixed inset-x-4 top-[60px] z-40 border shadow-lg lg:hidden"
          >
            <div className="flex flex-col">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  style={{
                    color: "var(--text)",
                    borderColor: isDark ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.06)",
                  }}
                  className="flex items-center gap-2 border-b px-5 py-4 text-sm font-medium transition hover:opacity-100"
                >
                  <span style={{ color: "var(--text)" }} className="font-mono text-[10px]">
                    {link.num}
                  </span>
                  {link.label}
                </a>
              ))}
              <div className="flex items-center justify-between px-5 py-4">
                <a
                  href="/Jenil_Butani_Full_Stack_resume.pdf"
                  download
                  style={{ color: "var(--text)" }}
                  className="font-mono text-xs font-semibold uppercase tracking-widest"
                >
                  Résumé ↓
                </a>
                <div className="flex items-center gap-4">
                  {([
                    { key: "light" as Theme, Icon: LuSunMedium },
                    { key: "dark" as Theme, Icon: LuMoon },
                    { key: "system" as Theme, Icon: LuMonitor },
                  ]).map(({ key, Icon }) => (
                    <button
                      key={key}
                      type="button"
                      onClick={() => handleThemeSelect(key)}
                      style={{ color: theme === key ? "var(--text)" : "var(--text)" }}
                      className="transition hover:opacity-80"
                    >
                      <Icon size={16} />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;