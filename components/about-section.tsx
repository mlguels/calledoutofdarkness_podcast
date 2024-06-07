import Image from "next/image";
import { lora } from "@/constant/constants";

export default function AboutMe() {
  return (
    <main
      id="aboutme"
      className="bg-pink-primary pt-10 pb-10 flex justify-center p-2"
    >
      <section className="flex flex-col md:flex-row justify-center items-center gap-10">
        <div className="flex flex-col items-center gap-8">
          <h1 className="text-white w-fit px-3 py-4 text-4xl">About Me</h1>
          <p
            className={`${lora.className} max-w-[700px] text-brown-primary text-lg md:text-2xl w-auto p-5`}
          >
            Hi, my name is Summer. I grew up in a non-religious home and really
            struggled in darkness. I struggled with depression, sin and anger. I
            felt broken and empty, until the light of Jesus came into my life
            four years ago. This was because I didn’t know about the love of
            Jesus, or anything about God. Now I am a pentecostal, apostolic
            woman living for God. So, why did I start this podcast? I felt led
            by God to bring people out of the darkness, from out of the unknown.
            To bring people out of depression, from out of the wickedness of
            this world and into His marvelous light. Did you know the first
            thing God commanded was, “let there be light” (found in Genesis
            1:3). As the Lord called me out of darkness, He calls all of his
            children out of darkness!
          </p>
        </div>

        <div className="flex">
          <Image
            src="/images/summeraboutme.jpeg"
            width={500}
            height={500}
            alt="Picture of the author"
            className="rounded-full shadow-2xl"
          />
        </div>
      </section>
    </main>
  );
}
