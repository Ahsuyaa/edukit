import React from "react";
import { Card, Button } from "flowbite-react";
import CourseData from "../../data/CourseData";

const Courses = () => {
  return (
    <>
      <div className="mt-10 mb-10  text-3xl text-center text-[#1a2649] font-semibold ">
        Upcoming Courses
      </div>

      <div className=" mx-10 md:mx-20 grid sm:grid-cols-2  md:grid-cols-4 sm:gap-8 md:gap-8 ">
        {CourseData.map((val, ind) => {
          // key={ind}
          // title={val.title} duration={val.duration}
          return (
            <>
              <div className=" shadow-lg">
                <div className="  my-2 h-40  relative overflow-hidden object-fill shadow-md group ">
                 
                  <img className="w-full h-40" src={val.imgSrc} alt="" />
                  
                  <div className="absolute inset-0 hidden group-hover:block hover:bg-cyan-400/80   transition-all duration-200 ">
                    <button className="inline-flex  uppercase  text-white m-16 text-lg md:m-14 md:text-xs  ">
                      
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
                <div className="  lg:text-md md:text-sm sm:text-xs">
                  <h3 className="text-[#1a2649] font-bold">{val.title}</h3> 
                  {/* <span>duration={val.duration}</span> */}
                </div>
                <div >
                  <p>{val.description}</p> 
                  {/* <span>duration={val.duration}</span> */}
                </div>
                
              </div>
            </>
          );
        })}
      </div>
      <div className="flex justify-center items-center mt-8">
        <Button className="bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br">Show More</Button>
      </div>
    </>
  );
};

export default Courses;
