import React from "react";

const About = () => {
  return (
    <div
      id="about"
      className="w-full md:h-screen p-2 flex items-center py-16 px-20"
    >
      <div className="max-w[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#f0a10e]">
            About
          </p>
          <h2 className="py-4">Who I Am</h2>
          <p className="py-2 text-gray-600">
            My passion for coding stems from a deep-seated desire to transform
            creative ideas into tangible digital experiences. It all began
            during my tenure in marketing and creative roles, where I witnessed
            the profound impact that well-designed websites and digital
            campaigns could have on a brand's success. This revelation fueled my
            curiosity and led me to explore the world of web development.
          </p>
          <p className="py-2 text-gray-600">
            Through countless hours of self-guided learning and formal
            education, I've honed my technical skills in full-stack web
            development. The ability to craft user-friendly interfaces and build
            robust, scalable back-end systems has been both challenging and
            immensely rewarding. Now, I'm on a mission to combine my marketing
            and creative background with my newfound technical prowess. My goal
            is to bridge the gap between the two worlds, creating digital
            solutions that not only look visually stunning but also function
            flawlessly. I see the web as a canvas where innovation knows no
            bounds, and I'm excited to craft experiences that engage, inform,
            and inspire users. By merging my creative sensibilities with
            technical knowledge, I aim to deliver digital solutions that
            resonate with audiences and drive meaningful results.
          </p>
          <p className="py-2 text-gray-600 underline cursor-pointer">
            Here are some of my most recent projects!
          </p>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <img
            className="rounded-xl"
            src="https://images.unsplash.com/photo-1468436139062-f60a71c5c892?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt="/"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
