import "./App.css";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./containers/home";
import About from "./containers/about";
import Resume from "./containers/resume";
import Contact from "./containers/contact";
import Skills from "./containers/skills";
import Portfolio from "./containers/portfolio";
import Certificates from "./containers/Certificates_temp";
import Navbar from "./components/navBar";
import Particle from "./particle";
import { loadSlim } from "@tsparticles/slim";
import Particles from "@tsparticles/react";
function App() {
  const location = useLocation();
  // console.log(location);

  const handleInit = async (main) => {
    await loadSlim(main);
  };
  const renderParticleJsToHomepage = location.pathname === "/";
  return (
    <div className="App">
      {/* particles js */}

      {renderParticleJsToHomepage && (
        <Particle id="particle" options={Particles} init={handleInit} />
      )}

      {/* navbar */}
      <Navbar />

      {/* main page content */}

      <div className="App__main__page">
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/certificates_temp" element={<Certificates />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;