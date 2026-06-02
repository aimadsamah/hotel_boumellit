"use client";

import { motion } from "framer-motion";
import { MapPin, ArrowUp } from "lucide-react";
import { useLanguage } from "@/app/contexts/LanguageContext";

export default function Footer() {
  const { t, dir } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative gold-border-t border-gold/10">
      <div className="section-padding py-12 md:py-16">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3"
            >
              <MapPin className="w-5 h-5 text-gold/60" />
              <span className="font-serif text-lg tracking-wider text-off-white/80">
                Hôtel Boumellit
              </span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-xs tracking-widest uppercase text-off-white/40 text-center"
              dir={dir}
            >
              {t("footer.tagline")}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center gap-6"
            >
              <p className="text-xs text-off-white/40">
                {t("footer.rights")}
              </p>
              <button
                onClick={scrollToTop}
                className="w-10 h-10 rounded-full gold-border flex items-center justify-center text-gold/60 hover:text-gold hover:border-gold/60 hover:bg-gold/10 transition-all duration-400 group"
                aria-label="Scroll to top"
              >
                <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform duration-400" />
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
}
