import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    email: "",
    subject: "",
    message: "",
  });

  const [phoneNumberError, setPhoneNumberError] = useState("");
  const [emailError, setEmailError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isEmailValid(formData.email)) {
      setEmailError("Please enter a valid email address.");
      return;
    } else {
      setEmailError("");
    }

    if (!isPhoneNumberValid(formData.phoneNumber)) {
      setPhoneNumberError("Please enter a valid phone number.");
      return;
    } else {
      setPhoneNumberError("");
    }

    try {
      const response = await fetch("https://eok0no46zh1hooe.m.pipedream.net", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Your submission has been received!");
        setFormData({
          name: "",
          phoneNumber: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        alert("Message sending failed. Please try again later.");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      alert("An error occurred while sending the message.");
    }
  };

  const isEmailValid = (email) => {
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    return emailRegex.test(email);
  };

  const isPhoneNumberValid = (phoneNumber) => {
    const phoneRegex = /^[0-9]{3}(-[0-9]{3})?(-[0-9]{4})?$/;
    return phoneRegex.test(phoneNumber);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "phoneNumber") {
      const cleanedValue = value.replace(/\D/g, "");

      let formattedValue = "";

      if (cleanedValue.length >= 3) {
        formattedValue = cleanedValue.substring(0, 3);
      }

      if (cleanedValue.length >= 6) {
        formattedValue += "-" + cleanedValue.substring(3, 6);
      } else {
        formattedValue = cleanedValue;
      }

      if (cleanedValue.length > 6) {
        formattedValue += "-" + cleanedValue.substring(6, 10);
      }

      setFormData({ ...formData, [name]: formattedValue });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  return (
    <div
      id="contact"
      className="w-full lg:h-screen"
    >
      <div className="max-w-[1240px] m-auto py-24 w-full px-8">
        <p className="text-xl tracking-widest uppercase text-[#f0a10e]">
          Contact
        </p>
        <h2 className="py-4">Get In Touch</h2>
        <div className="grid lg:grid-cols-5 gap-8">
          {/* left */}
          <div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4">
            <div className="lg:p-4 h-full px-4 py-4">
              <div>
                <img
                  className="rounded-xl hover:scale-105 ease-in duration-300"
                  src="https://images.unsplash.com/photo-1612383401597-cdfb8bdfa0d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80"
                  alt="/"
                />
              </div>
              <div>
                <h2 className="py-2">Joel Hagan</h2>
                <p>Full-Stack Developer</p>
                <p className="py-4">
                  I am available and open for full-time positions. Contact me
                  and let's chat.
                </p>
              </div>
              <div>
                <p className="uppercase pt-8">Connect With Me</p>
                <div className="flex items-center justify-left py-4">
                  <a
                    href="https://www.linkedin.com/in/joel-hagan/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300 mr-8">
                      <FaLinkedinIn />
                    </div>
                  </a>
                  <a
                    href="https://github.com/Jagan-creator"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300 mr-8">
                      <FaGithub />
                    </div>
                  </a>
                  <a href="mailto:joel.hagan.8@gmail.com">
                    <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                      <AiOutlineMail />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* right */}
          <div className="col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4">
            <div className="p-4">
              <form onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2">Name</label>
                    <input
                      className="border-2 rounded-lg p-3 flex border-gray-300"
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2">
                      Phone Number
                    </label>
                    <input
                      className="border-2 rounded-lg p-3 flex border-gray-300"
                      type="text"
                      name="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleChange}
                    />
                    {phoneNumberError && (
                      <p className="text-red-500">{phoneNumberError}</p>
                    )}
                  </div>
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Email</label>
                  <input
                    className="border-2 rounded-lg p-3 flex border-gray-300"
                    type="text"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                  {emailError && <p className="text-red-500">{emailError}</p>}
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Subject</label>
                  <input
                    className="border-2 rounded-lg p-3 flex border-gray-300"
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Message</label>
                  <textarea
                    className="border-2 rounded-lg p-3 border-gray-300"
                    rows="7"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                </div>
                <button
                  className="w-full p-4 text-gray-100 mt-4 cursor-pointer hover:scale-105 ease-in duration-300 shadow-xl shadow-gray-400 rounded-xl uppercase bg-gradient-to-r from-[#f0a10e] to-[#ffd771]"
                  type="submit"
                >
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="flex justify-center py-12">
          <Link
            scroll={false}
            href="/#home"
          >
            <div className="pt-20">
              <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
                <HiOutlineChevronDoubleUp
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
}

export default Contact;
