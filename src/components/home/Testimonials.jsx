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
const Testimonials = ({ testimonials }) => {

  const API = `${BASE_URL}testimonials`;
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
    speed: 500,
    slidesToShow: 2,
    // slidesToScroll: 1,
    // autoplay: true,
    // autoplaySpeed: 2000,
    margin: 300,
    responsive: [
      
 
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
  }]
      
  };
  return (
    
  <>


   <div className="mt-24  text-4xl text-center text-[#1a2649] font-semibold">What our student says </div>
    <Slider {...settings}>
      {/* Loop through testimonials data and render each testimonial as a slide */}
      {lists?.data.testimonials.map((testimonials) => (
        <div className="testimonial-card  p-10 mt-10" key={testimonials.id}>
          <div className="grid md:grid-cols-2 gap-0">
            <div>
              <img className="w-[100%] h-52 object-cover px-8" src={`https://pdeng.valleyhomecareservice.com/storage/${testimonials.image.url}`} alt="..." />
            </div>
            <div>
              <h4 className="mb-2 text-[#1a2649] font-bold text-2xl">{testimonials.name}</h4>
              <p className="text-justify mr-5 text-xl"  dangerouslySetInnerHTML={{ __html: testimonials.description }}>
               
              </p>
            </div>
          </div>
        </div>
      ))}
    </Slider>
    <div className="flex justify-end mt-5 mr-8">
      <Button className="bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br">View All</Button>
    </div>
     </>
  );
};
export default Testimonials;
