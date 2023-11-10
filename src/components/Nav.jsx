import React from "react";

function Nav() {
  return (
    <nav className="flex flex-col gap-3 py-10 font-mono">
      <a href="#projects" className="flex items-center hover:underline">
        <svg
          width="18"
          height="18"
          viewBox="0 0 36 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M7.5 7.80822C7.5 5.12803 9.5737 3 12.2663 3H16.9527C18.4658 3 19.9939 3.57549 21.1443 4.74065L22.692 6.30822H29.7337C32.4263 6.30822 34.5 8.43625 34.5 11.1164V22.1918C34.5 24.872 32.4263 27 29.7337 27H12.2663C9.5737 27 7.5 24.872 7.5 22.1918V7.80822ZM12.2663 6C11.2665 6 10.5 6.74868 10.5 7.80822V22.1918C10.5 23.2513 11.2665 24 12.2663 24H29.7337C30.7335 24 31.5 23.2513 31.5 22.1918V11.1164C31.5 10.0569 30.7335 9.30822 29.7337 9.30822H22.0651C21.6639 9.30822 21.2795 9.14754 20.9977 8.86209L19.0095 6.84839C18.4558 6.28752 17.7117 6 16.9527 6H12.2663Z"
            fill="black"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M3 9C3.82843 9 4.5 9.67157 4.5 10.5V25.0878C4.5 27.8263 6.67325 30 9.23377 30H27C27.8284 30 28.5 30.6716 28.5 31.5C28.5 32.3284 27.8284 33 27 33H9.23377C4.93714 33 1.5 29.4027 1.5 25.0878V10.5C1.5 9.67157 2.17157 9 3 9Z"
            fill="black"
          />
        </svg>
        <span className="ml-2">Projects</span>
      </a>
      <a href="#education" className="flex items-center hover:underline">
        <svg
          width="18"
          height="18"
          viewBox="0 0 36 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M33 11.6053L20.7 5.17313C19.05 4.27562 16.95 4.27562 15.3 5.17313L3 11.6053C2.1 12.054 1.5 13.1011 1.5 14.1482C1.5 15.1953 2.1 16.0928 3 16.6911L6.6 18.6357V23.8712C6.6 25.5166 7.5 27.0125 9 27.7604L15.45 31.0512C16.2 31.3504 17.1 31.5 18 31.5C18.9 31.5 19.8 31.3504 20.55 30.9017L27 27.6108C28.5 26.8629 29.4 25.367 29.4 23.7216V22.0762C29.4 21.1787 28.8 20.5803 27.9 20.5803C27 20.5803 26.4 21.1787 26.4 22.0762V23.7216C26.4 24.1704 26.1 24.7687 25.65 24.9183L19.2 28.2091C18.45 28.6579 17.55 28.6579 16.8 28.2091L10.35 24.9183C9.9 24.6191 9.6 24.1704 9.6 23.7216V20.1316L15.3 23.1233C16.2 23.572 17.1 23.7216 18 23.7216C18.9 23.7216 19.8 23.572 20.7 23.1233L33 16.6911C33.9 16.2424 34.5 15.1953 34.5 14.1482C34.5 13.1011 33.9 12.2036 33 11.6053ZM19.35 20.4307C18.6 20.8795 17.55 20.8795 16.65 20.4307L4.65 14.1482L16.65 7.86565C17.55 7.4169 18.45 7.4169 19.35 7.86565L31.35 14.1482L19.35 20.4307Z"
            fill="black"
          />
        </svg>
        <span className="ml-2">Education</span>
      </a>
      <a href="#stack" className="flex items-center hover:underline">
        <svg
          width="18"
          height="18"
          viewBox="0 0 36 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4.65 13.6498L15 18.2998C15.9 18.7498 16.95 18.8998 18 18.8998C19.05 18.8998 19.95 18.7498 21 18.2998L31.35 13.6498C32.4 13.1998 33 12.1498 33 10.9498C33 9.7498 32.4 8.8498 31.35 8.2498L21 3.5998C19.05 2.6998 16.95 2.6998 15.15 3.5998L4.65 8.3998C3.6 8.8498 3 9.89981 3 10.9498C3 12.1498 3.6 13.1998 4.65 13.6498ZM16.35 6.2998C17.4 5.8498 18.75 5.8498 19.8 6.2998L30 10.9498L19.8 15.5998C18.75 16.0498 17.4 16.0498 16.35 15.5998L6.15 10.9498L16.35 6.2998Z"
            fill="black"
          />
          <path
            d="M30.0005 17.8493L19.6505 22.4993C18.6005 22.9493 17.2505 22.9493 16.2005 22.4993L6.00051 17.8493C5.25051 17.5493 4.35051 17.8493 4.05051 18.5993C3.75051 19.3493 4.05051 20.2493 4.80051 20.5493L15.0005 25.3493C15.9005 25.7993 16.9505 25.9493 18.0005 25.9493C19.0505 25.9493 19.9505 25.7993 21.0005 25.3493L31.3505 20.6993C32.1005 20.3993 32.4005 19.4993 32.1005 18.7493C31.6505 17.8493 30.7505 17.5493 30.0005 17.8493Z"
            fill="black"
          />
          <path
            d="M30.0005 24.9001L19.6505 29.5501C18.6005 30.0001 17.2505 30.0001 16.2005 29.5501L6.00051 24.9001C5.25051 24.6001 4.35051 24.9001 4.05051 25.6501C3.75051 26.4001 4.05051 27.3001 4.80051 27.6001L15.0005 32.4001C15.9005 32.8501 16.9505 33.0001 18.0005 33.0001C19.0505 33.0001 19.9505 32.8501 21.0005 32.4001L31.3505 27.7501C32.1005 27.4501 32.4005 26.5501 32.1005 25.8001C31.6505 24.9001 30.7505 24.6001 30.0005 24.9001Z"
            fill="black"
          />
        </svg>
        <span className="ml-2">Stack</span>
      </a>
      <a href="#socials" className="flex items-center hover:underline">
        <svg
          width="18"
          height="18"
          viewBox="0 0 36 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M33 16.5C32.3996 9.15794 26.2456 3.4819 18.8908 3.03239C14.3878 2.73271 10.035 4.53077 7.03301 7.67737C4.03105 10.9738 2.53007 15.3191 3.13046 19.8142C4.03105 26.4071 9.14568 32.2508 15.75 33C16.5 33 17.2397 33 17.8401 33C21.4424 33 24.8947 31.8013 27.5965 29.4039C28.1969 28.8045 28.347 27.9055 27.7466 27.3062C27.1462 26.7068 26.2456 26.557 25.6452 27.1563C23.0935 29.4039 19.6413 30.4528 16.189 30.0032C10.7855 29.4039 6.60039 24.9087 6 19.5146C5.6998 15.7686 6.58272 12.4722 9.13439 9.7751C11.536 7.22785 15.1383 5.72947 18.7407 6.02915C24.5945 6.32882 29.3976 11.1236 29.998 16.9673C29.998 17.8664 29.998 18.6155 29.998 19.5146C29.8479 20.7133 28.7972 21.6123 27.2963 21.6123C25.9454 21.6123 24.7446 20.4136 24.7446 19.0651V18.0162C24.7446 14.2702 21.7426 11.2735 17.9902 11.2735C14.2377 11.2735 11.2358 14.2702 11.2358 18.0162C11.2358 21.7621 14.2377 24.7589 17.9902 24.7589C19.9415 24.7589 21.5925 23.8599 22.9434 22.6612C23.9941 24.0097 25.6452 24.7589 27.4464 24.7589C30.2982 24.7589 33 22.5 33 20.1139C33 18.75 33.0844 17.532 33 16.5ZM17.8401 21.7621C15.7387 21.7621 14.0876 20.1139 14.0876 18.0162C14.0876 15.9185 15.7387 14.2702 17.8401 14.2702C19.9415 14.2702 21.5925 15.9185 21.5925 18.0162C21.5925 20.1139 19.9415 21.7621 17.8401 21.7621Z"
            fill="black"
          />
        </svg>
        <span className="ml-2">Contact</span>
      </a>
    </nav>
  );
}

export default Nav;
