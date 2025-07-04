import { motion } from "motion/react";


const Hero = () => {

    const handleDownload = () => {
        const link = document.createElement("a");
        link.href = "/cv.pdf"; // путь к файлу
        link.download = "Meyliboyev_CV.pdf"; // имя при скачивании
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <section className="h-[calc(100vh-80px)] flex flex-col items-center justify-center gap-4 pt-10 c-space">
            <svg xmlns="http://www.w3.org/2000/svg" width="284" height="182" viewBox="0 0 284 182" fill="none">
                <path
                    d="M48 158.2L59.5996 135.4H63.5996V181.8H58.5996V146.8L48.5996 165.6H46.5996L37.2002 147V181.8H32.4004V135.4H36.5996L48 158.2ZM143.2 135.4C148.267 135.4 152.066 136.4 154.6 138.4C157.266 140.4 158.6 143.2 158.6 146.8C158.6 149.066 158 151.133 156.8 153C155.466 154.867 153.733 156.2 151.6 157C154.266 157.933 156.4 159.466 158 161.6C159.6 163.866 160.4 166.267 160.4 168.8C160.4 172.8 158.933 176 156 178.4C153.2 180.667 148.867 181.8 143 181.8H130V135.4H143.2ZM242.8 158L253 135.4H258.6L245.4 163.6V181.8H239.8V163.6L225.4 135.4H231.4L242.8 158ZM135 177.2H144C151.2 177.2 154.8 174.267 154.8 168.4C154.8 162.134 150.733 159 142.6 159H135V177.2ZM135 154.6H142.4C149.733 154.6 153.4 152.133 153.4 147.2C153.4 145.067 152.533 143.333 150.8 142C149.2 140.533 146.667 139.8 143.2 139.8H135V154.6ZM18 118H0V0H18V118ZM42 118H24V0H42V118ZM54 118H48V0H54V118ZM66 118H60V0H66V118ZM90 118H84V0H90V118ZM103 118H97V0H103V118ZM127 118H109V0H127V118ZM139 118H133V0H139V118ZM163 118H157V0H163V118ZM187 118H169V0H187V118ZM212 118H194V0H212V118ZM236 118H230V0H236V118ZM260 118H242V0H260V118ZM272 118H266V0H272V118ZM284 118H278V0H284V118Z"
                    fill="white"/>
            </svg>
            {/*<motion.button*/}
            {/*    onClick={handleDownload}*/}
            {/*    whileHover={{y: -5}}*/}
            {/*    whileTap={{scale: 1.05}}*/}
            {/*    className="flex justify-center gap-2 relative py-4 text-sm text-center rounded-full font-extralight bg-[#027a5c] w-80 cursor-pointer overflow-hidden"*/}
            {/*>Download CV*/}
            {/*    <img src='/assets/logos/arrow-small-down.svg' className="w-5 h-5" alt='CV'/>*/}
            {/*</motion.button>*/}
        </section>
    );
};

export default Hero;
