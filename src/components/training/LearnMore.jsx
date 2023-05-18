import { Button } from "flowbite-react";
import React, { useEffect, useState } from "react";
import seo from "../../images/seo.png";
import { useParams } from "react-router-dom";
const LearnMore = () => {
  const [detail, setDetail] = useState({});

  const { slug } = useParams();

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
  return (
    <>
      <div className="md:flex">
        <div className="md:w-[60%] m-10">
        
            {detail.image ? (
              <div>
                <img
                  className="h-60 w-full"
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
              dangerouslySetInnerHTML={{ __html: detail.description }}
            ></p>
          </div>
        </div>
        <div className="md:w-[30%] flex-grow mx-5">
          <div className="mt-10 shadow-xl rounded ">
            <h1 className="text-xl m-2">Send a Quick Enquiry</h1>
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
              <Button className="bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br">
                {" "}
                Submit
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LearnMore;
