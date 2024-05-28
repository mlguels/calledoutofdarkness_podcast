import Image from "next/image";

import { Pinyon_Script } from "next/font/google";

import StreamButton from "./stream-btn";
import HeroHeading from "./hero-heading";
import { lora } from "@/constant/constants";

const pinyonScript = Pinyon_Script({
  subsets: ["latin"],
  weight: "400",
});

export default function HeroSection() {
  return (
    <main className="flex flex-col md:flex-row justify-center gap-y-10 md:gap-[300px] items-center pt-10 pb-20 bg-white">
      <section className="flex flex-col">
        <HeroHeading text="Called" />
        <HeroHeading text="Out of" />
        <HeroHeading text="Darkness" />
        <div className="flex flex-col">
          <h2
            className={`${lora.className} text-5xl md:text-7xl text-pink-primary self-end`}
          >
            Summer
          </h2>

          <p
            className={`${pinyonScript.className} text-5xl md:text-7xl text-brown-secondary flex justify-between`}
          >
            with
            <span
              className={`${lora.className} text-5xl md:text-7xl text-pink-primary self-end`}
            >
              {" "}
              Sollis
            </span>
          </p>
          <div className="pt-5">
            <StreamButton />
          </div>
        </div>
      </section>
      <Image
        src="/images/summer.png"
        alt="Picture of the author"
        width={300}
        height={300}
        className="rounded-2xl w-auto h-auto md:w-[500px] md:h-[500px]"
        quality={100}
      />
    </main>
  );
}
