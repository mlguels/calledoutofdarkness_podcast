import Image from "next/image";
import Link from "next/link";

import IntroPodcast from "./intro-podcast";
import { lora } from "@/constant/constants";

export default function PodcastDesc() {
  return (
    <main id="episode1" className="bg-cream h-fit pt-10 pb-10">
      <section className="flex flex-col md:flex-row justify-center items-center gap-10 p-10">
        <Image
          src="/images/lightbulb.JPG"
          width={500}
          height={500}
          alt="Lightbulb image"
          className="rounded-2xl"
        />
        <div className="px-5 flex flex-col gap-5 h-fit justify-center items-center">
          <IntroPodcast />
          <Link
            href="https://podcasters.spotify.com/pod/show/calledoutofdarkness"
            target="_blank"
            className="self-end"
          >
            <button
              className={`${lora.className} bg-blue-secondary px-10 py-3 rounded-2xl border-[1.5px] border-black uppercase state-effect`}
            >
              Listen now
            </button>
          </Link>
        </div>
      </section>
    </main>
  );
}
