import React, { useEffect, useState } from "react";
import { Button, Card } from "flowbite-react";
import Logo from "../../images/logo.png";
import CommonCard from "../Common/CommonCard";
import Bdata from "../../data/Bdata";
import Rdata from "../../data/Rdata";
import RecentBlog from "../Common/RecentBlog";
import { NavLink } from "react-router-dom";

const Blog = () => {
  let API = "https://pdeng.valleyhomecareservice.com/api/blogs";
  const [lists, setLists] = useState([]);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await fetch(API);

        const data = await response.json();

        setLists(data.data.blogs);
        // console.log(data);
      } catch (error) {
        console.log("Error fetching blogs:", error);
      }
    };
    fetchBlog();
  }, []);
  return (
    <>
      <div className=" mt-24 text-4xl text-center text-[#1a2649] font-semibold">
        Blogs{" "}
      </div>
      <div className="mt-10 grid md:grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-5 px-10 md:px-20  ">
        {lists.map((val, ind) => {
          if (ind < 2) {
            return (
              <CommonCard
                key={ind}
                imgsrc={`https://pdeng.valleyhomecareservice.com/storage/${val.image.url}`}
                description={val.description}
              />
            );
          }
        })}

        <div className="hidden lg:grid grid-rows-3 gap-4">
          {Rdata.map((val, ind) => {
            return (
              <RecentBlog key={ind} imgsrc={val.imgSrc} title={val.title} />
            );
          })}
        </div>
      </div>
      <div className="flex justify-center mt-14">
        <NavLink to="/blogs">
          <Button className="bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br">
            View All
          </Button>
        </NavLink>
      </div>
    </>
  );
};

export default Blog;
