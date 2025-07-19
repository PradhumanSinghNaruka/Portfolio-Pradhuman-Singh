import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { ReactTyped, Typed } from "react-typed";
import { MdCake } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { GoGraph } from "react-icons/go";
import { FaAddressBook } from "react-icons/fa6";
import { MdAttachEmail } from "react-icons/md";
import { IoLogoGithub } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";

function About() {
  return (
    <div
      name="About"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-32"
    >
      <div className="font-bold mb-5 space-y-4">
        <h1 className="text-3xl md:text-4xl underline text-green-500 text-center">
          ABOUT
        </h1>{" "}
        <span className="text-green-500"></span>
        <br />
        <ReactTyped
          className="mt-10 font-bold text-3xl md:text-5xl text-green-100"
          strings={["Learn more about me"]}
          typeSpeed={40}
          backSpeed={50}
          loop={true}
        />
        <br />
        <div className="text-center space-y-4">
          <h1 className="text-green-500 mt-8 font-bold text-3xl md:text-5xl ">
            MERN Stack Web Developer & Machine Learning
          </h1>
          <br />
          <p className="text-xl md:text-3xl text-left">
            I am a BTech Computer Science (AI&DS) Student From Poornima
            University <br />I am a passionate Full Stack Web Developer.
          </p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row w-full">
        <div className="flex-1 w-full text-wrap">
          <ul className="mt-6 md:space-y-6 space-y-4">
            <li>
              <h2 className="flex items-center space-x-2 text-xl md:text-3xl">
                <MdCake className="mr-4 text-green-500" />
                Birthday:{" "}
                <span className="text-xl md:text-2xl">04 May 2004</span>
              </h2>
            </li>
            <li>
              <h2 className="flex items-center space-x-2 text-xl md:text-3xl">
                <FaPhoneAlt className="mr-4 text-green-500" />
                Phone: <span className="text-xl md:text-2xl">8107773336</span>
              </h2>
            </li>
            <li>
              <h2 className="flex items-center space-x-2 text-xl md:text-3xl">
                <FaLocationDot className="mr-4 text-green-500" />
                City:{" "}
                <span className="text-xl md:text-2xl">
                  Jaipur, Rajasthan, India
                </span>
              </h2>
            </li>
          </ul>
          <ul className="mt-6 md:space-y-6 space-y-4">
            <li>
              <h2 className="flex items-center space-x-2 text-xl md:text-3xl">
                <GoGraph className="mr-4 text-green-500" />
                Age: <span className="text-xl md:text-2xl">21</span>
              </h2>
            </li>
            <li>
              <h2 className="flex items-center space-x-2 text-xl md:text-3xl">
                <FaAddressBook className="mr-4 text-green-500" />
                Degree:{" "}
                <span className="text-xl md:text-2xl">
                  B.tech CSE (AI & DS)
                </span>
              </h2>
            </li>
            <li className="grid md:flex space-x-0 md:space-x-3">
              <h2 className="flex items-center space-x-0 md:space-x-2 text-xl md:text-3xl">
                <MdAttachEmail className="mr-4 text-green-500" />
                Email:
              </h2>
              <br />
              <span className="text-md md:text-2xl">
                2022btechaidspradhuman10975@poornima.edu.in
              </span>
            </li>
            <li className="grid md:flex space-x-0 md:space-x-3">
              <h2 className="flex items-center space-x-0 md:space-x-2 text-xl md:text-3xl">
                <IoLogoGithub className="mr-4 text-green-500" />
                Github:{" "}
                <span className="text-lg md:text-2xl">
                  github.com/PradhumanSinghNaruka
                </span>
              </h2>
            </li>
            <li className="grid md:flex space-x-0 md:space-x-3">
              <h2 className="flex items-center space-x-0 md:space-x-2 text-xl md:text-3xl">
                <FaLinkedin className="mr-4 text-green-500" />
                Linkedin:
              </h2>
              <br />
              <span className="text-lg md:text-2xl">
                https://www.linkedin.com/in/pradhuman-singh-naruka-227030280/
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default About;
