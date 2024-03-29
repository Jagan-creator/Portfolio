import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { RiFilePaper2Line } from "react-icons/ri";
import "animate.css";

const Main = () => {
  return (
    <div
      id="home"
      className="w-full h-screen text-center px-6"
    >
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center px-2">
        <div>
          <p className="uppercase text-sm tracking-widest text-gray-600">
            CODE CREATE DELIVER
          </p>
          <h1 className="py-4 text-[#f0a10e] animate__animated animate__fadeInRight">
            Joel Hagan
          </h1>
          <h1
            className="py-2 text-gray-700 animate__animated animate__fadeInRight"
            style={{ fontSize: "3rem" }}
          >
            Crafting Digital Experiences from Front to Back
          </h1>

          <p className="py-4 text-gray-600 max-width-[70%] m-auto">
            As an inspired full-stack developer I aim to blend my creative
            marketing skills along with acquired technical knowledge. It's about
            crafting user friendly interfaces and well thought out back-end
            systems. I strive to better my full-stack ability, adapt to new
            technologies, and deliver solutions that enable users and businesses
            in the digital world to find success.
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <a
              href="https://www.linkedin.com/in/joel-hagan/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300 mr-8">
                <FaLinkedinIn />
              </div>
              <p className=" text-xs text-gray-700 mr-8 py-4">LinkedIn</p>
            </a>
            <a
              href="https://github.com/Jagan-creator"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300 mr-8">
                <FaGithub />
              </div>
              <p className=" text-xs text-gray-700 mr-8 py-4">GitHub</p>
            </a>
            <a href="mailto:joel.hagan.8@gmail.com">
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300 mr-8">
                <AiOutlineMail />
              </div>
              <p className=" text-xs text-gray-700 mr-8 py-4">Email</p>
            </a>
            <a href="https://resume.creddle.io/resume/5wh3kh8ktcc">
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <RiFilePaper2Line />
              </div>
              <p className=" text-xs text-gray-700 py-4">Resume</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
