import Socials from "./socials";
import PrayerForm from "./prayer-form";
import { lora } from "@/constant/constants";

export default function ContactPage() {
  return (
    <main
      id="request"
      className="pt-10 pb-10 flex flex-col justify-center items-center gap-10"
    >
      <header className="flex flex-col justify-center items-center gap-10">
        <h2 className={`${lora.className} text-4xl`}>
          Let&apos;s work together
        </h2>
        <Socials />
      </header>
      <PrayerForm />
    </main>
  );
}
