import { lora } from "@/app/layout";
import { Pinyon_Script } from "next/font/google";

const pinyonScript = Pinyon_Script({
  subsets: ["latin"],
  weight: "400",
});

export default function IntoPodcast() {
  return (
    <section className="flex flex-col border-2 gap-3 border-black p-10">
      <h2 className={`${pinyonScript.className} text-3xl tracking-widest`}>
        Episode #1
      </h2>
      <h1 className={`${lora.className} font-semibold`}>
        Introdution to Called Out of Darkness
      </h1>
      <p className={`${lora.className} max-w-[500px]`}>
        Join me as we dive deep into Scripture, seeking wisdom and understanding
        to navigate the challenges of life. Together, we&apos;ll discover how to
        shine brightly, not conforming to the ways of this world but radiating
        the love and truth of Christ in all that we do, So let us not hide our
        light but boldly proclaim the glory of His name. Let us be vessels of
        His love, illuminating the path for others to find their way out of
        darkness and into the marvelous light of our Savior.
      </p>
    </section>
  );
}
