import { lora } from "@/app/layout";
import { Guest } from "@/types/types";
import Image from "next/image";

type GuestCardProps = {
  guest: Guest;
};

export default function GuestCard({ guest }: GuestCardProps) {
  return (
    <main className="flex flex-col gap-2">
      <Image
        src={guest.img}
        alt={guest.name}
        width={185}
        height={175}
        className="rounded-full"
      />
      <h3 className={`${lora.className} text-green-secondary text-lg`}>
        {guest.name}
      </h3>
      <p className={`${lora.className}`}>{guest.desc}</p>
      <p className={`${lora.className}`}>{guest.date}</p>
      <p className={`${lora.className}`}>{guest.subject}</p>
    </main>
  );
}
