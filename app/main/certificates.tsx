import { HoverEffect} from "../../components/ui/card-hover-effect";
import { SparklesCore } from "../../components/ui/sparkles";
export default function Certificate() {
  return (
    <div className="h-full relative w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
      {/* <div className="w-full absolute inset-0 h-full">
        <SparklesCore
          id="tsparticlesfullpages3"
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={200}
          className="h-full"
          particleColor="#60AFFF"
        />
      </div> */}

      <div className="max-w-screen-xl px-6 md:px-10 mx-auto" id="about">
        <h1
          className="heading mt-20 mb-10 text-center tracking-wide leading-relaxed"
          data-aos="fade"
          id="certificate"
        >
          Certificates
        </h1>

        <div className="max-w-9xl mx-auto px-8">
          <HoverEffect items={projects} />
        </div>
      </div>
    </div>
  );
}
export const projects = [
  {
    title: "Codepolitan",
    description: "React Hook and Data Fetching",
    url: "/images/reacthook.png",
    link: "https://www.codepolitan.com/c/YBVWTTF/", // Tambahkan link
  },
  {
    title: "Codepolitan",
    description: "ReactJS Fundamental",
    url: "/images/reactjs.png",
    link: "https://www.codepolitan.com/c/IYMYSEB/",
  },
  {
    title: "Codepolitan",
    description: "ReactJS: Exploring Components",
    url: "/images/komponen.png",
    link: "https://www.codepolitan.com/c/L37MT9V/",
  },
  {
    title: "Codepolitan",
    description: "ReactJS: State Management",
    url: "/images/reactstate.png",
    link: "https://www.codepolitan.com/c/CDN6NI5/",
  },
  {
    title: "Codepolitan",
    description: "Javascript OOP",
    url: "/images/oop.png",
    link: "https://www.codepolitan.com/c/ZWB5K9R/",
  },
  {
    title: "Dicoding",
    description: "Pemrograman Javascript",
    url: "/images/JS.png",
    link: "https://www.dicoding.com/certificates/1OP8NJGYVXQK",
  },
  {
    title: "Dicoding",
    description: "Dasar Pemrograman Web",
    url: "/images/Web.png",
    link: "https://www.dicoding.com/certificates/4EXGQYGV9ZRL",
  },
  {
    title: "Dicoding",
    description: "Dasar Artificial intelligence",
    url: "/images/AI.png",
    link: "https://www.dicoding.com/certificates/JLX175N65X72",
  },
  {
    title: "Dicoding",
    description: "Dasar Data Science",
    url: "/images/Data Science.png",
    link: "https://www.dicoding.com/certificates/07Z6W48KYZQR",
  },
  {
    title: "Dicoding",
    description: "Dasar Machine Learning",
    url: "/images/ML.png",
    link: "https://www.dicoding.com/certificates/1RXY1E74KPVM",
  },
  {
    title: "Dicoding",
    description: "Dasar Visualisasi Data",
    url: "/images/Visualisasi Data.png",
    link: "https://www.dicoding.com/certificates/4EXGKQDYEZRL",
  },
  {
    title: "Dicoding",
    description: "Pemrograman Prosedural - Python",
    url: "/images/Pemrograman Prosedural.png",
    link: "https://www.dicoding.com/certificates/1OP8N2VYQXQK",
  },
  {
    title: "Dicoding",
    description: "Pemrograman dengan Python",
    url: "/images/Python.png",
    link: "https://www.dicoding.com/certificates/53XEYQ9D9PRN",
  },
  {
    title: "Dicoding",
    description: "Dasar menjadi Software Developer",
    url: "/images/Software Developer.png",
    link: "https://www.dicoding.com/certificates/EYX4YJ16RZDL",
  },
  {
    title: "Dicoding",
    description: "Dasar Git dengan Github",
    url: "/images/Git.png",
    link: "https://www.dicoding.com/certificates/GRX52OWMRX0M",
  },
  {
    title: "Dicoding",
    description: "Dasar Structured Query Language",
    url: "/images/SQL.png",
    link: "https://www.dicoding.com/certificates/1RXY012KKZVM",
  },
  {
    title: "Dicoding",
    description: "Dasar Manajemen Proyek",
    url: "/images/Manajemen Proyek.png",
    link: "https://www.dicoding.com/certificates/JLX127806Z72",
  },
];
