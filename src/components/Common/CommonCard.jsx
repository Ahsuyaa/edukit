import React from "react";
import { Card } from "flowbite-react";
import Logo from "../../images/logo.png";
const CommonCard = (props) => {
  const limitCharacters = 100;
  return (
    <>
      <div className=" shadow-md ">
        <img className="h-40 w-full md:h-60 " src={props.imgsrc} />
        <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
          {props.title}
        </h3>

        <p className="text-lg p-2" dangerouslySetInnerHTML={{ __html: props.description.slice(0,limitCharacters) }}></p>
      
      </div>
    </>
  );
};

export default CommonCard;
