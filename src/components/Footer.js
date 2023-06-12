import React from "react";
import { FaFacebook, FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-4">
      <div className="container mx-auto text-center">
        <div>
          My Personal Portfolio -- Developed By
          <span className="text-orange-400 font-italic"> Adeel Abbas</span>{" "}
          &copy; All Rights Reserved {new Date().getFullYear()}{" "}
        </div>
        <div className="flex w-100 mt-2 justify-content-center">
          <FaGithub
            size={30}
            style={{ cursor: "pointer", color: "#4078c0", marginRight: "1rem" }}
          />
          <FaFacebook
            size={30}
            style={{ cursor: "pointer", color: "#3b5998", marginRight: "1rem" }}
          />
          <FaLinkedin
            size={30}
            style={{ cursor: "pointer", color: "#0072b1", marginRight: "1rem" }}
          />
          <FaTwitter
            size={30}
            style={{
              cursor: "pointer",
              marginRight: "1rem",
              color: "#00acee",
            }}
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
