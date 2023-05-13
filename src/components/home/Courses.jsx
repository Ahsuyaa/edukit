import React, { useRef } from "react";
import { Card, Button } from "flowbite-react";
import CourseData from "../../data/CourseData";
import { useInView } from 'react-intersection-observer';
import { NavLink } from "react-router-dom";

const Courses = () => {
  const sectionRef = useRef(null);
  const { ref, inView } = useInView({
    threshold: 0.5, // Percentage of section visible before it becomes in view
  });
  const animationClass =`${inView ? 'animate-fadeInUp delay-150' : 'md:opacity-5'} transform transition duration-1000 ease-in-out hover:scale-110`;
  return (
    
    <>
    
      <div className="mt-24 mb-10  text-4xl text-center text-[#1a2649] font-semibold ">
        Upcoming Courses
      </div>


      <section ref={sectionRef}  >
      <div className=" mx-10 md:mx-20 grid sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 sm:gap-8 md:gap-8" ref={ref}>
        {CourseData.map((val, ind) => {
          // key={ind}
          // title={val.title} duration={val.duration}
          return (
            <>
              <div  className={animationClass}>
                <div className="  my-2   relative overflow-hidden object-fill  group shadow-inner">
                 
                  <img className="w-full h-48" src={val.imgSrc} alt="" />

                  <NavLink to="/learnmore">
                  <div className="absolute inset-0 hidden group-hover:block hover:bg-cyan-400/80   transition-all duration-200 ">
                    <div className="flex items-center justify-center text-xl">
                    <button className=" inline-flex uppercase  text-white my-20  md:text-sm lg:text-xl font-semibold ">
                      
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
                  <p >{val.description}</p> 
                  {/* <span>duration={val.duration}</span> */}
                </div>
                
              </div>
            </>
          );
        })}
      </div>
      </section>
      <div className="flex justify-center items-center mt-8">
        <NavLink to="/trainings">
        <Button className="bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br">Show More</Button>
        </NavLink>
      </div>
    </>
  );
};

export default Courses;
