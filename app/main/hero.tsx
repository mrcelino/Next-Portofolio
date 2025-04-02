import WordPullUp from "../../components/ui/word-pull-up";
import MorphingText from "../../components/ui/morphing-text";
import Link from "next/link";
import { SparklesCore } from "../../components/ui/sparkles";
import { MagicButton } from "../../components/ui/button"

const texts = [
  "Front End Developer",
  "Software Engineering Student",
  "Web Development Enthusiast",
];

export function MorphingTextDemo() {
  return <MorphingText texts={texts} className="mt-4 md:mt-0 text-sky-400 text-sm md:text-base" />;
}

export default function Hero() {
  return (
    <div className="h-screen w-full bg-black flex flex-col items-center justify-center relative overflow-hidden rounded-md">
      {/* Sparkles sebagai background */}
      <div className="w-full absolute inset-0 h-full">
        <SparklesCore
          id="tsparticlesfullpages2"
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={100}
          className="h-full"
          particleColor="#60AFFF"
        />
      </div>

      {/* Hero Section */}
      <div className="text-center"> {/* Gunakan z-10 agar konten tetap di atas background */}
        <h2 className="text-slate-200 font-bold text-[10px] md:text-sm">
          Personal Portofolio
        </h2>
        <h1 className="heading text-6xl md:text-9xl font-bold tracking-wider italic">
          Marcelino
        </h1>
        <WordPullUp
          className="text-base mt-2 md:mt-0 md:text-xl font-bold tracking-[-0.02em] text-white text-opacity-80 md:leading-[5rem] italic"
          words="Code Meets Tomorrow"
        />
        <MorphingTextDemo />
        <Link href="#contact">
          <MagicButton
            title="Contact me"
          />
        </Link>
      </div>
    </div>
  );
}

