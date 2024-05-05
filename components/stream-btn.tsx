import Link from "next/link";

import { lora } from "@/constant/constants";

export default function StreamButton() {
  return (
    <Link
      href="https://podcasters.spotify.com/pod/show/calledoutofdarkness"
      target="_blank"
    >
      <button
        className={`${lora.className} uppercase bg-green-primary text-[10px] md:text-lg px-auto md:px-8 py-3 md:py-4 rounded-lg md:rounded-2xl border-black border-[1px] whitespace-nowrap w-full state-effect`}
      >
        Stream the latest episode here
      </button>
    </Link>
  );
}
