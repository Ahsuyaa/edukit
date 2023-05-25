import React, { useState } from "react";
import TabsData from "../../data/TabsData";
import kit from "../../images/kit.png"

const EduKit = () => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  return (
    <>
      <div className="grid md:grid-cols-2 mt-10 md:mt-24">
        
        <div  className="hidden md:block md:m-10">
        <img className=" md:visible h-96 w-full " src={kit} alt="img"/>
        </div>
        <div className="text-justify m-10">
          <h1 className="text-xl md:text-3xl mb-2 ">Edu-Kit:The Eductional Hub</h1>
          <p className="text-xs md:text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam error
            numquam mollitia atque earum illo enim ut nesciunt quia dolor?Lorem
            ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem
            asperiores labore vel ipsum illo fugit, illum repellendus quod error
            reiciendis! 
          </p>
          <div className="flex  space-x-1 justify-center m-5 md:m-10">
            {TabsData.map((tab, index) => (
              <button
                key={tab.title}
                className={`${
                  activeTabIndex === index
                    ? "bg-blue-800 text-white text-xl"
                    : "bg-white text-black shadow text-md md:text-xl"
                } w-16 md:w-36 h-12 `}
                onClick={() => setActiveTabIndex(index)}
              >
                {tab.title}
              </button>
            ))}
          </div>
          <div className="bg-white text-black p-2 rounded-b-lg  text-sm  md:text-xl m-5 md:m-10 ">
            {TabsData[activeTabIndex].content}
          </div>
    
        </div>
      </div>
    </>
  );
};

export default EduKit;
