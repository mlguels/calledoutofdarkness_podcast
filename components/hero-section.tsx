import Image from "next/image";

import { Pinyon_Script } from "next/font/google";
import StreamButton from "./stream-btn";

export const pinyonScript = Pinyon_Script({
  subsets: ["latin"],
  weight: "400",
});

export default function HeroSection() {
  return (
    <section className="flex flex-col md:flex-row justify-between gap-10 p-20">
      <ul className="flex flex-col">
        <li>
          <h2 className="heading-2">Called</h2>
        </li>
        <li>
          <h2 className="heading-2">Out of</h2>
        </li>
        <li>
          <h2 className="heading-2">Darkness</h2>
        </li>
        <li className="flex flex-col">
          <h2 className="text-7xl font-marxiana text-cream self-end">Summer</h2>

          <p
            className={`${pinyonScript.className} text-7xl text-brown-secondary flex justify-between`}
          >
            with
            <span className="text-7xl font-marxiana text-cream self-end">
              {" "}
              Sollis
            </span>
          </p>
          <div className="w-full mt-5">
            <StreamButton />
          </div>
        </li>
      </ul>

      <Image
        src="/images/summer.png"
        alt="Picture of the author"
        width={100}
        height={100}
        className="w-full h-full max-w-[500px] max-h-[500px]  rounded-2xl"
      />
    </section>
  );
}
