import React from "react";
import { BsFillCalendar2DateFill } from "react-icons/bs";
import photo1 from "../image/neftap.JPG";

function Experience() {
  return (
    <div className="max-w-screen-2xl container mx-auto px-4 mt-6 w-full mb-12">
      <p className="text-3xl md:text-4xl font-bold space-y-4 text-green-500 underline text-center mb-6">
        Work Experience
      </p>
      <div className="w-full grid md:flex gap-6">
        <div
          className="max-w-screen-2xl mx-auto px-4 mt-16 grid justify-center items-center w-full md:w-1/2 h-auto p-3 rounded-sm shadow-md shadow-green-400 cursor-pointer space-y-12 mb-8"
          onClick={() => window.open("https://neftap.com/", "_blank")}
        >
          <div className="w-full justify-center items-center text-center order-1">
            <span className="border rounded-full p-4 md:p-6 font-bold text-md">
              01
            </span>
          </div>
          <div className="w-full grid space-y-3 order-3 md:order-2">
            <h1 className="font-bold text-2xl md:text-3xl">
              {" "}
              Company: DigiRoket
            </h1>
            <h1 className="font-bold text-xl md:text-2xl">
              Domain: MERN Stack Web Developer
            </h1>
            <p>
              Built NefTap , an NFC-based digital profile platform with
              React.js, Tailwind CSS, GSAP (Frontend) and Node.js, Express.js,
              MongoDB, MySQL (Backend). Deployed backend on Hostinger VPS and
              hosted frontend on Hostinger, delivering a smooth user experience.
            </p>
            <h1 className="flex space-x-4 text-xl">
              <BsFillCalendar2DateFill className="w-5 h-5 text-green-500 mr-2 mt-1" />
              Duration: 08/05/2025 – 31/07/2025
            </h1>
          </div>
          <div className="w-full order-2 md:order-3">
            <img
              src={photo1}
              className="w-full h-full rounded-lg hover:scale-105 duration-500"
            />
          </div>
        </div>
        <div
          className="max-w-screen-2xl mx-auto px-4 mt-16 grid justify-center items-center w-full md:w-1/2 h-auto p-3 rounded-xl shadow-sm shadow-green-400 cursor-pointer space-y-12 mb-8"
          onClick={() => window.open("https://neftap.com/", "_blank")}
        >
          <div className="w-full justify-center items-center text-center order-1">
            <span className="border rounded-full p-4 md:p-6 font-bold text-md">
              02
            </span>
          </div>
          <div className="w-full grid space-y-3 order-3 md:order-2">
            <h1 className="font-bold text-2xl md:text-3xl">
              {" "}
              Company: Full Stack Learning
            </h1>
            <h1 className="font-bold text-xl md:text-2xl">
              Domain: Full Stack Web Developer
            </h1>
            <p className="grid">
              1.Worked on the project Ecommerce Website <br /> 2.Developed a
              functional eCommerce website as part of a Full Stack Learning
              project.
            </p>
            <h1 className="flex space-x-4 text-xl">
              <BsFillCalendar2DateFill className="w-5 h-5 text-green-500 mr-2 mt-1" />
              Duration: 01/05/2024 – 15/07/2024
            </h1>
          </div>
          <div className="w-full order-2 md:order-3">
            <img
              src={photo1}
              className="w-full h-full rounded-lg hover:scale-105 duration-500"
            />
          </div>
        </div>
      </div>
      <p className="text-xl font-bold text-green-500">Total : 6 Months Experience</p>
    </div>
  );
}

export default Experience;
