// components/ClientCertificate.tsx
"use client";
import { useState, useEffect } from "react";
import { HoverEffect } from "../../components/ui/card-hover-effect";
import { MagicButton } from "../../components/ui/button";

interface ClientCertificateProps {
  certificates: {
    title: string;
    description: string;
    url: string;
    link: string;
  }[];
}

export default function ClientCertificate({ certificates }: ClientCertificateProps) {
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
      <div className="max-w-9xl mx-auto px-8">
        <HoverEffect items={certificates.slice(0, 6)} />
      </div>
    );
  }

  return (
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
  );
}