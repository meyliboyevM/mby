import { useRef } from "react";
import { Globe } from "../components/globe";
import CopyEmailButton from "../components/CopyEmailButton";
import { FrameWorks } from "../components/FrameWorks";

const About = () => {
  const grid2Container = useRef();
  return (
    <section className="pt-14 c-space section-spacing" id="about">
      <h2 className="text-heading">About Me</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12">
        {/* Grid 1 */}
        <div className="flex items-end grid-default-color grid-1">
          <video
              src="assets/about/grid-1.1.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="absolute md:scale-[3] left-0 md:inset-y-10 lg:scale-[1.15] !rounded-xl"
          />
          <div className="z-10">
            <p className="headtext">Hi, I&#39;m Meyliboy Meyliboyev</p>
            <p className="subtext">
              2 years of hands-on experience in web development — frontend to backend.
            </p>
          </div>
          <div className="absolute inset-x-0 pointer-evets-none -bottom-4 h-1/2 sm:h-1/3 bg-gradient-to-t from-indigo" />
        </div>
        {/* Grid 2 */}
        <div className="grid-default-color grid-2">
          <div
            ref={grid2Container}
            className="flex items-center justify-center w-full h-full"
          >
            <p className="flex items-end text-5xl text-gray-500 text-center">
              Engineering the Web Experience
            </p>
            {/*<Card*/}
            {/*  style={{ rotate: "75deg", top: "30%", left: "20%" }}*/}
            {/*  text="RXJS"*/}
            {/*  containerRef={grid2Container}*/}
            {/*/>*/}
            {/*<Card*/}
            {/*  style={{ rotate: "-30deg", top: "60%", left: "45%" }}*/}
            {/*  text="ZUSTAND"*/}
            {/*  containerRef={grid2Container}*/}
            {/*/>*/}
            {/*<Card*/}
            {/*  style={{ rotate: "90deg", bottom: "30%", left: "70%" }}*/}
            {/*  text="Design Patterns"*/}
            {/*  containerRef={grid2Container}*/}
            {/*/>*/}
            {/*<Card*/}
            {/*  style={{ rotate: "-45deg", top: "55%", left: "0%" }}*/}
            {/*  text="Design Principles"*/}
            {/*  containerRef={grid2Container}*/}
            {/*/>*/}
            {/*<Card*/}
            {/*  style={{ rotate: "20deg", top: "10%", left: "38%" }}*/}
            {/*  text="SRP"*/}
            {/*  containerRef={grid2Container}*/}
            {/*/>*/}
            {/*<Card*/}
            {/*  style={{ rotate: "30deg", top: "70%", left: "70%" }}*/}
            {/*  image="assets/logos/csharp-pink.png"*/}
            {/*  containerRef={grid2Container}*/}
            {/*/>*/}
            {/*<Card*/}
            {/*  style={{ rotate: "-45deg", top: "70%", left: "25%" }}*/}
            {/*  image="assets/logos/dotnet-pink.png"*/}
            {/*  containerRef={grid2Container}*/}
            {/*/>*/}
            {/*<Card*/}
            {/*  style={{ rotate: "-45deg", top: "5%", left: "10%" }}*/}
            {/*  image="assets/logos/blazor-pink.png"*/}
            {/*  containerRef={grid2Container}*/}
            {/*/>*/}
          </div>
        </div>
        {/* Grid 3 */}
        <div className="grid-black-color grid-3">
          <div className="z-10 w-[50%]">
            <p className="headtext">Time Zone</p>
            <p className="subtext">
              Broadcasting from Mars — collaborating with Earth, remotely and globally
            </p>
          </div>
          <figure className="absolute left-[30%] top-[10%]">
            <Globe />
          </figure>
        </div>
        {/* Grid 4 */}
        <div className="grid-special-color grid-4">
          <div className="flex flex-col items-center justify-center gap-4 size-full">
            <p className="text-center headtext">
              Let’s build something great together!
            </p>
            <CopyEmailButton />
          </div>
        </div>
        {/* Grid 5 */}
        <div className="grid-default-color grid-5">
          <div className="z-10 w-[50%]">
            <p className="headText">Teck Stack</p>
            <p className="subtext">
              I work with React, Angular, Node.js, PostgreSQL and more.
            </p>
            <p className="subtext">
              Building full-stack apps with clean UI, scalable architecture, and great UX.
            </p>
          </div>
          <div className="absolute inset-y-0 md:inset-y-9 w-full h-full start-[50%] md:scale-125">
            <FrameWorks />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
