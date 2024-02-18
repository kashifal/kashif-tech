import React from "react";

const Upwork = () => {
  return (
    <div id="fiverr" className="bg-white p-6 rounded-lg my-8">
      <div className="font-sans k text-3xl font-black py-6">Rising Talent</div>
      <a
        className="px-6 py-2 text-white rounded-md items-center gap-3 bg-black inline-flex"
        href="https://www.upwork.com/freelancers/~0149ae55fef27c738f"
      >
        <img
          src="https://www.upwork.com/ab/brontes/favicon.ico"
          alt="upwork"
          className="h-6"
        ></img>

        <span className="text-white text-lg font-semibold">Go to profile</span>
        <span className="text-white">|</span>
        <small>Save 5%</small>
      </a>
    </div>
  );
};

export default Upwork;
