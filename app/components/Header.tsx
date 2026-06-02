"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useLanguage } from "@/app/contexts/LanguageContext";
import type { Lang } from "@/app/data/translations";

const navKeys = ["nav.home", "nav.about", "nav.social", "nav.guide"] as const;

const langs: Lang[] = ["fr", "en", "ar"];

export default function Header() {
  const { t, lang, setLang, dir, langLabels } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const sections = navKeys.map((k) => ({
    label: t(k),
    href: `#${k.replace(/\./g, "-")}`,
  }));

  const handleNav = (href: string) => {
    setMenuOpen(false);
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.2 },
    },
    exit: {
      opacity: 0,
      transition: { staggerChildren: 0.04, staggerDirection: -1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.25, 0.1, 0, 1] },
    },
    exit: { opacity: 0, y: -10, transition: { duration: 0.3 } },
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-600 ${
        scrolled
          ? "bg-charcoal/85 backdrop-blur-xl shadow-[0_1px_0_rgba(201,168,76,0.08)]"
          : "bg-transparent"
      }`}
    >
      <div className="section-padding mx-auto flex items-center justify-between h-16 md:h-20 max-w-7xl">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center group"
          aria-label="Home"
        >
          <img
            src="/logo.png"
            alt="Hôtel Boumellit"
            className="h-10 md:h-14 w-auto object-contain group-hover:opacity-80 transition-opacity duration-400"
            style={{ background: "transparent !important", mixBlendMode: "multiply" }}
          />
        </button>

        <nav className="hidden md:flex items-center gap-10" dir={dir}>
          {sections.map((s) => (
            <button
              key={s.href}
              onClick={() => handleNav(s.href)}
              className="relative text-sm tracking-widest uppercase text-off-white/70 hover:text-gold transition-colors duration-400 after:absolute after:-bottom-1 after:left-0 after:h-[1px] after:w-0 after:bg-gold after:transition-all after:duration-400 hover:after:w-full"
            >
              {s.label}
            </button>
          ))}
        </nav>

        <div
          className="hidden md:flex items-center gap-1 gold-border rounded-full px-1 py-1"
          dir="ltr"
        >
          {langs.map((l) => (
            <button
              key={l}
              onClick={() => setLang(l)}
              className={`px-3 py-1 text-xs font-medium tracking-widest rounded-full transition-all duration-400 touch-safe flex items-center justify-center ${
                lang === l
                  ? "bg-gold text-charcoal"
                  : "text-off-white/60 hover:text-off-white"
              }`}
              aria-label={l}
            >
              {langLabels[l]}
            </button>
          ))}
        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden touch-safe flex items-center justify-center text-off-white hover:text-gold transition-colors duration-400"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 top-16 bg-charcoal/95 backdrop-blur-2xl md:hidden"
          >
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="flex flex-col items-center justify-center h-full gap-12 px-8"
              dir={dir}
            >
              {sections.map((s) => (
                <motion.div key={s.href} variants={itemVariants}>
                  <button
                    onClick={() => handleNav(s.href)}
                    className="text-2xl font-serif tracking-wider text-off-white/90 hover:text-gold transition-colors duration-400"
                  >
                    {s.label}
                  </button>
                </motion.div>
              ))}

              <motion.div
                variants={itemVariants}
                className="flex items-center gap-3 gold-border rounded-full px-2 py-1.5"
                dir="ltr"
              >
                {langs.map((l) => (
                  <button
                    key={l}
                    onClick={() => setLang(l)}
                    className={`px-4 py-2 text-sm font-medium tracking-widest rounded-full transition-all duration-400 ${
                      lang === l
                        ? "bg-gold text-charcoal"
                        : "text-off-white/60 hover:text-off-white"
                    }`}
                  >
                    {langLabels[l]}
                  </button>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
