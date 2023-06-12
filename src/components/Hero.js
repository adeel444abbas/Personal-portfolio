import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import heroimage from "../assets/heroimage.jfif";

const Hero = () => {
  const [contentIndex, setContentIndex] = useState(0);
  const contents = [
    "A React JS Developer",
    "A Frontend Web Developer",
    "A Web Designer",
    "A Freelancer",
    "UML Designer",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setContentIndex((prevIndex) => (prevIndex + 1) % contents.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [contents.length]);

  return (
    <div className="hero mt-5">
      <div className="mask">
        <img className="into-img" src={heroimage} alt="heroImg" />
      </div>
      <div className="content">
        <p className="text-2xl md:text-4xl mb-1 text-orange-400">
          HI, I'M ADEEL ABBAS.
        </p>
        <p className="text-2xl text-white md:text-3xl mb-1 pb-2">
          {contents[contentIndex]}
        </p>
        <Link
          to="/project"
          className="btn bg-orange-400 transition duration-300 ease-in-out transform hover:-translate-y-1"
          id="heroBtn1"
        >
          Projects
        </Link>
        <Link
          to="/contact"
          className="btn ml-1 border-orange-400 transition duration-300 ease-in-out transform hover:-translate-y-1"
          id="heroBtn2"
        >
          Contact
        </Link>
      </div>
    </div>
  );
};

export default Hero;
