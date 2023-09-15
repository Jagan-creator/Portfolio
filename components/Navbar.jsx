import Image from "next/image";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { AiOutlineClose, AiOutlineMenu, AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { useRouter } from "next/router";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [navBg, setNavBg] = useState("#ecf0f3");
  const [linkColor, setLinkColor] = useState("#1f2937");
  const router = useRouter();

  useEffect(() => {
    if (
      router.asPath === "/mimikyu" ||
      router.asPath === "/jungle" ||
      router.asPath === "/scheduler" ||
      router.asPath === "/tweeter"
    ) {
      setNavBg("transparent");
      setLinkColor("#ecf0f3");
    } else {
      setNavBg("#ecf0f3");
      setLinkColor("#1f2937");
    }
  }, [router]);

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);

  return (
    <div
      style={{ backgroundColor: `${navBg}` }}
      className={
        shadow
          ? "fixed w-full h-20 shadow-xl z-[100]"
          : "fixed w-full h-20 z-[100]"
      }
    >
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <Link href="/">
          <Image
            src="/../public/assets/joel-main-logo.png"
            alt="/"
            width="150"
            height="75"
          />
        </Link>
        <div>
          <ul
            style={{ color: `${linkColor}` }}
            className="hidden md:flex"
          >
            <Link
              scroll={false}
              href="/#home"
            >
              <li className="ml-10 text-sm uppercase hover:border-b">Home</li>
            </Link>
            <Link
              scroll={false}
              href="/#about"
            >
              <li className="ml-10 text-sm uppercase hover:border-b">About</li>
            </Link>
            <Link
              scroll={false}
              href="/#skills"
            >
              <li className="ml-10 text-sm uppercase hover:border-b">Skills</li>
            </Link>
            <Link
              scroll={false}
              href="/#projects"
            >
              <li className="ml-10 text-sm uppercase hover:border-b">
                Projects
              </li>
            </Link>
            <Link
              scroll={false}
              href="/#contact"
            >
              <li className="ml-10 text-sm uppercase hover:border-b">
                Contact
              </li>
            </Link>
          </ul>
          <div
            onClick={handleNav}
            className="md:hidden"
          >
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>
      <div
        className={
          nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ""
        }
      >
        <div
          className={
            nav
              ? "md:hidden fixed left-0 top-0 w-[75%] sm:w-[60%] md:w[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500"
              : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
          }
        >
          <div>
            <div className="flex w-full items-center justify-between">
              <Link
                scroll={false}
                href="/"
              >
                <Image
                  src="/../public/assets/joel-main-logo.png"
                  width={87}
                  height={35}
                  alt="/"
                />
              </Link>
              <div
                onClick={handleNav}
                className="rounded-full shadow-md shadow-gray-400 p-3 cursor-pointer"
              >
                <AiOutlineClose />
              </div>
            </div>
            <div className="border-b border-gray-300 my-4">
              <p className="w-[85%] md:w-[90%] py-4">
                temporary placeholder text for the time being
              </p>
            </div>
          </div>
          <div className="py-4 flex flex-col">
            <ul className="uppercase">
              <Link
                scroll={false}
                href="/#home"
              >
                <li
                  onClick={() => setNav(false)}
                  className="py-4 text-sm"
                >
                  Home
                </li>
              </Link>
              <Link
                scroll={false}
                href="/#about"
              >
                <li
                  onClick={() => setNav(false)}
                  className="py-4 text-sm"
                >
                  About
                </li>
              </Link>
              <Link
                scroll={false}
                href="/#skills"
              >
                <li
                  onClick={() => setNav(false)}
                  className="py-4 text-sm"
                >
                  Skills
                </li>
              </Link>
              <Link
                scroll={false}
                href="/#projects"
              >
                <li
                  onClick={() => setNav(false)}
                  className="py-4 text-sm"
                >
                  Projects
                </li>
              </Link>
              <Link
                scroll={false}
                href="/#contact"
              >
                <li
                  onClick={() => setNav(false)}
                  className="py-4 text-sm"
                >
                  Contact
                </li>
              </Link>
            </ul>
            <div className="pt-40">
              <p className="uppcase tracking-widest text-[#f0a10e]">
                Want To Connect?
              </p>
              <div className="flex items-center justify-left py-4">
                <a
                  href="https://www.linkedin.com/in/joel-hagan/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="rounded-full shadow-md shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in duration-300 mr-8">
                    <FaLinkedinIn />
                  </div>
                </a>
                <a
                  href="https://github.com/Jagan-creator"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="rounded-full shadow-md shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in duration-300 mr-8">
                    <FaGithub />
                  </div>
                </a>
                <a href="mailto:joel.hagan.8@gmail.com">
                  <div className="rounded-full shadow-md shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in duration-300">
                    <AiOutlineMail />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
