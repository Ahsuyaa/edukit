import { Button } from "flowbite-react";
import React, { useEffect, useState } from "react";
import admission from "../../images/admission.png";
import "../component.css";
const Admission = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone_no, setNumber] = useState("");
  const [academic_level, setAcademic] = useState("");
  const [course_id, setCourse] = useState("");
  const [other_course, setOther] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});
  const validateForm = () => {
    let errors = {};
    if (!name) {
      errors.name = "Name is required";
    }
    if (!email) {
      errors.email = "email is required";
    }
    if (!phone_no) {
      errors.phone_no = "number is required";
    }
    if (!academic_level) {
      errors.academic_level = "choose academic level";
    }
    if (!other_course) {
      errors.other_course = "choose  course";
    }
    if (!course_id) {
      errors.course = "choose other course";
    }
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };
  function handleSubmit() {
    console.log(name, email, phone_no);
    if(validateForm())
    {
    let data = {
      name,
      email,
      phone_no,
      academic_level,
      course_id,
      other_course,
      message,
    };
    fetch("https://pdeng.valleyhomecareservice.com/api/admission", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((result) => {
      console.log("result", result);
    });
  }
  }
  const [lists, setLists] = useState([]);
  const fetchCourses = async () => {
    try {
      const response = await fetch(
        "https://pdeng.valleyhomecareservice.com/api/courses"
      );

      const data = await response.json();

      setLists(data.data.courses);
      // console.log(data.data.courses)
    } catch (error) {
      console.log("Error fetching blogs:", error);
    }
  };

  useEffect(() => {
    fetchCourses();
  }, []); 

  return (
    <>
      <div className="grid lg:grid-cols-2">
        <div className=" shadow-sm-light rounded m-10 ">
          <h1 className="text-4xl m-10">Get Admission in EDU KIT</h1>
          <div className="p-4 ">
            <label>
              Name <span className="text-red-600 ">*</span>
            </label>
            <br />
            <input
              className="w-[100%] bg-gray-200 rounded border-none mt-2 focus:ring-0 placeholder:text-xs"
              type="text"
              placeholder=" Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="p-4 ">
            <label>Email</label>
            <br />
            <input
              className="w-[100%] bg-gray-200 rounded border-none mt-2 focus:ring-0 placeholder:text-xs"
              type="text"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="p-4 ">
            <label>Phone Number</label>
            <br />
            <input
              className="w-[100%] bg-gray-200 rounded border-none mt-2 focus:ring-0 placeholder:text-xs"
              type="number"
              placeholder="+977"
              value={phone_no}
              onChange={(e) => setNumber(e.target.value)}
            />
          </div>
          <div className="p-4 ">
            <label>Academic level</label>
            <br />
            <select
              className="w-[100%] bg-gray-200 rounded border-none mt-2 focus:ring-0 placeholder:text-xs"
              
              onChange={(e) => setAcademic(e.target.value)}
            >
              <option>Below SEE</option>
              <option>+2</option>
              <option>Bachelor</option>
              <option>Master</option>
              <option>Phd</option>
            </select>
          </div>

          <div className="p-4 ">
            <label>Course</label>
            <br />
            <select
             
              className="w-[100%] bg-gray-200 rounded border-none mt-2 focus:ring-0 placeholder:text-xs"
           
              onChange={(e) => setCourse(e.target.value)} >
              {Object.values(lists).map((item,ind) => (
                <option value={item.id}> {item.title}</option>
                
              ))}
              
            </select>
          </div>
          <div className="p-4">
            <label>Other Courses</label>
            <br />
            <input
              className="w-[100%] bg-gray-200 rounded border-none mt-2 focus;ring-0  placeholder:text-xs"
              type="text"
              placeholder="Other Courses"
              value={other_course}
              onChange={(e) => setOther(e.target.value)}
            />
          </div>
          <div className="p-4 ">
            <label>Messages</label>
            <br />
            <textarea
              className="w-[100%] bg-gray-200 rounded border-none mt-2 focus:ring-0 placeholder:text-xs h-32"
              type="text"
              placeholder="leave your message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <div className="flex justify-center mb-10">
            <Button
              className="bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br"
              onClick={handleSubmit}
            >
              {" "}
              Submit
            </Button>
          </div>
        </div>
        <div className="md:mt-40 md:mx-20">
          <img
            className="h-96 animate-bounce temporary-bounce"
            src={admission}
            alt="admsission image"
          />
        </div>
      </div>
    </>
  );
};

export default Admission;
