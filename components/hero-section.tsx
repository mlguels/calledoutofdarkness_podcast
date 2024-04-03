import Image from "next/image";

import { Pinyon_Script } from "next/font/google";
import StreamButton from "./stream-btn";

export const pinyonScript = Pinyon_Script({
  subsets: ["latin"],
  weight: "400",
});

export default function HeroSection() {
  return (
    <section className="flex flex-col md:flex-row justify-between w-auto gap-20">
      <ul className="flex flex-col">
        <li>
          <h2 className="text-8xl font-marxiana text-[#794F42] tracking-tighter">
            Called
          </h2>
        </li>
        <li>
          <h2 className="text-8xl font-marxiana text-[#794F42] tracking-tighter">
            Out of
          </h2>
        </li>
        <li>
          <h2 className="text-8xl font-marxiana text-[#794F42] tracking-tighter">
            Darkness
          </h2>
        </li>
        <li>
          <div className="flex flex-col w-full">
            <h2 className="text-7xl font-marxiana text-cream self-end">
              Summer
            </h2>

            <p
              className={`${pinyonScript.className} text-7xl text-[#794F42] flex justify-between`}
            >
              with
              <span>
                {" "}
                <h2 className="text-7xl font-marxiana text-cream self-end">
                  Sollis
                </h2>
              </span>
            </p>
          </div>
          <li className="mt-6">
            <StreamButton />
          </li>
        </li>
      </ul>

      <Image
        src="/images/summer.png"
        alt="Picture of the author"
        width={500}
        height={200}
        className="w-full h-full"
      />
    </section>
  );
}
