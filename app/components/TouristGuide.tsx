"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { MapPin, ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useLanguage } from "@/app/contexts/LanguageContext";

const sites = [
  "grottes",
  "plage",
  "phare",
  "corniche",
  "taza",
  "beni-belaid",
] as const;

function generateMapsUrl(name: string): string {
  const q = encodeURIComponent(`${name} Jijel Algeria`);
  return `https://www.google.com/maps/dir/?api=1&destination=${q}`;
}

export default function TouristGuide() {
  const { t, dir } = useLanguage();
  const scrollRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const lineScale = useTransform(scrollYProgress, [0, 0.5], [0, 1]);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const amount = 320;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  return (
    <section
      id="nav-guide"
      ref={sectionRef}
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
            <span className="gold-gradient-text">{t("guide.title")}</span>
          </h2>
          <p
            className="text-off-white/60 font-light text-base sm:text-lg max-w-xl mx-auto"
            dir={dir}
          >
            {t("guide.subtitle")}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.25, 0.1, 0, 1] }}
          style={{ scaleX: lineScale }}
          className="h-[1px] bg-gold/20 mx-auto mb-12 max-w-2xl"
        />

        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sites.map((site, i) => (
            <SiteCard key={site} site={site} index={i} t={t} dir={dir} />
          ))}
        </div>

        <div className="relative md:hidden">
          <div
            ref={scrollRef}
            className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide -mx-5 px-5 pb-4"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {sites.map((site, i) => (
              <div
                key={site}
                className="snap-start shrink-0 w-[calc(100vw-2rem)] sm:w-[90vw] md:max-w-none"
              >
                <SiteCard site={site} index={i} t={t} dir={dir} />
              </div>
            ))}
          </div>

          <div className="flex items-center justify-center gap-3 mt-6">
            <button
              onClick={() => scroll("left")}
              className="w-10 h-10 rounded-full gold-border flex items-center justify-center text-gold/60 hover:text-gold hover:border-gold/60 transition-all duration-400"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="w-10 h-10 rounded-full gold-border flex items-center justify-center text-gold/60 hover:text-gold hover:border-gold/60 transition-all duration-400"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function SiteCard({
  site,
  index,
  t,
  dir,
}: {
  site: string;
  index: number;
  t: (k: string) => string;
  dir: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.25, 0.1, 0, 1],
      }}
      whileHover={{ y: -4 }}
      className="group relative overflow-hidden rounded-lg md:rounded-xl h-96 sm:h-80 md:h-96 flex flex-col justify-between"
      dir={dir}
      style={{
        backgroundImage: `url('/${site}.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal/40 via-charcoal/60 to-charcoal/80 group-hover:from-charcoal/50 group-hover:via-charcoal/70 group-hover:to-charcoal/90 transition-all duration-500 z-10" />

      {/* Content */}
      <div className="relative z-20 p-6 md:p-8 flex flex-col justify-between h-full">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0 backdrop-blur-sm">
              <MapPin className="w-4 h-4 text-gold" />
            </div>
            <span className="text-xs tracking-widest uppercase text-gold/70 font-semibold">
              {`0${index + 1}`}
            </span>
          </div>

          <h3 className="font-serif text-2xl md:text-3xl mb-3 text-gold leading-snug">
            {t(`guide.${site}.name`)}
          </h3>

          <p className="text-off-white/80 text-sm md:text-base font-light leading-relaxed hidden md:block">
            {t(`guide.${site}.desc`)}
          </p>
        </div>

        <a
          href={generateMapsUrl(t(`guide.${site}.name`))}
          target="_blank"
          rel="noopener noreferrer"
          className="group/link inline-flex items-center gap-2 text-xs tracking-widest uppercase text-gold/90 hover:text-gold transition-colors duration-400 touch-safe font-semibold"
        >
          {t("guide.viewmap")}
          <ArrowUpRight className="w-3 h-3 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform duration-400" />
        </a>
      </div>
    </motion.div>
  );
}
