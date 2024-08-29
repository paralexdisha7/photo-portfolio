import React, { useState } from 'react'
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

const Navbar = () => {
    const [nav, setNav] = useState(false);

    const links = [
      {
        id: 1,
        link: "about",
      },
      {
        id: 2,
        link: "portfolio",
      },
      {
        id: 3,
        link: "contact",
      },
    ];
  return (
    <div className="flex justify-between items-center w-full h-20 px-4 text-yellow fixed drop-shadow-xl z-50 shadow-xl">
      <div className='flex'>
        {/* <img src="/DP.png" alt="logo" className='h-12'/> */}
        <h1 className='font-great text-3xl mr-3'>Dp</h1>
        <h1 className="text-3xl font-italiana ml-2 hidden md:flex">Parale Disha Photography</h1>
      </div>
      <ul className="hidden md:flex gap-12 mr-10  font-extralight text-xl font-outfit">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="cursor-pointer hover:scale-105 duration-200 capitalize hover:underline decoration-1 underline-offset-8 "
          >
            <Link to={link} smooth duration={500}>
              {link}
            </Link>
          </li>
        ))}
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-50 text-white md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 right-0 w-[55%] h-screen bg-slate-950  shadow-lg shadow-black bg-[#000] opacity-80">
          {links.map(({ id, link }) => (
            <li
              key={id} 
              className="px-4 cursor-pointer capitalize py-6 text-2xl font-extralight hover:scale-105 duration-200"
            >
              <Link to={link} smooth duration={500}>
                {link}
              </Link>
            </li>
          ))}
          
        </ul>
      )}
    </div>
  )
}

export default Navbar