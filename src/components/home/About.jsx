import React, { useEffect, useState } from "react";
import AboutImg from "../../images/about.png";

import { FaArrowRight, FaCheck } from "react-icons/fa";

import { fetchData } from '../fetching/FetchData';
import BASE_URL from "../../API/Consts";
const About = () => {



  const API = `${BASE_URL}about`;
  const [lists, setLists] = useState(null);
  useEffect(() => {
    const getData = async () => {
      const fetchedData = await fetchData(API);
      setLists(fetchedData);
      console.log(fetchedData);
    };
    getData();
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
          
          <p  dangerouslySetInnerHTML={{ __html: lists.data.about.description}}></p>
        </div>
      ) : (
        <p>Loading data...</p>
      )}
          
        
           
            
          </div>

          <div className="my-10 md:my-24 ">
           
            {lists? (
        <div>
          
          <img  className="w-full" src={`https://pdeng.valleyhomecareservice.com/storage/${lists.data.about.image.url}`}/>
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
