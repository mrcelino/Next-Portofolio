import Image from "next/image";
import { techStack } from "../../data/data";
import { BorderBeam } from "../../components/ui/border-beam";
function TechStack() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-x-8 gap-y-2">
      {techStack.map((tech) => (
        <div
          key={tech.id}
          data-aos="fade-up"
          className="flex flex-col items-center group mb-14"
        >
          <div className="relative rounded-full cursor-pointer">
            {/* Lingkaran dengan border */}
            <div className="bg-slate-900 group-hover:bg-opacity-70 group-hover:scale-110 rounded-full w-32 h-32 flex items-center justify-center p-7 transition-transform duration-300">
              <Image
                width={100}
                height={100}
                src={tech.image}
                alt={tech.name}
              />
            </div>
            {/* Border tambahan animasi */}
            <BorderBeam
              size={100}
              duration={12}
              delay={9}
              colorFrom="#FFF7D1"
              colorTo="#8B5DFF"
            />
          </div>
          <h2 className="mt-2 text-center font-bold text-white">{tech.name}</h2>{" "}
        </div>
      ))}
    </div>
  );
}

export default function Skills() {
  return (
    <div className="h-full relative w-full flex flex-col items-center justify-center overflow-hidden rounded-md">
      <div className="max-w-screen-xl px-6 md:px-10 mx-auto" id="about">
        <h1
          className="heading mt-20 mb-20 text-center tracking-wide leading-relaxed"
          data-aos="fade"
          id="skills"
        >
          Tech Stack
        </h1>

        <TechStack />
      </div>
    </div>
  );
}
