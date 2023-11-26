import React from "react";

function Education() {
  return (
    <div id="education">
      <div className="font-sans k text-3xl font-black py-6">Education</div>
      <div className="project flex flex-col gap-4 font-mono p-4 cursor-pointer rounded-lg">
        <div className="flex flex-col gap-2">
          <div className="flex sm:items-center gap-4 sm:flex-row flex-col font-sans font-bold text-xl">
            <h1>Superior University</h1>
            <span className="font-mono font-medium px-2 py-1 text-xs rounded bg-neutral-300">
              2020-Present
            </span>
          </div>
          <div className="text-lg">B.S. Computer Science</div>
        </div>
      </div>
    </div>
  );
}

export default Education;
