import React, { useEffect, useState } from "react";
import Bdata from "../../data/Bdata";
import blogcover from "../../images/blogcover.png";
import "../component.css";
import { NavLink } from "react-router-dom";
import { fetchData } from '../fetching/FetchData';
import BASE_URL from "../../API/Consts";
const Blogs = () => {

const API = `${BASE_URL}blogs`;
const [lists, setLists] = useState(null);
useEffect(() => {
  const getData = async () => {
    const fetchedData = await fetchData(API);
    setLists(fetchedData);
    console.log(fetchedData);
  };
  getData();
}, []);
  const limitCharacters = 100;
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
        {lists?.data.blogs.map((val, ind) => {
              const dateString = val.updated_at;
              const dateObj = new Date(dateString);
              const formattedDate = dateObj.toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric"
              });
          return (
            <>
              <div className=" m-10 shadow-lg bg-slate-100  transform transition duration-1000 ease-in-out hover:scale-110">
                <img
                  className="h-56 w-full"
                  src={`https://pdeng.valleyhomecareservice.com/storage/${val.image.url}`}
                />
                <div className="p-5">
                  <h3 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {val.title}
                  </h3>
                  <p
                    className="font-normal text-gray-700 dark:text-gray-400"
                    dangerouslySetInnerHTML={{
                      __html: val.description.slice(0, limitCharacters),
                    }}
                  ></p>
                  <hr />

                  <div className="flex justify-between items-center">
                    <h5
                      dangerouslySetInnerHTML={{ __html:formattedDate }}
                    ></h5>
                    <div>
                      <NavLink to={`/blogdetail/${val.slug}`}>
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
