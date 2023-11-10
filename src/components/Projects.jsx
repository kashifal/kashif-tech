import React from "react";
import Project from "./Project";
function Projects() {
  const projects = [
    {
      id: 1,
      title: "Quran Cloud",
      year: "2022",
      description:
        " Quran Cloud is a web app used to read and listen to the Quran. It is built using React, Flowbite, and Quran cloud API.",
      link: "https://quran-clone.vercel.app/",
    },
    {
      id: 2,
      title: "Jobvista",
      year: "2023",
      description:
        "Jobvista is a Job Board website built using React (Front-end) and Python Flask (Backend) with MongoDB database.",
      link: "https://worklytics-board.vercel.app/",
    },
    {
      id: 7,
      title: "TechCrunch Clone",
      year: "2023",
      description: "An instant techcrunch clone with markets.sh news api.",
      link: "https://techcrunch-three.vercel.app/",
    },
    {
      id: 3,
      title: "Transfer List component",
      year: "2022",
      description: "Transfer List Component in React for practice",
      link: "https://transferlist.vercel.app/",
    },
    {
      id: 4,
      title: "Tick-Tack-Toe",
      year: "2023",
      description: "Tick Tack Toe game with react",
      link: "https://tick-tack-toe-six.vercel.app/",
    },
    {
      id: 5,
      title: "Drag'n'Drop",
      year: "2023",
      description:
        "Drag and Drop Component in react using React beautiful drag and drop",
      link: "https://dragndrop-cyan.vercel.app/",
    },
    {
      id: 6,
      title: "React mutli-select",
      year: "2023",
      description: "Custom mutli-select component in react.",
      link: "https://react-multi-select-indol.vercel.app/",
    },
  ];
  return (
    <div id="projects" className="mb-16">
      <div className="font-sans text-3xl italic font-black">Projects</div>
      <div className="flex  gap-2 pt-6  overflow-x-scroll">
        {projects.map((project, idx) => {
          return <Project key={idx} {...project} />;
        })}
      </div>
      <div className="pl-4">
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
      </div>
    </div>
  );
}

export default Projects;
