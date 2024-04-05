import { lora } from "@/app/layout";
import Link from "next/link";

export default function StreamButton() {
  return (
    <Link href="/">
      <button
        className={`${lora.className} uppercase bg-green text-[10px] md:text-lg px-auto md:px-8 py-3 md:py-4 rounded-lg md:rounded-2xl border-black border-[1px] whitespace-nowrap w-full`}
      >
        Stream the latest episode here
      </button>
    </Link>
  );
}
