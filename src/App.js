import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import SocialLinks from "./components/SocialLinks";

function App() {
  return (
    <div>
      <Navbar />
      <div className="pt-20">
        <Home />
        <SocialLinks />
        <About />
        <Portfolio />
        <Experience />
        <Contact />
      </div>
    </div>
  );
}

export default App;
