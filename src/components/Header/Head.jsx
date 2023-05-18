import React, { useEffect, useState } from "react";
import {
  FaCode,
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
  FaPhone,
  FaPhoneAlt,
  FaTwitter,
  FaViber,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";
const Head = () => {
  const [lists, setLists] = useState([]);

  useEffect(() => {
    const fetchSetting = async () => {
      try {
        const response = await fetch(
          "https://pdeng.valleyhomecareservice.com/api/setting"
        );

        const data = await response.json();

        setLists(data.data.setting);
        console.log(data.data);
      } catch (error) {
        console.log("Error fetching blogs:", error);
      }
    };
    fetchSetting();
  }, []);
  return (
    <>
      <div className=" top-0  w-full  h-10 bg-slate-900 flex justify-between ">
        <div className="py-2 pl-20 text-white flex animate-bounce delay-0">
          <i className="icon  text-white mr-2 md:text-lg ">
            <FaCode />
          </i>
          <h1 className="  text-center md:text-sm"> Welcome to Edu Kit</h1>
        </div>

        <div className=" hidden socials md:flex  justify-end text-end  py-2 pl-24 ">
          
          <i className="icon  text-blue-500 mr-5 md:text-lg ">
            <NavLink to={lists.facebook}>
              <FaFacebook />
            </NavLink>
          </i>
          <i className="icon text-rose-400 mr-5 md:text-lg ">
            <NavLink to={lists.instagram
}>
              <FaInstagram />
            </NavLink>
          </i>
          <i className="icon  text-blue-500 mr-5 md:text-lg ">
            <NavLink to={lists.facebook}>
              <FaTwitter />
            </NavLink>
          </i>
          <i className="icon text-purple-600 mr-5 md:text-lg ">
            <NavLink to={lists.facebook}>
              <FaViber />
            </NavLink>
          </i>
          <i className="icon  text-blue-500 mr-5 md:text-lg ">
            <NavLink to={lists.linkedin}>
              <FaLinkedinIn />
            </NavLink>
          </i>
          <NavLink to="/contact">
            <p className="text-red-700 text-center md:text-sm mr-5 ">
              Apply Online
            </p>
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Head;
