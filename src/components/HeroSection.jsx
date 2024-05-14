import React from "react";

function HeroSection() {
  return (
    <div className="flex flex-col bg-gray-950   p-6 rounded-lg gap-6 font-mono">
      <h1 className="font-sans text-3xl  font-black md:text-3xl lg:text-3xl">
        <span className=" pl-0   text-slate-300 sm:pl-0"> Kashif Sulehria</span>
      </h1>
      <span className="font-mono text-slate-200 hidden sm:block">
        Frontend Engineer |{" "}
        <span className="bg-gradient-to-r from-red-600 via-emerald-500 to-slate-200 inline-block text-transparent bg-clip-text">
          Vue JS Developer
        </span>{" "}
        | React
      </span>
      <span className="font-mono text-slate-200 block sm:hidden">
        Frontend Engineer |{" "}
        <span className="bg-gradient-to-r from-red-600 via-emerald-500 to-slate-200 inline-block text-transparent bg-clip-text">
          Vue JS Developer
        </span>
        | React
      </span>
      <a href="https://wakatime.com/@32a494aa-12ce-4a31-8855-32844bfd4c42">
        <img
          src="https://wakatime.com/badge/user/32a494aa-12ce-4a31-8855-32844bfd4c42.svg"
          alt="Total time coded since Jul 31 2021"
        />
      </a>
      <p className="font-mono text-slate-200">
        🚀 Code maestro sculpting digital dreams with elegance and precision.
        From pixels to algorithms, I turn ideas into seamless realities. Let's
        redefine the future, one line of code at a time. 💻✨
      </p>
      <div className="flex flex-col items-start gap-6">
        <div className="flex items-center gap-3">
          <span className="relative flex h-1.5 w-1.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
          </span>
          <span className="text-emerald-600 font-mono text-sm">
            Open to work
          </span>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
