import { SparklesCore } from "../../components/ui/sparkles";
import PhotoCard from "../ui/photocard";

export default function About() {
  return (
    <div className="h-full relative w-full bg-black flex flex-col items-center justify-center rounded-md">
      <div className="w-full absolute inset-0 h-screen">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={120}
          className="h-full"
          particleColor="#60AFFF"
        />
      </div>

      <div className="max-w-screen-xl px-6 md:px-10 mx-auto" id="about">
        <h1 className="heading mt-20 text-center tracking-wide" data-aos="fade">
          Get to Know Me
        </h1>

        <div
          className="mt-20 flex flex-col lg:flex-row gap-10 lg:gap-20"
          data-aos="fade-up"
        >
          {/* Photo Section */}
          <div className="lg:w-1/3 flex justify-center items-center order-1 lg:order-2 mx-auto">
            <div className="-mt-20 w-4/5 sm:w-1/2 md:w-1/3 lg:w-4/5">
              <PhotoCard />
            </div>
          </div>

          {/* Description Section */}
          <div className="lg:w-1/2 order-2 lg:order-2">
            <div>
              <h2 className="text-2xl font-bold heading text-left md:text-2xl mb-4">
                Hello! My name is Marcelino
              </h2>
              <p className="md:text-lg font-medium text-white">
              I am a second-year Software Engineering student at Universitas Gadjah Mada, 
              passionate about modern web development and continuously enhancing my skills. 
              I have hands-on experience with front-end technologies such as Next.js, React, and Tailwind CSS 
              to craft responsive and interactive user interfaces. Currently, I am expanding my expertise in full-stack development, 
              specializing in Laravel to design functional and reliable back-end systems.
              </p>

              <p className="mt-4 md:text-lg font-medium text-white">
              Driven by a strong interest in solving real-world problems through technology, 
              I enjoy exploring new tools and applying them to impactful projects. 
              I am always open to collaborating, learning, and contributing to meaningful digital solutions. <br/>Let’s connect and exchange ideas!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
