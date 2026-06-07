"use client";

import { motion } from "framer-motion";
import { Instagram, Facebook, Music2, ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/app/contexts/LanguageContext";

const platforms = [
  {
    id: "instagram",
    Icon: Instagram,
    bg: "from-pink-600/20 to-purple-600/20",
    border: "hover:border-pink-500/40",
    shadow: "hover:shadow-pink-500/10",
    url: "https://www.instagram.com/hotel_boumellit?igsh=MXhva21tZGdtYzN5dg==",
    gradient: "from-pink-500 via-purple-500 to-orange-400",
  },
  {
    id: "facebook",
    Icon: Facebook,
    bg: "from-blue-600/20 to-blue-800/20",
    border: "hover:border-blue-500/40",
    shadow: "hover:shadow-blue-500/10",
    url: "https://www.facebook.com/share/1Crg2rbPrn/?mibextid=wwXIfr",
    gradient: "from-blue-600 to-blue-800",
  },
  {
    id: "tiktok",
    Icon: Music2,
    bg: "from-gray-900/40 to-gray-700/20",
    border: "hover:border-gray-400/40",
    shadow: "hover:shadow-gray-400/10",
    url: "https://www.tiktok.com/@boumellit_hotel_appart?_r=1&_t=ZS-96XoJ3RFADk",
    gradient: "from-gray-900 via-gray-700 to-gray-500",
  },
];

export default function SocialMedia() {
  const { t, dir } = useLanguage();

  return (
    <section
      id="nav-social"
      className="relative section-spacing section-padding"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0, 1] }}
          className="text-center mb-16"
        >
          <div className="w-12 h-[1px] bg-gold/60 mx-auto mb-6" />
          <h2
            className="font-serif text-3xl sm:text-4xl md:text-5xl leading-tight mb-4 text-balance"
            dir={dir}
          >
            <span className="gold-gradient-text">{t("social.title")}</span>
          </h2>
          <p
            className="text-off-white/60 font-light text-base sm:text-lg max-w-xl mx-auto"
            dir={dir}
          >
            {t("social.subtitle")}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {platforms.map(
            ({ id, Icon, bg, border, shadow, url, gradient }, i) => (
              <motion.a
                key={id}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.12,
                  ease: [0.25, 0.1, 0, 1],
                }}
                whileHover={{ y: -4 }}
                className={`group relative luxury-card p-8 md:p-10 flex flex-col items-center text-center overflow-hidden ${border} ${shadow}`}
                dir={dir}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${bg} opacity-50 group-hover:opacity-80 transition-opacity duration-500`}
                />
                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-full bg-charcoal/60 gold-border flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-500">
                    <Icon className="w-7 h-7 text-gold group-hover:scale-110 transition-transform duration-400" />
                  </div>
                  <h3 className="font-serif text-2xl mb-2 text-off-white group-hover:gold-text transition-colors duration-400">
                    {t(`social.${id}`)}
                  </h3>
                  <p className="text-off-white/50 text-sm font-light mb-6">
                    {t("social.followers")}
                  </p>
                  <span className="inline-flex items-center gap-2 text-xs tracking-widest uppercase text-gold/80 group-hover:text-gold transition-colors duration-400">
                    {t("social.followers")}
                    <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-400" />
                  </span>
                </div>
                <div
                  className={`absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r ${gradient} scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left`}
                />
              </motion.a>
            ),
          )}
        </div>
      </div>
    </section>
  );
}
