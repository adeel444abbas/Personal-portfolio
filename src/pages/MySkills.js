import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const MySkills = () => {
  const skills = [
    { name: "HTML", range: 80 },
    { name: "CSS", range: 80 },
    { name: "JavaScript", range: 70 },
    { name: "React JS", range: 60 },
    { name: "Bootstrap", range: 80 },
    { name: "Tailwind CSS", range: 75 },
    { name: "Node.js", range: 25 },
    { name: "MongoDB", range: 30 },
    { name: "Git", range: 40 },
    { name: "GitHub", range: 40 },
  ];

  return (
    <>
      <Navbar />
      <section className="py-10 mt-5">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-4">Skills</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="bg-gray-200 p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1"
              >
                <span className="text-xl">{skill.name}</span>
                <div className="h-2 bg-slate-900 mt-2">
                  <div
                    className="h-full bg-orange-400"
                    style={{ width: `${skill.range}%` }}
                  ></div>
                </div>
                <span className="text-sm mt-1">{`${skill.range}%`}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default MySkills;
