import { Avatar, Button } from "flowbite-react";
import TeamsData from "../../data/TeamsData";
import React, { useEffect, useState, } from "react";
import { NavLink } from "react-router-dom";
import "../teams/Teams";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaViber,
} from "react-icons/fa";
import { fetchData } from '../fetching/FetchData';
import BASE_URL from "../../API/Consts";
const Team = () => {
  const API = `${BASE_URL}teams`;
  const [lists, setLists] = useState(null);
  useEffect(() => {
    const getData = async () => {
      const fetchedData = await fetchData(API);
      
      setLists(fetchedData);;
      console.log(fetchedData);
    };
    getData();
  }, []);
  // const [data, setData] = useState([...TeamsData]);
  // const [showMore, setShowMore] = useState(false);
  // const handleToggle = (e) => {
    // console.log(data);

    // setShowMore(!showMore); // Toggle show more state
  
  // const displayedData = showMore ? data : data.slice(0, 4);
  return (
    <>
  
   <div className=" text-4xl text-center text-[#1a2649] font-semibold mt-24">Meet the Team  </div>
      <div
       
        className="xl:flex justify-between grid lg:grid-cols-4 sm:grid-cols-2 xl:mx-72 lg:mx-28 m-20"
      > 
        {lists?.data.teams.slice(0,4).map((val, ind) => {
        
          return (
            <>
            
              {/* <div className="mt-10 md:mt-24">
                <img
                  className=" md:w-[400px] h-[400px] p-1  object-center hover:ring-red-500 hover:hue-rotate-15	"
                  src={val.imgsrc}
                  alt="Bordered avatar"
                />

                <div className="my-1 md:my-5 text-center">
                  {val.name}
                  <br />
                  {val.position}
                </div>
              </div> */} 
              
              <div className="card mb-5 ">
                <div className="content">
                  <div className="back">
                    <div className="back-content">
                      <img className="h-[100%]" src={`https://pdeng.valleyhomecareservice.com/storage/${val.image.url}`} />
                    </div>
                  </div>
                  <div className="front">
                    <div className="img">
                      <div className="circle"></div>
                      <div className="circle" id="right"></div>
                      <div className="circle" id="bottom"></div>
                    </div>

                    <div className="front-content">
                      <small className="badge"></small>
                      <div className="description">
                        <div className="title my-1 md:my-5 text-center">
                        
                            {val.name}
                            <br />
                            {val.position}
                         
                        </div>
                        <p className="card-footer">
                          <div className=" flex  socials  justify-end text-end  ">
                            <i className="icon text-xl text-blue-500 mr-5 md:text-lg ">
                              <FaFacebook />
                            </i>
                            <i className="icon text-xl text-rose-400 mr-5 md:text-lg ">
                              <FaInstagram />
                            </i>

                            <i className="icon text-xl text-purple-600 mr-5 md:text-lg ">
                              <FaViber />
                            </i>
                            <i className="icon text-xl  text-blue-500 mr-5 md:text-lg ">
                              <FaLinkedinIn />
                            </i>
                          </div>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
      <div className="flex justify-center">
        <NavLink to="/teams">
        <Button
          className="bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br"
          
        >
      View ALL
        </Button>
        </NavLink>
      </div>
    </>
  );
      
      };

export default Team;
