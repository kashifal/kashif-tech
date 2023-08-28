import React from "react";

function Education() {
  return (
    <div id='education'>
      <div className='font-sans italic text-3xl font-black py-6'>Education</div>
      <div className='project flex flex-col gap-4 font-mono p-4 cursor-pointer rounded-lg hover:bg-neutral-200'>
        <div className='flex flex-col gap-2'>
          <div className='flex items-center gap-2 font-sans font-bold text-xl'>
            <h1>PUCIT, Old Campus</h1>
            <span className='font-mono font-medium px-2 py-1 text-xs rounded bg-neutral-300'>
              2020-Present
            </span>
          </div>
          <div className='text-lg'>B.S. Information Technology</div>
        </div>
      </div>
    </div>
  );
}

export default Education;
