import React from 'react'
import "./teams.css"
import { FaFacebook, FaInstagram, FaLinkedinIn, FaViber } from 'react-icons/fa';
import TeamsData from "../../data/TeamsData"
import Team from "../../images/team.png"
import { NavLink } from 'react-router-dom';
const Teams = () => {
  return (
    <>
       <div className="relative  bg-slate-950 ">
        <img src={Team} alt="My Image" className="w-full h-56 opacity-25" />
        <div className="absolute top-0 flex m-10 ">
          <NavLink to="/">
          <h1 className="mr-2 text-gray-400">Home /</h1>
          </NavLink>
      <h1 className=" text-white">Teams</h1>
      </div>
        <div className="absolute top-1/2 left-1/2  -translate-x-1/2 -translate-y-1/2 z-10 rounded-md p-4">
          <p className="text-white text-center text-sm md:text-4xl font-bold animate-ping temporary-spin">
            Meet Our Team Member{" "}
          </p>
        </div>
      </div>
   <div className=" text-4xl text-center text-[#1a2649] font-semibold mt-10" >Team Members </div>
      <div
        id="teamsid"
        className=" grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 justify-items-center m-20 
  "
      >
        {TeamsData.map((val, ind) => {
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
    </>
  )
}

export default Teams