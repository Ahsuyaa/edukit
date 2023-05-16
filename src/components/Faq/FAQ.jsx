import React, { useEffect, useState } from 'react';
import faq from "../../images/faq.png"
import { NavLink } from 'react-router-dom';

const FAQ = () => {

  const [activeIndex, setActiveIndex] = useState(null);

  let API = "https://pdeng.valleyhomecareservice.com/api/faqs";
  const [lists, setLists] = useState([]);

  useEffect(() => {
    const fetchFaq = async () => {
      try {
        const response = await fetch(API);

        const data = await response.json();

        setLists(data.data.faqs);
        console.log(data.data);
      } catch (error) {
        console.log("Error fetching Faq:", error);
      }
    };
    fetchFaq();
  }, []);
  const limitCharacters = 100;

  const handleClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
    <div className="relative  bg-slate-950 ">
    <img src={faq} alt="My Image" className="w-full h-56 opacity-25" />
    <div className="absolute top-0 flex m-10 ">
          <NavLink to="/">
          <h1 className="mr-2 text-gray-400">Home /</h1>
          </NavLink>
      <h1 className=" text-white">FAQ</h1>
      </div>
    <div className="absolute top-1/2 left-1/2  -translate-x-1/2 -translate-y-1/2 z-10 rounded-md p-4">
      <p className="text-white text-center text-sm md:text-4xl font-bold animate-ping temporary-spin ">Frequently Asked Questions</p>
    </div>
  </div>
    <div className="  max-w-lg mx-auto mt-10">
      {Object.values(lists).map((item, index) => (
        <div key={index} className="border-b border-gray-400">
          <button
            className="flex items-center justify-between w-full p-4 text-left focus:outline-none"
            onClick={() => handleClick(index)}
          >
            <span className="font-medium">{item.question}</span>
            <span className={`transform transition-transform ${activeIndex === index ? 'rotate-180' : 'rotate-0'}`}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-6 w-6">
                <path fill="currentColor" d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" />
              </svg>
            </span>
          </button>
          <div className={`p-4 ${activeIndex === index ? 'block' : 'hidden'}`}>
            <p>{item.answer}</p>
          </div>
        </div>
      ))}
    </div>
    </>
  );
};

export default FAQ;




