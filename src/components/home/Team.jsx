import { Avatar, Button } from "flowbite-react";
import TeamsData from "../../data/TeamsData";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./team.css";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaViber,
} from "react-icons/fa";

const Team = () => {
  const [data, setData] = useState([...TeamsData]);
  const [showMore, setShowMore] = useState(false);
  const handleToggle = (e) => {
    console.log(data);

    setShowMore(!showMore); // Toggle show more state
  };
  const displayedData = showMore ? data : data.slice(0, 4);
  return (
    <>
      <div className="text-center text-3xl text-[#1a2649] font-semibold">
        Our teams
      </div>
      <div
        id="teamsid"
        className=" grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 justify-items-center m-20 
  "
      >
        {displayedData.map((val, ind) => {
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
                      <img src={val.imgsrc} />
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
                          <div className=" hidden socials md:flex  justify-end text-end  ">
                            <i className="icon  text-blue-500 mr-5 md:text-lg ">
                              <FaFacebook />
                            </i>
                            <i className="icon text-rose-400 mr-5 md:text-lg ">
                              <FaInstagram />
                            </i>

                            <i className="icon text-purple-600 mr-5 md:text-lg ">
                              <FaViber />
                            </i>
                            <i className="icon  text-blue-500 mr-5 md:text-lg ">
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
        <Button
          className="bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br"
          onClick={handleToggle}
        >
          {" "}
          {showMore ? "Show Less" : "Show More"}
        </Button>
      </div>
    </>
  );
};

export default Team;
