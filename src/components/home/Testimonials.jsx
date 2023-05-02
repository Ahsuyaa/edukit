import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; // Import carousel styles
import "slick-carousel/slick/slick-theme.css";
import Testimonial from "../../data/Testimonial";
// import required modules
import { Button, Card } from "flowbite-react";
import "./all.css";
const Testimonials = ({ testimonials }) => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 5000,
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
   <div className="mt-24  text-3xl text-center text-[#1a2649] font-semibold">Our Testimonials </div>
    <Slider {...settings}>
      {/* Loop through testimonials data and render each testimonial as a slide */}
      {Testimonial.map((testimonials) => (
        <div className="testimonial-card   p-10 " key={testimonials.id}>
          <div className="grid grid-cols-2 gap-5">
            <div>
              <img className="w-full h-40 object-cover" src={testimonials.imgsrc} alt="..." />
            </div>
            <div>
              <h4>{testimonials.name}</h4>
              <p className="text-justify mr-5">
                {testimonials.company}
                Your commitment, passion, and delivery were really amazing. We
                had a great start and the speed as well as intensity with which
                we rolled out globally over 3 years was unbelievable.{" "}
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
