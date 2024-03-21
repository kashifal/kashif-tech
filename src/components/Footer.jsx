import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="flex justify-center  sm:justify-between flex-wrap gap-8s items-center font-mono">
      <p>© {"2023"} - Kashif Sulehria</p>
      <div className="flex items-center gap-4">
        <Link className="underline" to="/policy">
          Refund and Cancellation Policy
        </Link>
      </div>
    </div>
  );
}

export default Footer;
