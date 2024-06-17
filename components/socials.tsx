import Image from "next/image";
import Link from "next/link";

import { lora, socialLinks } from "@/constant/constants";

export default function Socials() {
  return (
    <main className="flex gap-4 items-center">
      <h1 className={`${lora.className} text-3xl`}>Socials</h1>
      <ul className="flex gap-2 items-center">
        {socialLinks.map((social, i) => (
          <li key={i} className="state-effect">
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
        <a
          href="mailto:calledoutofdarkness.podcast@gmail.com"
          className="state-effect"
        >
          <Image
            src="/images/envelope.png"
            alt="email icon"
            width={45}
            height={25}
          />
        </a>
      </ul>
    </main>
  );
}
