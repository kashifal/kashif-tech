import React from "react";
import { motion, useScroll } from "framer-motion";

function Wrap({ children }) {
  const { scrollYProgress } = useScroll();

  return (
    <section className="p-4 max-w-4xl grid grid-cols-1  mx-auto py-16">
      {children}
    </section>
  );
}

export default Wrap;
