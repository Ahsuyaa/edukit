import React from "react";
import career from "../../images/career.png";
import CareerCard from "../Common/CareerCard";
import CareerData from "../../data/CareerData";

const Career = () => {
  return (
    <>
      <div className="relative  bg-slate-950 ">
        <img src={career} alt="My Image" className="w-full h-44 opacity-25" />
        <div className="absolute top-1/2 left-1/2  -translate-x-1/2 -translate-y-1/2 z-10 rounded-md p-4">
          <p className="text-white text-center text-4xl font-bold">
            Choose your Career with us{" "}
          </p>
        </div>
      </div>
      <div className="text-center text-bold text-4xl mt-10">Our Vacancy</div>
      <div className=" grid md:grid-cols-2 lg:grid-cols-3 shadow-white">
        {CareerData.map((val, ind) => {
          return (
            <CareerCard
              key={ind}
              title={val.title}
              time={val.time}
              level={val.level}
              salary={val.salary}
            />
          );
        })}
      </div>
    </>
  );
};

export default Career;
