import { Vortex } from "../../components/ui/vortex";
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";

const buttonData = [
  { id: 1, icon: <FaGithub size={20} />, label: "Github", link: "https://github.com/mrcelino" },
  { id: 2, icon: <FaLinkedin size={20} />, label: "LinkedIn", link: "https://www.linkedin.com/in/marcelino1/" },
  { id: 3, icon: <FaInstagram size={20} />, label: "Instagram", link: "#" },
  { id: 4, icon: <FaEnvelope size={20} />, label: "Email", link: "mailto:marcelino@mail.ugm.ac.id" },
];
export default function Contact() {
  return (
    <div className="w-full mx-auto rounded-md  h-screen overflow-hidden">
      <Vortex
        backgroundColor="black"
        // rangeY={100}
        particleCount={300}
        className="flex flex-col justify-center px-2 md:px-10 py-4 w-full h-full"
      >
        <div className="max-w-screen-xl px-6 md:px-10 mx-auto" id="about">
          <h1
            className="heading text-center tracking-wide leading-relaxed"
            data-aos="fade"
            id="contact"
          >
            Got Ideas? Let&apos;s Talk!
          </h1>
          <p className="text-center text-slate-200" data-aos="fade">
            Always excited about fresh opportunities. Let&apos;s connect if you'd
            like to work together!
          </p>

          <div className="grid grid-cols-2 gap-6 mt-6">
            {buttonData.map((button) => (
              <div
                key={button.id}
                data-aos="fade"
                className="flex items-center justify-center gap-2 py-3 px-6 rounded-lg bg-[#24292e] text-white shadow-md shadow-blue-900/10 hover:shadow-lg hover:shadow-blue-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
              >
                {button.icon}
                <a href={button.link} className="text-sm font-semibold">
                  {button.label}
                </a>
              </div>
            ))}
          </div>

          <p className="text-slate-200 text-sm md:text-base text-center absolute bottom-0 left-0 right-0 mb-4">
            © 2024 Marcelino. All rights reserved.
          </p>
        </div>
      </Vortex>
    </div>
  );
}
