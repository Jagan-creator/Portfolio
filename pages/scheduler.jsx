import React from "react";
import schedulerImg from "../public/assets/projects/scheduler-preview.png";
import Image from "next/image";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

const scheduler = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10" />
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

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <p>Project</p>
          <h2>Overview</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Turpis
            cursus in hac habitasse platea dictumst quisque. Nec ullamcorper sit
            amet risus nullam eget felis. Consectetur adipiscing elit
            pellentesque habitant morbi. Egestas tellus rutrum tellus
            pellentesque eu. Non diam phasellus vestibulum lorem sed. Faucibus a
            pellentesque sit amet porttitor eget dolor morbi non. Consequat ac
            felis donec et odio pellentesque diam. Mi tempus imperdiet nulla
            malesuada pellentesque. A diam sollicitudin tempor id eu nisl nunc
            mi. Ultrices eros in cursus turpis massa tincidunt dui. Non blandit
            massa enim nec. Ut enim blandit volutpat maecenas volutpat blandit
            aliquam etiam. Elementum integer enim neque volutpat ac tincidunt
            vitae semper quis. Risus ultricies tristique nulla aliquet enim
            tortor at auctor urna. Molestie ac feugiat sed lectus vestibulum
            mattis ullamcorper velit. Vivamus at augue eget arcu dictum varius
            duis. Odio pellentesque diam volutpat commodo sed. Porta nibh
            venenatis cras sed felis eget velit aliquet sagittis. Quisque
            egestas diam in arcu cursus euismod quis. Congue eu consequat ac
            felis donec et. Id porta nibh venenatis cras sed. Eget nunc lobortis
            mattis aliquam faucibus purus in massa tempor. Libero nunc consequat
            interdum varius sit. Facilisi nullam vehicula ipsum a. Volutpat
            consequat mauris nunc congue nisi vitae suscipit tellus mauris.
            Quisque non tellus orci ac auctor augue. Purus sit amet luctus
            venenatis. Egestas congue quisque egestas diam. Semper auctor neque
            vitae tempus quam pellentesque nec. Sed euismod nisi porta lorem
            mollis.
          </p>
          <button className="px-8 py-2 mt-4">Code</button>
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
        <Link href="/#projects">
          <p className="underline cursor-pointer">Back</p>
        </Link>
      </div>
    </div>
  );
};

export default scheduler;
