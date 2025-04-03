"use client";
import React, { JSX, useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();
  const [borderVisible, setBorderVisible] = useState(false);
  const [glowIntensity, setGlowIntensity] = useState(3);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      if (scrollYProgress.get() < 0.05) {
        setBorderVisible(false);
        setGlowIntensity(3);
      } else {
        setBorderVisible(true);
        setGlowIntensity(8);
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{
          opacity: 1,
          y: 0,
          width: isMobile ? "80%" : "50%",
          backdropFilter: `blur(5px)`,
          boxShadow: `0 0 ${glowIntensity}px 2px rgba(96, 175, 255, 0.5)`,
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className={cn(
          "flex fixed top-10 inset-x-0 mx-auto rounded-full bg-[#0A1021]/50 shadow-lg z-[5000] px-8 py-5 items-center",
          "backdrop-blur-md",
          isMobile ? "justify-between" : "justify-center space-x-4", // Kondisional justify
          className
        )}
        style={{
          border: borderVisible ? "2px solid rgba(96, 175, 255, 0.7)" : "none",
          transition: "border 0.3s ease-in-out",
        }}
        whileInView={{
          boxShadow: [
            `0 0 ${glowIntensity}px 2px rgba(96, 175, 255, 0.5)`,
            `0 0 ${glowIntensity + 10}px 6px rgba(96, 175, 255, 0.7)`,
            `0 0 ${glowIntensity}px 2px rgba(96, 175, 255, 0.5)`,
          ],
          transition: {
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }}
      >
        {navItems.map((navItem: any, idx: number) => (
          <motion.div
            key={`link-${idx}`}
            whileHover={{
              scale: 1.1,
              rotate: 10,
            }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="relative"
          >
            <Link
              href={navItem.link}
              className={cn(
                "relative dark:text-neutral-50 items-center flex space-x-1 text-white dark:hover:text-neutral-300 hover:text-neutral-500"
              )}
            >
              <span className="block sm:hidden">{navItem.icon}</span>
              <span className="hidden sm:block text-sm">{navItem.name}</span>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </AnimatePresence>
  );
};