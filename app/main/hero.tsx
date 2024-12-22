import WordPullUp from "../../components/ui/word-pull-up";
import MorphingText from "../../components/ui/morphing-text";
import { Vortex } from "../../components/ui/vortex";
import Link from "next/link";
import { Button, MagicButton } from "../../components/ui/button"

const texts = [
  "Front End Developer",
  "Software Engineering Student",
  "Web Development Enthusiast",
];

export function MorphingTextDemo() {
  return <MorphingText texts={texts} className="mt-4 md:mt-0 text-sky-400 md:text-xl" />;
}

export default function Hero() {
  return (
    <div className="w-full mx-auto rounded-md  h-screen overflow-hidden" id="home">
      <Vortex
        backgroundColor="black"
        // rangeY={100}
        particleCount={1000}
        baseSpeed={10}
        rangeSpeed={20}
        className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full"
      >
        <h2 className="text-slate-200 font-bold text-center text-[10px] md:text-sm" >
            Personal Portofolio
        </h2>
        <h1 className="heading text-6xl md:text-9xl font-bold text-center tracking-wide">
          Marcelino
        </h1>
        <WordPullUp
          className="text-base mt-2 md:mt-0 md:text-3xl font-bold tracking-[-0.02em] text-white text-opacity-80 md:leading-[5rem]"
          words="Crafting Innovative Solutions"
        />
        <MorphingTextDemo />
        <Link href="#contact">
          <MagicButton
                title="Contact me"
              />
        </Link>


        {/* <Button variant="outline"
          className=""
        >
          Contact me
        </Button> */}
      </Vortex>
    </div>
  );
}
