import React from "react";
import {
  FaGhost,
  FaGlobe,
  FaInstagram,
  FaPinterestP,
  FaYoutube,
} from "react-icons/fa";

const Socials = () => {
  return (
    <div className="flex gap-4 justify-center mt-14">
      <a href="https://www.instagram.com/paralexdisha7/" className="p-3 border-2 rounded-full">
        <FaInstagram size={25} />
      </a>
      <a href="https://in.pinterest.com/paraledisha20/" className="p-3 border-2 rounded-full">
        {" "}
        <FaPinterestP size={25} />
      </a>
      <a href="https://www.youtube.com/channel/UC7Cb3O8HksRebMTpWSZGfUQ" className="p-3 border-2 rounded-full">
        {" "}
        <FaYoutube size={25} />
      </a>
      <a href="https://tech-portfolio-tau.vercel.app/" className="p-3 border-2 rounded-full">
      <FaGlobe size={25} />
      </a>
    </div>
  );
};

export default Socials;
