"use client";

import Hero from "@/app/components/Hero";
import AboutSection from "@/app/components/AboutSection";
import SocialMedia from "@/app/components/SocialMedia";
import MapSection from "@/app/components/MapSection";
import TouristGuide from "@/app/components/TouristGuide";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutSection />
      <SocialMedia />
      <MapSection />
      <TouristGuide />
    </>
  );
}
