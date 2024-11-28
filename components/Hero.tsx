import { FaLocationArrow } from "react-icons/fa";
import MagicButton from "./ui/MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import { FloatingDockDemo } from "./FloatingDockDemo";

const Hero = () => {
  return (
    <div className="pb-2 pt-36">
      {" "}
      {/* Adjusted padding-bottom for more space */}
      {/* Spotlight effects */}
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="top-10 -left-full h-[80vh] w-[50vw]"
          fill="purple"
        />
        <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="blue" />
      </div>
      <div className="absolute z-0">
        {" "}
        {/* Ensure this stays in the flow of the layout */}
        <div
          className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] 
        bg-grid-black/[0.2] flex items-center justify-center"
        >
          {/* Radial gradient for the container */}
        </div>
      </div>
      <div className="flex justify-center relative my-32 z-10">
        {" "}
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <h2 className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
            Portfolio Website built with React, Next JS, and Tailwind CSS
          </h2>

          <TextGenerateEffect
            className="text-center text-[60px] md:text-7xl lg:text-8xl"
            words="SARTHAK JHA"
          />

          <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
            Hi I&apos;m Sarthak, a Final Year Computer Science Student at the
            University of Liverpool!
          </p>

          {/* <a href="#about">
            <MagicButton
              title="Show my work"
              icon={<FaLocationArrow />}
              position={"left"}
            />
          </a>*/}

          <FloatingDockDemo />

          <h1 className="uppercase tracking-widest text-5xl text-center text-blue-100 max-w-80 mt-10">
            {" "}
            My Skills{" "}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Hero;
