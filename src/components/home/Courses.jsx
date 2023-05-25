import React, { useRef, useEffect, useState } from "react";
import { Card, Button } from "flowbite-react";
import CourseData from "../../data/CourseData";
import { useInView } from "react-intersection-observer";
import { NavLink } from "react-router-dom";

import DOMPurify from "dompurify";
import { fetchData } from '../fetching/FetchData';
import BASE_URL from "../../API/Consts";
const Courses = () => {
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
  const sectionRef = useRef(null);
  const { ref, inView } = useInView({
    threshold: 0, // Percentage of section visible before it becomes in view
  });
  const animationClass = `${
    inView ? "animate-fadeInUp delay-150" : "md:opacity-5"
  } transform transition duration-1000 ease-in-out hover:scale-110 `;
  // console.log(lists);
  return (
    <>
      <div className="mt-24 mb-10  text-4xl text-center text-[#1A2649] font-semibold  ">
        Upcoming Courses
      </div>
      <section ref={sectionRef}>
        <div
          className=" mx-10 md:mx-20 grid sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 sm:gap-8 md:gap-8"
          ref={ref}
        >
          {lists?.data.courses.slice(0,8).map((val, ind) => {
            // key={ind}
            // title={val.title} duration={val.duration}
            return (
              <>
                <div className={animationClass} key={val.slug}>
                  <div className="  my-2   relative overflow-hidden object-fill  group shadow-inner ">
                    <img
                      className="w-full h-48"
                      src={`https://pdeng.valleyhomecareservice.com/storage/${val.image.url}`}
                      alt=""
                    />
                    <NavLink to={`/learnmore/${val.slug}`}>
                      <div className="absolute inset-0 hidden group-hover:block hover:bg-cyan-400/80   ">
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
                  <div className="  lg:text-xl md:text-sm sm:text-xs p-4">
                    <h3 className="text-[#1A2649] font-bold  ">{val.title}</h3>
                    <label className="text-slate-500 ">Duration:</label> <span className="font-semibold">{val.duration}</span>
                  </div>
                  {/* <div className="pb-2 px-2">
                    <p  dangerouslySetInnerHTML={{ __html: val.description.slice(0,limitCharacters) }}></p>
                    
                  </div> */}
                </div>
              </>
            );
          })}
        </div>
      </section>
      <div className="flex justify-center items-center mt-8">
        <NavLink to="/trainings">
          <Button className="bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br">
            Show More
          </Button>
        </NavLink>
      </div>
    </>
  );
};
export default Courses;
