import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";
import { ReactTyped,Typed } from "react-typed";

function About() {
  return (
    <div name="About" className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-32">
        <div className="text-3xl md:text-4xl font-bold mb-5">
            About <span className="text-green-500"></span>
            <br/>
            {/* <h1 className="mt-8 font-bold text-4xl md:text-6xl text-green-200">Learn more about me</h1> */}
            <ReactTyped
                        className="mt-10 font-bold text-4xl md:text-6xl text-green-200"
                        strings={["Learn more about me"]}
                        typeSpeed={40}
                        backSpeed={50}
                        loop={true}

                    />
            <br/>
            <div className="text-center space-y-4">
                <h1 className="text-green-500 mt-8 font-bold text-2xl md:text-4xl ">Web developer/Data Science learner</h1>
                <br/>
                <p className="text-xl md:text-3xl">I am a BTech Computer Science (AI&DS) Student From Poornima University<br/>
                I am a passionate web developer<br/>
                I am in 3rd Year and Work on Shoes Business Website and Learn DSA in JAVA
                </p>
            </div>
        </div>
        <div className="flex flex-col md:flex-row">
            <div className="flex-1">
                <ul className="mt-6 md:space-y-6 space-y-4">
                    <li>
                        <h2 className="flex items-center space-x-2 text-xl md:text-3xl">
                        <FaArrowRightLong className="mr-4 text-green-500" />
                        Birthday: <span className="text-xl md:text-2xl">04 May 2004</span>
                        </h2>
                    </li>
                    <li>
                        <h2 className="flex items-center space-x-2 text-xl md:text-3xl">
                        <FaArrowRightLong className="mr-4 text-green-500" />
                        Website: <span className="text-xl md:text-2xl">Click Here</span>
                        </h2>
                    </li>
                    <li>
                        <h2 className="flex items-center space-x-2 text-xl md:text-3xl">
                        <FaArrowRightLong className="mr-4 text-green-500" />
                        Phone: <span className="text-xl md:text-2xl">Contact via Mail :)</span>
                        </h2>
                    </li>
                    <li>
                        <h2 className="flex items-center space-x-2 text-xl md:text-3xl">
                        <FaArrowRightLong className="mr-4 text-green-500" />
                        City: <span className="text-xl md:text-2xl">Jaipur, India</span>
                        </h2>
                    </li>
                </ul>
            </div>

            {/* Right Section */}
            <div className="flex-1 md:ml-8">
                <ul className="mt-6 md:space-y-6 space-y-4">
                    <li>
                        <h2 className="flex items-center space-x-2 text-xl md:text-3xl">
                        <FaArrowRightLong className="mr-4 text-green-500" />
                        Age: <span className="text-xl md:text-2xl">20</span>
                        </h2>
                    </li>
                    <li>
                        <h2 className="flex items-center space-x-2 text-xl md:text-3xl">
                        <FaArrowRightLong className="mr-4 text-green-500" />
                        Degree: <span className="text-xl md:text-2xl">B.tech CSE (AI & DS)</span>
                        </h2>
                    </li>
                    <li>
                        <h2 className="flex items-center space-x-0 md:space-x-2 text-xl md:text-3xl">
                        <FaArrowRightLong className="mr-4 text-green-500" />
                        Email: 
                        </h2>
                        <br/>
                        <span className="text-xl md:text-2xl">pradhumannaruka04@gmail.com</span>
                    </li>
                    <li>
                        <h2 className="flex items-center space-x-2 text-xl md:text-3xl">
                        <FaArrowRightLong className="mr-4 text-green-500" />
                        Freelance: <span className="text-xl md:text-2xl">Available</span>
                        </h2>
                    </li>
                </ul>
            </div>
        </div>
        
    </div>
  )
}

export default About
