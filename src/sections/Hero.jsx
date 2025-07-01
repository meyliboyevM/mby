import HeroText from "../components/HeroText";
import ParallaxBackground from "../components/ParallaxBackground";

const Hero = () => {
    return (
        <section className="h-[calc(100vh-80px)] flex items-center justify-center c-space">
            <HeroText/>
            <ParallaxBackground/>

            {/* Gradient Fade Bottom */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-[#0A1D19]" />
        </section>
    );
};

export default Hero;
