import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Carousel = () => {
  const [lists, setLists] = useState([]);

  useEffect(() => {
    fetch("https://pdeng.valleyhomecareservice.com/api/teams")
      .then((res) => {
        return res.json();
      })
      .then((resp) => {
        setLists(resp.data.sliders);
        console.log(resp.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      {lists.map((val, ind) => {
        <div>
          <img
            className="h-screen"
            src={`https://pdeng.valleyhomecareservice.com/storage/${val}`}
            alt="img"
          />
        </div>;
      })}
    </Slider>
  );
};

export default Carousel;
