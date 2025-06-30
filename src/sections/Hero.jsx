import HeroText from "../components/HeroText";
import ParallaxBackground from "../components/ParallaxBackground";

const Hero = () => {
  return (
    <section className="flex min-h-screen overflow-hidden items-center justify-center c-space">
      <HeroText />
      <ParallaxBackground />
    </section>
  );
};

export default Hero;
