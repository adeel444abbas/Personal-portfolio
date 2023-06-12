import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { useAuth0 } from "@auth0/auth0-react";

const Navbar = () => {
  const [menuOpen, setmenuOpen] = useState(false);
  const { loginWithRedirect, logout, isAuthenticated } = useAuth0();

  const handleClick = () => setmenuOpen(!menuOpen);

  return (
    <nav className="bg-slate-900 text-white p-4 fixed-top navHeader">
      <div className="container mx-auto font-bold flex justify-between">
        <Link to="/" className="text-orange-400 text-2xl font-bold">
          Portfolio
        </Link>
        <ul
          className={`flex space-x-4 ${
            menuOpen ? "nav-menu active" : "nav-menu"
          }`}
        >
          <li>
            <Link to="/"> Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/project">Projects</Link>
          </li>
          <li>
            <Link to="/skills">Skills</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
        {isAuthenticated && <p>User LoggedIn✨🎉💥💥</p>}
        <div>
          {isAuthenticated ? (
            <button
              className="logButtons"
              onClick={() =>
                logout({ logoutParams: { returnTo: window.location.origin } })
              }
            >
              Logout
            </button>
          ) : (
            <button className="logButtons" onClick={() => loginWithRedirect()}>
              Login
            </button>
          )}
        </div>
        <div className="sideBar" onClick={handleClick}>
          {menuOpen ? (
            <FaTimes size={20} style={{ color: "#fff" }} />
          ) : (
            <FaBars size={20} style={{ color: "#fff" }} />
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
