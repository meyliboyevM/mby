import "react";
import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import Footer from './sections/Footer';
import About from "./sections/About";
import Experiences from "./sections/Experiences.jsx";

const App = () => {
    return (
        <div className="container mx-auto max-w-7xl">
            <Navbar/>
            <Hero/>
            <About/>
            <Experiences/>
            <Footer/>
        </div>
    );
};

export default App;
