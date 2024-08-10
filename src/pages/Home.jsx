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
      <div className="App relative bg-[#FCDC02]">
        <a id="top"></a>
        <Wrap>
          <div className=" grid   grid-cols-1   md:gap-4">
            <div className="space-y-4">
              <HeroSection />
              <Modal />
              <Nav />
              <div className="space-y-4">
                <Projects />
                <Experiences />
              </div>
              <Education />

              {/* <Fiverr /> */}

              {/* <Upwork /> */}

              <Stacks />
            </div>
          </div>

          <div className="py-3"></div>
          <Footer />
        </Wrap>
      </div>
    </>
  );
}

export default Home;
