import React from "react";
import { FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaJava } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { FaNode } from "react-icons/fa6";
import { SiMongodb } from "react-icons/si";
import { FaPython } from "react-icons/fa";
import { SiMysql } from "react-icons/si";


function Portfolio() {
  const greenShadow = {
    boxShadow: "0 6px 8px rgba(0, 255, 0, 0.5)",
  };
  const cardItem = [
    {
      id: 1,
      logo: <FaReact className="w-full h-24 text-green-500"/>,
      text: "React"
    },
    {
      id: 2,
      logo: <FaJava className="w-full h-24 text-green-500"/>,
      text: "Java"
    },
    {
      id: 3,
      logo: <SiExpress className="w-full h-24 text-green-500"/>,
      text: "Express.js"
    },
    {
      id: 4,
      logo: <IoLogoJavascript className="w-full h-24 text-green-500" />,
      text: "Java Script"
    },
    {
      id: 5,
      logo: <FaNode className="w-full h-24 text-green-500"/>,
      text: "Node.js"
    },
    {
      id: 6,
      logo: <SiMongodb className="w-full h-24 text-green-500"/>,
      text: "Mongo DB"
    },
    {
      id: 7,
      logo: <FaPython className="w-full h-24 text-green-500"/>,
      text: "Python"
    },
    {
      id: 8,
      logo: <SiMysql className="w-full h-24 text-green-500"/>,
      text: "My SQL"
    },
  ];
  return (
    <div
      name="Portfolio"
      className="max-w-screen-2xl container mb-16 mt-10"
    >
      <div className="max-w-screen-xl">
        <h1 className="text-3xl md:text-4xl font-bold mb-16 text-green-500 underline text-center">TECHNICAL SKILLS</h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 w-full justify-center items-center text-center gap-10 md:gap-20">
          {cardItem.map(({ id, logo, text }) => (
            <div className="grid space-y-2 justify-center items-center text-center" key={id}>
              <span className="p-4 border border-gray-400 rounded-full">{logo}</span> 
              <h1 className="font-bold text-2xl">{text}</h1>             
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
