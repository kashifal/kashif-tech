import "../App.css";
import Wrap from "../components/Wrap";
import HeroSection from "../components/HeroSection";
import Nav from "../components/Nav";
import Projects from "../components/Projects";
import GoToTop from "../components/GoToTop";
import Education from "../components/Education";

import Stacks from "../components/Stacks";
import Footer from "../components/Footer";
import Socials from "../components/Socials";
import Modal from "../components/Modal";
import kashif from "../assets/kashifFrontend.pdf";
import Experience from "../components/Experience";
import Experiences from "../components/Experiences";
import { motion, useScroll } from "framer-motion";
import { scroll } from "framer-motion";
import Fiverr from "../components/Fiverr";
import Upwork from "../components/Upwork";

function Home() {
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
          <div className="pb-8"></div>

          {/* <Upwork /> */}

          <Stacks />

          {/* <Socials /> */}
          <div className="py-6"></div>
          <Footer />
        </Wrap>
      </div>
    </>
  );
}

export default Home;
