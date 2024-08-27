import React, { useState } from 'react'
import photo from "../image/psn.png";
import { CiMenuFries } from "react-icons/ci";
import { IoCloseSharp } from "react-icons/io5";
import {Link} from "react-scroll";

function Navbar() {
    const [menu, setMenu]=useState(false);
    const navItems = [
        {
          id: 1,
          text: "Home",
        },
        {
          id: 2,
          text: "About",
        },
        {
          id: 3,
          text: "Portfolio",
        },
        {
          id: 4,
          text: "Experiance",
        },
        {
          id: 5,
          text: "Contact",
        },
      ];
  return (
    <>
        <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 h-16 shadow-md fixed top-0 left-0 right-0 z-50 bg-black">
            <div className="flex justify-between items-center h-16">
                <div className="flex space-x-2">
                    <img src={photo}className="h-12 w-12 rounded-full" alt="" />
                    <h1 className="font-semibold text-xl cursor-pointer">Pradhuman
                    <p className="font-semibold text-sm cursor-pointer">Web Developer</p>
                    </h1>
                </div>
                <div>
                    {/* <ul className="hidden md:flex space-x-8 font-semibold text-xl">
                        <li className="hover:text-green-500 duration-300">Home</li>
                        <li className="hover:text-green-500 duration-300">About</li>
                        <li className="hover:text-green-500 duration-300">Portfolio</li>
                        <li className="hover:text-green-500 duration-300">Experience</li>
                        <li className="hover:text-green-500 duration-300">Contacts</li>
                    </ul> */}
                    <ul className="hidden md:flex space-x-8 font-semibold text-xl">
              {navItems.map(({ id, text }) => (
                <li
                  className="hover:scale-105 duration-200 hover:text-green-500 duration-300 cursor-pointer"
                  key={id}
                >
                  <Link
                    to={text}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    activeClass="active"
                  >
                    {text}
                  </Link>
                </li>
              ))}
            </ul>
                    <div onClick={()=>setMenu(!menu)} className="md:hidden"> 
                        {menu?<IoCloseSharp size={24} />:<CiMenuFries size={24} />
                    }</div>
                </div>
            </div>
            {/* {menu && (
                        <div>
                            <ul className="md:hidden flex flex-col h-screen items-center space-y-4 font-semibold text-2xl justify-center">
                                <li className="hover:text-green-500 duration-300">Home</li>
                                <li className="hover:text-green-500 duration-300">About</li>
                                <li className="hover:text-green-500 duration-300">Portfolio</li>
                                <li className="hover:text-green-500 duration-300">Experience</li>
                                <li className="hover:text-green-500 duration-300">Contacts</li>
                            </ul>
                        </div>
                    )} */}

{menu && (
          <div className="bg-black">
            <ul className="md:hidden flex flex-col h-screen items-center justify-center space-y-3 text-xl">
              {navItems.map(({ id, text }) => (
                <li
                  className="hover:scale-105 duration-200 hover:text-green-500 duration-300 font-semibold cursor-pointer"
                  key={id}
                >
                  <Link
                    onClick={() => setMenu(!menu)}
                    to={text}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    activeClass="active"
                  >
                    {text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
        </div>
    </>
  )
}

export default Navbar
