import React from "react";
// Default theme
import kashifa from "../assets/kashifaaa.jpeg";
import kashifb from "../assets/kashifbbbb.jpeg";
import kashifc from "../assets/kashifcccc.jpeg";
import kashifd from "../assets/kashifdddd.jpeg";
import kashife from "../assets/kashifeeee.jpeg";
import "@splidejs/react-splide/css";

import { Splide, SplideSlide } from "@splidejs/react-splide";

// or only core styles
import "@splidejs/react-splide/css/core";

const Gallery = () => {
  return (
    <div className="bg-white mt-8 rounded-lg p-6">
      <Splide
        options={{
          perPage: 3,
          rewind: true,
          gap: "1rem",
        }}
        aria-label="My Favorite Images"
      >
        <SplideSlide className="bg-white ">
          <img
            src={kashife}
            className="rounded-md h-full object-cover"
            alt="Image 1"
          />
        </SplideSlide>
        <SplideSlide>
          <img
            src={kashifb}
            className="rounded-md h-full object-cover"
            alt="Image 1"
          />
        </SplideSlide>
        <SplideSlide>
          <img
            src={kashifc}
            className="rounded-md h-full object-cover"
            alt="Image 1"
          />
        </SplideSlide>{" "}
        <SplideSlide>
          <img
            src={kashifd}
            className="rounded-md h-full object-cover"
            alt="Image 1"
          />
        </SplideSlide>{" "}
        <SplideSlide>
          <img
            src={kashifa}
            className="rounded-md h-full object-cover"
            alt="Image 1"
          />
        </SplideSlide>{" "}
      </Splide>
    </div>
  );
};

export default Gallery;
