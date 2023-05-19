import React, { useEffect, useState } from "react";
import trainingImg from "../../images/training.png";
import CourseData from "../../data/CourseData";
import "../component.css"

import { NavLink } from "react-router-dom";
import { fetchData } from '../fetching/FetchData';
import BASE_URL from "../../API/Consts";
const Training = () => {
  const API = `${BASE_URL}courses`;
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
          src={trainingImg}
          alt="My Image"
          className="w-full h-56 opacity-25"
        />
        <div className="absolute top-0 flex m-10 ">
          <NavLink to="/">
          <h1 className="mr-2 text-gray-400">Home /</h1>
          </NavLink>
      <h1 className=" text-white">Training</h1>
      </div>
        <div className="absolute top-1/2 left-1/2  -translate-x-1/2 -translate-y-1/2 z-10 rounded-md p-4">
          <p className="text-white text-center text-sm md:text-4xl font-bold animate-ping temporary-spin ">
          Find Our Upcoming Class Schedule Here!{" "}
          </p>
        </div>
      </div>
      <div className=" mx-10 md:mx-20 grid sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 sm:gap-8 md:gap-8 mt-10">
        {lists?.data.courses.map((val, ind) => {
          // key={ind}
          // title={val.title} duration={val.duration}
          return (
            <>
              <div key={val.slug}>
              <div className="  my-6 sm:my-2 h-40  relative overflow-hidden object-fill  group shadow-inner  hover:scale-110" >
                {
                  console.log(val.slug)
                }
                
                 <img className="w-full h-40" src={`https://pdeng.valleyhomecareservice.com/storage/${val.image.url}`} alt="" />
                 <NavLink to={`/learnmore/${val.slug}`}>
                 <div className="absolute inset-0 hidden group-hover:block hover:bg-cyan-400/80   transition-all duration-200 ">
                 <div className="flex items-center justify-center text-xl">
                  
                   <button className="inline-flex  uppercase  text-white my-16  font-semibold">
                     
                     learn more
                     <svg
                       xmlns="http://www.w3.org/2000/svg"
                       fill="none"
                       viewBox="0 0 24 24"
                       stroke-width="1.5"
                       stroke="currentColor" 
                       class="w-6 h-6"
                     >
                       <path
                         stroke-linecap="round"
                         stroke-linejoin="round"
                         d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                       />
                     </svg>
                   </button>
                  </div>
                 </div>
                 </NavLink>
               </div>
               <div className="  lg:text-md md:text-sm sm:text-xs p-2">
                 <h3 className="text-[#1a2649] font-bold">{val.title}</h3> 
                 {/* <span>duration={val.duration}</span> */}
               </div>
               <div className="pb-2 px-2">
                 <p dangerouslySetInnerHTML={{ __html: val.description.slice(0,limitCharacters) }}></p> 
                 {/* <span>duration={val.duration}</span> */}
               </div>
                <div className="">
                <NavLink to="/contact"><button className="w-[46%] bg-yellow-300 mr-1 h-8 font-semibold text-xs"> Send Query
                  </button></NavLink>
                  <NavLink to="/admission"><button className="w-[46%] bg-blue-400 ml-1 h-8 font-semibold text-xs"> Get Admission</button></NavLink>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Training;
