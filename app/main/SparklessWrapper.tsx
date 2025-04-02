"use client";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Sparkles from "./Sparkless";

export default function SparklesWrapper({ children }: { children: React.ReactNode }) {
  const [isDesktop, setIsDesktop] = useState(true);

  // Menentukan apakah perangkat adalah desktop atau mobile
  useEffect(() => {
    const checkDevice = () => {
      setIsDesktop(window.innerWidth > 768); // Tampilkan Sparkles hanya di layar lebih besar dari 768px
    };
    checkDevice();
    window.addEventListener("resize", checkDevice); // Memperbarui saat ukuran layar berubah
    return () => window.removeEventListener("resize", checkDevice);
  }, []);

  // Inisialisasi AOS di klien
  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  return (
    <div className="relative min-h-screen w-full">
      {/* Lapisan background hitam */}
      <div className="absolute inset-0 h-full w-full bg-black z-[-2]"></div>

      {/* Tampilkan Sparkles hanya jika perangkat adalah desktop */}
      {isDesktop && <Sparkles />}

      {/* Konten utama di depan SparklesCore */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
