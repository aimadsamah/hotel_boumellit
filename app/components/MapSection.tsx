"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/app/contexts/LanguageContext";

export default function MapSection() {
  const { t, dir } = useLanguage();

  return (
    <section id="nav-map" className="relative section-spacing section-padding">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0, 1] }}
          className="text-center mb-12"
        >
          <div className="w-12 h-[1px] bg-gold/60 mx-auto mb-6" />
          <h2
            className="font-serif text-3xl sm:text-4xl md:text-5xl leading-tight mb-4 text-balance"
            dir={dir}
          >
            <span className="gold-gradient-text">{t("map.title")}</span>
          </h2>
          <p
            className="text-off-white/60 font-light text-base sm:text-lg"
            dir={dir}
          >
            {t("map.subtitle")}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0, 1] }}
          className="luxury-card overflow-hidden rounded-2xl"
        >
          <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
            <iframe
              src="https://maps.google.com/maps?q=Jijel%2C%20Algeria&t=&z=13&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ position: "absolute", top: 0, left: 0, border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Hôtel Boumellit location"
              className="rounded-2xl"
            />
          </div>

          <div className="p-4 md:p-6 gold-border-t border-gold/10 flex items-center justify-between">
            <span
              className="text-xs tracking-widest uppercase text-off-white/50"
              dir={dir}
            >
              Jijel, 18000 Jijel, Algérie
            </span>
            <a
              href="https://www.google.com/maps?q=Hôtel+Boumellit+Jijel"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs tracking-widest uppercase text-gold/80 hover:text-gold transition-colors duration-400"
            >
              {t("guide.viewmap")}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
