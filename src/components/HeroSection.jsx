import React from "react";

function HeroSection() {
  return (
    <div className="flex flex-col bg-white p-6 rounded-lg gap-6 font-mono">
      <h1 className="font-sans text-3xl  font-black md:text-3xl lg:text-3xl">
        <span className=" pl-0 sm:pl-0"> Kashif Sulehria</span>
      </h1>
      <span className="font-mono hidden sm:block">
        React JS - Vue JS | Figma - UIUX | Fiverr
      </span>
      <span className="font-mono block sm:hidden">
        React JS - Vue JS | Figma - UIUX | Fiverr
      </span>
      <p className="font-mono">
        🚀 Code maestro sculpting digital dreams with elegance and precision.
        From pixels to algorithms, I turn ideas into seamless realities. Let's
        redefine the future, one line of code at a time. 💻✨
      </p>
    </div>
  );
}

export default HeroSection;
