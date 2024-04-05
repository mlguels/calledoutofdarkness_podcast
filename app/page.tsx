import AboutMe from "@/components/about-section";
import HeroSection from "@/components/hero-section";
import PodcastDesc from "@/components/podcast-desc";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <PodcastDesc />
      <AboutMe />
    </main>
  );
}
