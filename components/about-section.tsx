import { lora } from "@/app/layout";
import Image from "next/image";

export default function AboutMe() {
  return (
    <main className="bg-pink-primary pt-10 pb-10 flex justify-center">
      <section className="flex flex-col md:flex-row justify-center items-center gap-10">
        <div className="flex flex-col items-center gap-8">
          <h1 className="text-white border-2 border-dotted border-black w-fit px-3 py-4">
            About Me
          </h1>
          <p
            className={`${lora.className} max-w-[600px] text-brown-primary text-2xl w-auto p-5`}
          >
            Hi, my name is Summer. I grew up in a non-Christian home and really
            struggled in darkness. I struggled with depression, sin and anger. I
            was broken until I came into the light of Jesus four years ago. Not
            only was I living in this darkness of depression, but I was also
            living in sin. This was because I didn’t know about the love of
            Jesus, I didn’t know anything about God until four years ago. Until
            I let God’s light in. Now I am a pentecostal, apostolic woman living
            for God. So, why did I start this podcast? I felt led by God to
            bring people out of the darkness from out of the unknown, from out
            of depression, from out of the wickedness of this world and into His
            light. As the Lord called me out of darkness, he will call all of
            his children out of darkness!
          </p>
        </div>

        <div className="flex">
          <Image
            src="/images/summer2.png"
            width={500}
            height={500}
            alt="Picture of the author"
            className="rounded-2xl"
          />
        </div>
      </section>
      {/* <div className="bg-pink-quatro w-10 h-auto rounded-2xl" /> */}
    </main>
  );
}
