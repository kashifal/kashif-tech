import React from "react";

function Experience({ title, year, description, link, company }) {
  return (
    <div className="Experience flex flex-col gap-4 font-mono p-4 cursor-pointer rounded-lg hover:bg-gray-200">
      <div className="flex sm:items-center gap-4 sm:flex-row flex-col ">
        <h1 className="font-sans text-xl font-bold">{title}</h1>
        <span className="px-2 py-1 inline-flex w-48 text-xs rounded bg-neutral-300">
          {year}
        </span>
      </div>
      <div className="">
        <p className="px-2 py-1 text-xs rounded bg-neutral-300 inline-flex">
          {company}
        </p>
      </div>
      <div>
        <p className="">{description}</p>
      </div>
      <div>
        <a
          href={link}
          target="_blank"
          className="flex items-center gap-2 text-sm hover:underline"
        >
          <span>View Experience</span>
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

export default Experience;
