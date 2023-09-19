import React from "react";
import propertyImg from "../public/assets/projects/mimikyu-day-off-preview.png";
import Image from "next/image";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";
import { IoIosArrowBack } from "react-icons/io";

const mimikyu = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/60 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={propertyImg}
          alt="/"
        ></Image>
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">Mimikyu's Day Off</h2>
          <h3>Next.js / Prisma</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-3 pt-8">
        <div className="col-span-4">
          <p>Project</p>
          <h2>Overview</h2>
          <p className="py-4">
            Welcome to Mimikyu's Day Off, our final group project developed at
            Lighthouse Labs! This Pokemon-themed roguelite-style game invites
            you to join Mimikyu on a thrilling adventure during his day off,
            complete with encounters with a clueless thief. In the spirit of
            roguelite games, each attempt offers new abilities and stat buffs
            for future runs, making it a unique and challenging experience.
            Sabrina Wang's art brings this world to life, immersing you in the
            Pokemon universe. Our dedicated team, including Sabrina Wang, David
            Sooley, and Joel Hagan, crafted this captivating adventure. The game
            features a dynamic battle system with various attacks,
            buffs/debuffs, and healing moves. Customize your loadout by
            selecting up to 4 moves and unlock more as you progress. Your
            progress is securely saved, including learned moves, stat upgrades,
            and achievements, thanks to Auth0 authentication. Enjoy unique
            touches like dynamic music, a wide array of moves, and a special
            story ending. Dive into the early development stages and explore our
            tech stack with React, Node, Next, Prisma, Sass, and Auth0. The game
            and database are hosted on Vercel, ensuring a seamless gaming
            experience. Immerse yourself in the world of Mimikyu's Day Off and
            embark on an exciting journey in the Pokemon universe!
          </p>
          <a
            href="https://mimikyus-day-off.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="px-8 py-2 mt-4 mr-8 cursor-pointer hover:scale-110 ease-in duration-300 shadow-md shadow-gray-400">
              Demo
            </button>
          </a>
          <a
            href="https://github.com/penguinboots/mimikyus-day-off"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="px-8 py-2 mt-4 cursor-pointer hover:scale-110 ease-in duration-300 shadow-md shadow-gray-400">
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
                Next.js
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="p-1" />
                Prisma
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="p-1" />
                Node
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="p-1" />
                Sass
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="p-1" />
                Auth0
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="p-1" />
                Vercel
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
              <div className="rounded-full shadow-lg shadow-gray-400 p-2 cursor-pointer hover:scale-110 ease-in duration-300">
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

export default mimikyu;
