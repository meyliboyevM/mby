import {useState} from "react";
import Project from "../components/Project";
import {myProjects, sideProjects} from "../constants";
import {motion, useMotionValue, useSpring} from "motion/react";

const Projects = () => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const springX = useSpring(x, {damping: 10, stiffness: 50});
    const springY = useSpring(y, {damping: 10, stiffness: 50});
    const handleMouseMove = (e) => {
        x.set(e.clientX + 20);
        y.set(e.clientY + 20);
    };
    const [preview, setPreview] = useState(null);
    return (
        <>
            {/*   Featured Projects   */}
            <section
                onMouseMove={handleMouseMove}
                className="relative c-space section-spacing pt-10"
                id="projects"
            >
                <h2 className="text-3xl font-bold tracking-wide text-primary-400">Featured Projects</h2>
                <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent h-[1px] w-full"/>
                {myProjects.map((project) => (
                    <Project key={project.id} {...project} setPreview={setPreview}/>
                ))}
                {preview && (
                    <motion.img
                        className="hidden sm:block fixed top-0 left-0 z-50 object-cover h-56 rounded-lg shadow-lg pointer-events-none w-80"
                        src={preview}
                        style={{x: springX, y: springY}}
                    />
                )}
            </section>

               {/*Side Projects   */}
            <section
                onMouseMove={handleMouseMove}
                className="relative c-space"
                id="projects"
            >
                <h2 className="text-2xl font-semibold text-neutral-400 mt-10">Side Projects</h2>
                <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent h-[1px] w-full"/>
                {sideProjects.map((project) => (
                    <Project key={project.id} {...project} setPreview={setPreview}/>
                ))}
                {preview && (
                    <motion.img
                        className="hidden sm:block fixed top-0 left-0 z-50 object-cover h-56 rounded-lg shadow-lg pointer-events-none w-80"
                        src={preview}
                        style={{x: springX, y: springY}}
                    />
                )}
            </section>
        </>
    );
};

export default Projects;
