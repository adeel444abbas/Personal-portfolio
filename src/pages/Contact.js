import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FaPhone } from "react-icons/fa";
import contactImg from "../assets/contact.png";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    // Display the entered data in an alert
    const { name, email, message } = formData;
    const alertMessage = `Name: ${name}\nEmail: ${email}\nMessage: ${message}`;
    alert(alertMessage);

    // Reset the form
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <>
      <Navbar />
      <section className="container mx-auto contactPage">
        <div className="row">
          <div className="col-md-6" id="left">
            <h2 className="text-2xl font-bold mb-4 d-flex justify-center">
              <FaPhone
                size={32}
                style={{ color: "#000", paddingRight: "7px" }}
              />{" "}
              Contact Me
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block font-bold">
                  Name:
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="bg-gray-200 p-2 rounded-lg outline-none w-100"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block font-bold">
                  Email:
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="bg-gray-200 p-2 rounded-lg outline-none w-100"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block font-bold">
                  Message:
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="bg-gray-200 p-2 rounded-lg outline-none w-100"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="transition ease-in-out delay-150 bg-slate-900 hover:bg-orange-400 text-white font-bold py-2 px-4 w-50 rounded mt-4"
              >
                Send Message
              </button>
            </form>
          </div>
          <div className="col-md-6" id="right">
            <img src={contactImg} alt="contactimage" className="contactImg" />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Contact;
