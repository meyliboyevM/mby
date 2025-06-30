import "react";
import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import Footer from './sections/Footer';

const App = () => {
  return (
    <div className="container mx-auto max-w-7xl">
      <Navbar />
      <Hero />
      <Footer/>
    </div>
  );
};

export default App;
