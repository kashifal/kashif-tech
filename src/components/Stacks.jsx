import React from "react";
import Stack from "./Stack";
import Vscode from "../icons/Vscode";
import Figma from "../icons/Figma";
import ReactIcon from "../icons/React";
import Dribbble from "../icons/Dribbble";
import Tailwindcss from "../icons/Tailwindcss";
import Flask from "../icons/Flask";
import Github from "../icons/Github";
import Notion from "../icons/Notion";
import Udemy from "../icons/Udemy";
import Next from "../icons/Next";
import Radix from "../icons/Radix";
import Vercel from "../icons/Vercel";
import ChatGPT from "../icons/ChatGPT";
import MongoDB from "../icons/MongoDB";
import MySQL from "../icons/MySQL";
import NodeIcon from "../icons/Node";
import Copilot from "../icons/Copilot";
import Vue from "../icons/Vue";

function Stacks() {
  const stacks = [
    {
      name: "React",
      link: "https://react.dev",
      icon: <ReactIcon />,
    },
    {
      name: "VueJs",
      link: "https://vuejs.org/",
      icon: <Vue />,
    },
    {
      name: "Figma",
      link: "https://figma.com",
      icon: <Figma />,
    },

    {
      name: "Dribble",
      link: "https://dribbble.com",
      icon: <Dribbble />,
    },
    {
      name: "Tailwind",
      link: "https://tailwindcss.com",
      icon: <Tailwindcss />,
    },
    {
      name: "VS Code",
      link: "https://vscode.dev/",
      icon: <Vscode />,
    },
    {
      name: "Flask",
      link: "https://flask.palletsprojects.com/en/2.3.x/",
      icon: <Flask />,
    },
    {
      name: "GitHub",
      link: "https://github.com",
      icon: <Github />,
    },
    {
      name: "Notion",
      link: "https://notion.so",
      icon: <Notion />,
    },
    {
      name: "Udemy",
      link: "https://udemy.com",
      icon: <Udemy />,
    },
    {
      name: "NextJs",
      link: "https://nextjs.org/",
      icon: <Next />,
    },
    {
      name: "Radix UI",
      link: "https://www.radix-ui.com/",
      icon: <Radix />,
    },
    {
      name: "Vercel",
      link: "https://vercel.com/",
      icon: <Vercel />,
    },
    {
      name: "Chat GPT",
      link: "https://chat.openai.com/",
      icon: <ChatGPT />,
    },
    {
      name: "MongoDB",
      link: "https://www.mongodb.com/",
      icon: <MongoDB />,
    },
    {
      name: "MySQL",
      link: "https://www.mysql.com/",
      icon: <MySQL />,
    },
    {
      name: "NodeJs",
      link: "https://nodejs.org/en",
      icon: <NodeIcon />,
    },
    {
      name: "Github Copilot",
      link: "https://copilot.github.com/",
      icon: <Copilot />,
    },
  ];
  return (
    <div className="bg-gray-950 p-6 rounded-lg" id="stack">
      <div className="font-sans text-3xl k text-white font-black">
        Stack & Tools
      </div>
      <div className="flex flex-wrap gap-2 py-6">
        {stacks.map((stack, idx) => {
          return (
            <Stack
              key={idx}
              name={stack.name}
              link={stack.link}
              icon={stack.icon}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Stacks;
