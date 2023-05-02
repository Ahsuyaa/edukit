import React, { useState } from "react";
import AboutImg from "../../images/about.png";
import TabsData from "../../data/TabsData";
import { FaArrowRight, FaCheck } from "react-icons/fa";
const About = () => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  return (
    <>
      <section className="px-10 md:px-20 ">
        <div className="grid lg:grid-cols-2">
          <div className="mt-10   max-w-sm">
            <h3 className="text-3xl text-[#1a2649] font-semibold">
              Hamro ma padhna aauni haina ta ?{" "}
            </h3>
            <div className="flex  space-x-1 justify-center mt-8 ">
              {TabsData.map((tab, index) => (
                <button
                  key={tab.title}
                  className={`${
                    activeTabIndex === index
                      ? "bg-blue-800 text-white "
                      : "bg-white shadow"
                  } w-36 h-12  `}
                  onClick={() => setActiveTabIndex(index)}
                >
                  {tab.title}
                </button>
              ))}
            </div>
            <div className="bg-white p-2 rounded-b-lg text-justify mt-5">
              {TabsData[activeTabIndex].content}
            </div>
          </div>
          <div className="mt-10">
            <h3 className="font-bold text-md">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
              odio error nobis officiis voluptate sint possimus quae vel fugit
              quibusdam?
            </h3>
            <ul className="text-xl m-2 ">
              <li className="flex">
                <span className="text-blue-500 text-md mr-4">
                  <FaCheck />
                </span>
                Hello hi
              </li>
              <li className="flex">
                <span className="text-blue-500 text-md  mr-4">
                  <FaCheck />
                </span>
                hello hi
              </li>
              <li className="flex">
                <span className="text-blue-500 text-md mr-4">
                  <FaCheck />
                </span>
                hello hi
              </li>
              <li className="flex">
                <span className="text-blue-500 text-md mr-4">
                  <FaCheck />
                </span>
                hello hi
              </li>
              <li className="flex">
                <span className="text-blue-500 text-md mr-4">
                  <FaCheck />
                </span>
                hello hi
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="bg-gradient-to-r from-blue-950 via-blue-900 to-blue   mt-24 ">
        <div className="grid md:grid-cols-2 gap-4  p-24">
          <div className="text-white  ">
            <h1 className=" text-xl md:text-5xl mb-2 md:mb-4">
              Why to choose Edu kit?
            </h1>
            <p className="text-sm">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo,
              delectus. Aperiam temporibus dignissimos quo necessitatibus
              tempore repudiandae harum quos ipsa enim asperiores cupiditate
              natus qui, laborum molestiae quas. Fuga, fugit? Lorem ipsum dolor
              sit amet consectetur adipisicing elit. Dolorem veniam nesciunt
              modi quisquam iusto sed amet excepturi nostrum rerum laboriosam
              maiores, beatae quas. Optio eos quo illo doloribus ad. Quae? Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Unde nesciunt
              possimus quidem dicta voluptas fuga doloribus ab praesentium illo
              delectus voluptate magni aspernatur beatae vel, corrupti placeat,
              iure suscipit dolorum.
            </p>
          </div>

          <div className="">
            <h1 className="text-xl md:text-5xl mb-2 md:mb-4  text-white">
              Student Success{" "}
            </h1>
            <img src={AboutImg} alt="about image" className="w-full" />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
