import React, { Component, useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; // Import carousel styles
import "slick-carousel/slick/slick-theme.css";
import Testimonial from "../../data/Testimonial";
// import required modules
import { Button, Card } from "flowbite-react";
import "./all.css";
import { fetchData } from '../fetching/FetchData';
import BASE_URL from "../../API/Consts";
const Sliders = ({ val }) => {
  

  const API = `${BASE_URL}slides`;
  const [lists, setLists] = useState(null);
  useEffect(() => {
    const getData = async () => {
      const fetchedData = await fetchData(API);
      setLists(fetchedData);
      console.log(fetchedData.data);
    };

    getData();
  }, []);
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed:3000,
    margin: 300,
 
  };
  
  return (
    
  <>

 
    <Slider {...settings}>
      {/* Loop through testimonials data and render each testimonial as a slide */}
      {lists?.data.sliders.map((val) => (
        <div  key={val.id}>
         
            <div>
              <img className="w-full lg:h-[700px] xl:h-[850px]" src={`https://pdeng.valleyhomecareservice.com/storage/${val}`} alt="..." />
            </div>
         
         
        </div>
      ))}
    </Slider>

     </>
  );
};
export default Sliders;
