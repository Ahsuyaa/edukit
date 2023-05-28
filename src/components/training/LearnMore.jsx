import { Button } from "flowbite-react";
import React, { useEffect, useRef, useState } from "react";
import seo from "../../images/seo.png";
import { NavLink, useParams } from "react-router-dom";
import { fetchData } from "../fetching/FetchData";
import BASE_URL from "../../API/Consts";
const LearnMore = () => {
  const [detail, setDetail] = useState({});
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone_no, setNumber] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});
  const [toast, setToast] = useState(true);
  const [myData, setMyData] = useState(null);
  const { slug } = useParams();
  const [showFixedNav, setShowFixedNav] = useState(false);

  const validateForm = () => {
    let errors = {};
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (!name) {
      errors.name = "Name is required";
    } else if (name.length > 255) {
      errors.name = "letter should not exceed more than 255 character ";
    }
    if (!email) {
      errors.email = "email is required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
      errors.email = "invalid email";
    }
    if (!phone_no) {
      errors.phone_no = "number is required";
    } else if (phone_no <= 10) {
      errors.phone_no = "number must be 10 letter";
    }
    if (!subject) {
      errors.subject = "subject is required";
    }
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  function handleSubmit() {
    console.log(name, email, phone_no);
    if (validateForm()) {
      let data = { name, email, phone_no, subject, message };
      fetch("https://pdeng.valleyhomecareservice.com/api/contact", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }).then((result) => {
        console.warn("result", result);
      });
      const success = "You queries has been submitted. Thank you";
      const storedMessage = sessionStorage.setItem(
        "myData",
        JSON.stringify(success)
      );

      const data1 = sessionStorage.getItem("myData");
      setMyData(JSON.parse(data1));
      console.log(myData);
    }
  }
  const close = () => setMyData(false);

  useEffect(() => {
    fetch("https://pdeng.valleyhomecareservice.com/api/course/" + slug)
      .then((res) => {
        return res.json();
      })
      .then((resp) => {
        setDetail(resp.data.course);
        console.log(resp.data);
      })
      .catch((err) => {
        console.log(err.message.course);
      });
  }, []);
  useEffect(() => {
    const handleScroll = () => {
      const scrollOffset = 0; // Adjust this value based on your needs
      const shouldShowFixedNav = window.pageYOffset > scrollOffset;
      setShowFixedNav(shouldShowFixedNav);
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const sectionRefs = {
    section1: useRef(null),
    section2: useRef(null),
    section3: useRef(null),
    // Add more sections and their corresponding refs as needed
  };

  const [activeSection, setActiveSection] = useState("section1");

  const scrollToSection = (section) => {
    sectionRefs[section].current.scrollIntoView({ behavior: "smooth" });
    setActiveSection(section);
  };

  return (
    <>
      <div className="h-40 bg-[#050a30] ">
        <h1 className="text-white text-center py-10 text-4xl">{detail.slug}</h1>
      </div>
      <div
        className={` flex fixed h-20 w-full  top-[100px] p-4 bg-gray-200 ${
          showFixedNav ? "block" : "hidden"
        }`}
      >
        <div className="flex-grow">
        <ul className=" flex text-xl font-bold">
          <li
            className={` cursor-pointer pl-20 activeSection === 'section1' ? 'active' : '' `}
            onClick={() => scrollToSection("section1")}
          >
            Course Overview
          </li>
          <li
            className={`pl-20 cursor-pointer activeSection === 'section2' ? 'active' : ''`}
            onClick={() => scrollToSection("section2")}
          >
            Course syllabus
          </li>
          <li  className={`pl-20 cursor-pointer activeSection === 'section3' ? 'active' : ''`}
            onClick={() => scrollToSection("section3")}>Course Benefits</li>
        </ul>
        </div>
        <div className="m-auto">
          <NavLink to="/admission">
            <button className="bg-yellow-300   h-10 font-bold text-xl">
              {" "}
              Get Admission
            </button>
          </NavLink>
        </div>
      </div>
      <div className="md:flex">
        <div className="md:w-[60%] m-10">
          {detail.image ? (
            <div>
              <img
                className="h-96 w-full mb-10"
                src={`https://pdeng.valleyhomecareservice.com/storage/${detail.image.url}`}
                alt="image"
              />
            </div>
          ) : (
            <p>Loading img...</p>
          )}

          <div>
            <h1 className="text-2xl md:text-4xl font-semibold my-2 ">
              {detail.title}
            </h1>
            <p
              className="md:text-xl"
              ref={sectionRefs.section1}
              dangerouslySetInnerHTML={{ __html: detail.description }}
            ></p>
          </div>
          <div>
            <h1 className="text-2xl md:text-4xl font-semibold my-2 ">
              {detail.title}
            </h1>
            <p
              className="md:text-xl"
              ref={sectionRefs.section2}
              dangerouslySetInnerHTML={{ __html: detail.description }}
            ></p>
          </div>
          <div>
            <h1 className="text-2xl md:text-4xl font-semibold my-2 ">
              {detail.title}
            </h1>
            <p
              className="md:text-xl"
              ref={sectionRefs.section3}
              dangerouslySetInnerHTML={{ __html: detail.description }}
            ></p>
          </div>
        </div>
        <div className="md:w-[30%] flex-grow mx-5">
          <div className="mt-10 rounded ">
            <h1 className="mx-5 font-bold text-lg">Get In Touch</h1>
            <div className="p-4 ">
              <label>
                Name <span className="text-red-600 ">*</span>
              </label>
              <input
                className="w-full bg-gray-200 rounded border-none mt-2 focus:ring-0 placeholder:text-xs"
                type="text"
                placeholder=" Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              {errors.name && (
                <span className="text-red-700">{errors.name}</span>
              )}
            </div>
            <div className="p-4 ">
              <label>Email</label>
              <input
                className="w-full bg-gray-200 rounded border-none mt-2 focus:ring-0 placeholder:text-xs"
                type="text"
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {errors.email && (
                <span className="text-red-700">{errors.email}</span>
              )}
            </div>
            <div className="p-4 ">
              <label>Phone Number</label>
              <input
                className="w-full bg-gray-200 rounded border-none mt-2 focus:ring-0 placeholder:text-xs"
                type="number"
                placeholder="Your Number"
                value={phone_no}
                onChange={(e) => setNumber(e.target.value)}
              />
              {errors.phone_no && (
                <span className="text-red-700">{errors.phone_no}</span>
              )}
            </div>
            <div className="p-4 ">
              <label>Subject</label>
              <input
                className="w-full bg-gray-200 rounded border-none mt-2 focus:ring-0 placeholder:text-xs"
                type="text"
                placeholder=" Your Name"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
              />
              {errors.subject && (
                <span className="text-red-700">{errors.subject}</span>
              )}
            </div>
            <div className="p-4 ">
              <label>Messages</label>
              <textarea
                className="w-full bg-gray-200 rounded border-none mt-2 focus:ring-0 placeholder:text-xs h-32"
                type="text"
                placeholder="leave your message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>
            <div className="flex justify-center mb-10">
              <Button
                className="bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br"
                type="submit"
                onClick={handleSubmit}
              >
                {" "}
                Submit
              </Button>
            </div>

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
          </div>
        </div>
      </div>
    </>
  );
};

export default LearnMore;
