import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="flex justify-center text-slate-100  sm:justify-between flex-wrap gap-8s items-center font-mono">
      <p className="text-gray-900">© {"2024"} - Kashif Sulehria</p>
      <div className="flex items-center gap-4"></div>
    </div>
  );
}

export default Footer;
