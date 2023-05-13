import React, { useState } from "react";
import AboutImg from "../../images/about.png";

import { FaArrowRight, FaCheck } from "react-icons/fa";
import myVideo from "../../images/videoA.mov"
const About = () => {
 
  return (
    <>
      
      <section className="bg-gradient-to-r from-blue-950 via-blue-900 to-blue  mt-24 ">
        <div className="grid md:grid-cols-2 gap-2 lg:gap-4 ">
          <div className="text-white my-10 md:my-24 mx-5 ">
            <h1 className=" text-sm md:text-5xl mb-2 md:mb-4">
              Why to choose Edu kit?
            
            </h1>
            <hr/>
            <p className="text-sm md:text-md lg:text-lg  justify-between">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo,
              delectus. Aperiam temporibus dignissimos quo necessitatibus
              tempore repudiandae harum quos ipsa enim asperiores cupiditate
              natus qui, laborum molestiae quas. Fuga, fugit? Lorem ipsum dolor
              sit amet consectetur adipisicing elit. Dolorem veniam nesciunt
              modi quisquam iusto sed amet excepturi nostrum rerum laboriosam
              maiores, beatae quas. Optio eos quo illo doloribus ad. Quae? Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Unde nesciunt
              possimus quidem dicta voluptas fuga doloribus ab praesentium illo
              delectus voluptate magni aspernatur beatae vel, corrupti placeat,
              iure suscipit dolorum.
            </p>
  
            
          </div>

          <div className="my-10 md:my-24"  >
           
          <video className="w-full h-96" controls>
        <source src={myVideo} type="video/mp4" />
      </video>
          </div>
        </div>
      </section>
    </>
  ); 
};

export default About;
