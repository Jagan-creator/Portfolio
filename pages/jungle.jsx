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
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10" />
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
          <p>
            Jungle is a multifaceted mini e-commerce application, meticulously
            constructed using the powerful Ruby on Rails 6.1 framework. Beyond
            its core function of facilitating online shopping, Jungle stands out
            as an invaluable educational resource, offering a hands-on,
            real-world example of building a web application with Rails. One of
            Jungle's standout features is its seamless integration of Stripe for
            payment processing. Users can easily set up their Stripe accounts
            and configure the necessary test keys within the '.env' file,
            enhancing the application's functionality. To bring Jungle to life,
            a simple 'bin/rails s -b 0.0.0.0' command launches the server. Under
            the hood, Jungle leverages the capabilities of Rails 6.1, pairs them
            with Bootstrap 5 for an aesthetically pleasing and responsive user
            interface, relies on PostgreSQL 9.x for a robust database system,
            and integrates Stripe to offer a secure and efficient payment
            experience. For testing purposes, Jungle provides a test credit card
            number (# 4111 1111 1111 1111) to simulate successful transactions,
            with detailed instructions available in the Stripe testing
            documentation. In summary, Jungle is a versatile, user-friendly, and
            educational e-commerce platform that not only simplifies online
            shopping but also serves as an instructive example for developers
            eager to dive into the world of Ruby on Rails through hands-on
            experience.
          </p>
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

export default jungle;
