import React, { useEffect, useState } from "react";
import AboutImg from "../../images/about.png";

import { FaArrowRight, FaCheck } from "react-icons/fa";
import myVideo from "../../images/videoA.mov";
const About = () => {
  let API = "https://pdeng.valleyhomecareservice.com/api/about";
  const [lists, setLists] = useState([]);
  let about_us=[];

  useEffect(() => {
    const fetchAbout = async () => {
      try {
        const response = await fetch(API);

        const data = await response.json();
          // about_us=data;
        setLists(data.data.about);
        // console.log(data);
      } catch (error) {
        console.log("Error fetching about:", error);
      }
    };
    fetchAbout();
    // console.log(lists);
  }, []);
  const limitCharacters = 100;
  return (
    <>
      <section className="bg-gradient-to-r from-blue-950 via-blue-900 to-blue  mt-24 ">
        <div className="grid md:grid-cols-2 gap-2 lg:gap-4 ">
          <div className="text-white my-10 md:my-24 mx-5 ">
            <h1 className=" text-sm md:text-5xl mb-2 md:mb-4">
              Why to choose Edu kit?
            </h1>
            <hr />
            {lists ? (
        <div>
          
          <p  dangerouslySetInnerHTML={{ __html: lists.description}}></p>
        </div>
      ) : (
        <p>Loading data...</p>
      )}
          
        
           
            
          </div>

          <div className="my-10 md:my-24 ">
           
            {lists.image ? (
        <div>
          
          <img  className="w-full" src={`https://pdeng.valleyhomecareservice.com/storage/${lists.image.url}`}/>
        </div>
      ) : (
        <p>Loading img...</p>
      )}
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
