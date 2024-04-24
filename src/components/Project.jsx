import React from "react";

function Project({ title, year, description, link, lang }) {
  return (
    <div className="project flex flex-col gap-4 font-mono text-gray-100 p-4 min-w-full cursor-pointer rounded-lg hover:bg-gray-900">
      <div className="flex items-center gap-4">
        <h1 className="font-sans text-xl text-white font-bold">{title}</h1>
        <span className="px-2 py-1 text-xs text-white rounded bg-slate-900">
          #{year}
        </span>
      </div>
      <div>
        <p className="text-gray-100">{description}</p>
      </div>
      <div>
        <a
          href={link}
          target="_blank"
          className="flex text-gray-100 items-center gap-2 text-sm hover:underline"
        >
          <span className="text-gray-100">View Project</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-4 h-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
            />
          </svg>
        </a>
      </div>
    </div>
  );
}

export default Project;
