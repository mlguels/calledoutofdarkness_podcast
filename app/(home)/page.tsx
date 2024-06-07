import AboutMe from "@/components/about-section";
import { BibleVerses } from "@/components/bible-verses";
import ContactPage from "@/components/contact-page";
import HeroSection from "@/components/hero-section";
import PodcastDesc from "@/components/podcast-desc";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <PodcastDesc />
      <AboutMe />
      <BibleVerses />
      <ContactPage />
    </main>
  );
}
