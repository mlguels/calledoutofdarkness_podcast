import AboutMe from "@/components/about-section";
import GuestSpeaker from "@/components/guest-speaker";
import HeroSection from "@/components/hero-section";
import MonthlyGuests from "@/components/monthly-guests";
import PodcastDesc from "@/components/podcast-desc";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <PodcastDesc />
      <AboutMe />
      <MonthlyGuests />
      <GuestSpeaker />
    </main>
  );
}
