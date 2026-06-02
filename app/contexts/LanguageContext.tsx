"use client";

import {
  createContext,
  useContext,
  useState,
  useCallback,
  useMemo,
  useEffect,
  type ReactNode,
} from "react";
import {
  translations,
  langLabels,
  langDirections,
  type Lang,
} from "@/app/data/translations";

interface LanguageContextType {
  lang: Lang;
  setLang: (lang: Lang) => void;
  dir: "ltr" | "rtl";
  t: (key: string) => string;
  langLabels: Record<Lang, string>;
}

const defaultT = (key: string) => translations.fr[key] ?? key;

const defaultValue: LanguageContextType = {
  lang: "fr",
  setLang: () => {},
  dir: "ltr",
  t: defaultT,
  langLabels,
};

const LanguageContext = createContext<LanguageContextType>(defaultValue);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("fr");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const setLang = useCallback((newLang: Lang) => {
    setLangState(newLang);
  }, []);

  const dir = langDirections[lang];

  useEffect(() => {
    document.documentElement.dir = dir;
    document.documentElement.lang = lang;
  }, [dir, lang]);

  const t = useCallback(
    (key: string): string => {
      return translations[lang][key] ?? key;
    },
    [lang]
  );

  const value = useMemo(
    () => ({ lang, setLang, dir, t, langLabels }),
    [lang, setLang, dir, t]
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
