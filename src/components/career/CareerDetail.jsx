import React, { useState } from "react";
import cd from "../../images/careerDetail.png";
import careerDetail from "../../data/careerDetail";
import { Button } from "flowbite-react";
import { NavLink } from "react-router-dom";
import ApplyForm from "./ApplyForm";
const CareerDetail = () => {
    const [showMyModal,setShowModal]=useState(false);
    const handleOnClose = ()=>setShowModal(false);
  return (
    <>
      <div>
        {careerDetail.map((val, ind) => {
          return (
            <>
              <div className="h-56 bg-[#050a30] ">

                <div className="flex  p-10 ">
                  <NavLink to={"/"}>
                  <h1 className=" text-gray-400">Home /</h1>
                  </NavLink>
                  <NavLink to="/career">
                  <h1 className=" text-gray-400"> Career /</h1>
                  </NavLink>
                  <h1 className="text-white"> Job Detail</h1>
                </div>
                <div className="text-2xl md:text-4xl   text-center text-white ">
                  {val.title}
                </div> 
                <div className="flex justify-end  ">
                   
                  <Button className="bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br mr-10"onClick={()=>setShowModal(true)}>
                    Apply Now
                  </Button>
                  <ApplyForm onClose={handleOnClose} visible={showMyModal}/>
                </div>
              </div>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 m-10 ">
                <div className="shadow-md m-10  text-center ">
                  <label className=" font-bold">Job type:</label> <br />{" "}
                  <h1 className="text-gray-600">{val.Type}</h1>
                </div>
                <div className="shadow-md m-10  text-center ">
                  <label className=" font-bold">Job Level:</label> <br />{" "}
                  <h1 className="text-gray-600">{val.position}</h1>
                </div>
                <div className="shadow-md m-10  text-center ">
                  <label className=" font-bold">Company:</label> <br />{" "}
                  <h1 className="text-gray-600">{val.company}</h1>
                </div>
                <div className="shadow-md m-10  text-center ">
                  <label className=" font-bold">Offered Salary:</label> <br />{" "}
                  <h1 className="text-gray-600">{val.salary}</h1>
                </div>
                <div className="shadow-md m-10  text-center ">
                  <label className=" font-bold">Posted:</label> <br />{" "}
                  <h1 className="text-gray-600">{val.posted}</h1>
                </div>
                <div className="shadow-md m-10  text-center ">
                  <label className=" font-bold"> Deadline:</label> <br />{" "}
                  <h1 className="text-gray-600">{val.deadline}</h1>
                </div>
              </div>
              <div className=" grid  lg:grid-cols-2 mx-20 md:mx-40">
                <div className="mb-5 ">
                <label className="text-3xl">
                  Job specification
                  <br />
                </label>
                <h1 className="my-2  text-xl">Education Level:{val.education}</h1>
                <h1 className="mb-2 text-xl">Experience required:{val.experience}</h1>
                </div>
                <div>
                <label className="text-3xl  ">
                  Job description
                  <br />
                </label>
                <ul className="list-disc text-xl">
                  {val.description.map((des, index) => (
                    <li className="text-md justify-between m-2" key={index}>
                      {des}
                    </li>
                  ))}
                </ul>
                </div>
              </div>
              <div className="flex justify-center mt-5  ">
                   
                  <Button className="bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br mr-10"onClick={()=>setShowModal(true)}>
                    Apply Now
                  </Button>
                  <ApplyForm onClose={handleOnClose} visible={showMyModal}/>
                </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default CareerDetail;
