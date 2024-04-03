import Link from "next/link";

export default function StreamButton() {
  return (
    <Link
      href="/"
      className="w-full uppercase bg-green px-6 py-4 rounded-2xl border-black border-[1px]"
    >
      Stream the latest episode here
    </Link>
  );
}
