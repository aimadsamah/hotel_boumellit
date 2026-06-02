import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import { LanguageProvider } from "@/app/contexts/LanguageContext";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  weight: ["200", "300", "400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Hôtel Boumellit | L'Art de l'Accueil Méditerranéen",
  description:
    "Hôtel de luxe sur la corniche de Jijel, Algérie. Vivez une expérience d'exception entre mer et montagne.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="fr"
      dir="ltr"
      className={`${cormorant.variable} ${inter.variable}`}
    >
      <body className="min-h-screen bg-charcoal text-off-white antialiased">
        <LanguageProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
