import React from "react";
import schedulerImg from "../public/assets/projects/scheduler-preview.png";
import Image from "next/image";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";
import { IoIosArrowBack } from "react-icons/io";

const scheduler = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/60 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={schedulerImg}
          alt="/"
        ></Image>
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">Scheduler</h2>
          <h3>React / API / Testing</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-3 pt-8">
        <div className="col-span-4">
          <p>Project</p>
          <h2>Overview</h2>
          <ul className="py-4">
            <p className="text-gray-600 py-2 flex items-center">
              <RiRadioButtonFill className="p-1" />
              Easy to use scheduler application that can book, cancel, and edit
              appointments with mentors
            </p>
            <p className="text-gray-600 py-2 flex items-center">
              <RiRadioButtonFill className="p-1" />
              Various error and warning notices are integrated for a better user
              experience
            </p>
            <p className="text-gray-600 py-2 flex items-center">
              <RiRadioButtonFill className="p-1" />
              Simplistic navigation that shows students what areas they can book
              an appointment
            </p>
            <p className="text-gray-600 py-2 flex items-center">
              <RiRadioButtonFill className="p-1" />
              Live updating of notifications and appointment status
            </p>
          </ul>
          <a
            href="https://github.com/Jagan-creator/scheduler"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="px-8 py-2 mt-4 mr-8 cursor-pointer hover:scale-110 ease-in duration-300 shadow-md shadow-gray-400">
              Code
            </button>
          </a>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="p-1" />
                React
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="p-1" />
                API
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="p-1" />
                Sass
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="p-1" />
                Storybook
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="p-1" />
                Jest
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="p-1" />
                Axios
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-left">
          <Link
            scroll={false}
            href="/#projects"
          >
            <div>
              <div className="rounded-full shadow-lg shadow-gray-400 p-2 cursor-pointer hover:scale-110 ease-in duration-300 translate-y-[40%]">
                <IoIosArrowBack
                  className="text-[#f0a10e]"
                  size={30}
                />
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default scheduler;
