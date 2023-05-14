import { Button } from "flowbite-react";
import React from "react";

const ApplyForm = ({ visible ,onClose}) => {
  if (!visible) return null;
  return (
    <div className="fixed inset-0 bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
      <div className="bg-white p-2 rounded h-auto overflow-y-auto ">
        <div className=" shadow-xl rounded ">
            <div className="flex justify-end mr-5 text-xl">
                
                <button onClick={onClose} >x</button>
            </div>
          <div className="p-4 ">
            <label>
              Name <span className="text-red-600 ">*</span>
            </label>
            <input
              className="w-full bg-gray-200 rounded border-none mt-2 focus:ring-0 placeholder:text-xs"
              type="text"
              placeholder=" Your Name"
            />
          </div>
          <div className="p-4 ">
            <label>Email</label>
            <input
              className="w-full bg-gray-200 rounded border-none mt-2 focus:ring-0 placeholder:text-xs"
              type="text"
              placeholder="Your Email"
            />
          </div>
          <div className="p-4 ">
            <label>Phone Number</label>
            <input
              className="w-full bg-gray-200 rounded border-none mt-2 focus:ring-0 placeholder:text-xs"
              type="number"
              placeholder="Your Number"
            />
          </div>
          <div className="p-4 ">
            <label>Your Portfolio Url</label>
            <input
              className="w-full bg-gray-200 rounded border-none mt-2 focus:ring-0 placeholder:text-xs"
              type="text"
              placeholder=" Online Portfolio,eg:http://www.domain.com"
            />
            <div className="p-4 ">
            <label>Upload Resume</label>
            <input
              className="w-full bg-gray-200 rounded border-none mt-2 focus:ring-0 placeholder:text-xs"
              type="file"
              placeholder="upload your cv"
            />
          </div>
          </div>
          <div className="p-4 ">
            <label>About Yourself</label>
            <textarea
              className="w-full bg-gray-200 rounded border-none mt-2 focus:ring-0 placeholder:text-xs h-32"
              type="text"
              placeholder="Tell me about Yourself"
            />
          </div>
          <div className="flex justify-center mb-10">
            <Button className='bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br'> Submit</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplyForm;
