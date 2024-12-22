"use client";
import Image from "next/image";
import { projects } from "../../data/data"; // import data projects dari data.tsx
import React, { useEffect } from "react";
import { BorderBeam } from "../../components/ui/border-beam";
import { FaGithub } from "react-icons/fa";
import { SparklesCore } from "../../components/ui/sparkles";
import AOS from "aos";
import "aos/dist/aos.css";

function Card({ title, desc, image, linkGithub, stack }: any) {
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
          className="rounded-lg object-cover w-full h-full min-h-[192px]"
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
          className="mt-4 align-middle flex flex-row items-center justify-center gap-2 w-full select-none font-sans font-semibold text-center transition-all text-sm py-3 px-6 rounded-lg bg-[#24292e] text-white shadow-md shadow-blue-900/10 hover:shadow-lg hover:shadow-blue-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
          type="button"
          onClick={() => window.open(linkGithub)}
        >
          <FaGithub size={20} />
          Github
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
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="relative h-full w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
      <div className="w-full absolute inset-0 h-full">
        <SparklesCore
          id="tsparticlesfullpages"
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={200}
          className="h-full"
          particleColor="#60AFFF"
        />
      </div>

      <div className="max-w-screen-xl px-6 md:px-10 mx-auto" id="about">
        <h1
          className="heading mt-20 text-center tracking-wide leading-relaxed"
          data-aos="fade"
          id="projects"
        >
          Projects
        </h1>

        {/* Grid Container for Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {projects.map((project, index) => (
            <Card
              key={index}
              title={project.title}
              desc={project.desc}
              image={project.image}
              linkGithub={project.linkGithub}
              stack={project.stack}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
