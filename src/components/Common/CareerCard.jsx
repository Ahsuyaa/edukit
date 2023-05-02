import React from "react";
import { FaMoneyBill } from "react-icons/fa";

const CareerCard = (props) => {
  return (
    <>
      <div className="h-40 text-center m-10 shadow-2xl ">
        
          <h3 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {props.title}
          </h3>
           <div className="flex ">
          <p className="text-x font-bold bg-blue-200 tracking-tight text-gray-500 dark:text-white w-36 m-5 ">
            {props.time}
          </p>
          <p className="text-x font-bold bg-blue-200 tracking-tight text-gray-500 dark:text-white w-36 m-5">
            {props.level}
          </p>
          <p className="text-x font-bold bg-blue-200 tracking-tight text-gray-500 dark:text-white w-36 m-5 inline-flex">
            {props.salary}
          </p>
          </div>
          <div>
            <button>view detail</button>
          </div>
        
      </div>
    </>
  );
};

export default CareerCard;
