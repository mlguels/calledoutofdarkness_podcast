import AboutMe from "@/components/about-section";
import ContactPage from "@/components/contact-page";
import Footer from "@/components/footer";
import HeroSection from "@/components/hero-section";
import PodcastDesc from "@/components/podcast-desc";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <PodcastDesc />
      <AboutMe />
      <ContactPage />
    </main>
  );
}
