import React from "react";
import Image from "next/image";
import mimikyuImg from "../public/assets/projects/mimikyus-day-off-preview.png";
import Link from "next/link";

function Projects() {
  return (
    <div className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#f0a10e]">
          Projects
        </p>
        <h2 className="py-4">Things I have Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-3 group hover:bg-gradient-to-r from-[#f0a10e] to-[#ffd771]">
            <Image
              className="rounded-xl group-hover:opacity-70"
              src={mimikyuImg}
              alt="/"
            />
            <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
              <h3 className="text-2xl text-white tracking-wider text-center">
                Mimikyu's Day Off
              </h3>
              <p className="pb-4 pt-2 text-white text-center">
                Next.js & Prisma
              </p>
              <Link href="/">
                <p className="text-center py-3 rounded-lg bg-white text-gray-400 font-bold text-lg cursor-pointer">
                  More Info
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
