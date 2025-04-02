// main/Hero.tsx
import WordPullUp from "../../components/ui/word-pull-up";
import MorphingText from "../../components/ui/morphing-text";
import Link from "next/link";
import { MagicButton } from "../../components/ui/button";

const texts = [
  "Front End Developer",
  "Software Engineering Student",
  "Web Development Enthusiast",
];

export function MorphingTextDemo() {
  return <MorphingText texts={texts} className="mt-4 md:mt-0 text-sky-400 text-sm md:text-2xl" />;
}

export default function Hero() {
  return (
    <div className="h-screen w-full flex flex-col items-center justify-center relative overflow-hidden rounded-md">
      {/* Konten Hero */}
      <div className="text-center relative z-10">
        <h2 className="text-slate-200 font-bold text-[10px] md:text-sm">
          Personal Portfolio
        </h2>
        <h1 className="heading text-6xl md:text-9xl font-bold tracking-wider italic">
          Marcelino
        </h1>
        <WordPullUp
          className="text-base mt-2 md:mt-0 md:text-xl font-bold tracking-[-0.02em] text-white text-opacity-80 md:leading-[5rem] italic"
          words="Innovate with Code"
        />
        <MorphingTextDemo />
        <Link href="#contact">
          <MagicButton title="Contact me" />
        </Link>
      </div>
    </div>
  );
}