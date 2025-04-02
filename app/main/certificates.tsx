// pages/Certificates.tsx
"use client";
import { useState, useEffect } from "react";
import { certificates } from "../../data/data";
import { HoverEffect } from "../../components/ui/card-hover-effect";
import { SparklesCore } from "../../components/ui/sparkles";
import { MagicButton } from "../../components/ui/button";

export default function Certificate() {
  const [showAll, setShowAll] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const displayedProjects = showAll ? certificates : certificates.slice(0, 6);
  const showMoreButton = certificates.length > 6;

  const handleShowMore = () => {
    setShowAll(true);
  };

  const handleShowLess = () => {
    setShowAll(false);
  };

  if (!mounted) {
    return (
      <div className="h-full relative w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
        <div className="max-w-screen-xl px-6 md:px-10 mx-auto" id="about">
          <h1
            className="heading mt-20 mb-10 text-center tracking-wide leading-relaxed"
            id="certificate"
          >
            Certificates
          </h1>
          <div className="max-w-9xl mx-auto px-8">
            <HoverEffect items={certificates.slice(0, 6)} />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="h-full relative w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
      <div className="w-full absolute inset-0 h-full z-0">
        <SparklesCore
          id="tsparticlesfullpages3"
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={20}
          className="h-full w-full"
          particleColor="#60AFFF"
        />
      </div>
      <div className="max-w-screen-xl px-6 md:px-10 mx-auto relative z-10" id="about">
        <h1
          className="heading mt-20 mb-10 text-center tracking-wide leading-relaxed"
          id="certificate"
        >
          Certificates
        </h1>
        <div className="max-w-9xl mx-auto px-8">
          <HoverEffect items={displayedProjects} />
          <div className="flex justify-center mt-10 mb-16">
            {showMoreButton && !showAll ? (
              <MagicButton onClick={handleShowMore} title="Show More" />
            ) : showAll ? (
              <MagicButton onClick={handleShowLess} title="Show Less" />
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}