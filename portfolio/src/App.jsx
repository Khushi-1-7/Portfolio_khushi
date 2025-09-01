import { useState } from "react"; 
import './App.css';
import { Navbar } from './components/sections/Navbar.jsx';
import { LoadingScreen } from './components/sections/LoadingScreen.jsx';
import './index.css';
import { MobileMenu } from './components/mobileMenu.jsx';
import { Home } from './components/sections/Home.jsx';
import { About } from "./components/sections/About.jsx";
import { Projects } from "./components/sections/Projects.jsx";
import { RevealOnScroll } from './components/RevealOnScroll.jsx';
import { Contact } from "./components/sections/Contact.jsx";


function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}
        <div
        className={`min-h-screen transition-opacity duration-700 ${isLoaded ? "opacity-100" : "opacity-0"} bg-black text-gray-100`}>
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Home />
        <About />
        <Projects />
        <RevealOnScroll/>
        <Contact />
      </div>
      
    </>
  );
}

export default App;
