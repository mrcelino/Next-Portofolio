import {certificates } from "../../data/data";
import ClientCertificate from "./ClientCertificate";

export default function Certificate() {
  return (
    <div className="h-full relative w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
      <div className="max-w-screen-xl px-6 md:px-10 mx-auto" id="about">
        <h1
          className="heading mt-20 mb-10 text-center tracking-wide leading-relaxed"
          id="certificate"
        >
          Certificates
        </h1>
        <ClientCertificate certificates={certificates} />
      </div>
    </div>
  );
}