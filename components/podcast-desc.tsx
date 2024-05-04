import Image from "next/image";
import IntroPodcast from "./intro-podcast";
import Link from "next/link";
import { lora } from "@/app/layout";

export default function PodcastDesc() {
  return (
    <main className="bg-cream h-fit pt-10 pb-10">
      <section className="flex flex-col md:flex-row justify-center items-center gap-10 p-10">
        <Image
          src="/images/lightbulb.jpg"
          width={500}
          height={500}
          alt="Picture of the author"
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
