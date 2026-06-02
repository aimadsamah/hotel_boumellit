"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { useLanguage } from "@/app/contexts/LanguageContext";

export default function Hero() {
  const { t, dir } = useLanguage();

  return (
    <section
      id="nav-home"
      className="relative min-h-[100svh] flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal/30 via-charcoal/50 to-charcoal z-10" />

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(201,168,76,0.08)_0%,_transparent_70%)]" />

      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gold/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-gold/3 rounded-full blur-3xl" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: [0.25, 0.1, 0, 1] }}
        className="relative z-20 text-center section-padding max-w-4xl mx-auto"
      >
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="w-12 h-[1px] bg-gold mx-auto mb-8"
        />

        <h1
          className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-none tracking-wide text-balance mb-6"
          dir={dir}
        >
          <span className="gold-gradient-text">{t("hero.title")}</span>
        </h1>

        <p
          className="text-base sm:text-lg md:text-xl text-off-white/70 max-w-2xl mx-auto font-light leading-relaxed mb-10"
          dir={dir}
        >
          {t("hero.subtitle")}
        </p>

        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="group relative inline-flex items-center gap-2 gold-border rounded-full px-8 py-4 text-sm tracking-widest uppercase text-gold hover:bg-gold hover:text-charcoal transition-all duration-500 overflow-hidden"
        >
          <span className="relative z-10">{t("hero.cta")}</span>
          <ArrowDown className="relative z-10 w-4 h-4 group-hover:translate-y-0.5 transition-transform duration-400" />
          <div className="absolute inset-0 bg-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
        </motion.button>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 gold-border rounded-full flex items-start justify-center p-1.5"
        >
          <div className="w-1 h-2.5 bg-gold/60 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
