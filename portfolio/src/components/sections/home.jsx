import React from 'react';
import myImage from "../../assets/khushi.jpg";
import { RevealOnScroll } from '../RevealOnScroll';

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col md:flex-row items-center justify-center gap-10 px-6 md:px-20 bg-gradient-to-b from-black via-slate-900 to-black text-white"
    >
      {/* Left Content */}
      <div className="md:w-1/2">
        <RevealOnScroll>
          <div className="text-center md:text-left space-y-6">
            <p className="text-sm tracking-widest text-blue-400 uppercase">Hi, I'm</p>
            <h1 className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              Khushi Datta
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed">
              A passionate BCA student and data enthusiast. I explore data, build dashboards, and love transforming insights into decisions using <strong>Excel</strong>, <strong>Python</strong>, <strong>Power BI</strong>, and <strong>SQL</strong>.
            </p>
            <div className="flex justify-center md:justify-start space-x-4">
              <a
                href="#projects"
                className="bg-blue-500 text-white py-3 px-6 rounded-full font-medium hover:bg-blue-600 transition"
              >
                View Projects
              </a>
              <a
                href="#contacts"
                className="border border-blue-400 text-blue-400 py-3 px-6 rounded-full font-medium hover:bg-blue-400 hover:text-black transition"
              >
                Contact Me
              </a>
            </div>
          </div>
        </RevealOnScroll>
      </div>

      {/* Right Image */}
      <div className="md:w-1/2 flex justify-center">
        <RevealOnScroll>
          <div className="w-64 h-64 md:w-80 md:h-80 rounded-full border-4 border-blue-500 shadow-lg overflow-hidden relative group transition-transform duration-300 hover:scale-105 bg-black">
            <img
              src={myImage}
              alt="Khushi Datta"
              className="w-full h-full object-cover object-center rounded-full"
            />
            <div className="absolute inset-0 rounded-full border-4 border-blue-400 opacity-30 group-hover:opacity-50 blur-md"></div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
};
