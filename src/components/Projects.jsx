import React from "react";
import { useState } from "react";
import Project from "./Project";
import { motion } from "framer-motion";
import ReactIcon from "../icons/React";
import Vue from "../icons/Vue";
import Tailwindcss from "../icons/Tailwindcss";
import Figma from "../icons/Figma";
import Next from "../icons/Next";

function Projects() {
  const [tab, setTab] = useState("Tailwind");
  const tabs = ["Tailwind", "Vue", "React", "Figma", "Next JS"];

  const projects = [
    {
      id: 1,
      title: "Tawzef",
      year: "2022",
      description:
        " Human resources management services, recruitment & HR consultancy. We offer our clients various HR functions to help them focus on business growth | Tawzef.",
      link: "https://tawzef.com/",
      lang: ["Vue", "Tailwind"],
    },
    {
      id: 1,
      title: "Tubetailor",
      year: "2022",
      description:
        " Tubetailor is a youtube video downloader built using React (Front-end) and Python Flask (Backend) with MongoDB database.",
      link: "https://tubetailor.vercel.app/",
      lang: ["Vue", "Tailwind"],
    },
    {
      id: 2,
      title: "Cyrano",
      year: "2023",
      description:
        "Cyrano is a web app that generates a poem based on the user's input. It uses GPT-2 model to generate the poem.",
      link: "https://cyrano-web.vercel.app/",
      lang: ["Vue", "Tailwind"],
    },
    {
      id: 7,
      title: "Kindship",
      year: "2023",
      description:
        "Kindship is a social media app built using React and Next JS. Conneect with parents who just get it!",
      link: "https://kindship-ui.vercel.app/",
      lang: ["React", "Tailwind"],
    },
    {
      id: 3,
      title: "Dropzey",
      year: "2022",
      description: "Dropzey is a NFT's sharing app built using Vue and Nuxt.",
      link: "https://dropzey.vercel.app/",
      lang: ["Vue", "Tailwind"],
    },
    {
      id: 4,
      title: "Prizepicks",
      year: "2023",
      description: "Prizepicks is a fantasy sports app built using React.",
      link: "https://prizepicks.vercel.app/",
      lang: ["React", "Tailwind"],
    },
  ];
  return (
    <div id="projects" className=" my-8 bg-white px-6 py-6 rounded-lg">
      <div className="font-sans text-3xl k font-black">Projects</div>
      <ul className="flex gap-4 container overflow-x-auto items-center mt-8">
        {tabs.map((mytab, index) => (
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            onClick={() => setTab(mytab)}
            key={index}
            className={
              tab === mytab && mytab === "React"
                ? "px-4 bg-[#067EA4] w-32 font-mono whitespace-nowrap  text-sm py-2 rounded-lg cursor-pointer flex items-center justify-center  text-white"
                : tab === mytab && mytab === "Vue"
                  ? "px-4 bg-[#41B883] w-32 font-mono whitespace-nowrap  text-sm py-2 rounded-lg cursor-pointer flex items-center justify-center  text-white"
                  : tab === mytab && mytab === "Tailwind"
                    ? "px-4 bg-[#38B2AC] w-32 font-mono whitespace-nowrap  text-sm py-2 rounded-lg cursor-pointer flex items-center justify-center  text-white"
                    : tab === mytab && mytab === "Figma"
                      ? "px-4 bg-[#F24E1E] w-32 font-mono whitespace-nowrap  text-sm py-2 rounded-lg cursor-pointer flex items-center justify-center  text-white"
                      : tab === mytab && mytab === "Framer"
                        ? "px-4 bg-[#0055FF] w-32 font-mono whitespace-nowrap  text-sm py-2 rounded-lg cursor-pointer flex items-center justify-center  text-white"
                        : tab === mytab && mytab === "Next JS"
                          ? "px-4 bg-[#000000] w-32 font-mono whitespace-nowrap  text-sm py-2 rounded-lg cursor-pointer flex items-center justify-center  text-white"
                          : tab === mytab && mytab === "Nuxt"
                            ? "px-4 bg-[#00C58E] w-32 font-mono whitespace-nowrap  text-sm py-2 rounded-lg cursor-pointer flex items-center justify-center  text-white"
                            : "px-4 w-32 font-mono whitespace-nowrap py-2 text-sm rounded-lg cursor-pointer flex items-center justify-center bg-gray-200 text-black"
            }
          >
            <button className="flex items-center">
              {mytab === "React" ? (
                <ReactIcon />
              ) : mytab === "Vue" ? (
                <Vue />
              ) : mytab === "Tailwind" ? (
                <Tailwindcss />
              ) : mytab === "Figma" ? (
                <Figma />
              ) : mytab === "Next JS" ? (
                <Next />
              ) : mytab === "Nuxt" ? (
                <Nuxt />
              ) : null}
            </button>
          </motion.div>
        ))}
      </ul>
      <main className="block py-3">
        {projects.map((project, index) => (
          <motion.div
            key={tab + index}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            {project.lang.includes(tab) && (
              <div className="flex flex-col  gap-2 pt-6">
                <Project {...project} />
              </div>
            )}
          </motion.div>
        ))}
      </main>
    </div>
  );
}

export default Projects;
