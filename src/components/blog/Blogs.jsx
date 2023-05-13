import React from "react";
import Bdata from "../../data/Bdata";
import blogcover from "../../images/blogcover.png";
import "../component.css";
import { NavLink } from "react-router-dom";

const Blogs = () => {
  return (
    <>
      <div className="relative  bg-slate-950 ">
        <img
          src={blogcover}
          alt="My Image"
          className="w-full h-56 opacity-25"
        />
         <div className="absolute top-0 flex m-10 ">
          <NavLink to="/">
          <h1 className="mr-2 text-gray-400">Home /</h1>
          </NavLink>
      <h1 className=" text-white">Blog</h1>
      </div>
        <div className="absolute top-1/2 left-1/2  -translate-x-1/2 -translate-y-1/2 z-10 rounded-md p-4">
          <p className="text-white text-center text-sm md:text-4xl font-bold animate-ping temporary-spin">
            See Our Latest Blog{" "}
          </p>
        </div>
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 ">
        {Bdata.map((val, ind) => {
          return (
            <>
              <div className=" m-10 shadow-lg bg-slate-100 hover:scale-110 transition-all duration-200  ">
                <img className="h-56 w-full" src={val.imgSrc} />
               <div className="p-5">
                <h3 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {val.title}
                </h3>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                  {val.description}
                </p>
                <hr />
                
                <div className="flex justify-between items-center">
                <h5>{val.date}</h5>
                <div>
                  <NavLink to="/blogdetail">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-6 h-6 "
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                  />
                </svg>
                </NavLink>
                </div>
                </div>
                </div>
              
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Blogs;
