type HeroHeadingProps = {
  text: string;
};

export default function HeroHeading({ text }: HeroHeadingProps) {
  return (
    <h2 className="text-6xl md:text-8xl font-marxiana text-brown-primary tracking-tighter">
      {text}
    </h2>
  );
}
