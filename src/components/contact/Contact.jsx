import { Button } from "flowbite-react";
import React from "react";
import { FaMailBulk, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
const Contact = () => {
  return (
    <>
      <div class="grid grid-cols-2  gap-4 px-10">
        <div className="mt-24 shadow-xl rounded ">
          <div className="p-4 ">
            <label>
              Name <span className="text-red-600 ">*</span>
            </label>
            <input
              className="w-full bg-gray-200 rounded border-none mt-2 focus:ring-0 placeholder:text-xs"
              type="text"
              placeholder=" Your Name"
            />
          </div>
          <div className="p-4 ">
            <label>Email</label>
            <input
              className="w-full bg-gray-200 rounded border-none mt-2 focus:ring-0 placeholder:text-xs"
              type="text"
              placeholder="Your Email"
            />
          </div>
          <div className="p-4 ">
            <label>Phone Number</label>
            <input
              className="w-full bg-gray-200 rounded border-none mt-2 focus:ring-0 placeholder:text-xs"
              type="number"
              placeholder="Your Number"
            />
          </div>
          <div className="p-4 ">
            <label>Subject</label>
            <input
              className="w-full bg-gray-200 rounded border-none mt-2 focus:ring-0 placeholder:text-xs"
              type="text"
              placeholder=" Your Name"
            />
          </div>
          <div className="p-4 ">
            <label>Messages</label>
            <textarea
              className="w-full bg-gray-200 rounded border-none mt-2 focus:ring-0 placeholder:text-xs h-32"
              type="text"
              placeholder="leave your message"
            />
          </div>
          <div className="flex justify-center mb-10">
            <Button gradientMonochrome="failure"> Submit</Button>
          </div>
        </div>

        <div className="mt-32  text-xl text-justify ">
          <h1 className="font-bold"> Edu Kit</h1>
          <div className="flex display-flex p-5  m-2">
            <FaMapMarkerAlt /> <p className="ml-2">hriganesh Marg, imadol, gwarkhu, lalitpur 44600,
            Nepal</p>
          </div>
          <div className="flex display-flex p-5  justify-content m-2 ">
            <FaPhoneAlt /> <p className="ml-2">+977-1-4117578 / 4111849 / 4111583 / 5912405
            9841002000 / 9808724535</p>
          </div>
          <div className="flex display-flex p-5 justify-content m-2 ">
            <FaPhoneAlt /> <p className="ml-2">Departments: <br />
            Inquiry Hotline : 9841002000 <br />
            Feedback / Follow-up : 9847396294 <br /> Account : 9847396295 <br />{" "}
            HR : 9841904562 <br />
            Client Relation : 9840680858
            </p>
          </div>
          <div className="flex display-flex p-5 justify-content m-2 ">
            <FaMailBulk /> <p className="ml-2"> info@kitwosd.com <br />
            info@kitwosd.com<br />
            info@kitwosd.com<br />info@kitwosd.com<br/>
           
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
