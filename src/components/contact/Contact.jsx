import { Button } from "flowbite-react";
import React, { useState } from "react";
import { FaMailBulk, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import contact from "../../images/contact.png";
import "../component.css";
import { NavLink } from "react-router-dom";
const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone_no, setNumber] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});
  const [toast, setToast] = useState(true);
  const [myData, setMyData] = useState(null);
 
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

     
      const data1 = sessionStorage.getItem('myData');
      setMyData(JSON.parse(data1));
      console.log(myData);

    }
  }
  const close = ()=>setMyData(false);

  return (
    <>
     
      <div className="relative  bg-slate-950 ">
        <img src={contact} alt="My Image" className="w-full h-56 opacity-25" />
        <div className="absolute top-0 flex m-10 ">
          <NavLink to="/">
            <h1 className="mr-2 text-gray-400">Home /</h1>
          </NavLink>
          <h1 className=" text-white">Contact Us</h1>
        </div>
        <div className="absolute top-1/2 left-1/2  -translate-x-1/2 -translate-y-1/2 z-10 rounded-md p-4">
          <p className="text-white text-center text-sm md:text-4xl font-bold animate-ping  temporary-spin">
            Get in Touch with us{" "}
          </p>
        </div>
      </div>
      <div class="grid  lg:grid-cols-2  gap-4 px-10 ">
        <div className="mt-10 shadow-xl rounded ">
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
            {errors.name && <span className="text-red-700">{errors.name}</span>}
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
          
          {myData &&
          
          <div className="flex justify-between  bg-green-200 p-4 text-green-900 rounded w-full">

            <p className=" ">{myData} </p>
            <p onClick={close} title="dismiss" className="text-rose-500 text-2xl font-semibold cursor-pointer">&times;</p>
          </div>
          
          
          }
          
          
        </div>

        <div className="mt-10  text-xl text-justify bg-gradient-to-r from-blue-300 via-blue-50 to-blue-200 ">
          <h1 className="font-bold m-5"> Edu Kit</h1>
          <div className="flex display-flex p-5  m-2">
            <FaMapMarkerAlt />{" "}
            <p className="ml-2">
              hriganesh Marg, imadol, gwarkhu, lalitpur 44600, Nepal
            </p>
          </div>
          <div className="flex display-flex p-5  justify-content m-2 ">
            <FaPhoneAlt />{" "}
            <p className="ml-2">
              +977-1-4117578 / 4111849 / 4111583 / 5912405 9841002000 /
              9808724535
            </p>
          </div>
          <div className="flex display-flex p-5 justify-content m-2 ">
            <FaPhoneAlt />{" "}
            <p className="ml-2">
              Departments: <br />
              Inquiry Hotline : 9841002000 <br />
              Feedback / Follow-up : 9847396294 <br /> Account : 9847396295{" "}
              <br /> HR : 9841904562 <br />
              Client Relation : 9840680858
            </p>
          </div>
          <div className="flex display-flex p-5 justify-content m-2 ">
            <FaMailBulk />{" "}
            <p className="ml-2">
              {" "}
              info@kitwosd.com <br />
              info@kitwosd.com
              <br />
              info@kitwosd.com
              <br />
              info@kitwosd.com
              <br />
            </p>
          </div>
        </div>
      </div>
      <div className="mt-10">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3533.716384689839!2d85.33482657459578!3d27.664245227392815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1987d4f504eb%3A0x3f4f8a4ebd8188e5!2sKitwosd%20IT%20Support%20Center!5e0!3m2!1sen!2snp!4v1682589222464!5m2!1sen!2snp"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullscreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </>
  );
};

export default Contact;
