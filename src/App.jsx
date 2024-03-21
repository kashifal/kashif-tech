import "./App.css";
import Wrap from "./components/Wrap";
import HeroSection from "./components/HeroSection";
import Nav from "./components/Nav";
import Projects from "./components/Projects";
import GoToTop from "./components/GoToTop";
import Education from "./components/Education";

import Stacks from "./components/Stacks";
import Footer from "./components/Footer";
import Socials from "./components/Socials";
import Modal from "./components/Modal";
import kashif from "./assets/kashifFrontend.pdf";
import Experience from "./components/Experience";
import Experiences from "./components/Experiences";
import { motion, useScroll } from "framer-motion";
import { scroll } from "framer-motion";
import Fiverr from "./components/Fiverr";
import Upwork from "./components/Upwork";

function App() {
  const { scrollYProgress } = useScroll();

  return (
    <>
      <div className="App relative bg-gray-200">
        <motion.div
          className="progress-bar"
          style={{ scaleX: scrollYProgress }}
        />

        <a id="top"></a>
        <Wrap>
          <HeroSection />

          <Nav />

          <Projects />

          <Experiences />

          <Education />

          <Fiverr />

          <Upwork />

          <Stacks />

          <Socials />

          <Footer />
          <a
            href={kashif}
            download
            className="fixed h-10 flex items-center justify-center border border-gray-600 w-10  sm:w-auto sm:px-4  bottom-8 rounded-full right-8"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="sm:w-3 mt-1 sm:h-3 h-4 w-4 text-gray-600 animate-bounce"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3"
              />
            </svg>
            <h1 className="text-gray-600 sm:inline-flex hidden text-sm font-mono px-2">
              Resume
            </h1>
          </a>
        </Wrap>
      </div>
    </>
  );
}

export default App;
