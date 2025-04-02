"use client";
import Image from "next/image";
import { projects } from "../../data/data";
import { BorderBeam } from "../../components/ui/border-beam";
import { FaGithub, FaGlobe } from "react-icons/fa";

interface CardProps {
  title: string;
  desc: string;
  image: string;
  web: string;
  linkGithub: string;
  stack: string[];
}

function Card({ title, desc, image, linkGithub, stack, web }: CardProps) {
  const hasWebLink = web && web.trim() !== "";
  const link = hasWebLink ? web : linkGithub;
  const buttonText = hasWebLink ? "Website" : "Github";
  const Icon = hasWebLink ? FaGlobe : FaGithub;
  const buttonColor = hasWebLink ? "bg-[#1E90FF] hover:shadow-blue-500/20" : "bg-[#24292e] hover:shadow-blue-900/20";

  return (
    <div
      data-aos="fade-up"
      data-aos-duration="1000"
      className="card p-4 group max-w-sm mx-4 relative"
    >
      <div className="card-img transition-all duration-500">
        <Image
          src={image}
          width={1920}
          height={1080}
          alt={title}
          className="rounded-lg object-cover w-full h-[192px]"
        />
      </div>
      <div className="h-auto py-2 px-4">
        <h1 className="text-2xl font-bold mb-2 mt-4">{title}</h1>
        <p className="text-slate-500">{desc}</p>
        <div className="flex flex-row pt-2 items-center gap-1">
          {stack.map((tech: string, index: number) => (
            <p
              key={index}
              className="text-xs px-2 py-2 bg-transparent backdrop-blur-lg border border-slate-800 rounded-lg"
            >
              {tech}
            </p>
          ))}
        </div>
        <button
          className={`mt-4 align-middle flex flex-row items-center justify-center gap-2 w-full select-none font-sans font-semibold text-center transition-all text-sm py-3 px-6 rounded-lg ${buttonColor} text-white shadow-md shadow-blue-900/10 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none`}
          type="button"
          onClick={() => window.open(link)}
        >
          <Icon size={20} />
          {buttonText}
        </button>
      </div>
      <BorderBeam
        size={200}
        duration={20}
        delay={9}
        colorFrom="#F3F3E0"
        colorTo="#133E87"
      />
    </div>
  );
}

export default function Projects() {

  return (
    <div className="relative h-full w-full flex flex-col items-center justify-center overflow-hidden rounded-md">
      <div className="max-w-screen-xl px-6 md:px-10 mx-auto" id="about">
        <h1
          className="heading mt-20 text-center tracking-wide leading-relaxed"
          data-aos="fade"
          id="projects"
        >
          Projects
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {projects.map((project, index) => (
            <Card
              web={project.web || ""}
              key={index}
              title={project.title}
              desc={project.desc}
              image={project.image}
              linkGithub={project.linkGithub || ""}
              stack={project.stack}
            />
          ))}
        </div>
      </div>
    </div>
  );
}