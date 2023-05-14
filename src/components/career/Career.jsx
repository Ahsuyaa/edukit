import React, { useEffect, useState } from "react";
import career from "../../images/career.png";
import CareerCard from "../Common/CareerCard";
import CareerData from "../../data/CareerData";
import "../component.css"
import { NavLink } from "react-router-dom";
const Career = () => {
  let API = "https://pdeng.valleyhomecareservice.com/api/vacancies";
  const [lists, setLists] = useState([]);

  useEffect(() => {
   

    const fetchCourses = async () => {
      try {
        const response = await fetch(API);

        const data = await response.json();
        
        setLists(data.data.vacancies);
        console.log(data)
      } catch (error) {
        console.log("Error fetching blogs:", error);
      }
    };
    fetchCourses();
  }, []);
  return (
    
    <>
      <div className="relative  bg-slate-950 ">
        <img src={career} alt="My Image" className="w-[75%] h-56 opacity-25" />
        <div className="absolute top-0 flex m-10 ">
          <NavLink to="/">
          <h1 className="mr-2 text-gray-400">Home /</h1>
          </NavLink>
      <h1 className=" text-white">career</h1>
      </div>
        <div className="absolute top-1/2 left-1/2  -translate-x-1/2 -translate-y-1/2 z-10 rounded-md p-4">
          <p className="text-white text-center text-sm md:text-4xl font-bold animate-ping temporary-spin">
            Choose your Career with us{" "}
          </p>
        </div>
      </div>
      <div className="text-center text-bold text-4xl mt-10">Our Vacancy</div>
      <div className=" grid sm:grid-cols-2 lg:grid-cols-3 shadow-white">
        {lists.map((val, ind) => {
          return (
            <CareerCard
              key={ind}
              title={val.title}
              time={val.time}
              level={val.job_type}
              salary={val.salary}
            />
          );
        })}
      </div>
    </>
  );
};

export default Career;
