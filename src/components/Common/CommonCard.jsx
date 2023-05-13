import React from "react";
import { Card } from "flowbite-react";
import Logo from "../../images/logo.png";
const CommonCard = (props) => {
  
  return (
    <>
      <div className=" shadow-md ">
        <img className="h-40 w-full md:h-60 " src={props.imgsrc} />
        <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
          {props.title}
        </h3>

        <p className="  dark:text-white p-2">
          {props.description}
        </p>
      </div>
    </>
  );
};

export default CommonCard;
