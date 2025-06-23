import React from "react";
import { CgWebsite } from "react-icons/cg";

function Cards() {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto px-4 md:px-20">
        <marquee>
          <p className="text-2xl md:text-3xl font-bold space-y-4 text-black mt-6">
            My Projects, Intenship Projects, My Projects, Intenship Projects, My Projects, Intenship Projects, My Projects, Intenship Projects, My Projects,
          </p>
        </marquee>
      </div>

      <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 bg-black mt-4">
        <div className="mt-4 p-3">
          <h1 className="font-semibold md:font-bold mt-4 text-2xl md:text-5xl text-center flex flex-wrap justify-center gap-2">
            My Projects
          </h1>
        </div>
        <div className="block md:flex space-x-3 md:space-x-32 justify-center md:mt-0 py-24">
            <div
  className="block text-center p-4 bg-black text-white cursor-pointer border border-white rounded-2xl w-[300px] ml-3 md:ml-0 space-y-6 hover:bg-white hover:text-black hover:border-black duration-300 shadow-2xl shadow-black"
  onClick={() => window.open("https://psn-shoes.vercel.app/", "_blank")}
>
  <CgWebsite className="w-10 h-10 text-center ml-24 md:ml-24 mt-4" />
  <h1 className="text-3xl font-semiblock">Shoes Full Stack Project</h1>
  <p className="text-clip text-wrap">
    Developed a full stack Shoes-Store Website. Provide a user-friendly platform for purchasing branded footwear. 07/2023 – 11/2023
  </p>
</div>


            <div
  className="block text-center p-4 bg-black text-white cursor-pointer border rounded-xl w-[300px] ml-3 md:ml-0 space-y-6 hover:bg-white hover:text-black hover:border-black duration-300 shadow-2xl shadow-black"
  onClick={() => window.open("https://neftap.com/", "_blank")}
>
  <CgWebsite className="w-10 h-10 text-center ml-24 md:ml-24 mt-4" />
  <h1 className="text-3xl font-semiblock">NefTap Internship Project</h1>
  <p className="text-clip text-wrap">
    Developed a full stack NefTap Website. Provide a user-friendly platform for purchasing NFC cards. In this Project we use React, Express, My SQL, MongoDB, Node.js 01/05/2025 – 15/07/2025
  </p>
</div>


            <div
  className="block text-center p-4 bg-black text-white cursor-pointer border rounded-xl w-[300px] ml-3 md:ml-0 space-y-6 hover:bg-white hover:text-black hover:border-black duration-300 shadow-2xl shadow-black"
  onClick={() => window.open("https://portfolio-pradhuman-singh.vercel.app/", "_blank")}
>
  <CgWebsite className="w-10 h-10 text-center ml-24 md:ml-24 mt-4" />
  <h1 className="text-3xl font-semiblock">Portfolio Full Stack Project</h1>
  <p className="text-clip text-wrap">
   Built a Full Stack Portfolio Website showcasing my projects, skills, and contact information with a user-friendly interface. 01/2024 – 11/2024
  </p>
</div>

          </div>
      </div>
    </>
  );
}

export default Cards;
