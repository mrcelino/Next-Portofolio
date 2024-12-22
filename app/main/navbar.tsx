"use client";
import React from "react";
import { FloatingNav } from "../../components/ui/floating-navbar";
import {
  IconHome,
  IconPhone,
  IconUser,
  IconBrandTinder,
  IconStack2,
  IconCertificate,
} from "@tabler/icons-react";
export default function Navbar() {
  const navItems = [
    {
      name: "Home",
      link: "#home",
      icon: <IconHome className="h-4 w-4 text-white" />,
    },
    {
      name: "About",
      link: "#about",
      icon: <IconUser className="h-4 w-4 text-white" />,
    },
    {
      name: "Skills",
      link: "#skills",
      icon: <IconBrandTinder className="h-4 w-4 text-white" />,
    },
    {
      name: "Projects",
      link: "#projects",
      icon: <IconStack2 className="h-4 w-4 text-white" />,
    },
    {
      name: "Certificates",
      link: "#certificate",
      icon: <IconCertificate className="h-4 w-4 text-white" />,
    },
    {
      name: "Contact",
      link: "#contact",
      icon: <IconPhone className="h-4 w-4 text-white" />,
    },
  ];
  return (
    <div className="relative  w-full">
      <FloatingNav navItems={navItems} />
    </div>
  );
}
