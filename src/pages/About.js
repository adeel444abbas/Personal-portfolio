import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import aboutImg from "../assets/aboutImg.jpeg";

const About = () => {
  const handleDownload = () => {
    const fileUrl =
      "https://drive.google.com/file/d/1LkSMXryydFEng25-7OQyeMORwCfTtB00/view?usp=drive_link";

    window.open(fileUrl, "_blank");
  };

  return (
    <>
      <Navbar />
      <div className="container mx-auto aboutContainer">
        <div className="row">
          <div className="col-md-6 left">
            <h2 className="text-3xl font-bold pb-3">About Me</h2>
            <p className="text-capitalize font-medium font-base">
              Hi! My name is adeel abbas. <br />
              i have completed my graduation in software engineering from
              university of gujrat. <br />
              I am a frontend web developer. <br />i love working with React JS.
            </p>
            <button
              className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 bg-slate-900 hover:bg-orange-400 text-white font-bold py-2 px-4 w-50 rounded mt-4 duration-700"
              onClick={handleDownload}
            >
              Download CV
            </button>
          </div>
          <div className="col-md-6 right">
            <img
              src={aboutImg}
              alt="aboutImg"
              className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-700 aboutImg"
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
