import { Button } from "flowbite-react";
import React from "react";
import admission from "../../images/admission.png"
import "../component.css"
const Admission = () => {
  return (
    <>
      <div className="grid lg:grid-cols-2">
        <div className=" shadow-sm-light rounded m-10 ">
          <h1 className="text-4xl m-10">Get Admission in EDU KIT</h1>
          <div className="p-4 ">
            <label>
              Name <span className="text-red-600 ">*</span>
            </label>
            <br />
            <input
              className="w-[100%] bg-gray-200 rounded border-none mt-2 focus:ring-0 placeholder:text-xs"
              type="text"
              placeholder=" Your Name"
            />
          </div>
          <div className="p-4 ">
            <label>Email</label>
            <br />
            <input
              className="w-[100%] bg-gray-200 rounded border-none mt-2 focus:ring-0 placeholder:text-xs"
              type="text"
              placeholder="Your Email"
            />
          </div>
          <div className="p-4 ">
            <label>Phone Number</label>
            <br />
            <input
              className="w-[100%] bg-gray-200 rounded border-none mt-2 focus:ring-0 placeholder:text-xs"
              type="number"
              placeholder="+977"
            />
          </div>
          <div className="p-4 ">
            <label>Academic level</label>
            <br />
            <select className="w-[100%] bg-gray-200 rounded border-none mt-2 focus:ring-0 placeholder:text-xs">
              <option>Below SEE</option>
              <option>+2</option>
              <option>Bachelor</option>
              <option>Master</option>
              <option>Phd</option>
            </select>
          </div>

          <div className="p-4 ">
            <label>Course</label>
            <br />
            <select
              id="countries"
              className="w-[100%] bg-gray-200 rounded border-none mt-2 focus:ring-0 placeholder:text-xs"
            >
              <option>Mern Stack</option>
              <option>Python with Django</option>
              <option>Laravel</option>
              <option>Digital Marketing</option>
            </select>
          </div>
          <div className="p-4">
            <label>Other Courses</label>
            <br />
            <input
              className="w-[100%] bg-gray-200 rounded border-none mt-2 focus;ring-0  placeholder:text-xs"
              type="text"
              placeholder="Other Courses"
            />
          </div>
          <div className="p-4 ">
            <label>Messages</label>
            <br />
            <textarea
              className="w-[100%] bg-gray-200 rounded border-none mt-2 focus:ring-0 placeholder:text-xs h-32"
              type="text"
              placeholder="leave your message"
            />
          </div>
          <div className="flex justify-center mb-10">
            <Button className="bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br">
              {" "}
              Submit
            </Button>
          </div>
        </div>
        <div className="md:mt-40 md:mx-20"> 
          <img className="h-96 animate-bounce temporary-bounce" src={admission} alt="admsission image"/>
        </div>
      </div>
    </>
  );
};

export default Admission;
