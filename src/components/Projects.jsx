import React from "react";
import Project from "./Project";
function Projects() {
  const projects = [
    {
      id: 1,
      title: "Tubetailor",
      year: "2022",
      description:
        " Tubetailor is a youtube video downloader built using React (Front-end) and Python Flask (Backend) with MongoDB database.",
      link: "https://tubetailor.vercel.app/",
    },
    {
      id: 2,
      title: "Cyrano",
      year: "2023",
      description:
        "Cyrano is a web app that generates a poem based on the user's input. It uses GPT-2 model to generate the poem.",
      link: "https://cyrano-web.vercel.app/",
    },
    {
      id: 7,
      title: "Kindship",
      year: "2023",
      description:
        "Kindship is a social media app built using React and Next JS. Conneect with parents who just get it!",
      link: "https://kindship-ui.vercel.app/",
    },
    {
      id: 3,
      title: "Dropzey",
      year: "2022",
      description: "Dropzey is a NFT's sharing app built using Vue and Nuxt.",
      link: "https://dropzey.vercel.app/",
    },
    {
      id: 4,
      title: "Prizepicks",
      year: "2023",
      description: "Prizepicks is a fantasy sports app built using React.",
      link: "https://prizepicks.vercel.app/",
    },
  ];
  return (
    <div id="projects" className="mb-16">
      <div className="font-sans text-3xl italic font-black">Projects</div>
      <div className="flex flex-col  gap-2 pt-6">
        {projects.map((project, idx) => {
          return <Project key={idx} {...project} />;
        })}
      </div>
      {/* <div className="pl-4">
        <a
          href="#"
          target="_blank"
          className="flex font-mono items-center gap-2 text-sm hover:underline"
        >
          <span>scroll to Left</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-4 h-4 animate-pulse"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
            />
          </svg>
        </a>
      </div> */}
    </div>
  );
}

export default Projects;
