import React from "react";
import { FaMoneyBill } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const CareerCard = (props) => {
return (
    <>
      <div className="h-40 text-center m-10 shadow-2xl  hover:scale-110 ">
        
          <h3 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {props.title}
          </h3>
           <div className="flex ">
          <p className="text-x font-bold bg-blue-200 tracking-tight text-gray-500 dark:text-white sm:w-36 m-5 ">
            {props.time}
          </p>
          <p className="text-x font-bold bg-blue-200 tracking-tight text-gray-500 dark:text-white sm:w-36 m-5">
            {props.level}
          </p>
          <p className="text-x font-bold bg-blue-200 tracking-tight text-gray-500 dark:text-white sm:w-36 m-5 inline-flex">
            {props.salary}
          </p>
          </div>
          <div>
            <NavLink to="/careerdetail">
            <button className="hover:text-blue-600">view detail</button>
            </NavLink>
          </div>
        
      </div>
    </>
  );
};

export default CareerCard;
