// pages/Certificates.tsx
import { certificates } from "../../data/data";
import ClientCertificate from "./ClientCertificate";

export default function Certificate() {
  return (
    <div className="h-full relative w-full flex flex-col items-center justify-center overflow-hidden rounded-md">
      <div className="max-w-screen-xl px-6 md:px-10 mx-auto relative z-10" id="about">
        <h1
          className="heading mt-20 mb-10 text-center tracking-wide leading-relaxed"
          id="certificate"
        >
          Certificates
        </h1>
        {/* Kirim data certificates ke Client Component */}
        <ClientCertificate certificates={certificates} />
      </div>
    </div>
  );
}