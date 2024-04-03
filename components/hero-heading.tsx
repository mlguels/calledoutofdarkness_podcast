import { lora } from "@/app/layout";

type HeroHeadingProps = {
  text: string;
};

export default function HeroHeading({ text }: HeroHeadingProps) {
  return (
    <h2
      className={`${lora.className} text-6xl md:text-8xl text-brown-primary tracking-tighter`}
    >
      {text}
    </h2>
  );
}
