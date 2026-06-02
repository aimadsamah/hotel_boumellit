"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useLanguage } from "@/app/contexts/LanguageContext";

const contactItems = [
  {
    id: "address",
    Icon: MapPin,
    value: "about.address",
    href: "https://maps.google.com/?q=Jijel+Algeria",
  },
  {
    id: "phone",
    Icon: Phone,
    value: "about.phone",
    href: "tel:+21334000000",
  },
  {
    id: "email",
    Icon: Mail,
    value: "about.email",
    href: "mailto:reception@hotelboumellit.com",
  },
];

export default function AboutSection() {
  const { t, dir } = useLanguage();

  return (
    <section
      id="nav-about"
      className="relative section-spacing section-padding"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0, 1] }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-10 h-[1px] bg-gold/60" />
              <span className="text-xs tracking-[0.3em] uppercase text-gold/80">
                Hôtel Boumellit
              </span>
            </div>

            <h2
              className="font-serif text-3xl sm:text-4xl md:text-5xl leading-tight mb-8 text-balance"
              dir={dir}
            >
              <span className="gold-gradient-text">{t("about.title")}</span>
            </h2>

            <p
              className="text-off-white/70 leading-relaxed text-base sm:text-lg font-light mb-12"
              dir={dir}
            >
              {t("about.description")}
            </p>

            <div className="space-y-5" dir={dir}>
              {contactItems.map(({ id, Icon, value, href }) => (
                <a
                  key={id}
                  href={href}
                  target={id === "address" ? "_blank" : undefined}
                  rel={
                    id === "address" ? "noopener noreferrer" : undefined
                  }
                  className="flex items-center gap-4 group touch-safe"
                >
                  <span className="flex-shrink-0 w-10 h-10 rounded-full gold-border flex items-center justify-center group-hover:border-gold/60 group-hover:bg-gold/10 transition-all duration-400">
                    <Icon className="w-4 h-4 text-gold" />
                  </span>
                  <span className="text-sm text-off-white/70 group-hover:text-off-white transition-colors duration-400">
                    {t(value)}
                  </span>
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0, 1] }}
            className="relative"
          >
            <div className="luxury-card p-8 md:p-10 lg:p-12">
              <Clock className="w-8 h-8 text-gold/40 mb-6" />
              <h3
                className="font-serif text-2xl mb-4 gold-text"
                dir={dir}
              >
                {t("about.title")}
              </h3>
              <p className="text-off-white/60 font-light leading-relaxed" dir={dir}>
                {t("about.description")}
              </p>
              <div className="mt-8 gold-border-t pt-6 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-gold/10 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-gold animate-pulse" />
                </div>
                <span className="text-xs tracking-widest uppercase text-gold/60">
                  {t("guide.subtitle")}
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
