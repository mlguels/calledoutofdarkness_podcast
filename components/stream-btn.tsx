import Link from "next/link";

export default function StreamButton() {
  return (
    <Link
      href="/"
      className="uppercase bg-green px-8 py-4 rounded-2xl border-black border-[1px] whitespace-nowrap"
    >
      Stream the latest episode here
    </Link>
  );
}
