import { Button } from "flowbite-react";
import React, { useState } from "react";

const ApplyForm = ({ visible, onClose, vacancy_id }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone_no, setNumber] = useState("");
  const [file, setFile] = useState(null);
  const [portfolio_url, setPortfolio] = useState("");
  const [description, setDescription] = useState("");
  const [errors, setErrors] = useState({});
  const [myData, setMyData] = useState(null);
  const validateForm = () => {
    let errors = {};
    if (!name) {
      errors.name = "Name is required";
    }
    if (!email) {
      errors.email = "Email is required";
    }
    if (!phone_no) {
      errors.phone_no = "Phone number is required";
    }
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = () => {
    if (validateForm()) {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("email", email);
      formData.append("phone_no", phone_no);
      formData.append("portfolio_url", portfolio_url);
      formData.append("description", description);
      formData.append("vacancy_id", vacancy_id);
      formData.append("file", file);

      fetch("https://pdeng.valleyhomecareservice.com/api/vacancy-apply", {
        method: "POST",
        body: formData,
      })
        .then((response) => response.json())
        .then((result) => {
          console.log("result", result);
          
          // Handle success or display success message
        })
        .catch((error) => {
          console.error("Error:", error);
          // Handle error or display error message
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
    setName("");
    setEmail("");
    setNumber("");
    setFile("");
    setPortfolio("");
    setDescription("");
    // setMyData(null);
    
  };
  const close = ()=>setMyData(false);
  if (!visible) return null;
  return (
    <div className="fixed inset-0 bg-opacity-30 backdrop-blur-sm flex justify-center items-center z-50 ">
      <div className="bg-white p-2 rounded h-auto overflow-y-auto">
        <div className="shadow-xl rounded">
          <div className="flex justify-end mr-5 text-xl">
            <button onClick={onClose}>x</button>
          </div>
          <div className="p-2">
            <label>
              Name <span className="text-red-600">*</span>
            </label>
            <input
              className="w-full bg-gray-200 rounded border-none mt-2 focus:ring-0 placeholder:text-xs"
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            {errors.name && <span className="text-red-600">{errors.name}</span>}
          </div>
          <div className="p-2">
            <label>Email</label>
            <input
              className="w-full bg-gray-200 rounded border-none mt-2 focus:ring-0 placeholder:text-xs"
              type="text"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && (
              <span className="text-red-600">{errors.email}</span>
            )}
          </div>
          <div className="p-2">
            <label>Phone Number</label>
            <input
              className="w-full bg-gray-200 rounded border-none mt-2 focus:ring-0 placeholder:text-xs"
              type="number"
              placeholder="Your Number"
              value={phone_no}
              onChange={(e) => setNumber(e.target.value)}
            />
            {errors.phone_no && (
              <span className="text-red-600">{errors.phone_no}</span>
            )}
          </div>
          <div className="p-2">
            <label>Your Portfolio Url</label>
            <input
              className="w-full bg-gray-200 rounded border-none mt-2 focus:ring-0 placeholder:text-xs"
              type="text"
              placeholder="Online Portfolio, e.g.: http://www.domain.com"
              value={portfolio_url}
              onChange={(e) => setPortfolio(e.target.value)}
            />
          </div>
          <div className="p-2">
            <label>Upload Resume</label>
            <input
              className="w-full bg-gray-200 rounded border-none mt-2 focus:ring-0 placeholder:text-xs"
              type="file"
              placeholder="Upload your CV"
              onChange={handleFileChange}
            />
          </div>
          <div className="p-2">
            <label>About Yourself</label>
            <textarea
              className="w-full bg-gray-200 rounded border-none mt-2 focus:ring-0 placeholder:text-xs h-32"
              type="text"
              placeholder="Tell me about Yourself"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <input type="hidden" name="" value={vacancy_id} />
          <div className="flex justify-center mb-10">
            <Button
              onClick={handleSubmit}
              className="bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br"
            >
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
  );
};

export default ApplyForm;
