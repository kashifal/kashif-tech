import React from "react";
import { motion, useScroll } from "framer-motion";

function Wrap({ children }) {
  const { scrollYProgress } = useScroll();

  return <section className="p-4 max-w-3xl  mx-auto py-16">{children}</section>;
}

export default Wrap;
