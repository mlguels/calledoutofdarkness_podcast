import Image from "next/image";

import HeroSection from "@/components/hero-section";

export default function Home() {
  return (
    <main className="bg-pink-primary flex justify-between p-20">
      <HeroSection />
    </main>
  );
}
