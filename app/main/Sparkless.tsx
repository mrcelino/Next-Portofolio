// main/Sparkles.tsx
import { SparklesCore } from "@/components/ui/sparkles";

export default function Sparkles() {
  return (
    <div className="absolute inset-0 h-full w-full z-[-1] pointer-events-none">
      <SparklesCore
        id="tsparticlesfullpage"
        background="transparent"
        minSize={0.4}
        maxSize={1}
        particleDensity={20}
        className="h-full w-full"
        particleColor="#60AFFF"
      />
    </div>
  );
}
