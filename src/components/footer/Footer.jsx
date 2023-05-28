import React, { useEffect, useState } from "react";
import { Button } from "flowbite-react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import logo from "../../images/logo.png";
const Footer = () => {
  const [lists, setLists] = useState([]);
  const [email, setEmail] = useState("");
  const [myData, setMyData] = useState(null);
  useEffect(() => {
    const fetchSetting = async () => {
      try {
        const response = await fetch(
          "https://pdeng.valleyhomecareservice.com/api/setting"
        );

        const data = await response.json();

        setLists(data.data.setting);
        // console.log(data.data);
      } catch (error) {
        console.log("Error fetching setting:", error);
      }
    };
    fetchSetting();
  }, []);
  function handleSubmit() {
    let data = { email };
    fetch("https://pdeng.valleyhomecareservice.com/api/newsletter", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((result) => {
      console.warn("result", result);
    });
    const success = "subscribed";
    const storedMessage = sessionStorage.setItem(
      "myData",
      JSON.stringify(success)
    );

    const data1 = sessionStorage.getItem("myData");
    setMyData(JSON.parse(data1));
    console.log(myData);
  }
  const close = () => setMyData(false);
  return (
    <>
      <div className="bg-[#050a30] p-10 mt-10">
        <div class="grid  grid-cols-2  md:grid-cols-4  text-neutral-50 mb-2 ">
          <div className="mt-5 ">
            {lists.image ? (
              <div>
                <img
                  src={`https://pdeng.valleyhomecareservice.com/storage/${lists?.image.url}`}
                  alt=""
                  className="h-52"
                />
              </div>
            ) : (
              <p>Loading img...</p>
            )}
            {/* <p className=" text-gray-400 flex text-justify text-sm md:text-lg">
              {lists.meta_description}
            </p> */}
          </div>
          <div className=" mt-5">
            <h3 className="text-md md:text-xl">Related Links</h3>
            <ul className="text-gray-400 text-sm md:text-lg">
              <li>
                <NavLink to="/" className="hover:text-white">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/courses" className="hover:text-white">
                  Courses
                </NavLink>
              </li>
              <li>
                <NavLink to="/blogs" className="hover:text-white">
                  Blog
                </NavLink>
              </li>
              <li>
                <NavLink to="/faq" className="hover:text-white">
                  FAQ
                </NavLink>
              </li>
              <li>
                <NavLink to="/career" className="hover:text-white">
                  Career
                </NavLink>
              </li>
              <li>
                <NavLink to="/teams" className="hover:text-white">
                  Teams
                </NavLink>
              </li>
            </ul>
          </div>
          <div className=" mt-5">
            <h3 className="text-sm md:text-xl">Contact Us</h3>
            <ul className="text-gray-400 text-lg">
              <li>{lists.email}</li>
              <li>{lists.phone_no}</li>
              <li>{lists.address}</li>
            </ul>
          </div>
          <div>
            <form className="">
              <div className="socials flex   text-2xl  mt-5  ">
                <i className="icon  text-blue-600 mr-5">
                  <NavLink to={lists.facebook}>
                    <FaFacebook />
                  </NavLink>
                </i>
                <i className="icon text-rose-500 mr-5">
                  <NavLink to={lists.instagram}>
                    <FaInstagram />
                  </NavLink>
                </i>
                <i className="icon  text-blue-600 mr-5">
                  <NavLink to={lists.linkedin}>
                    <FaLinkedin />
                  </NavLink>
                </i>
              </div>
              <h3 className="mt-5 text-sm md:text-xl">Newsletter Signup</h3>
              <input
                className="w-full bg-slate-500 rounded border-none mt-2 focus:ring-0 placeholder:text-black"
                type="text"
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <br />
              <Button
                onClick={handleSubmit}
                className="mt-5 rounded-none px-5 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br "
              >
                Submit
              </Button>
              {myData && (
                <div className="flex justify-between  bg-green-200 p-4 text-green-900 rounded w-full">
                  <p className=" ">{myData} </p>
                  <p
                    onClick={close}
                    title="dismiss"
                    className="text-rose-500 text-2xl font-semibold cursor-pointer"
                  >
                    &times;
                  </p>
                </div>
              )}
            </form>
          </div>
        </div>
        <hr />
        <div className="text-white text-center pt-5">
          Edu KIT @ 2023- All right Reserved by Aaisa
        </div>
      </div>
    </>
  );
};

export default Footer;
