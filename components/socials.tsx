import Image from "next/image";
import Link from "next/link";

import { lora, socialLinks } from "@/constant/constants";

export default function Socials() {
  return (
    <main className="flex gap-4">
      <h1 className={`${lora.className} text-3xl`}>Socials</h1>
      <ul className="flex gap-2">
        {socialLinks.map((social, i) => (
          <li key={i}>
            <Link href={social.link} target="_blank">
              <Image
                src={social.icon}
                alt="social icon"
                width={40}
                height={25}
              />
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
