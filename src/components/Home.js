import React from 'react'
import { FaGithub } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import { ReactTyped,Typed } from "react-typed";
import photo from "../image/psn.png";

function Home() {
    const greenShadow = {
        boxShadow: '0 14px 16px rgba(0, 255, 0, 0.5)', 
      };
  return (
    <>
        <div name="Home" className="max-w-screen-2xl container mx-auto px-4 md:px-20">
            <div className="flex flex-col md:flex-row">
                <div className="md:w-1/2 mt-12 md:mt-48 space-y-4 order-2 md:order-1">
                    <span className="text-2xl">Welcome In My Feed</span>
                    <div className="flex space-x-1 text-2xl md:text-4xl">
                    <h1 className="text-2xl md:text-4xl ">Hello I'm a </h1>
                    {/* <span className="text-green-500 text-4xl">Developer</span> */}
                    <ReactTyped
                        className="text-green-500 text-2xl md:text-4xl space-y-4 "
                        strings={["Developer ","Programmer ","AI/ML Enthusiast","Competitive Coder"]}
                        typeSpeed={40}
                        backSpeed={50}
                        loop={true}

                    />
                    </div>
                    <br />
                    <p className="text-xl">Hello everyone,I'm engineering student.Goal-driven creative mindset with a passion for learning and innovating. I'm on a track for learning more about Web Development, Machine learning and Data Science.</p>
                    <br/>
                    <div >
                        <ul className="flex space-x-5 text-3xl mt-8">
                            <li className="hover:text-green-500 duration-300">
                                <a href="https://github.com/PradhumanSinghNaruka">
                                    <FaGithub />
                                </a>
                            </li>
                            <li className="hover:text-green-500 duration-300"><FaFacebookSquare /></li>
                            <li className="hover:text-green-500 duration-300"><FaSquareInstagram /></li>
                            <li className="hover:text-green-500 duration-300"><IoLogoYoutube /></li>
                            <li className="hover:text-green-500 duration-300">
                                <a href="https://www.linkedin.com/in/pradhuman-singh-naruka-227030280/">
                                    <FaLinkedin />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="md:w-1/2 md:mt-32 mt-24 md:ml-48 order-1">
                    <img src={photo} className="rounded-full md:w-[450px] md:h-[450px]" style={greenShadow} alt=''></img>
                </div>
            </div>
        </div>
    </>
  )
}

export default Home
