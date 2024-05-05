import Image from "next/image";
import { lora } from "@/constant/constants";

export default function GuestSpeaker() {
  return (
    <div className="bg-blue-primary flex flex-col md:flex-row justify-center items-center pt-20 pb-20 gap-20 md:gap-40">
      <div className="border-2 border-black p-10">
        <Image
          src="/images/guest-speaker.jpeg"
          width={400}
          height={100}
          alt="Guest Speaker"
          className="rounded-full"
        />
      </div>

      <div className="md:self-end">
        <h2 className={`${lora.className} text-3xl`}>Guest Speaker</h2>
        <h2 className={`${lora.className} text-3xl`}>of this Week</h2>
        <p className={`${lora.className} max-w-[300px] pt-6`}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>
    </div>
  );
}
