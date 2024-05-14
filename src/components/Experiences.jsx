import React from "react";
import Experience from "./Experience";
function Experiences() {
  const Experiences = [
    {
      id: 1,
      title: "Frontend Developer - React JS",
      year: "March 2021 - Dec 2021",
      description:
        " As a junior developer, I was responisble for building the frontend of the website using React JS.",
      link: "https://pk.linkedin.com/company/magnic-digital-pvt-ltd",
      company: "Magnic Digital",
    },
    {
      id: 2,
      title: "Lead Frontend  - Vue and React ",
      year: "April 2022 - August 2023",
      description:
        "As a lead developer, I was responisble for building the frontend of the website using React JS, Tailwind CSS and Vue JS.",
      link: "https://softpyramid.com/",
      company: "Softpyramid",
    },

    {
      id: 3,
      title: "Lead - React JS na d Vue JS",
      year: "August 2023 - Current",
      description:
        "As a lead developer, I was responisble for building the frontend of the website using React JS, Tailwind CSS and Vue JS. In my responsiblities, I am also responsible for managing the team of 5 developers.",
      link: "https://www.indusappps.com/",
      company: "indusappps",
    },
  ];
  return (
    <div
      id="Experiences"
      className="  relative overflow-y-auto px-6 py-6 rounded-lg"
    >
      <div className="font-sans     text-3xl text-gray-950 k font-black">
        Experiences
      </div>
      <div className="flex flex-col gap-2 py-6">
        {Experiences.map((experience, idx) => {
          return <Experience key={idx} {...experience} />;
        })}
      </div>
    </div>
  );
}

export default Experiences;
