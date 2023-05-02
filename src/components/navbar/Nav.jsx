import React, { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "../../images/logo.png";
import { Button } from "flowbite-react";
import { Link, NavLink } from "react-router-dom";

const Nav = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    }

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navbarClasses = `z-50  w-full h-[100px] flex justify-between items-center md:px-2 bg-[#1a2649]   ${
    isSticky ? "fixed top-0 w-full" : ""
  }`;

  return (
    <>
      <div className={navbarClasses}>
        <div>
          <img src={Logo} alt="" style={{ width: "100px" }} />
        </div>
        <div>
          <ul className=" hidden md:flex flex px-2 py-2 text-white">
            <li className="m-5">
              <NavLink to={"/"}>Home</NavLink>
            </li>
            <li className="m-5">
              {" "}
              <NavLink to="/trainings">Trainings </NavLink>
            </li>
            <li className="m-5">
              <NavLink to="/teams">Teams</NavLink>
            </li>
            <li className="m-5">
              <NavLink to="/faq">FAQ </NavLink>
            </li>
            <li className="m-5">
              {" "}
              <NavLink to="/career">Career </NavLink>
            </li>
            <li className="m-5">
              {" "}
              <NavLink to="/blog">Blog </NavLink>
            </li>
            <li className="m-5">
              <NavLink to={"/contact"}>Contact Us</NavLink>
            </li>
          </ul>
        </div>
        <div className="hidden md:flex ">
          {/* <button type="button" className="text-white bg-blue-700 hover:bg-blue-800
       focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-md px-5 py-2.5
        mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:
        focus:ring-blue-800 md:py-1 md:px-2 md:text-xs lg:px-4 lg:py-2 lg:text-sm">Send Enquiry</button> */}
          <div className="group">
            <Button className="bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br" outline={true}>
              Send Query
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4 m-1 group-hover:text-white text-blue-800 "
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5"
                />
              </svg>
            </Button>
          </div>
        </div>
        <div
          onClick={handleClick}
          className="text-white md:hidden z-50 sm:ml-96 ml-48! "
        >
          {!nav ? <FaBars /> : <FaTimes />}
        </div>
        <div>
          <ul
            className={
              !nav
                ? "hidden"
                : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center z-10 "
            }
          >
            <li className="py-2 text-4xl text-white">Home</li>
            <li className="py-2 text-4xl text-white">Training</li>
            <li className="py-2 text-4xl text-white">
              <Link to="/#teamsid">Teams</Link>
            </li>
            <li className="py-2 text-4xl text-white">FAQ</li>
            <li className="py-2 text-4xl text-white">Career</li>
            <li className="py-2 text-4xl text-white">Blogs</li>
            <li className="py-2 text-4xl text-white">
              <NavLink to={"/contact"}>Contact Us</NavLink>
            </li>

            {/* <button type="button" className="text-white bg-blue-700 hover:bg-blue-800
           focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-md px-5 py-2.5
        mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:
        focus:ring-blue-800  ">Send Enquiry</button> */}
            <Button gradientMonochrome="failure">
              Send query
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5"
                />
              </svg>
            </Button>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Nav;
