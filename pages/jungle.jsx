import React from "react";
import jungleImg from "../public/assets/projects/jungle-preview.jpeg";
import Image from "next/image";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";
import { IoIosArrowBack } from "react-icons/io";

const jungle = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/60 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={jungleImg}
          alt="/"
        ></Image>
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">Jungle</h2>
          <h3>Ruby / Rails</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-3 pt-8">
        <div className="col-span-4">
          <p>Project</p>
          <h2>Overview</h2>
          <ul className="py-4">
            <p className="text-gray-600 py-2 flex items-center">
              <RiRadioButtonFill className="p-1" />
              Entirely functional e-commerce web app
            </p>
            <p className="text-gray-600 py-2 flex items-center">
              <RiRadioButtonFill className="p-1" />
              Authentic payment verification and processing used during checkout
            </p>
            <p className="text-gray-600 py-2 flex items-center">
              <RiRadioButtonFill className="p-1" />
              Live updating of stock availability on various items
            </p>
            <p className="text-gray-600 py-2 flex items-center">
              <RiRadioButtonFill className="p-1" />
              Modern and visually appealing styles used throughout the app
            </p>
          </ul>
          <a
            href="https://github.com/Jagan-creator/jungle-rails"
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
                Ruby
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="p-1" />
                Rails
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="p-1" />
                PostgreSQL
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="p-1" />
                Sass
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="p-1" />
                Stripe
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="p-1" />
                Bootstrap
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

export default jungle;
