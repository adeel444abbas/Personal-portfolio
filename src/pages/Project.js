import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FaGithub } from "react-icons/fa";
//Importing images
import crudImg from "../assets/CrudApp.jpg";
import guessNum from "../assets/GuessNumber.jpg";
import pigGame from "../assets/PigGame.jpg";
import recipeApp from "../assets/RecipesApp.jpg";
import cars from "../assets/cars.jpg";
import responsiveApp from "../assets/responsive.jpg";
import adminDashboard from "../assets/Admindashboard.jpg";

const Project = () => {
  // To handle the button wen someone click on it

  const handleCrudApp = () => {
    const fileUrl = "https://github.com/adeel444abbas/React-CRUD-App";
    window.open(fileUrl, "_blank");
  };
  const handlePigGame = () => {
    const fileUrl =
      "https://github.com/adeel444abbas/Pig-Game-Javascript-Based-Game";
    window.open(fileUrl, "_blank");
  };
  const handleGuessNum = () => {
    const fileUrl =
      "https://github.com/adeel444abbas/Guess-My-Number-JavaScript-based-game-";

    window.open(fileUrl, "_blank");
  };
  const handleRecipesApp = () => {
    const fileUrl = "https://github.com/adeel444abbas/Multiple-Pages-Website";

    window.open(fileUrl, "_blank");
  };
  const handleCarsApp = () => {
    const fileUrl =
      "https://github.com/adeel444abbas/Single-page-website-with-different-sections";
    window.open(fileUrl, "_blank");
  };
  const handleAdminDash = () => {
    const fileUrl = "https://github.com/adeel444abbas/Simple-Admin-Dashboard";
    window.open(fileUrl, "_blank");
  };
  const handleResponsive = () => {
    const fileUrl = "https://github.com/adeel444abbas/Responsive-Website";
    window.open(fileUrl, "_blank");
  };

  return (
    <>
      <Navbar />
      <div className="project">
        <div className="flex flex-col content-center projectHero">
          <p className=" text-2xl text-white md:text-4xl mb-1 ">PROJECTS.</p>
          <p className="text-2xl text-orange-400 md:text-3xl mb-1 ">
            Check Out My Projects!
          </p>
        </div>
        <div
          className="container grid grid-cols-1 md:grid-cols-3 gap-4"
          id="contentSection"
        >
          {/*---------------- Card 1 -----------------*/}
          <div class="card transition duration-300 ease-in-out transform hover:-translate-y-1">
            <img src={crudImg} class="card-img-top" alt="..." />
            <div class="card-body">
              <p class="card-text">
                CRUD Application: React Js based project. The application is
                performing CRUD opertaions.
              </p>
              <button
                className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 bg-slate-900 hover:bg-orange-400 text-white font-bold py-1 px-4 rounded mt-4 duration-700"
                onClick={handleCrudApp}
              >
                <FaGithub size={30} style={{ color: "#fff" }} />
              </button>
            </div>
          </div>
          {/* ------------------ Card 2 ---------------------- */}
          <div class="card transition duration-300 ease-in-out transform hover:-translate-y-1">
            <img src={guessNum} class="card-img-top" alt="..." />
            <div class="card-body">
              <p class="card-text">
                Guess The Number: JavaScript based project. This is a game in
                which user have to guess number 1-20.
              </p>
              <button
                className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 bg-slate-900 hover:bg-orange-400 text-white font-bold py-1 px-4 rounded mt-4 duration-700"
                onClick={handleGuessNum}
              >
                <FaGithub size={30} style={{ color: "#fff" }} />
              </button>
            </div>
          </div>
          {/*-------------------- Card 3 ----------------------*/}
          <div class="card transition duration-300 ease-in-out transform hover:-translate-y-1">
            <img src={pigGame} class="card-img-top" alt="..." />
            <div class="card-body">
              <p class="card-text">
                Pig Game: Javascript based project.In This game two players can
                play against each other.
              </p>
              <button
                className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 bg-slate-900 hover:bg-orange-400 text-white font-bold py-1 px-4 rounded mt-4 duration-700"
                onClick={handlePigGame}
              >
                <FaGithub size={30} style={{ color: "#fff" }} />
              </button>
            </div>
          </div>
          {/*---------------------- Card 4 --------------------*/}
          <div class="card transition duration-300 ease-in-out transform hover:-translate-y-1">
            <img src={recipeApp} class="card-img-top" alt="..." />
            <div class="card-body">
              <p class="card-text">
                Recipes Website: A multipage website build using HTML, CSS,
                JavaScript and Bootstrap.
              </p>
              <button
                className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 bg-slate-900 hover:bg-orange-400 text-white font-bold py-1 px-4 rounded mt-4 duration-700"
                onClick={handleRecipesApp}
              >
                <FaGithub size={30} style={{ color: "#fff" }} />
              </button>
            </div>
          </div>
          {/*----------------------- Card 5 --------------------*/}
          <div class="card transition duration-300 ease-in-out transform hover:-translate-y-1">
            <img src={responsiveApp} class="card-img-top" alt="..." />
            <div class="card-body">
              <p class="card-text">
                Responsive Website: A fully responsive website build using
                Boostrap.
              </p>
              <button
                className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 bg-slate-900 hover:bg-orange-400 text-white font-bold py-1 px-4 rounded mt-4 duration-700"
                onClick={handleResponsive}
              >
                <FaGithub size={30} style={{ color: "#fff" }} />
              </button>
            </div>
          </div>
          {/*----------------------  Card 6 --------------------------*/}
          <div class="card transition duration-300 ease-in-out transform hover:-translate-y-1">
            <img src={cars} class="card-img-top" alt="..." />
            <div class="card-body">
              <p class="card-text">
                Toyota Cars: A multipage website build using HTML, CSS,
                JavaScript and Bootstrap.
              </p>
              <button
                className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 bg-slate-900 hover:bg-orange-400 text-white font-bold py-1 px-4 rounded mt-4 duration-700"
                onClick={handleCarsApp}
              >
                <FaGithub size={30} style={{ color: "#fff" }} />
              </button>
            </div>
          </div>
          {/*------------------------- Card 7 -----------------------------*/}
          <div class="card transition duration-300 ease-in-out transform hover:-translate-y-1">
            <img src={adminDashboard} class="card-img-top" alt="..." />
            <div class="card-body">
              <p class="card-text">
                Admin Dashboard: A dynamic landing page build using HTML, CSS,
                JavaScript and Bootstrap.
              </p>
              <button
                className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 bg-slate-900 hover:bg-orange-400 text-white font-bold py-1 px-4 rounded mt-4 duration-700"
                onClick={handleAdminDash}
              >
                <FaGithub size={30} style={{ color: "#fff" }} />
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Project;
