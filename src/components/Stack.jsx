import React from "react";
function Stack({ icon, link, name }) {
  return (
    <div className="relative flex items-center gap-2 p-2 rounded cursor-pointer group  bg-gradient-to-r from-slate-700 via-slate-600 to-slate-500">
      <div className="absolute left-0 right-0 z-10 px-2 py-1 font-mono text-xs text-center transition-all scale-0 rounded shadow-lg max-w-fit min-w-fit whitespace-nowrap bg-neutral-300 group-hover:scale-100 -top-7">
        {name}
      </div>
      <a href={link} className="" target="_blank">
        {icon}
      </a>
    </div>
  );
}

export default Stack;
