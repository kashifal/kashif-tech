import React from "react";

function Education() {
  return (
    <div id="education" className="bg-gray-950 p-6 my-8 rounded-lg">
      <div className="font-sans k text-3xl font-black text-white  py-6">
        Education
      </div>
      <div className="project flex flex-col gap-4 font-mono p-4 cursor-pointer rounded-lg">
        <div className="flex flex-col gap-2">
          <div className="flex sm:items-center gap-4 text-gray-100 sm:flex-row flex-col font-sans font-bold text-xl">
            <h1 className="text-gray-100">Superior University</h1>
            <span className="font-mono text-gray-100 font-medium px-2 py-1 text-xs rounded bg-slate-900">
              2020-Present
            </span>
          </div>
          <div className="text-lg text-gray-100">B.S. Computer Science</div>
        </div>
      </div>
    </div>
  );
}

export default Education;
