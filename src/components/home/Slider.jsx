import { Carousel } from "flowbite-react";
import React, { useEffect, useState } from "react";

const Slider = () => {
  let API = "https://pdeng.valleyhomecareservice.com/api/slides";
  const [lists, setLists] = useState([]);

  useEffect(() => {
    const fetchSlider = async () => {
      try {
        const response = await fetch(API);

        // const data = await response.json();

        setLists(response.data.sliders);
        // console.log(data.data.sliders[0].image.url);
      } catch (error) {
        console.log("Error fetching slider:", error);
      }
    };
    fetchSlider();
  }, []);

  return (
    <>
    <div className="w-full h-screen">
{/* <Carousel> */}
    {/* <img className="w-full" src="https://entertainment.inquirer.net/files/2019/10/t1019Geo-Ong-2-e1571662658745.jpg" alt="" />
    <img className="w-full" src="https://entertainment.inquirer.net/files/2019/10/t1019Geo-Ong-2-e1571662658745.jpg" alt="" />
    <img className="w-full" src="https://entertainment.inquirer.net/files/2019/10/t1019Geo-Ong-2-e1571662658745.jpg" alt="" /> */}

    {lists.map((val,ind)=>{
        <img className="h-screen" src={`https://pdeng.valleyhomecareservice.com/storage/${val.image.url}`} alt="img"/>

    })}

{/* </Carousel> */}
    </div>
    </>
  );
};

export default Slider;
